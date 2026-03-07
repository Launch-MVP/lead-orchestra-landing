import {
	LicenseType,
	ProductCategory,
	type ProductType,
} from "@/types/products";
import {
	mcpPluginsMarketplaceABTests,
	salesScriptsMarketplaceABTests,
	workflowsMarketplaceABTests,
} from "./monetize-copy";

export const monetizeProducts: ProductType[] = [
	{
		id: "sales-scripts-marketplace",
		name: "Launch Copy Marketplace",
		price: 0,
		sku: "LMVP-LAUNCH-COPY-MARKETPLACE",
		slug: "launch-copy-marketplace",
		licenseName: LicenseType.Proprietary,
		abTest: salesScriptsMarketplaceABTests[0],
		description:
			"Publish reusable landing-page copy, email sequences, objection handling, and outreach assets for founders getting ready to launch.",
		categories: [ProductCategory.SalesScripts, ProductCategory.Monetize],
		images: [
			"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What can I list here?",
				answer:
					"You can list launch-ready copy systems such as landing page copy packs, email sequences, founder outreach scripts, and objection-handling frameworks.",
			},
			{
				question: "Why would founders buy these?",
				answer:
					"Founders buy these to shortcut blank-page work and start with messaging that is already structured for validation and launch.",
			},
		],
	},
	{
		id: "workflows-marketplace",
		name: "Delivery Systems Marketplace",
		price: 0,
		sku: "LMVP-DELIVERY-SYSTEMS-MARKETPLACE",
		slug: "delivery-systems-marketplace",
		licenseName: LicenseType.Proprietary,
		abTest: workflowsMarketplaceABTests[0],
		description:
			"List launch checklists, onboarding systems, delivery SOPs, and reusable workflows that help teams scope, build, and ship with less chaos.",
		categories: [ProductCategory.Workflows, ProductCategory.Monetize],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What kinds of workflows fit here?",
				answer:
					"Examples include MVP scoping systems, QA checklists, onboarding templates, launch runbooks, and delivery processes teams can reuse.",
			},
			{
				question: "Who are these for?",
				answer:
					"They are for founders, startup teams, and agencies that want better structure without buying a full custom engagement first.",
			},
		],
	},
	{
		id: "mcp-plugins-marketplace",
		name: "Launch Tooling Marketplace",
		price: 0,
		sku: "LMVP-LAUNCH-TOOLING-MARKETPLACE",
		slug: "launch-tooling-marketplace",
		licenseName: LicenseType.Proprietary,
		abTest: mcpPluginsMarketplaceABTests[0],
		description:
			"Share compact tools for launch prep, AI validation, prompt systems, QA helpers, analytics setup, and internal product operations.",
		categories: [ProductCategory.Workflows, ProductCategory.Monetize],
		images: [
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What kind of tools belong in this marketplace?",
				answer:
					"Useful launch tooling such as AI helpers, prompt packs, validation utilities, analytics setup tools, and product-ops helpers all fit well here.",
			},
			{
				question: "What is the benefit of listing here?",
				answer:
					"It gives compact launch tools a clearer home and an audience of teams already looking for leverage they can buy quickly.",
			},
		],
	},
];
