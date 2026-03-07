import {
	ProductCategory,
	type ProductResource,
	type ProductType,
} from "@/types/products";
import {
	aeoLandingPageDfyServiceABTest,
	aeoLandingPageTemplateABTest,
	freeAeoContentCalendarABTest,
} from "./aeo-copy";

const defaultTypes: ProductType["types"] = [
	{ name: "Standard", value: "standard", price: 0 },
];
const defaultColors: ProductType["colors"] = [];
const defaultSizes: ProductType["sizes"] = [];

// Resource definitions for AEO products
const aeoTemplateResource: ProductResource = {
	type: "download",
	url: "https://assets.launchmvp.com/templates/aeo-landing-page-template.zip",
	fileName: "aeo-landing-page-template.zip",
	fileSize: "8.5 MB",
	demoUrl: "https://app.supademo.com/embed/aeo-template-demo",
};

const aeoDfyResource: ProductResource = {
	type: "external",
	url: "https://cal.com/launchmvp/aeo-landing-page-consultation",
	demoUrl: "https://app.supademo.com/embed/aeo-dfy-walkthrough",
};

const aeoCalendarResource: ProductResource = {
	type: "download",
	url: "https://launchmvp.com/contact?offer=free-content-calendar",
	fileName: "aeo-content-calendar-30-60-90.zip",
	fileSize: "1.2 MB",
};

export const aeoProducts: ProductType[] = [
	// Tier 0: Free Content Calendar
	{
		id: "free-aeo-content-calendar",
		name: "Free Launch AEO Content Calendar (30/60/90 Days)",
		description:
			"A free AEO-first content calendar for Launch MVP founders who want answer-first content that supports product launches, founder authority, and AI-search visibility.",
		price: 0,
		sku: "AEO-CALENDAR-FREE-001",
		slug: "free-aeo-content-calendar",
		abTest: freeAeoContentCalendarABTest,
		categories: [
			ProductCategory.Templates,
			ProductCategory.SeoAeo,
			ProductCategory.FreeResources,
		],
		images: [
			"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop&q=80", // Calendar/Planning
		],
		types: [{ name: "Free Download", value: "free", price: 0 }],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Is it really free?",
				answer:
					"Yes. Download it free, and if you want the full landing page or content system built for you, you can book the service.",
			},
			{
				question: "What makes it AEO-friendly?",
				answer:
					"It is organized around target questions, answer-first structure, and extractable formatting so AI systems can understand and cite the content more easily.",
			},
			{
				question: "Does it include internal linking guidance?",
				answer:
					"Yes. Each post includes internal-link prompts so your Launch MVP site becomes a stronger, connected knowledge base over time.",
			},
		],
		resource: aeoCalendarResource,
		isFeaturedFreeResource: true,
	},
	// Tier 1: Downloadable Template
	{
		id: "aeo-landing-page-template",
		name: "Launch MVP AEO Landing Page Template",
		description:
			"An Answer Engine Optimized landing page template built for founders launching MVP offers, workshops, and specialist services. Includes structured data, FAQ schema, semantic HTML, and conversion-ready layouts.",
		price: 97,
		sku: "AEO-TEMPLATE-001",
		slug: "aeo-landing-page-template",
		abTest: aeoLandingPageTemplateABTest,
		categories: [ProductCategory.Templates, ProductCategory.SeoAeo],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
		],
		types: [
			{ name: "Single Page", value: "single", price: 97 },
			{ name: "3 Page", value: "3-page", price: 197 },
			{ name: "Full Site", value: "full-site", price: 297 },
		],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What is Answer Engine Optimization (AEO)?",
				answer:
					"AEO is the practice of optimizing content so AI-powered search systems like ChatGPT, Perplexity, and Google AI Overviews can understand, summarize, and cite it.",
			},
			{
				question: "What formats are included in the template?",
				answer:
					"The template includes Next.js/React components, plain HTML/CSS versions, and Webflow-compatible exports. All versions include proper schema markup and semantic structure.",
			},
			{
				question: "Do I need coding experience?",
				answer:
					"Basic HTML or CMS editing knowledge helps, but the template is designed so founders and small teams can adapt it without rebuilding the whole landing page from scratch.",
			},
			{
				question: "Is this a one-time purchase?",
				answer:
					"Yes, this is a one-time purchase with lifetime access to the template files and future updates.",
			},
			{
				question: "What makes AEO different from traditional SEO?",
				answer:
					"Traditional SEO focuses on keyword rankings. AEO also optimizes for AI systems that read and synthesize content, so the structure needs to be clearer, more direct, and easier to cite.",
			},
		],
		resource: aeoTemplateResource,
	},
	// Tier 2: Done-For-You Service
	{
		id: "aeo-landing-page-dfy-service",
		name: "Launch MVP AEO Landing Page Done-For-You",
		description:
			"Let Launch MVP build your Answer Engine Optimized landing page from scratch. Includes discovery, design, structured data, copywriting, and deployment for founders who need a credible launch surface fast.",
		price: 1497,
		sku: "AEO-DFY-001",
		slug: "aeo-landing-page-dfy-service",
		abTest: aeoLandingPageDfyServiceABTest,
		categories: [ProductCategory.Templates, ProductCategory.SeoAeo],
		images: [
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
		],
		types: [
			{ name: "Single Page", value: "single", price: 1497 },
			{ name: "Multi-Page (3)", value: "multi-3", price: 2497 },
			{ name: "Full Site (5+)", value: "full-site", price: 3997 },
		],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What is included in the Done-For-You service?",
				answer:
					"The service includes a discovery call, custom landing page design, AEO-ready copywriting, structured data/schema implementation, mobile optimization, and deployment to your hosting.",
			},
			{
				question: "How long does the process take?",
				answer:
					"Most projects are completed within 5-7 business days from the initial discovery call. Rush delivery is available for an additional fee.",
			},
			{
				question: "Do you provide hosting?",
				answer:
					"We deploy to your existing hosting provider or can recommend cost-effective options. Hosting is not included in the base price.",
			},
			{
				question: "What if I need revisions?",
				answer:
					"Two rounds of revisions are included. Additional revision rounds can be purchased separately if needed.",
			},
			{
				question: "Can I see examples of your work?",
				answer:
					"Yes. Book a discovery call and we will walk you through relevant launch-page examples and the type of AEO structure we recommend for your offer.",
			},
			{
				question: "What platforms do you work with?",
				answer:
					"We can build on Next.js, WordPress, Webflow, Shopify, or plain HTML. We will recommend the best fit based on your MVP, site stack, and launch timeline.",
			},
		],
		resource: aeoDfyResource,
	},
];
