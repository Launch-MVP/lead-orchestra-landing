import { type Lead, addToSendGrid } from "@/lib/externalRequests/sendgrid";
import { NextResponse } from "next/server";

import {
	buildMetaUserDataFromRequest,
	sendMetaConversionEvent,
} from "@/lib/analytics/meta-conversions-api";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const metaEventId =
			typeof body.metaEventId === "string" ? body.metaEventId : undefined;
		const eventSourceUrl =
			typeof body.eventSourceUrl === "string" ? body.eventSourceUrl : undefined;
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
		const lead: Lead = {
			firstName: body.firstName ?? "",
			lastName: body.lastName ?? "",
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

		if (metaOnlyTestMode) {
			const metaResult = await sendMetaConversionEvent(metaPayload);
			return NextResponse.json(
				{
					message:
						"Meta CAPI test mode: event attempted and SendGrid was skipped.",
					metaResult,
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

		void sendMetaConversionEvent(metaPayload);

		return NextResponse.json(
			{
				message: "Contact captured successfully.",
				sendgrid: {
					attempted: true,
					accepted: sendgridAccepted,
					statusCode: sendgridStatusCode,
				},
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
