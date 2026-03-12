import {
	ProductCategory,
	type ProductResource,
	type ProductType,
} from "@/types/products";
import {
	coldOutreachMessagePackABTest,
	dealAnalyzerWorkbookABTest,
	investProsHandbookABTest,
	marketMetricsSnapshotABTest,
} from "./free-resource-copy";

const defaultTypes: ProductType["types"] = [
	{ name: "Download", value: "download", price: 0 },
];

const defaultColors: ProductType["colors"] = [];

const defaultSizes: ProductType["sizes"] = [];

const workbookResource: ProductResource = {
	type: "download",
	url: "https://assets.dealscale.ai/free-resources/deal-analyzer-workbook.pdf",
	fileName: "deal-analyzer-workbook.pdf",
	fileSize: "2.4 MB",
	demoUrl: "https://app.supademo.com/embed/9J8F7KZ",
};

const outreachResource: ProductResource = {
	type: "external",
	url: "https://dealscale.notion.site/Cold-Outreach-Message-Pack-0c3e32d1f3d34f0e87a91f6136489bd1",
	demoUrl: "https://app.supademo.com/embed/7L5Q3VA",
};

const investProsHandbookResource: ProductResource = {
	type: "download",
	url: "https://assets.dealscale.ai/free-resources/tinthe-investpros-handbook.pdf",
	fileName: "tinthe-investpros-handbook.pdf",
	fileSize: "6.1 MB",
	demoUrl: "https://app.supademo.com/embed/1A2B3C4",
};

const marketSnapshotResource: ProductResource = {
	type: "external",
	url: "https://dealscale.notion.site/Market-Metrics-Snapshot-Toolkit-2f712b49d74d4c7a983fe43b0af552a7",
	demoUrl: "https://app.supademo.com/embed/5D6E7F8",
};

export const freeResourceProducts: ProductType[] = [
	{
		id: "mvp-scoping-workbook",
		name: "MVP Scoping Workbook",
		description:
			"Download a guided, spreadsheet-ready workbook that helps you define your core features and evaluate development costs in minutes.",
		price: 0,
		sku: "FREE-RESOURCE-DA-001",
		slug: "deal-analyzer-workbook",
		categories: [ProductCategory.FreeResources, ProductCategory.Strategy],
		images: ["/products/essentials.png"],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What formats are included?",
				answer:
					"The workbook ships in Google Sheets and Excel-ready formats with formulas to automate cost and timeline estimations.",
			},
			{
				question: "How often is the workbook updated?",
				answer:
					"We refresh the templates quarterly with the latest technology trends and development assumptions we use internally at Pilot Spring.",
			},
		],
		resource: workbookResource,
		abTest: dealAnalyzerWorkbookABTest,
		isFeaturedFreeResource: true,
	},
	{
		id: "cold-outreach-message-pack",
		name: "Beta Tester Outreach Pack",
		description:
			"Access 15+ proven SMS, email, and social media scripts tailored for recruiting your first 100 beta testers and early adopters.",
		price: 0,
		sku: "FREE-RESOURCE-OUTREACH-001",
		slug: "cold-outreach-message-pack",
		categories: [
			ProductCategory.FreeResources,
			ProductCategory.Support,
			ProductCategory.Strategy,
		],
		images: ["/products/workflows.png"],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Is there guidance on when to send each message?",
				answer:
					"Yes. Each script includes recommended timing, target persona, and follow-up notes to keep your launch cadence on track.",
			},
			{
				question: "Can I edit the templates for my product?",
				answer:
					"Absolutely—duplicate the Notion workspace and customize the scripts with your brand voice and value proposition.",
			},
		],
		resource: outreachResource,
		abTest: coldOutreachMessagePackABTest,
		isFeaturedFreeResource: true,
	},
	{
		id: "tinthe-investpros-handbook",
		name: "Pilot Spring Operating Handbook",
		description:
			"Download the full Pilot Spring operating handbook covering development frameworks, launch playbooks, and team rituals for scaling your product.",
		price: 0,
		sku: "FREE-RESOURCE-HANDBOOK-001",
		slug: "tinthe-investpros-handbook",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/essentials.png"],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What topics does the handbook cover?",
				answer:
					"The handbook walks through Pilot Spring's product scoping funnels, sprint reporting cadences, and standard operating procedures for development teams.",
			},
			{
				question: "How often is the handbook updated?",
				answer:
					"We refresh the handbook each quarter with new checklists, sprint updates, and lessons learned from recent product launches.",
			},
		],
		resource: investProsHandbookResource,
		abTest: investProsHandbookABTest,
	},
	{
		id: "market-metrics-snapshot",
		name: "Tech Validation Snapshot Toolkit",
		description:
			"Access Pilot Spring's live market metrics dashboard that curates up-to-date competitors, tech stack trends, and feature insights for new products.",
		price: 0,
		sku: "FREE-RESOURCE-MARKET-001",
		slug: "market-metrics-snapshot",
		categories: [
			ProductCategory.FreeResources,
			ProductCategory.Data,
			ProductCategory.Strategy,
		],
		images: ["/products/workflows.png"],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What data sources power the dashboard?",
				answer:
					"The toolkit blends competitor analysis, market data, and Pilot Spring's proprietary product database to highlight emerging opportunities.",
			},
			{
				question: "Does the snapshot update automatically?",
				answer:
					"Yes, the embedded Notion dashboard refreshes weekly with new trends, competitor moves, and technology shifts for your saved sectors.",
			},
		],
		resource: marketSnapshotResource,
		abTest: marketMetricsSnapshotABTest,
	},
].map((product) => ({
	...product,
	colors: product.colors ?? defaultColors,
	sizes: product.sizes ?? defaultSizes,
	types: product.types ?? defaultTypes,
}));
