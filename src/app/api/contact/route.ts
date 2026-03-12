import { Client } from "@notionhq/client";
import type { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { type Lead, addToSendGrid } from "@/lib/externalRequests/sendgrid";
import { NextResponse } from "next/server";

import {
	buildMetaUserDataFromRequest,
	generateServerEventId,
	resolveEventSourceUrl,
	sendMetaConversionEvent,
	splitFullName,
} from "@/lib/analytics/meta-conversions-api";

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

const DEPOSIT_DATABASE_ID =
	process.env.NOTION_LAUNCH_MVP_DEPOSIT_DATABASE_ID ||
	process.env.NOTION_DEPOSIT_DATABASE_ID;

const parseCurrencyAmount = (value: unknown): number | null => {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value !== "string") return null;
	const match = value.match(/\$([\d,]+(?:\.\d+)?)/);
	if (!match) return null;
	const normalized = Number(match[1].replace(/,/g, ""));
	return Number.isFinite(normalized) ? normalized : null;
};

const getMessageField = (message: unknown, label: string): string | null => {
	if (typeof message !== "string" || message.trim().length === 0) return null;
	const line = message
		.split("\n")
		.find((entry) => entry.toLowerCase().startsWith(`${label.toLowerCase()}:`));
	if (!line) return null;
	const [, rawValue = ""] = line.split(/:\s*/, 2);
	const value = rawValue.trim();
	return value.length > 0 ? value : null;
};

const addRichTextProperty = (
	properties: CreatePageParameters["properties"],
	propertyName: string,
	value: unknown,
) => {
	if (typeof value !== "string" || value.trim().length === 0) return;
	properties[propertyName] = {
		rich_text: [
			{
				text: {
					content: value.trim(),
				},
			},
		],
	};
};

const addSelectProperty = (
	properties: CreatePageParameters["properties"],
	propertyName: string,
	value: unknown,
) => {
	if (typeof value !== "string" || value.trim().length === 0) return;
	properties[propertyName] = {
		select: { name: value.trim() },
	};
};

const syncLaunchMvpDepositToNotion = async (
	body: Record<string, unknown>,
): Promise<boolean> => {
	if (!DEPOSIT_DATABASE_ID || !process.env.NOTION_API_KEY) {
		return false;
	}

	const selectedService =
		typeof body.selectedService === "string" ? body.selectedService : "";
	if (!selectedService.toLowerCase().includes("denver workshop deposit")) {
		return false;
	}

	const workshopTier =
		(typeof body.workshopTier === "string" && body.workshopTier.trim()) ||
		getMessageField(body.message, "Selected tier") ||
		selectedService.replace(/\s+Denver workshop deposit$/i, "").trim();
	const workshopTotal =
		parseCurrencyAmount(body.workshopTotal) ??
		parseCurrencyAmount(getMessageField(body.message, "Discounted total"));
	const depositAmount =
		parseCurrencyAmount(body.depositAmount) ??
		parseCurrencyAmount(getMessageField(body.message, "Seat-hold deposit"));
	const website =
		(typeof body.website === "string" && body.website.trim()) ||
		getMessageField(body.message, "Website");
	const projectSummary =
		(typeof body.projectSummary === "string" && body.projectSummary.trim()) ||
		getMessageField(body.message, "Project summary");

	const titleParts = [
		typeof body.name === "string" ? body.name.trim() : "",
		typeof body.companyName === "string" ? body.companyName.trim() : "",
	].filter(Boolean);

	const properties: CreatePageParameters["properties"] = {
		Name: {
			title: [
				{
					text: {
						content:
							titleParts.join(" - ") ||
							(typeof body.email === "string" ? body.email : "Pilot Spring Deposit"),
					},
				},
			],
		},
	};

	if (typeof body.email === "string" && body.email.trim().length > 0) {
		properties.Email = { email: body.email.trim() };
	}
	if (typeof body.phone === "string" && body.phone.trim().length > 0) {
		properties.Phone = { phone_number: body.phone.trim() };
	}
	addRichTextProperty(properties, "Company / Brand", body.companyName);
	if (typeof website === "string" && website.length > 0) {
		properties["Website / Product URL"] = { url: website };
	}
	addSelectProperty(properties, "Workshop Tier", workshopTier);
	if (typeof workshopTotal === "number") {
		properties["Workshop Total"] = { number: workshopTotal };
	}
	if (typeof depositAmount === "number") {
		properties["Deposit Amount"] = { number: depositAmount };
	}
	addRichTextProperty(properties, "Project Summary", projectSummary);
	addSelectProperty(properties, "Referral Source", body.referralSource);
	addSelectProperty(properties, "Payment Status", "Pending");
	addSelectProperty(properties, "Free Slot Upsell Status", "Not Offered");
	addRichTextProperty(properties, "gclid", body.gclid);
	addRichTextProperty(properties, "utm_source", body.utm_source);
	addRichTextProperty(properties, "utm_campaign", body.utm_campaign);
	addRichTextProperty(properties, "utm_term", body.utm_term);
	addRichTextProperty(properties, "utm_content", body.utm_content);
	addRichTextProperty(properties, "utm_icp", body.utm_icp);
	addRichTextProperty(properties, "Notes", body.message);

	try {
		await notion.pages.create({
			parent: { database_id: DEPOSIT_DATABASE_ID },
			properties,
		});
		return true;
	} catch (error: unknown) {
		console.error(
			"[contact] Pilot Spring deposit Notion sync failed; continuing with successful contact response.",
			error,
		);
		return false;
	}
};

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const providedEventId =
			typeof body.metaEventId === "string" ? body.metaEventId : undefined;
		const metaEventId = providedEventId || generateServerEventId();
		const providedEventSourceUrl =
			typeof body.eventSourceUrl === "string" ? body.eventSourceUrl : undefined;
		const eventSourceUrl = resolveEventSourceUrl(request, providedEventSourceUrl);
		const testEventCode =
			typeof body.testEventCode === "string" ? body.testEventCode : undefined;
		const useTestEventCode = body.useTestEventCode === true;
		const resolvedTestEventCode =
			testEventCode ||
			(useTestEventCode ? process.env.META_TEST_EVENT_CODE : undefined);
		const metaOnlyTestMode =
			(process.env.CONTACT_CAPI_TEST_MODE === "true" ||
				body.metaOnlyTestMode === true) &&
			process.env.NODE_ENV !== "production";

		// * Basic validation to ensure email is present
		if (!body.email) {
			return NextResponse.json(
				{ error: "Email is a required field." },
				{ status: 400 },
			);
		}

		// * Construct the lead object, providing default values for non-required fields
		const nameFromSingleField = splitFullName(
			typeof body.name === "string" ? body.name : undefined,
		);
		const lead: Lead = {
			firstName: body.firstName ?? nameFromSingleField.firstName ?? "",
			lastName: body.lastName ?? nameFromSingleField.lastName ?? "",
			companyName: body.companyName ?? "",
			landingPage: body.landingPage ?? "",
			email: body.email,
			phone: body.phone ?? "",
			postal_code: body.zipCode ?? "",
			selectedService: body.selectedService ?? "",
			message: body.message ?? "",
			termsAccepted: body.termsAccepted ?? false,
			startupStage: body.startupStage ?? "",
			fundingRaised: body.fundingRaised ?? "",
			timeline: body.timeline ?? "",
			budget: body.budget ?? "",
			newsletterSignup: body.newsletterSignup ?? false,
			files: body.files ?? [],
			beta_tester: body.beta_tester ?? false,
			pilot_member: body.pilot_member ?? false,
		};

		const metaPayload = {
			eventName: "Lead" as const,
			eventId: metaEventId,
			eventSourceUrl,
			actionSource: "website" as const,
			testEventCode: resolvedTestEventCode,
			userData: buildMetaUserDataFromRequest(request, {
				email: lead.email,
				phone: lead.phone,
				firstName: lead.firstName,
				lastName: lead.lastName,
			}),
			customData: {
				currency: "USD",
				contentName: lead.selectedService || "Contact Form",
				contentCategory: lead.beta_tester ? "Beta Tester" : "General Contact",
			},
		};
		const contactMetaPayload = {
			...metaPayload,
			eventName: "Contact" as const,
		};

		if (metaOnlyTestMode) {
			const [leadMetaResult, contactMetaResult] = await Promise.all([
				sendMetaConversionEvent(metaPayload),
				sendMetaConversionEvent(contactMetaPayload),
			]);
			return NextResponse.json(
				{
					message:
						"Meta CAPI test mode: events attempted and SendGrid was skipped.",
					eventId: metaEventId,
					metaResult: {
						lead: leadMetaResult,
						contact: contactMetaResult,
					},
				},
				{ status: 200 },
			);
		}

		// SendGrid is best-effort and should never block contact capture/CAPI.
		const listName = "Deal Scale";
		const sendgridStatusCode = await addToSendGrid(lead, listName).catch(
			(error: unknown) => {
				console.error("[contact] SendGrid request failed", error);
				return 500;
			},
		);
		const sendgridAccepted = sendgridStatusCode === 202;
		if (!sendgridAccepted) {
			console.warn("[contact] SendGrid skipped/failed", {
				statusCode: sendgridStatusCode,
				email: lead.email,
			});
		}

		const notionSynced = await syncLaunchMvpDepositToNotion(
			body as Record<string, unknown>,
		);

		void Promise.allSettled([
			sendMetaConversionEvent(metaPayload),
			sendMetaConversionEvent(contactMetaPayload),
		]);

		return NextResponse.json(
			{
				message: "Contact captured successfully.",
				eventId: metaEventId,
				sendgrid: {
					attempted: true,
					accepted: sendgridAccepted,
					statusCode: sendgridStatusCode,
				},
				notionSynced,
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error("API Error:", error);
		const errorMessage =
			error instanceof Error ? error.message : "An unknown error occurred";
		return NextResponse.json(
			{ error: "An internal server error occurred.", details: errorMessage },
			{ status: 500 },
		);
	}
}
