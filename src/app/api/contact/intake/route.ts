import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

// * Initialize Notion Client
const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || process.env.NOTION_DB_ID;

export async function POST(request: Request) {
	if (!DATABASE_ID) {
		console.error("NOTION_DATABASE_ID is not defined");
		return NextResponse.json(
			{ error: "Server configuration error: Missing Notion ID" },
			{ status: 500 },
		);
	}

	try {
		const body = await request.json();

		// Helper to safely format multiselect/select/text for Notion properties
		// * Note: This mapping depends on the EXACT property names in your Notion DB.
		// * If a property doesn't exist, the API call will fail.
		// * I've mapped the keys from intakeFormFields.ts to likely Notion Property names.


		const properties: Record<string, any> = {
			" Name": {
				title: [
					{
						text: {
							content: body.name || "Untitled Lead",
						},
					},
				],
			},
			Email: {
				rich_text: [
					{
						text: {
							content: body.email || "",
						},
					},
				],
			},
			"Business Type / Niche": {
				multi_select: (body.businessType || []).map((v: string) => ({
					name: v,
				})),
			},
			"Avg Deal Amount ($)": {
				number: Number(body.avgDealAmount) || 0,
			},
			"Deals / Month": {
				number: Number(body.dealsPerMonth) || 0,
			},
			"Lead Volume / Month": {
				number: Number(body.leadVolumePerMonth) || 0,
			},
			"Conversion Rate %": {
				number: Number(body.conversionRate) || 0,
			},
			"Current CRM": {
				rich_text: [
					{
						text: {
							content: body.currentCrm || "",
						},
					},
				],
			},
			"Existing Lead Lists?": {
				multi_select: (body.existingLeadLists || []).map((v: string) => ({
					name: v,
				})),
			},
			"Who will be responsible for reviewing and acting on the leads?": {
				select: body.leadOwner ? { name: body.leadOwner } : null,
			},
			"Main Pain Point(s)": {
				multi_select: (body.painPoints || []).map((v: string) => ({ name: v })),
			},
			"Monthly Budget": {
				select: body.monthlyBudget ? { name: body.monthlyBudget } : null,
			},
			"Priority Level": {
				multi_select: (body.priorityLevel || []).map((v: string) => ({
					name: v,
				})),
			},
			"Start Date ": {
				date: body.startDate ? { start: body.startDate } : null,
			},
		};

		// * Optional fields
		if (body.phone) {
			properties["Phone"] = {
				rich_text: [
					{
						text: {
							content: body.phone,
						},
					},
				],
			};
		}
		if (body.icpCategory && body.icpCategory.length > 0) {
			properties["ICP Category"] = {
				multi_select: body.icpCategory.map((v: string) => ({ name: v })),
			};
		}
		if (body.icpDescription) {
			properties["Describe Your Ideal Customer Profile"] = {
				rich_text: [{ text: { content: body.icpDescription } }],
			};
		}
		if (body.highIntentSources) {
			properties["High-Intent Lead Sources"] = {
				rich_text: [{ text: { content: body.highIntentSources } }],
			};
		}
		if (body.validationExpectation) {
			properties["What is your expectation for initial validation?"] = {
				select: { name: body.validationExpectation },
			};
		}
		if (body.speed) {
			properties[
				"If approved, how soon can you actively work and test a new lead list?"
			] = {
				select: { name: body.speed },
			};
		}
		if (body.scrapingInstructions) {
			properties["Detailed Scraping Instructions ?"] = {
				rich_text: [{ text: { content: body.scrapingInstructions } }],
			};
		}
		if (body.crmConnection && body.crmConnection.length > 0) {
			properties["Can we connect directly to your CRM?"] = {
				multi_select: body.crmConnection.map((v: string) => ({
					name: v,
				})),
			};
		}
		if (body.interestedFeatures && body.interestedFeatures.length > 0) {
			properties["Interested in these features?"] = {
				multi_select: body.interestedFeatures.map((v: string) => ({
					name: v,
				})),
			};
		}
		if (body.paidPilot) {
			properties[
				"Are you willing to pay for a small pilot to validate lead quality before scaling"
			] = {
				select: { name: body.paidPilot },
			};
		}
		if (body.kickoffDate) {
			properties["Schedule Kickoff Call"] = {
				date: { start: body.kickoffDate },
			};
		}
		if (body.website) {
			properties["Company Website ?"] = {
				url: body.website,
			};
		}
		if (body.notes) {
			properties["Notes"] = {
				rich_text: [{ text: { content: body.notes } }],
			};
		}

		await notion.pages.create({
			parent: { database_id: DATABASE_ID },
			properties: properties,
		});

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error: any) {
		console.error("Notion API Error:", error);
		return NextResponse.json(
			{ error: error?.message || "Failed to create lead in Notion" },
			{ status: 500 },
		);
	}
}
