import {
	LicenseType,
	ProductCategory,
	type ProductType,
} from "@/types/products";
import {
	notionDealPipelineABTests,
	notionFundraisingTrackerABTests,
	notionInvestorCrmABTests,
	notionStartupOsABTests,
	notionTeamWikiABTests,
} from "./notion-copy";

export const notionProducts: ProductType[] = [
	{
		id: "notion-investor-crm",
		name: "Notion Founder CRM Template",
		abTest: notionInvestorCrmABTests[0],
		price: 79,
		sku: "NOTION-CRM",
		slug: "notion-investor-crm",
		licenseName: LicenseType.Proprietary,
		description:
			"A Launch MVP-ready Notion CRM for tracking investors, partners, prospects, and key launch conversations in one founder-friendly workspace.",
		categories: [ProductCategory.Notion],
		images: ["/products/notion-2.png"],
		types: [{ name: "Notion Template", value: "notion-template", price: 79 }],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "Is this a digital Notion template?",
				answer:
					"Yes, you receive a share link to duplicate into your workspace.",
			},
			{
				question: "Who is this best for?",
				answer:
					"Founders who need one lightweight CRM for fundraising, partnerships, and launch follow-up without spinning up a full sales stack.",
			},
		],
	},
	{
		id: "notion-deal-pipeline",
		name: "Notion MVP Pipeline Board",
		price: 59,
		abTest: notionDealPipelineABTests[0],
		sku: "NOTION-PIPELINE",
		slug: "notion-deal-pipeline",
		licenseName: LicenseType.Proprietary,
		description:
			"A Kanban-style Notion board for tracking launch opportunities, pilots, sales conversations, and active product work from first touch to close.",
		categories: [ProductCategory.Notion],
		images: ["/products/notion-2.png"],
		types: [{ name: "Notion Template", value: "notion-template", price: 59 }],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "Can I customize stages?",
				answer:
					"Yes, all stages, fields, and views are fully customizable in Notion.",
			},
			{
				question: "What can I track in it?",
				answer:
					"You can track pilots, sales opportunities, launch tasks, customer conversations, and any other pipeline tied to getting the MVP into market.",
			},
		],
	},
	{
		id: "notion-startup-os",
		name: "Notion Launch MVP OS",
		price: 129,
		sku: "NOTION-STARTUP-OS",
		abTest: notionStartupOsABTests[0],
		slug: "notion-startup-os",
		licenseName: LicenseType.Proprietary,
		description:
			"An all-in-one Notion workspace for Launch MVP teams. Includes dashboards for product scope, launch planning, GTM, fundraising, hiring, and delivery handoff.",
		categories: [ProductCategory.Notion],
		images: ["/products/notion-2.png"],
		types: [
			{ name: "Notion Workspace", value: "notion-workspace", price: 129 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "Does this work for solo founders?",
				answer: "Yes, it's flexible for individuals or teams of any size.",
			},
			{
				question: "How does this fit Launch MVP?",
				answer:
					"It gives founders one operating system for scoping the product, managing the build, and coordinating launch activity without tool sprawl.",
			},
		],
	},
	{
		id: "notion-fundraising-tracker",
		name: "Notion Fundraising + Launch Tracker",
		price: 49,
		sku: "NOTION-FUNDRAISING",
		slug: "notion-fundraising-tracker",
		abTest: notionFundraisingTrackerABTests[0],
		licenseName: LicenseType.Proprietary,
		description:
			"Track investor outreach, commitments, follow-ups, and launch milestones in one Notion dashboard so the raise and the product story stay aligned.",
		categories: [ProductCategory.Notion],
		images: ["/products/notion-2.png"],
		types: [{ name: "Notion Template", value: "notion-template", price: 49 }],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "How do I get the template?",
				answer: "You receive a Notion share link for instant duplication.",
			},
			{
				question: "Why combine fundraising and launch tracking?",
				answer:
					"Because investors and early customers both respond better when the product narrative, traction, and launch status are visible in one system.",
			},
		],
	},
	{
		id: "notion-team-wiki",
		name: "Notion Team Wiki + Launch Handbook",
		price: 69,
		sku: "NOTION-WIKI",
		slug: "notion-team-wiki",
		abTest: notionTeamWikiABTests[0],
		licenseName: LicenseType.Proprietary,
		description:
			"A central wiki for documenting product decisions, launch processes, onboarding notes, and delivery knowledge in a single Notion workspace.",
		categories: [ProductCategory.Notion],
		images: ["/products/notion-2.png"],
		types: [{ name: "Notion Template", value: "notion-template", price: 69 }],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "Can I invite my team?",
				answer:
					"Yes, you can share the workspace with your team for collaboration.",
			},
			{
				question: "What should live in this handbook?",
				answer:
					"Use it for product context, SOPs, launch checklists, onboarding docs, QA notes, and the operating knowledge the next teammate will need.",
			},
		],
	},
];
