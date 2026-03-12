import {
	ProductCategory,
	type ProductResource,
	type ProductType,
} from "@/types/products";
import {
	customBlogGptEngineABTest,
	customBlogGptStandardABTest,
	customBlogGptTemplateABTest,
} from "./custom-gpt-copy";

const defaultTypes: ProductType["types"] = [
	{ name: "Standard", value: "standard", price: 0 },
];
const defaultColors: ProductType["colors"] = [];
const defaultSizes: ProductType["sizes"] = [];

const templateResource: ProductResource = {
	type: "download",
	url: "https://assets.launchmvp.com/templates/custom-blog-gpt-template.zip",
	fileName: "custom-blog-gpt-template.zip",
	fileSize: "2.5 MB",
};

const serviceResource: ProductResource = {
	type: "external",
	url: "https://launchmvp.com/contact?offer=custom-blog-gpt",
};

const engineResource: ProductResource = {
	type: "external",
	url: "https://launchmvp.com/contact?offer=custom-blog-gpt-engine",
};

export const customGptProducts: ProductType[] = [
	{
		id: "custom-blog-gpt-template",
		name: "Self-Serve Launch Content GPT Template",
		description:
			"A deterministic content workflow for Pilot Spring founders publishing answer-first posts, launch explainers, and founder-led authority content. Includes the GPT config, prompt playbook, output spec, internal-link rules, and CTA placement logic.",
		price: 199,
		sku: "GPT-BLOG-TEMPLATE-001",
		slug: "custom-blog-gpt-template",
		abTest: customBlogGptTemplateABTest,
		categories: [ProductCategory.Templates, ProductCategory.SeoAeo],
		images: [
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80", // AI/Robot writing concept
		],
		types: [{ name: "Standard License", value: "standard", price: 199 }],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		resource: templateResource,
		faqs: [
			{
				question: "Is this just prompts?",
				answer:
					"No. It is a structured output system with scoring, templates, CTA rules, and linking logic so founders can publish more consistently without generic AI sludge.",
			},
			{
				question: "Will it match my voice?",
				answer:
					"It includes a voice guide you fill in so you can configure it yourself. If you need tighter brand and offer alignment, use the Standard Build.",
			},
			{
				question: "Will it add internal links?",
				answer:
					"It gives slots and recommendations based on the rules we provide; you paste in your URL list to guide it.",
			},
			{
				question: "Does it include analytics?",
				answer:
					"It includes an event naming plan and content ops guidance. Full implementation and automation come in the Standard and Engine tiers.",
			},
		],
	},
	{
		id: "custom-blog-gpt-build-standard",
		name: "Custom Launch Content GPT - Standard Build",
		description:
			"We ingest your brand docs, sitemap, offers, and launch positioning to build a custom GPT that writes on-brand, on-offer, and on-structure for your Pilot Spring content engine.",
		price: 4500,
		sku: "GPT-BLOG-SERVICE-STD",
		slug: "custom-blog-gpt-standard",
		abTest: customBlogGptStandardABTest,
		categories: [ProductCategory.SeoAeo],
		images: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80", // Team working/consulting
		],
		types: [{ name: "Standard Build", value: "standard", price: 4500 }],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		resource: serviceResource,
		salesIncentive: {
			type: "onSale",
			description: "Includes 10-day turnaround & training",
		},
		faqs: [
			{
				question: "Why not just buy the template?",
				answer:
					"The template gives you the framework. The Standard Build makes it yours by aligning the system to your brand voice, launch offer, internal links, and CTA logic.",
			},
			{
				question: "Can you use our brand bible?",
				answer:
					"Yes. Ingestion of your brand documents, positioning, and tone rules is the core differentiator of this tier.",
			},
			{
				question: "Do you set up tracking?",
				answer:
					"We provide a content event plan and can help wire it to Google Analytics, Plausible, or Microsoft Clarity.",
			},
			{
				question: "How many posts does it support?",
				answer:
					"As many as you want. The Standard Build is about setting up a high-quality repeatable content engine you can keep using as the offer evolves.",
			},
		],
	},
	{
		id: "custom-blog-gpt-build-engine",
		name: "Custom Launch Content GPT - Engine Infrastructure",
		description:
			"A controlled launch-content pipeline from topic signal to indexing ping. We automate topic sourcing, calendar generation, publish packs, and approval loops for founders who want a durable AI-search and authority engine.",
		price: 12000,
		sku: "GPT-BLOG-SERVICE-ENGINE",
		slug: "custom-blog-gpt-engine",
		abTest: customBlogGptEngineABTest,
		categories: [ProductCategory.SeoAeo, ProductCategory.Automation],
		images: [
			"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80", // Technology/Server/Engine concept
		],
		types: [{ name: "Engine Infrastructure", value: "engine", price: 12000 }],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		resource: engineResource,
		faqs: [
			{
				question: "Do we need engineering resources?",
				answer:
					"Not necessarily. Most setups are low-code or no-code. If deeper CMS or analytics integrations are needed, we scope them directly.",
			},
			{
				question: "What’s included that Standard doesn’t have?",
				answer:
					"Automated topic sourcing, dynamic calendar generation, publish packs, and a fuller tracking and indexing workflow for sustained publishing.",
			},
			{
				question: "Do we need to pay for extra tools?",
				answer:
					"Only if you choose to use your own subscriptions (recommended). Bring-your-own-keys is the standard model.",
			},
			{
				question: "How do we keep it on-brand at scale?",
				answer:
					"Through guardrails, automated scoring, and a human approval queue. The goal is founder authority and trust, not raw content volume.",
			},
		],
	},
];
