import {
	ProductCategory,
	type ProductResource,
	type ProductType,
} from "@/types/products";
import {
	agencyLeadMachineABTest,
	appointmentSetterPlaybookABTest,
	fsboScrapingKitABTest,
	gtmPlaybooksABTest,
	hubspotKitABTest,
	listBuildingChallengeABTest,
	lsfSpecABTest,
	mcpBuilderKitABTest,
	mcpScraperTemplatesABTest,
	nicheLeadSourcesABTest,
	offMarketSourcesABTest,
	openLeadPlaybookABTest,
	ossScraperStarterPackABTest,
	scrapingUniversityABTest,
	sdrProspectingPackABTest,
	sitesToScrapeABTest,
	wholesalerPipelineABTest,
} from "./lead-magnets-copy";

const defaultTypes: ProductType["types"] = [
	{ name: "Download", value: "download", price: 0 },
];

const defaultColors: ProductType["colors"] = [];
const defaultSizes: ProductType["sizes"] = [];

const resource = (
	url: string,
	options: {
		fileName?: string;
		fileSize?: string;
		demoUrl?: string;
	} = {},
): ProductResource => ({
	type: options.fileName ? "download" : "external",
	url,
	fileName: options.fileName,
	fileSize: options.fileSize,
	demoUrl: options.demoUrl,
});

export const leadMagnetProducts: ProductType[] = [
	{
		id: "mvp-scope-starter-pack",
		name: "MVP Scope Starter Pack",
		description:
			"A free starter pack with scope prompts, prioritization checklists, and launch framing for founders who need a cleaner version-one plan.",
		price: 0,
		sku: "LMVP-RESOURCE-SCOPE-001",
		slug: "mvp-scope-starter-pack",
		categories: [ProductCategory.FreeResources, ProductCategory.Strategy],
		images: ["/products/workflows.png"],
		types: defaultTypes,
		abTest: ossScraperStarterPackABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Who should start here?",
				answer:
					"Founders who have a product idea but need sharper scope, clearer priorities, and better launch framing before building.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/mvp-scope-starter-pack.pdf",
			{
				fileName: "mvp-scope-starter-pack.pdf",
				fileSize: "2.4 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
	{
		id: "launch-workshop-templates",
		name: "Launch Workshop Templates",
		description:
			"A free bundle of workshop templates for MVP planning, launch copy, user stories, and delivery handoff.",
		price: 0,
		sku: "LMVP-RESOURCE-TEMPLATES-001",
		slug: "launch-workshop-templates",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/notion-2.png"],
		types: defaultTypes,
		abTest: mcpScraperTemplatesABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What is included?",
				answer:
					"The bundle includes templates for workshop agendas, scope docs, launch copy, handoff notes, and delivery planning.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/launch-workshop-templates.zip",
			{
				fileName: "launch-workshop-templates.zip",
				fileSize: "6.8 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
	{
		id: "mvp-brief-specification",
		name: "MVP Brief Specification",
		description:
			"A concise spec format for capturing feature intent, constraints, integrations, and launch criteria in one place.",
		price: 0,
		sku: "LMVP-RESOURCE-SPEC-001",
		slug: "mvp-brief-specification",
		categories: [ProductCategory.FreeResources, ProductCategory.Data],
		images: ["/products/essentials.png"],
		types: defaultTypes,
		abTest: lsfSpecABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Why use this spec?",
				answer:
					"It gives founders, designers, and engineers a shared product brief that is easier to implement and review.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/mvp-brief-specification.pdf",
			{
				fileName: "mvp-brief-specification.pdf",
				fileSize: "1.7 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
	{
		id: "mvp-mini-lessons",
		name: "MVP Mini Lessons",
		description:
			"A free lesson library covering scope cuts, UX tradeoffs, analytics basics, and launch sequencing for early product teams.",
		price: 0,
		sku: "LMVP-RESOURCE-LESSONS-001",
		slug: "mvp-mini-lessons",
		categories: [ProductCategory.FreeResources, ProductCategory.Strategy],
		images: ["/products/consultation.png"],
		types: defaultTypes,
		abTest: scrapingUniversityABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "How long are the lessons?",
				answer:
					"Each lesson is designed to be short and practical so founders can learn without getting buried in a course.",
			},
		],
		resource: resource("https://launchmvp.com/resources/mvp-mini-lessons", {
			demoUrl: "https://app.supademo.com/embed/mvp-mini-lessons",
		}),
	},
	{
		id: "customer-interview-source-list",
		name: "Customer Interview Source List",
		description:
			"A curated source list for finding customers, communities, and demand signals before you commit to the wrong MVP.",
		price: 0,
		sku: "LMVP-RESOURCE-RESEARCH-001",
		slug: "customer-interview-source-list",
		categories: [ProductCategory.FreeResources, ProductCategory.Strategy],
		images: ["/products/notion-2.png"],
		types: defaultTypes,
		abTest: nicheLeadSourcesABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does this help with?",
				answer:
					"It helps you find better research inputs so product decisions are based on actual customer language and demand clues.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/customer-interview-source-list.pdf",
			{
				fileName: "customer-interview-source-list.pdf",
				fileSize: "2.9 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
	{
		id: "seven-day-launch-challenge",
		name: "7-Day Launch Challenge",
		description:
			"A guided challenge for clarifying the MVP, tightening the launch message, and preparing the product for a faster release.",
		price: 0,
		sku: "LMVP-RESOURCE-CHALLENGE-001",
		slug: "seven-day-launch-challenge",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/workflows.png"],
		types: defaultTypes,
		abTest: listBuildingChallengeABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "How much time does it take?",
				answer:
					"Each day is designed as a short focused block so founders can make real progress without blocking their whole week.",
			},
		],
		resource: resource("https://launchmvp.notion.site/7-Day-Launch-Challenge"),
	},
	{
		id: "founder-funnel-kit",
		name: "Founder Funnel Kit",
		description:
			"A simple launch funnel kit for packaging an MVP offer, landing page, and consultation CTA into one usable system.",
		price: 0,
		sku: "LMVP-RESOURCE-FUNNEL-001",
		slug: "founder-funnel-kit",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/consultation.png"],
		types: defaultTypes,
		abTest: agencyLeadMachineABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Who is this best for?",
				answer:
					"It is best for founders who have a product or service offer but need a cleaner way to present and route demand.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/founder-funnel-kit.pdf",
			{
				fileName: "founder-funnel-kit.pdf",
				fileSize: "4.2 MB",
			},
		),
	},
	{
		id: "founder-call-playbook",
		name: "Founder Call Playbook",
		description:
			"A free playbook for running sharper consultation calls, clarifying scope, and turning vague discovery into a usable next step.",
		price: 0,
		sku: "LMVP-RESOURCE-CALLS-001",
		slug: "founder-call-playbook",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/consultation.png"],
		types: defaultTypes,
		abTest: appointmentSetterPlaybookABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does the playbook cover?",
				answer:
					"It covers discovery prompts, scope clarification, objections, and how to conclude calls with a clear next step.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/founder-call-playbook.pdf",
			{
				fileName: "founder-call-playbook.pdf",
				fileSize: "3.1 MB",
			},
		),
	},
	{
		id: "beta-outreach-pack",
		name: "Beta Outreach Pack",
		description:
			"A free pack of outreach templates for recruiting beta users, running interviews, and closing the loop with launch feedback.",
		price: 0,
		sku: "LMVP-RESOURCE-BETA-001",
		slug: "beta-outreach-pack",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/notion-2.png"],
		types: defaultTypes,
		abTest: sdrProspectingPackABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Is this only for pre-launch products?",
				answer:
					"No. It works for both pre-launch validation and post-launch feedback collection.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/beta-outreach-pack.zip",
			{
				fileName: "beta-outreach-pack.zip",
				fileSize: "5.6 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
	{
		id: "launch-playbook-bundle",
		name: "Launch Playbook Bundle",
		description:
			"A bundle of weekly launch playbooks covering messaging, activation, content, and post-launch follow-through.",
		price: 0,
		sku: "LMVP-RESOURCE-PLAYBOOKS-001",
		slug: "launch-playbook-bundle",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/workflows.png"],
		types: defaultTypes,
		abTest: gtmPlaybooksABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What kinds of playbooks are included?",
				answer:
					"The bundle includes launch messaging, founder-led content, beta follow-up, and post-launch activation workflows.",
			},
		],
		resource: resource("https://launchmvp.notion.site/Launch-Playbook-Bundle"),
	},
	{
		id: "launch-ops-kit",
		name: "Launch Ops Kit",
		description:
			"A free operations kit for launch checklists, issue logging, analytics review, and post-release handoff tracking.",
		price: 0,
		sku: "LMVP-RESOURCE-OPS-001",
		slug: "launch-ops-kit",
		categories: [ProductCategory.FreeResources, ProductCategory.Data],
		images: ["/products/essentials.png"],
		types: defaultTypes,
		abTest: hubspotKitABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What problem does this solve?",
				answer:
					"It keeps launch operations visible and organized so follow-through does not disappear into random docs and messages.",
			},
		],
		resource: resource("https://launchmvp.com/resources/launch-ops-kit.zip", {
			fileName: "launch-ops-kit.zip",
			fileSize: "4.9 MB",
		}),
	},
	{
		id: "user-story-kit",
		name: "User Story Kit",
		description:
			"A guided kit for turning founder notes into clearer user stories, acceptance criteria, and implementation-ready tickets.",
		price: 0,
		sku: "LMVP-RESOURCE-STORIES-001",
		slug: "user-story-kit",
		categories: [ProductCategory.FreeResources, ProductCategory.Strategy],
		images: ["/products/essentials.png"],
		types: defaultTypes,
		abTest: fsboScrapingKitABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "When should I use this?",
				answer:
					"Use it when features are still vague and the team needs clearer tickets before implementation starts.",
			},
		],
		resource: resource("https://launchmvp.com/resources/user-story-kit.pdf", {
			fileName: "user-story-kit.pdf",
			fileSize: "2.0 MB",
		}),
	},
	{
		id: "landing-page-outline",
		name: "Landing Page Outline",
		description:
			"A free outline for structuring the hero, proof, offer, objections, and CTA flow of a product launch landing page.",
		price: 0,
		sku: "LMVP-RESOURCE-LANDING-001",
		slug: "landing-page-outline",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/notion-2.png"],
		types: defaultTypes,
		abTest: offMarketSourcesABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Does this include copy?",
				answer:
					"It includes structure and prompts for the core sections so the first draft is much easier to write.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/landing-page-outline.pdf",
			{
				fileName: "landing-page-outline.pdf",
				fileSize: "1.4 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
	{
		id: "launch-workflow-template",
		name: "Launch Workflow Template",
		description:
			"A visual workflow template for moving from scope to build, QA, launch, and handoff with fewer missed steps.",
		price: 0,
		sku: "LMVP-RESOURCE-WORKFLOW-001",
		slug: "launch-workflow-template",
		categories: [ProductCategory.FreeResources, ProductCategory.Data],
		images: ["/products/workflows.png"],
		types: defaultTypes,
		abTest: wholesalerPipelineABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Who should use this workflow?",
				answer:
					"It works best for founders and small product teams that need one visible delivery path from scope to release.",
			},
		],
		resource: resource(
			"https://launchmvp.notion.site/Launch-Workflow-Template",
		),
	},
	{
		id: "open-mvp-playbook",
		name: "Open MVP Playbook",
		description:
			"A flagship guide to scoping, building, validating, and shipping an MVP without bloated process or endless planning loops.",
		price: 0,
		sku: "LMVP-RESOURCE-PLAYBOOK-001",
		slug: "open-mvp-playbook",
		categories: [ProductCategory.FreeResources, ProductCategory.Strategy],
		images: ["/products/consultation.png"],
		types: defaultTypes,
		abTest: openLeadPlaybookABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Why is this the flagship resource?",
				answer:
					"It brings the whole launch approach together in one opinionated guide instead of scattered templates.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/open-mvp-playbook.pdf",
			{
				fileName: "open-mvp-playbook.pdf",
				fileSize: "7.3 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
	{
		id: "50-launch-hooks",
		name: "50 Launch Hooks",
		description:
			"A swipe file of launch hooks for landing pages, short-form content, demos, and founder-led distribution.",
		price: 0,
		sku: "LMVP-RESOURCE-HOOKS-001",
		slug: "50-launch-hooks",
		categories: [ProductCategory.FreeResources, ProductCategory.Support],
		images: ["/products/consultation.png"],
		types: defaultTypes,
		abTest: sitesToScrapeABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What can I use the hooks for?",
				answer:
					"You can use them for landing pages, content posts, outbound messages, and launch teaser copy.",
			},
		],
		resource: resource("https://launchmvp.com/resources/50-launch-hooks.pdf", {
			fileName: "50-launch-hooks.pdf",
			fileSize: "1.1 MB",
		}),
	},
	{
		id: "ai-feature-planning-kit",
		name: "AI Feature Planning Kit",
		description:
			"A planning kit for turning AI feature ideas into usable product behavior with prompt logic, evaluation, and launch constraints.",
		price: 0,
		sku: "LMVP-RESOURCE-AI-001",
		slug: "ai-feature-planning-kit",
		categories: [ProductCategory.FreeResources, ProductCategory.Data],
		images: ["/products/essentials.png"],
		types: defaultTypes,
		abTest: mcpBuilderKitABTest,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What is this best for?",
				answer:
					"It is best for founders planning AI-powered MVP features that need real product logic, not just a demo concept.",
			},
		],
		resource: resource(
			"https://launchmvp.com/resources/ai-feature-planning-kit.zip",
			{
				fileName: "ai-feature-planning-kit.zip",
				fileSize: "5.1 MB",
			},
		),
		isFeaturedFreeResource: true,
	},
].map((product) => ({
	...product,
	colors: product.colors ?? defaultColors,
	sizes: product.sizes ?? defaultSizes,
	types: product.types ?? defaultTypes,
}));
