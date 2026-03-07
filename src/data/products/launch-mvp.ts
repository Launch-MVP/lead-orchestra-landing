import { ProductCategory, type ProductType } from "@/types/products";

const defaultTypes: ProductType["types"] = [
	{ name: "Standard", value: "standard", price: 0 },
];

const defaultColors: ProductType["colors"] = [];
const defaultSizes: ProductType["sizes"] = [];

export const launchMvpProducts: ProductType[] = [
	{
		id: "free-mvp-consultation",
		name: "Free MVP Consultation",
		description:
			"Talk through your product idea, pressure-test the use case, and leave with a clearer recommendation on scope, stack, and launch path.",
		price: 0,
		sku: "LMVP-CONSULT-000",
		slug: "free-mvp-consultation",
		categories: [ProductCategory.Services, ProductCategory.Strategy, ProductCategory.Startups, ProductCategory.FreeResources],
		images: ["/products/notion.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Who is this for?",
				answer:
					"Founders who need a fast sanity check before committing budget, timeline, or technical direction.",
			},
			{
				question: "What do I leave with?",
				answer:
					"You leave with a sharper point of view on the MVP scope, delivery approach, and next best step.",
			},
		],
	},
	{
		id: "paid-scoping-session",
		name: "Paid Scoping Session",
		description:
			"Focused strategy session for founders who need a usable MVP plan, clear priorities, and a tighter version-one scope before building.",
		price: 750,
		sku: "LMVP-SCOPE-750",
		slug: "paid-scoping-session",
		categories: [ProductCategory.Services, ProductCategory.Strategy, ProductCategory.Startups, ProductCategory.Enterprise],
		images: ["/products/workflows.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What is included?",
				answer:
					"The session covers product positioning, MVP scope cutting, recommended stack, tradeoffs, and a concrete next-step memo.",
			},
			{
				question: "When should I book this instead of a build?",
				answer:
					"Book this when the idea is promising but the feature set, workflow, or technical direction still needs to be reduced and clarified.",
			},
		],
	},
	{
		id: "frontend-polish-sprint",
		name: "Frontend Polish Sprint",
		description:
			"A focused one-time sprint to improve product trust, clean up key screens, and tighten the frontend before launch.",
		price: 2500,
		sku: "LMVP-POLISH-2500",
		slug: "frontend-polish-sprint",
		categories: [ProductCategory.Services, ProductCategory.Support, ProductCategory.Startups],
		images: ["/products/notion-2.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does this sprint cover?",
				answer:
					"It covers visual cleanup, interaction fixes, responsive refinement, and the product surfaces that most affect confidence and conversion.",
			},
		],
	},
	{
		id: "backend-polish-sprint",
		name: "Backend Polish Sprint",
		description:
			"A focused one-time sprint to improve backend stability, fix critical endpoint bugs, and increase early scale reliability before launch.",
		price: 2500,
		sku: "LMVP-BACKEND-POLISH-2500",
		slug: "backend-polish-sprint",
		categories: [ProductCategory.Services, ProductCategory.Support, ProductCategory.Startups],
		images: ["/products/notion-2.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does this sprint cover?",
				answer:
					"It covers endpoint reliability, query cleanup, minor architectural fixes, and any obvious backend drag preventing a smooth launch.",
			},
		],
	},
	{
		id: "technical-architecture-review",
		name: "Technical Architecture Review",
		description:
			"A one-time architecture review for teams that need a clearer technical path, lower risk, and better implementation decisions before scaling the product.",
		price: 2000,
		sku: "LMVP-ARCH-2000",
		slug: "technical-architecture-review",
		categories: [ProductCategory.Services, ProductCategory.Strategy, ProductCategory.Startups, ProductCategory.Enterprise],
		images: ["/products/essentials.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What is reviewed?",
				answer:
					"We review architecture decisions, deployment shape, integration risk, and the places where the current implementation is most likely to create future cleanup cost.",
			},
		],
	},
	{
		id: "vibe-code-cleanup",
		name: "Vibe Code Cleanup",
		description:
			"A one-time cleanup pass for products that were built quickly and now need a tighter structure before the next stage of work.",
		price: 3000,
		sku: "LMVP-VIBE-CLEANUP-3000",
		slug: "vibe-code-cleanup",
		categories: [ProductCategory.Services, ProductCategory.Support, ProductCategory.Startups],
		images: ["/products/essentials.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What kind of issues does this address?",
				answer:
					"It addresses fragile structure, repeated hacks, unclear files, and the obvious implementation drag that makes the next feature slower than it should be.",
			},
		],
	},
	{
		id: "vibe-coding-rescue",
		name: "Vibe Coding Rescue",
		description:
			"A deeper one-time rescue engagement for MVPs that need more than cleanup and require stabilization across critical paths.",
		price: 4500,
		sku: "LMVP-VIBE-RESCUE-4500",
		slug: "vibe-coding-rescue",
		categories: [ProductCategory.Services, ProductCategory.Support, ProductCategory.Startups],
		images: ["/products/essentials.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "When is rescue a better fit than cleanup?",
				answer:
					"Rescue is the better fit when the product has broken flows, unclear architecture, or launch blockers that need deeper intervention than a polish pass.",
			},
		],
	},
	{
		id: "three-day-in-person-mvp-build-workshop",
		name: "3-Day In-Person MVP Build Workshop",
		description:
			"In-person workshop for founders who want a full MVP build in three focused days with scope lock, core workflows, launch setup, and clean handoff.",
		price: 7500,
		sku: "LMVP-WORKSHOP-7500",
		slug: "3-day-in-person-mvp-build-workshop",
		categories: [ProductCategory.Services, ProductCategory.InPerson, ProductCategory.Startups, ProductCategory.Enterprise],
		images: ["/products/notion-2.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What gets built?",
				answer:
					"A real version-one MVP with the core user journey, technical foundation, integrations, analytics, and deployment path defined and executed.",
			},
			{
				question: "Why in person?",
				answer:
					"In-person work compresses decisions, removes async drift, and keeps the founder, product direction, and build execution aligned in real time.",
			},
		],
	},
	{
		id: "in-person-app-and-landing-page-workshop",
		name: "In-Person App + Landing Page Workshop",
		description:
			"In-person workshop for teams that need a web app or mobile app plus a conversion-ready landing page shipped together as one launch package.",
		price: 10000,
		sku: "LMVP-WORKSHOP-10000",
		slug: "in-person-app-and-landing-page-workshop",
		categories: [ProductCategory.Services, ProductCategory.InPerson, ProductCategory.Startups, ProductCategory.Enterprise],
		images: ["/products/essentials.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What is included in the package?",
				answer:
					"The package includes either a web app or mobile app, launch messaging, landing page structure, and the assets needed to start validating demand immediately.",
			},
			{
				question: "When is this the better fit?",
				answer:
					"This is the better fit when the product and go-to-market surface need to launch together instead of treating the landing page as an afterthought.",
			},
		],
	},
	{
		id: "in-person-ai-prototype-workshop",
		name: "In-Person AI Prototype Workshop",
		description:
			"An in-person workshop for teams that need to turn an AI feature or assistant concept into a usable prototype with clearer product behavior and launch decisions.",
		price: 8500,
		sku: "LMVP-WORKSHOP-AI-8500",
		slug: "in-person-ai-prototype-workshop",
		categories: [ProductCategory.Services, ProductCategory.InPerson, ProductCategory.Startups, ProductCategory.Enterprise],
		images: ["/products/essentials.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What kind of prototype is this for?",
				answer:
					"It is for AI-powered MVPs, agent workflows, and features that need to become usable product behavior rather than just a demo.",
			},
		],
	},
	{
		id: "managed-launch-support",
		name: "Managed Launch Support",
		description:
			"Monthly support for post-launch iteration, bug fixes, analytics review, and product prioritization without hiring a full team immediately.",
		price: 3000,
		sku: "LMVP-SUPPORT-3000",
		slug: "managed-launch-support",
		categories: [ProductCategory.Services, ProductCategory.Support, ProductCategory.Startups, ProductCategory.Enterprise],
		images: ["/products/coins.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does the monthly support cover?",
				answer:
					"It covers bug fixes, launch stabilization, small feature iterations, analytics review, and roadmap prioritization for the next cycle.",
			},
			{
				question: "Who should keep this on?",
				answer:
					"Teams that have launched and want momentum, product feedback, and technical cleanup without losing speed after version one ships.",
			},
		],
	},
	{
		id: "embedded-backend-engineer",
		name: "Embedded Backend Engineer",
		description:
			"Monthly backend engineering support for API design, database modeling, auth, payments, integrations, and production-ready application logic.",
		price: 3000,
		sku: "LMVP-BACKEND-3000",
		slug: "embedded-backend-engineer",
		categories: [
			ProductCategory.Services,
			ProductCategory.Support,
			ProductCategory.Specialists,
			ProductCategory.Startups,
			ProductCategory.Enterprise,
		],
		images: ["/products/workflows.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does the backend engineer handle?",
				answer:
					"They handle APIs, data models, authentication, third-party integrations, internal tooling, and the core application logic behind the MVP.",
			},
		],
	},
	{
		id: "embedded-frontend-engineer",
		name: "Embedded Frontend Engineer",
		description:
			"Monthly frontend engineering support for polished UI, fast iteration, responsive layouts, and cleaner product flows across landing pages and app surfaces.",
		price: 2500,
		sku: "LMVP-FRONTEND-2500",
		slug: "embedded-frontend-engineer",
		categories: [
			ProductCategory.Services,
			ProductCategory.Support,
			ProductCategory.Specialists,
			ProductCategory.Startups,
			ProductCategory.Enterprise,
		],
		images: ["/products/notion-2.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does the frontend engineer handle?",
				answer:
					"They handle interface polish, reusable components, responsive layouts, state management, UX improvements, and the app surfaces users actually touch.",
			},
		],
	},
	{
		id: "embedded-devops-engineer",
		name: "Embedded DevOps Engineer",
		description:
			"Monthly DevOps support for deployment pipelines, environments, observability, performance, infrastructure cleanup, and launch reliability.",
		price: 3500,
		sku: "LMVP-DEVOPS-3500",
		slug: "embedded-devops-engineer",
		categories: [
			ProductCategory.Services,
			ProductCategory.Support,
			ProductCategory.Specialists,
			ProductCategory.Startups,
			ProductCategory.Enterprise,
		],
		images: ["/products/coins.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does the DevOps engineer handle?",
				answer:
					"They handle deployments, CI/CD, hosting setup, uptime visibility, environment consistency, and the infrastructure work that keeps launches stable.",
			},
		],
	},
	{
		id: "embedded-ai-engineer",
		name: "Embedded AI Engineer",
		description:
			"Monthly AI engineering support for agents, prompts, eval loops, retrieval flows, LLM features, and practical AI implementation inside the product.",
		price: 4500,
		sku: "LMVP-AI-4500",
		slug: "embedded-ai-engineer",
		categories: [
			ProductCategory.Services,
			ProductCategory.Support,
			ProductCategory.Specialists,
			ProductCategory.Startups,
			ProductCategory.Enterprise,
		],
		images: ["/products/essentials.png"],
		reviews: [],
		types: defaultTypes,
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What does the AI engineer handle?",
				answer:
					"They handle agent behavior, prompt systems, retrieval workflows, model integration, evaluation, and the practical product logic around AI features.",
			},
		],
	},
].map((product) => ({
	...product,
	colors: product.colors ?? defaultColors,
	sizes: product.sizes ?? defaultSizes,
	types: product.types ?? defaultTypes,
}));
