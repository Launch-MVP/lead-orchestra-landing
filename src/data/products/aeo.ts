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
	url: "https://assets.leadorchestra.io/templates/aeo-landing-page-template.zip",
	fileName: "aeo-landing-page-template.zip",
	fileSize: "8.5 MB",
	demoUrl: "https://app.supademo.com/embed/aeo-template-demo",
};

const aeoDfyResource: ProductResource = {
	type: "external",
	url: "https://cal.com/leadorchestra/aeo-landing-page-consultation",
	demoUrl: "https://app.supademo.com/embed/aeo-dfy-walkthrough",
};

const aeoCalendarResource: ProductResource = {
	type: "download",
	url: "https://leadorchestra.com/contact-pilot?offer=free-content-calendar",
	fileName: "aeo-content-calendar-30-60-90.zip",
	fileSize: "1.2 MB",
};

export const aeoProducts: ProductType[] = [
	// Tier 0: Free Content Calendar
	{
		id: "free-aeo-content-calendar",
		name: "Free AEO Content Calendar (30/60/90 Days)",
		description:
			"A free AEO-first content calendar that helps you publish consistently, get cited, and turn visibility into pipeline. Includes 30/60/90-day answer-first topics and internal link slots.",
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
					"Yes—download it free. If you want us to implement the full engine, you can request a build.",
			},
			{
				question: "What makes it AEO-friendly?",
				answer:
					'It’s organized around target questions, answer-first structure, and "extractable" formatting prompts—so content is easier to cite.',
			},
			{
				question: "Does it include internal linking guidance?",
				answer:
					"Yes. Each post includes slots for internal links so your site becomes a connected library over time.",
			},
		],
		resource: aeoCalendarResource,
		isFeaturedFreeResource: true,
	},
	// Tier 1: Downloadable Template
	{
		id: "aeo-landing-page-template",
		name: "AEO Landing Page Template",
		description:
			"Answer Engine Optimized landing page template designed to rank in AI search results. Includes structured data markup, FAQ schema, semantic HTML, and conversion-optimized layouts. Download, customize, and deploy in minutes.",
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
					"AEO is the practice of optimizing content to appear in AI-powered search results like ChatGPT, Perplexity, and Google AI Overviews. It focuses on structured data, semantic markup, and direct answer formatting.",
			},
			{
				question: "What formats are included in the template?",
				answer:
					"The template includes Next.js/React components, plain HTML/CSS versions, and Webflow-compatible exports. All versions include proper schema markup and semantic structure.",
			},
			{
				question: "Do I need coding experience?",
				answer:
					"Basic HTML/CSS knowledge is helpful but not required. The HTML version can be edited with any text editor, and detailed documentation is included for customization.",
			},
			{
				question: "Is this a one-time purchase?",
				answer:
					"Yes, this is a one-time purchase with lifetime access to the template files and future updates.",
			},
			{
				question: "What makes AEO different from traditional SEO?",
				answer:
					"Traditional SEO focuses on keyword rankings in search results. AEO optimizes for AI systems that read and summarize content, requiring clearer structure, direct answers, and rich schema markup.",
			},
		],
		resource: aeoTemplateResource,
	},
	// Tier 2: Done-For-You Service
	{
		id: "aeo-landing-page-dfy-service",
		name: "AEO Landing Page Done-For-You",
		description:
			"Let our experts build your Answer Engine Optimized landing page from scratch. Includes discovery call, custom design, structured data implementation, copywriting, and deployment. Perfect for businesses wanting professional AEO without the DIY work.",
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
					"The service includes a 30-minute discovery call, custom landing page design, AEO-optimized copywriting, structured data/schema implementation, mobile optimization, and deployment to your hosting.",
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
					"Yes! Schedule a discovery call and we will walk you through previous AEO landing pages we have built for clients across various industries.",
			},
			{
				question: "What platforms do you work with?",
				answer:
					"We can build on Next.js, WordPress, Webflow, Shopify, or plain HTML. We will recommend the best platform during the discovery call based on your needs.",
			},
		],
		resource: aeoDfyResource,
	},
];
