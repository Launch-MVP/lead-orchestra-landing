import { Client } from "@notionhq/client";
import type { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { NextResponse } from "next/server";

import {
	buildMetaUserDataFromRequest,
	generateServerEventId,
	resolveEventSourceUrl,
	sendMetaConversionEvent,
	splitFullName,
} from "@/lib/analytics/meta-conversions-api";

// * Initialize Notion Client
const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID =
	process.env.NOTION_LAUNCH_MVP_QUALIFICATION_DATABASE_ID ||
	process.env.NOTION_DATABASE_ID ||
	process.env.NOTION_DB_ID;

const productStageLabelMap: Record<string, string> = {
	idea: "Idea stage",
	wireframes: "Wireframes or prototype",
	partial_build: "Partially built MVP",
	live_product: "Live product needs iteration",
	enterprise_initiative: "Enterprise or internal initiative",
};

const productTypeLabelMap: Record<string, string> = {
	landing_page: "Landing page",
	web_app: "Web app",
	mobile_app: "Mobile app",
	marketplace: "Marketplace",
	ai_assistant: "AI assistant or agent",
	internal_tool: "Internal tool or ops system",
	platform: "SaaS platform",
};

const teamSizeLabelMap: Record<string, string> = {
	solo: "Solo founder",
	"2-5": "2-5 people",
	"6-15": "6-15 people",
	"16-50": "16-50 people",
	"50+": "50+ people",
};

const ownerLabelMap: Record<string, string> = {
	Founder: "Founder",
	Product: "Product lead",
	Ops: "Ops lead",
	Engineering: "Engineering lead",
	Marketing: "Marketing lead",
};

const speedLabelMap: Record<string, string> = {
	"3-5": "3-5 days",
	"7-10": "7-10 days",
	"2-4w": "2-4 weeks",
	unsure: "Unsure",
};

const leadVolumeLabelMap: Record<string, string> = {
	"0-500": "0-500 / month",
	"500-2000": "500-2000 / month",
	"2000+": "2000+ / month",
};

const avgDealLabelMap: Record<string, string> = {
	unknown: "Unknown",
	"<1000": "< $1000",
	"1000-5000": "$1k-$5k",
	"5000-10000": "$5k-$10k",
	"10000+": "$10k+",
};

const dealsPerMonthLabelMap: Record<string, string> = {
	unknown: "Unknown",
	"0-5": "0-5",
	"6-15": "6-15",
	"16-50": "16-50",
	"50+": "50+",
};

const conversionRateLabelMap: Record<string, string> = {
	unknown: "Unknown",
	"0-1": "0-1%",
	"1-3": "1-3%",
	"3-10": "3-10%",
	"10+": "10%+",
};

const sourceKnowledgeLabelMap: Record<string, string> = {
	known: "I know the sources",
	unknown: "Not sure yet",
};

const highIntentSourceLabelMap: Record<string, string> = {
	google_maps: "Google Maps categories",
	directories: "Directories",
	job_boards: "Job boards",
	zillow_fsbo: "Zillow FSBO",
	marketplaces: "Marketplaces",
	linkedin: "LinkedIn searches",
	other: "Other describe below",
};

const crmConnectionLabelMap: Record<string, string> = {
	yes: "Yes",
	no: "No",
};

const leadDeliveryDestinationLabelMap: Record<string, string> = {
	google_sheet: "Google Sheet",
	airtable: "Airtable",
	email: "Email",
	hubspot_later: "HubSpot later",
};

const acquisitionChannelLabelMap: Record<string, string> = {
	ads: "Ads",
	email: "Email",
	organic: "Organic",
	partnerships: "Partnerships",
};

const referralSourceLabelMap: Record<string, string> = {
	genius_networking: "🌟 Genius Networking",
	google: "Google / Search Engine",
	social: "Social Media",
	referral: "Friend or Colleague",
	newsletter: "Newsletter",
	podcast: "Podcast / Interview",
	other: "Other",
};

const launchBlockerLabelMap: Record<string, string> = {
	"Need integrations, auth, payments, or analytics":
		"Need integrations auth payments or analytics",
};

const mapValue = (
	value: unknown,
	labelMap: Record<string, string>,
): string | undefined => {
	if (typeof value !== "string") return undefined;
	return labelMap[value] || value;
};

const mapArrayValues = (
	value: unknown,
	labelMap: Record<string, string>,
): string[] => {
	if (!Array.isArray(value)) return [];
	return value
		.filter((entry): entry is string => typeof entry === "string")
		.map((entry) => labelMap[entry] || entry);
};

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const parseMidpointNumber = (value: unknown): number => {
			if (typeof value === "number" && Number.isFinite(value)) return value;
			if (typeof value !== "string") return 0;
			const raw = value.trim().toLowerCase();
			if (raw.length === 0 || raw === "unknown") return 0;

			// Format: "2000+", "50+", "10+"
			const plusMatch = raw.match(/^(\d+(?:\.\d+)?)\+$/);
			if (plusMatch) return Number(plusMatch[1]);

			// Format: "0-500", "500-2000", "1-3"
			const rangeMatch = raw.match(/^(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)$/);
			if (rangeMatch) {
				const a = Number(rangeMatch[1]);
				const b = Number(rangeMatch[2]);
				if (!Number.isFinite(a) || !Number.isFinite(b)) return 0;
				return Math.round((a + b) / 2);
			}

			// Money formats: "<1000", "1000-5000", "10000+"
			const moneyLessThan = raw.match(/^<\s*(\d+(?:\.\d+)?)$/);
			if (moneyLessThan) return Math.max(0, Number(moneyLessThan[1]) - 1);

			const asNumber = Number(raw.replace(/[^0-9.]/g, ""));
			return Number.isFinite(asNumber) ? asNumber : 0;
		};
		const providedEventId =
			typeof body.metaEventId === "string" ? body.metaEventId : undefined;
		const metaEventId = providedEventId || generateServerEventId();
		const providedEventSourceUrl =
			typeof body.eventSourceUrl === "string" ? body.eventSourceUrl : undefined;
		const eventSourceUrl = resolveEventSourceUrl(
			request,
			providedEventSourceUrl,
		);
		const { firstName, lastName } = splitFullName(
			typeof body.name === "string" ? body.name : undefined,
		);

		// Helper to safely format multiselect/select/text for Notion properties
		// * Note: This mapping depends on the EXACT property names in your Notion DB.
		// * If a property doesn't exist, the API call will fail.
		// * I've mapped the keys from intakeFormFields.ts to likely Notion Property names.

		const properties: CreatePageParameters["properties"] = {
			Name: {
				title: [
					{
						text: {
							content:
								typeof body.companyName === "string" &&
								body.companyName.trim().length > 0
									? `${body.name || "Untitled Lead"} - ${body.companyName.trim()}`
									: body.name || "Untitled Lead",
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
		if (
			typeof body.companyName === "string" &&
			body.companyName.trim().length > 0
		) {
			properties["Company / Brand"] = {
				rich_text: [{ text: { content: body.companyName.trim() } }],
			};
		}
		if (typeof body.website === "string" && body.website.trim().length > 0) {
			properties["Website / Primary URL"] = { url: body.website.trim() };
		}
		if (body.noWebsite === true) {
			properties["No Website Yet"] = { checkbox: true };
		}
		const addRichTextProperty = (propertyName: string, value: unknown) => {
			if (typeof value !== "string" || value.trim().length === 0) {
				return;
			}
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
		const addSelectProperty = (propertyName: string, value: unknown) => {
			const mappedValue = typeof value === "string" ? value.trim() : "";
			if (mappedValue.length === 0) return;
			properties[propertyName] = {
				select: { name: mappedValue },
			};
		};
		const addMultiSelectProperty = (
			propertyName: string,
			values: string[],
		) => {
			if (values.length === 0) return;
			properties[propertyName] = {
				multi_select: values.map((value) => ({ name: value })),
			};
		};

		addSelectProperty(
			"Current Product Stage",
			mapValue(body.productStage, productStageLabelMap),
		);
		addSelectProperty(
			"Product Type",
			mapValue(body.productType, productTypeLabelMap),
		);
		addSelectProperty("Team Size", mapValue(body.teamSize, teamSizeLabelMap));
		addRichTextProperty(
			"What are you building and why now?",
			body.productSummary,
		);
		addRichTextProperty(
			"Must-have version-one features",
			body.mustHaveFeatures,
		);
		addMultiSelectProperty(
			"Business Model / Industry",
			mapArrayValues(body.businessType, {}),
		);
		addSelectProperty("Budget Range", body.monthlyBudget);
		addSelectProperty("Open To Paid Engagement", body.paidPilot);
		addSelectProperty(
			"Internal Owner",
			mapValue(body.leadOwner, ownerLabelMap),
		);
		addSelectProperty("Start Speed", mapValue(body.speed, speedLabelMap));
		addSelectProperty("Primary Customer Type", body.icpCategory);
		addRichTextProperty(
			"Describe the ideal customer or user",
			body.icpDescription,
		);
		addSelectProperty(
			"Target users / leads / signups in first 90 days",
			mapValue(body.leadVolumePerMonth, leadVolumeLabelMap),
		);
		addSelectProperty(
			"Expected customer value or contract size",
			mapValue(body.avgDealAmount, avgDealLabelMap),
		);
		addSelectProperty(
			"Expected new customers or conversions per month",
			mapValue(body.dealsPerMonth, dealsPerMonthLabelMap),
		);
		addSelectProperty(
			"Current or expected conversion rate",
			mapValue(body.conversionRate, conversionRateLabelMap),
		);
		addSelectProperty(
			"What result would make this launch successful?",
			body.validationExpectation,
		);
		addSelectProperty(
			"Do you know your launch or acquisition channels?",
			mapValue(body.sourceKnowledge, sourceKnowledgeLabelMap),
		);
		addMultiSelectProperty(
			"Primary launch channels or demand sources",
			mapArrayValues(body.highIntentSources, highIntentSourceLabelMap),
		);
		addRichTextProperty("Current demand sources", body.currentLeadSources);
		addRichTextProperty(
			"Technical notes / constraints / requirements",
			body.scrapingInstructions,
		);
		addSelectProperty("Current stack / CRM", body.currentCrm);
		addSelectProperty(
			"Connect into current systems?",
			mapValue(body.crmConnection, crmConnectionLabelMap),
		);
		addSelectProperty(
			"If no system exists where should deliverables go?",
			mapValue(body.leadDeliveryDestination, leadDeliveryDestinationLabelMap),
		);
		addSelectProperty("Launch ops ready?", mapValue(body.leadOpsReady, crmConnectionLabelMap));
		addSelectProperty(
			"Primary acquisition channel",
			mapValue(body.acquisitionChannel, acquisitionChannelLabelMap),
		);
		addMultiSelectProperty(
			"Existing assets / inherited work",
			mapArrayValues(body.existingLeadLists, {}),
		);
		addMultiSelectProperty(
			"Main launch blockers",
			mapArrayValues(body.painPoints, launchBlockerLabelMap),
		);
		addMultiSelectProperty(
			"Interested services / offers",
			mapArrayValues(body.interestedFeatures, {}),
		);
		if (typeof body.kickoffDate === "string" && body.kickoffDate.trim().length > 0) {
			properties["Preferred kickoff date"] = {
				date: { start: body.kickoffDate.trim() },
			};
		}
		addSelectProperty(
			"How did you hear about us?",
			mapValue(body.referralSource, referralSourceLabelMap),
		);
		addSelectProperty("Application Status", "New");
		addRichTextProperty("Decision Notes", body.notes);
		addRichTextProperty("gclid", body.gclid);
		addRichTextProperty("utm_source", body.utm_source);
		addRichTextProperty("utm_campaign", body.utm_campaign);
		addRichTextProperty("utm_term", body.utm_term);
		addRichTextProperty("utm_content", body.utm_content);
		addRichTextProperty("utm_icp", body.utm_icp);

		let notionSynced = false;
		if (!DATABASE_ID) {
			console.error(
				"[contact/intake] NOTION_DATABASE_ID is not defined; skipping Notion sync.",
			);
		} else {
			try {
				await notion.pages.create({
					parent: { database_id: DATABASE_ID },
					properties: properties,
				});
				notionSynced = true;
			} catch (notionError: unknown) {
				console.error(
					"[contact/intake] Notion sync failed; continuing with successful intake response.",
					notionError,
				);
			}
		}

		void sendMetaConversionEvent({
			eventName: "Lead",
			eventId: metaEventId,
			eventSourceUrl,
			actionSource: "website",
			userData: buildMetaUserDataFromRequest(request, {
				email: body.email,
				phone: body.phone,
				firstName,
				lastName,
			}),
			customData: {
				currency: "USD",
				value: parseMidpointNumber(body.avgDealAmount),
				contentName: "Pilot Spring Free Slot Application",
				contentCategory: "Application Form",
			},
		});

		return NextResponse.json({ success: true, notionSynced }, { status: 200 });
	} catch (error: unknown) {
		console.error("Notion API Error:", error);
		return NextResponse.json(
			{
				error:
					error instanceof Error
						? error.message
						: "Failed to create lead in Notion",
			},
			{ status: 500 },
		);
	}
}
