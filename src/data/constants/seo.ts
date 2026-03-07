import { timelineSummary } from "@/data/about/timelineSummary";
import type { SeoMeta } from "../../utils/seo/seo";

// Site URL from environment variable with fallback
export const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
	"https://launchmvp.com";

// Default SEO meta for Launch MVP
export const DEFAULT_SEO: SeoMeta = {
	title: "Launch MVP | AI MVP Development in 3 Days",
	description:
		"Launch MVP helps founders and developers build AI MVPs in 3 days with product strategy, clean code, launch systems, analytics, and a developer-ready handoff.",
	canonical: SITE_URL,
	image: "/banners/main.png",
	keywords: [
		"launch mvp",
		"3 day mvp",
		"mvp development",
		"startup product development",
		"founder product partner",
		"mvp workshop",
		"product strategy sprint",
		"prototype to launch",
		"startup app development",
		"ai workflow integration",
		"build an mvp fast",
		"production ready mvp",
	],
	siteName: "Launch MVP | AI MVP Development",
	type: "website",
	ratingValue: 5,
	reviewCount: 9,
};

/**
 * Static SEO metadata for key pages
 */
export const STATIC_SEO_META: Record<string, SeoMeta> = {
	"/": {
		title: "Launch MVP | AI MVP Development in 3 Days",
		description:
			"Launch MVP helps founders and developers scope and build AI MVPs in 3 days with clean engineering, launch systems, analytics, and launch-ready handoff.",
		canonical: SITE_URL,
		keywords: DEFAULT_SEO.keywords,
		image: DEFAULT_SEO.image,
		ratingValue: 5,
		reviewCount: 9,
	},
	"/products": {
		title: "Products | Launch MVP",
		description:
			"Browse Launch MVP products including strategy offers, Notion systems, launch-content GPTs, and SEO/AEO assets for founders shipping products.",
		canonical: `${SITE_URL}/products`,
		keywords: [
			...DEFAULT_SEO.keywords,
			"products",
			"notion systems",
			"seo aeo templates",
			"launch content gpt",
			"founder launch assets",
		],
		image: DEFAULT_SEO.image,
	},
	"/blogs": {
		title: "Insights | Launch MVP",
		description:
			"Read Launch MVP insights on product strategy, MVP delivery, launch systems, founder workflows, and AI-assisted product development.",
		canonical: `${SITE_URL}/blogs`,
		keywords: [
			...DEFAULT_SEO.keywords,
			"launch mvp blog",
			"founder insights",
			"mvp strategy articles",
			"launch systems",
		],
		image: DEFAULT_SEO.image,
	},
	"/pricing": {
		title: "Pricing | Launch MVP",
		description:
			"Review Launch MVP pricing for strategy sessions, in-person workshops, specialist support, launch systems, and SEO/AEO assets.",
		canonical: `${SITE_URL}/pricing`,
		keywords: [
			"launch mvp pricing",
			"mvp workshop pricing",
			"founder launch support pricing",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
		priority: 0.9,
		changeFrequency: "daily",
	},
	"/case-studies": {
		title: "Case Studies | Launch MVP",
		description:
			"See how Launch MVP helps founders and product teams scope, ship, and iterate on real MVPs without bloated delivery cycles.",
		canonical: `${SITE_URL}/case-studies`,
		keywords: DEFAULT_SEO.keywords,
		image: "/banners/CaseStudy2.png",
	},
	"/contact": {
		title: "Contact | Launch MVP",
		description:
			"Get in touch with Launch MVP for strategy sessions, in-person workshops, specialist support, launch systems, and SEO/AEO implementation.",
		canonical: `${SITE_URL}/contact`,
		keywords: DEFAULT_SEO.keywords,
		image: DEFAULT_SEO.image,
	},
	"/contact-pilot": {
		title: "Priority Access | Launch MVP",
		description:
			"Get priority access to Launch MVP offers, founder consultations, workshop availability, and early access to new launch systems and productized services.",
		canonical: `${SITE_URL}/contact-pilot`,
		keywords: [
			...DEFAULT_SEO.keywords,
			"launch mvp priority access",
			"founder consultation waitlist",
			"mvp workshop priority",
		],
		image: DEFAULT_SEO.image,
	},
	"/about": {
		title: "About Launch MVP | Founder-Led MVP Delivery",
		description:
			"Learn how Launch MVP helps founders scope, build, and ship real products faster through focused workshops, cleaner execution, and launch-ready handoff.",
		canonical: `${SITE_URL}/about`,
		keywords: [
			"about launch mvp",
			"founder product partner",
			"mvp workshop",
			"product strategy and launch support",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
		manifestoSections: timelineSummary,
	},
	"/features": {
		title: "Services | Launch MVP",
		description:
			"Browse Launch MVP services for product strategy, in-person workshops, embedded engineering support, and launch execution.",
		canonical: `${SITE_URL}/features`,
		keywords: [
			"launch mvp services",
			"mvp workshop",
			"embedded engineering support",
			"product strategy services",
			...DEFAULT_SEO.keywords,
		],
		image: "/banners/Feature.png",
	},
	"/agents": {
		title: "AI Product Agents | Launch MVP",
		description:
			"Explore how Launch MVP helps founders scope, prototype, and ship AI agent workflows as usable product experiences instead of vague demos.",
		canonical: `${SITE_URL}/agents`,
		keywords: [
			"ai product agents",
			"agent workflow design",
			"launch ai features",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},

	"/wholesalers": {
		title: "Founder Execution Systems | Launch MVP",
		description:
			"See how Launch MVP packages founder execution systems for launch planning, delivery operations, content workflows, and post-launch iteration.",
		canonical: `${SITE_URL}/wholesalers`,
		keywords: [
			"founder execution systems",
			"launch operations",
			"mvp workflow systems",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},
	"/investors": {
		title: "Founder Strategy Support | Launch MVP",
		description:
			"Launch MVP helps founders pressure-test the product, tighten the scope, and ship faster with strategy support before bigger build decisions are locked in.",
		canonical: `${SITE_URL}/investors`,
		keywords: [
			"founder strategy support",
			"mvp scope consultation",
			"product strategy workshop",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},
	"/events": {
		title: "Events | Launch MVP",
		description:
			"Stay updated on Launch MVP workshops, founder sessions, live demos, and product-development events.",
		canonical: `${SITE_URL}/events`,
		keywords: [
			"launch mvp events",
			"founder workshops",
			"product development events",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},
	"/portfolio": {
		title: "Portfolio | Launch MVP",
		description:
			"Browse Launch MVP work across MVP builds, launch systems, Notion operating layers, and AI-assisted product delivery.",
		canonical: `${SITE_URL}/portfolio`,
		keywords: [
			"launch mvp portfolio",
			"mvp build examples",
			"product delivery examples",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},

	"/partners": {
		title: "Partners | Launch MVP",
		description:
			"Meet the tools, platforms, and partners that support Launch MVP across product delivery, analytics, launch systems, and AI workflows.",
		canonical: `${SITE_URL}/partners`,
		keywords: [
			"launch mvp partners",
			"product delivery partners",
			"ai workflow integrations",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},

	"/careers": {
		title: "Careers | Launch MVP",
		description:
			"Explore open roles at Launch MVP and help founders ship better products, launch systems, and AI-powered experiences.",
		canonical: "https://dealscale.zohorecruit.com/jobs/Careers",
		keywords: [
			"launch mvp careers",
			"ai product jobs",
			"founder tooling roles",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},

	"/faqs": {
		title: "Launch MVP FAQ | Workshops, Build Support, and Launch Systems",
		description:
			"Learn how Launch MVP handles strategy sessions, in-person workshops, specialist support, launch systems, SEO/AEO assets, and founder delivery workflows.",
		canonical: `${SITE_URL}/faq`,
		keywords: [
			...DEFAULT_SEO.keywords,
			"launch mvp faq",
			"mvp workshop faq",
			"founder product support faq",
		],
		image: DEFAULT_SEO.image,
	},
	"/tos": {
		title: "Terms of Service | Launch MVP",
		description:
			"Review the terms and conditions for using Launch MVP’s website, workshops, product services, and digital assets.",
		canonical: `${SITE_URL}/tos`,
		keywords: [
			"Terms of Service",
			"User Agreement",
			"Terms and Conditions",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},
	"/cookies": {
		title: "Cookies Policy | Launch MVP",
		description:
			"Learn how Launch MVP uses cookies to improve the site experience and support analytics, product pages, and service interactions.",
		canonical: `${SITE_URL}/cookies`,
		keywords: DEFAULT_SEO.keywords,
		image: DEFAULT_SEO.image,
	},
	"/privacy": {
		title: "Privacy Policy | Launch MVP",
		description:
			"Read our Privacy Policy to understand how Launch MVP collects, uses, and protects your personal information.",
		canonical: `${SITE_URL}/privacy`,
		keywords: [
			"Privacy Policy",
			"Data Protection",
			"GDPR Compliance",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},
	"/GDPR": {
		title: "GDPR | Launch MVP",
		description:
			"Read our GDPR policy to learn how Launch MVP protects your data.",
		canonical: `${SITE_URL}/GDPR`,
		image: DEFAULT_SEO.image,
		keywords: DEFAULT_SEO.keywords,
	},
	"/hippa": {
		title: "HIPPA | Launch MVP",
		description:
			"Read our HIPPA policy to learn how Launch MVP protects your data.",
		canonical: `${SITE_URL}/hippa`,
		image: DEFAULT_SEO.image,
		keywords: DEFAULT_SEO.keywords,
	},
	"/PII": {
		title: "PII | Launch MVP",
		description:
			"Read our PII policy to learn how Launch MVP protects your data.",
		canonical: `${SITE_URL}/PII`,
		image: DEFAULT_SEO.image,
		keywords: DEFAULT_SEO.keywords,
	},
	"/tcpCompliance": {
		title: "TCP Compliance | Launch MVP",
		description:
			"Read our TCP Compliance policy to learn how Launch MVP protects your data.",
		canonical: `${SITE_URL}/tcpCompliance`,
		image: DEFAULT_SEO.image,
		keywords: DEFAULT_SEO.keywords,
	},
	"/legal": {
		title: "Legal Center | Launch MVP",
		description:
			"Access all of Launch MVP's legal documents including Privacy Policy, Terms of Service, and compliance information in one place.",
		canonical: `${SITE_URL}/legal`,
		keywords: [
			"Legal Documents",
			"Compliance Center",
			"Legal Information",
			"Company Policies",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},
	"/linktree": {
		title: "Link Tree | Launch MVP",
		description:
			"Quick access to Launch MVP’s most important links, resources, services, case studies, and product pages in one place.",
		canonical: `${SITE_URL}/linktree`,
		keywords: [
			"launch mvp links",
			"launch mvp resources",
			"founder resources",
			"quick links",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
	},
	"/demos/real-time-analytics": {
		title: "Real-Time Analytics Demo | Launch MVP",
		description:
			"Explore Launch MVP’s real-time analytics workspace. Preview dashboards, experimentation workflows, and live collaboration features inside an interactive showcase.",
		canonical: `${SITE_URL}/demos/real-time-analytics`,
		keywords: [
			"real-time analytics",
			"ai dashboards",
			"collaborative analytics",
			"a/b testing demo",
			"launch mvp demo",
			...DEFAULT_SEO.keywords,
		],
		image: "/banners/Feature.png",
	},
	"/affiliate": {
		title: "Affiliate Program | Launch MVP",
		description:
			"Join the Launch MVP partner program to earn recurring commissions and share founder-focused product strategy, launch systems, and workshop offers.",
		canonical: `${SITE_URL}/affiliate`,
		keywords: [
			"launch mvp affiliate program",
			"founder affiliate marketing",
			"product services partner program",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
		priority: 0.75,
		changeFrequency: "monthly",
	},
	"/external-tools/roi-simulator": {
		title: "ROI Simulator | Launch MVP",
		description:
			"Model launch budgets, build spend, and return scenarios with Launch MVP’s ROI simulator before you commit to the next product cycle.",
		canonical: "https://app.dealscale.io/roi-simulator",
		keywords: [
			"roi calculator",
			"product roi",
			"launch budget planning",
			"build forecasting",
			...DEFAULT_SEO.keywords,
		],
		image: DEFAULT_SEO.image,
		priority: 0.85,
		changeFrequency: "weekly",
	},
};
