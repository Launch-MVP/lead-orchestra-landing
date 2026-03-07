import type { Plan, PricingCatalog } from "@/types/service/plans";

export const pricingCatalog: PricingCatalog = {
	pricing: {
		monthly: [
			{
				id: "managed-support",
				name: "Fractional CTO for Startups",
				price: 5000,
				unit: "month",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Discuss Fractional CTO",
				idealFor:
					"Non-technical founders or early-stage startups that need ongoing technical leadership, architecture design, and team management without giving up equity.",
				features: [
					"Strategic technical leadership and planning",
					"Architecture modeling and stack selection",
					"Code reviews and development oversight",
					"Vendor and offshore team management",
				],
			},
			{
				id: "backend-engineer-support",
				name: "Embedded Backend Engineer",
				price: 3000,
				unit: "month",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Discuss Backend Support",
				idealFor:
					"Founders who need backend architecture, APIs, database design, and integrations without hiring full-time yet",
				features: [
					"API design and backend architecture support",
					"Database modeling, auth, and payments wiring",
					"Third-party integrations and internal tools",
					"Production-ready backend cleanup and iteration support",
				],
			},
			{
				id: "frontend-engineer-support",
				name: "Embedded Frontend Engineer",
				price: 2500,
				unit: "month",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Discuss Frontend Support",
				idealFor:
					"Teams with a working product that need stronger UI, cleaner product flows, and faster frontend iteration without hiring full-time yet",
				features: [
					"Frontend implementation across app and landing surfaces",
					"Responsive polish and UX cleanup on core flows",
					"Reusable component and state-management cleanup",
					"Iteration support for a more launch-ready product experience",
				],
			},
			{
				id: "devops-engineer-support",
				name: "Embedded DevOps Engineer",
				price: 3500,
				unit: "month",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Discuss DevOps Support",
				idealFor:
					"Teams that need stronger deployment reliability, CI/CD, environments, and infrastructure support around launch",
				features: [
					"Deployment pipeline and environment management",
					"CI/CD cleanup and release reliability improvements",
					"Observability, logs, and uptime visibility support",
					"Infrastructure guidance for launch readiness and scale",
				],
			},
			{
				id: "ai-engineer-support",
				name: "Embedded AI Engineer",
				price: 4500,
				unit: "month",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Discuss AI Support",
				idealFor:
					"Teams building AI features that need agent workflows, evals, prompt systems, and production-ready LLM implementation",
				features: [
					"Agent and prompt workflow design",
					"Retrieval, eval loops, and model integration support",
					"AI feature reliability and productization guidance",
					"Iteration support for launch-ready AI experiences",
				],
			},
		],
		annual: [],
		oneTime: [
			{
				id: "startup-scoping-session",
				name: "Startup Scoping Session",
				price: 750,
				unit: "project",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Talk to Sales",
				idealFor:
					"Founders who need scope, stack, and a buildable plan before committing to a larger workshop",
				features: [
					"Founder working session to pressure-test the product",
					"Scope cut focused on the core user journey",
					"Recommended stack, delivery approach, and tradeoffs",
					"Credited toward the project when the client moves forward",
				],
			},
			{
				id: "enterprise-scoping-session",
				name: "Enterprise & Greenfield Scoping Session",
				price: 1500,
				unit: "project",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Talk to Sales",
				bannerText: "Enterprise",
				idealFor:
					"Enterprise teams and corporate innovation labs needing to define constraints, compliance requirements, and architecture for greenfield projects.",
				features: [
					"Stakeholder alignment and working session",
					"Enterprise architecture and compliance scope cut",
					"Legacy integration and build vs buy tradeoffs",
					"Credited toward the build or prototyping sprint",
				],
			},
			{
				id: "vibe-code-cleanup",
				name: "Vibe Code Cleanup",
				price: 3000,
				unit: "project",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Book Code Cleanup",
				idealFor:
					"Founders who shipped fast and now need the codebase cleaned up before the next round of product work",
				features: [
					"Codebase review and cleanup priorities",
					"Refactor of fragile flows and obvious technical debt",
					"Component, state, and file structure cleanup",
					"Written handoff with recommended next fixes",
				],
			},
			{
				id: "vibe-coding-rescue",
				name: "MVP Rescue & Refactor",
				price: 6500,
				unit: "project",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Book Rescue Sprint",
				idealFor:
					"Startups with a half-built or broken MVP from a previous team that needs immediate stabilization, cleanup, and to be brought to the finish line.",
				features: [
					"Codebase audit to identify critical blockers",
					"Refactor of fragile logic and technical debt",
					"Resolution of missing features holding up launch",
					"Launch stabilization and deployment setup",
				],
			},
			{
				id: "frontend-polish-sprint",
				name: "Frontend Polish Sprint",
				price: 2500,
				unit: "project",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Book Frontend Sprint",
				idealFor:
					"Teams with a working product that needs stronger UX, cleaner flows, and a more launch-ready frontend",
				features: [
					"UI cleanup across core user flows",
					"Responsive improvements for desktop and mobile",
					"Component polish and interaction refinements",
					"Handoff notes for future frontend iteration",
				],
			},
			{
				id: "backend-polish-sprint",
				name: "Backend Polish Sprint",
				price: 2500,
				unit: "project",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Book Backend Sprint",
				idealFor:
					"Teams with a working API or database that needs cleaner structure, more reliable endpoints, and faster query performance",
				features: [
					"API cleanup and routing improvements",
					"Database query optimization",
					"Auth or integration debugging and refinement",
					"Handoff notes for future backend iteration",
				],
			},
			{
				id: "technical-architecture-review",
				name: "Technical Architecture Review",
				price: 2000,
				unit: "project",
				promoRibbonText: "Starting At",
				ctaType: "contactSales",
				ctaLabel: "Book Architecture Review",
				idealFor:
					"Founders who need an expert review of stack choices, system design, deployment risks, and scale bottlenecks before building further",
				features: [
					"Architecture review across app, data, and infra",
					"Stack recommendations and tradeoff analysis",
					"Risk flags for scale, reliability, and technical debt",
					"Written implementation memo with next-step priorities",
				],
			},
		],
		inPerson: [
			{
				id: "in-person-mvp-build",
				name: "3-Day In-Person MVP Build Workshop",
				price: 3000,
				compareAtPrice: 7500,
				unit: "project",
				ctaType: "contactSales",
				ctaLabel: "Talk to Sales",
				bannerText: "Limited-Time Pricing",
				promoRibbonText: "Denver",
				idealFor:
					"Founders who want an in-person build sprint focused on shipping a full MVP fast",
				features: [
					"In-person 3-day sprint focused on a full MVP build",
					"Product blueprint, scope lock, and build sequencing",
					"Core MVP build centered on the critical user journey",
					"Launch memo, handoff notes, and next-step roadmap",
				],
			},
			{
				id: "in-person-app-launch",
				name: "In-Person App + Landing Page Workshop",
				price: 5000,
				compareAtPrice: 10000,
				unit: "project",
				ctaType: "contactSales",
				ctaLabel: "Talk to Sales",
				bannerText: "Limited-Time Pricing",
				promoRibbonText: "Denver",
				idealFor:
					"Teams that need an in-person sprint for a web app or mobile app plus a launch landing page",
				features: [
					"Product blueprint, UX direction, and scope lock",
					"Web app or mobile app build plus launch landing page",
					"Auth, payments, analytics, and key integrations wired in as needed",
					"QA pass, deployment setup, and launch support",
					"Code, documentation, and post-launch roadmap handoff",
				],
			},
			{
				id: "in-person-ai-prototype",
				name: "Enterprise Prototyping Workshop",
				price: 7500,
				compareAtPrice: 15000,
				unit: "project",
				ctaType: "contactSales",
				ctaLabel: "Plan a Workshop",
				bannerText: "Limited-Time Pricing",
				promoRibbonText: "Denver",
				idealFor:
					"Corporate innovation labs and enterprise teams needing a fast, in-person sprint to ideate and prototype a greenfield initiative.",
				features: [
					"3-to-5-day on-site or Denver-based innovation sprint",
					"Stakeholder alignment and rapid feature prioritization",
					"Live UI/UX prototyping and user journey mapping",
					"Clickable prototype delivery and build roadmap",
				],
			},
			{
				id: "legacy-system-prototype",
				name: "Legacy System Prototype",
				price: 12500,
				unit: "project",
				ctaType: "contactSales",
				ctaLabel: "Talk to Sales",
				bannerText: "Enterprise",
				idealFor:
					"Enterprise teams looking to prove the ROI of replacing a slow or outdated internal system with a modern stack.",
				features: [
					"Workflow mapping of the current legacy bottleneck",
					"Modern architecture design and tech stack proposal",
					"Functional prototype mimicking the core replacement workflow",
					"Executive handoff presentation with ROI analysis",
				],
			},
		],
	},
};

export const PricingPlans: Plan[] = [
	{
		id: "startup-scoping-session",
		name: "Startup Scoping Session",
		price: {
			monthly: {
				amount: 0,
				description: "",
				features: [],
			},
			annual: { amount: 0, description: "", features: [] },
			oneTime: {
				amount: 750,
				description: "per project",
				features: [
					"Founder strategy session",
					"Scope cut",
					"Stack recommendation",
					"Credited toward the project when moving forward",
				],
			},
		},
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "enterprise-scoping-session",
		name: "Enterprise & Greenfield Scoping Session",
		price: {
			monthly: {
				amount: 0,
				description: "",
				features: [],
			},
			annual: { amount: 0, description: "", features: [] },
			oneTime: {
				amount: 1500,
				description: "per project",
				features: [
					"Stakeholder alignment session",
					"Enterprise scope out & compliance validation",
					"Stack & integration recommendation",
					"Credited toward prototyping / build",
				],
			},
		},
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "in-person-mvp-build",
		name: "3-Day In-Person MVP Build Workshop",
		price: {
			monthly: {
				amount: 0,
				description: "",
				features: [],
			},
			annual: {
				amount: 7500,
				description: "per project",
				features: [
					"Product blueprint and scope lock",
					"Full MVP build",
					"Launch memo and implementation handoff",
					"Next-step roadmap",
				],
			},
			oneTime: {
				amount: 7500,
				description: "per project",
				features: [
					"Product blueprint and scope lock",
					"Full MVP build",
					"Launch memo and implementation handoff",
					"Next-step roadmap",
				],
			},
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "in-person-app-launch",
		name: "In-Person App + Landing Page Workshop",
		price: {
			monthly: {
				amount: 0,
				description: "",
				features: [],
			},
			annual: {
				amount: 10000,
				description: "per project",
				features: [
					"Product blueprint and UX direction",
					"Web app or mobile app build",
					"Landing page included",
					"Deployment, QA, and handoff",
				],
			},
			oneTime: {
				amount: 10000,
				description: "per project",
				features: [
					"Product blueprint and UX direction",
					"Web app or mobile app build",
					"Landing page included",
					"Deployment, QA, and handoff",
				],
			},
		},
		highlighted: true,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "support-plan",
		name: "Fractional CTO for Startups",
		price: {
			monthly: {
				amount: 5000,
				description: "per month",
				features: [
					"Strategic technical leadership and planning",
					"Architecture modeling and stack selection",
					"Code reviews and development oversight",
					"Vendor and offshore team management",
				],
			},
			annual: { amount: 0, description: "", features: [] },
			oneTime: { amount: 0, description: "", features: [] },
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "backend-engineer-support",
		name: "Embedded Backend Engineer",
		price: {
			monthly: {
				amount: 3000,
				description: "per month",
				features: [
					"API design and backend architecture support",
					"Database modeling, auth, and payments wiring",
					"Third-party integrations and internal tools",
					"Production-ready backend cleanup and iteration support",
				],
			},
			annual: { amount: 0, description: "", features: [] },
			oneTime: { amount: 0, description: "", features: [] },
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "frontend-engineer-support",
		name: "Embedded Frontend Engineer",
		price: {
			monthly: {
				amount: 2500,
				description: "per month",
				features: [
					"Frontend implementation across app and landing surfaces",
					"Responsive polish and UX cleanup on core flows",
					"Reusable component and state-management cleanup",
					"Iteration support for a more launch-ready product experience",
				],
			},
			annual: { amount: 0, description: "", features: [] },
			oneTime: { amount: 0, description: "", features: [] },
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "backend-polish-sprint",
		name: "Backend Polish Sprint",
		price: {
			monthly: { amount: 0, description: "", features: [] },
			annual: { amount: 0, description: "", features: [] },
			oneTime: {
				amount: 2500,
				description: "per project",
				features: [
					"API cleanup and routing improvements",
					"Database query optimization",
					"Auth or integration debugging and refinement",
					"Handoff notes for future backend iteration",
				],
			},
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},

	{
		id: "devops-engineer-support",
		name: "Embedded DevOps Engineer",
		price: {
			monthly: {
				amount: 3500,
				description: "per month",
				features: [
					"Deployment pipeline and environment management",
					"CI/CD cleanup and release reliability improvements",
					"Observability, logs, and uptime visibility support",
					"Infrastructure guidance for launch readiness and scale",
				],
			},
			annual: { amount: 0, description: "", features: [] },
			oneTime: { amount: 0, description: "", features: [] },
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "vibe-code-cleanup",
		name: "Vibe Code Cleanup",
		price: {
			monthly: { amount: 0, description: "", features: [] },
			annual: { amount: 0, description: "", features: [] },
			oneTime: {
				amount: 3000,
				description: "per project",
				features: [
					"Codebase review and cleanup priorities",
					"Refactor of fragile flows and obvious technical debt",
					"Component, state, and file structure cleanup",
					"Written handoff with recommended next fixes",
				],
			},
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "vibe-coding-rescue",
		name: "MVP Rescue & Refactor",
		price: {
			monthly: { amount: 0, description: "", features: [] },
			annual: { amount: 0, description: "", features: [] },
			oneTime: {
				amount: 6500,
				description: "per project",
				features: [
					"Codebase audit to identify critical blockers",
					"Refactor of fragile logic and technical debt",
					"Resolution of missing features holding up launch",
					"Launch stabilization and deployment setup",
				],
			},
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "ai-engineer-support",
		name: "Embedded AI Engineer",
		price: {
			monthly: {
				amount: 4500,
				description: "per month",
				features: [
					"Agent and prompt workflow design",
					"Retrieval, eval loops, and model integration support",
					"AI feature reliability and productization guidance",
					"Iteration support for launch-ready AI experiences",
				],
			},
			annual: { amount: 0, description: "", features: [] },
			oneTime: { amount: 0, description: "", features: [] },
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "legacy-system-prototype",
		name: "Legacy System Prototype",
		price: {
			monthly: { amount: 0, description: "", features: [] },
			annual: { amount: 0, description: "", features: [] },
			oneTime: {
				amount: 12500,
				description: "per project",
				features: [
					"Workflow mapping of the current legacy bottleneck",
					"Modern architecture design and tech stack proposal",
					"Functional prototype mimicking the core replacement workflow",
					"Executive handoff presentation with ROI analysis",
				],
			},
		},
		highlighted: false,
		cta: { text: "Talk to Sales", type: "link", href: "/contact" },
	},
	{
		id: "in-person-ai-prototype",
		name: "Enterprise Prototyping Workshop",
		price: {
			monthly: { amount: 0, description: "", features: [] },
			annual: { amount: 0, description: "", features: [] },
			oneTime: {
				amount: 15000,
				description: "per project",
				features: [
					"3-to-5-day on-site or Denver-based innovation sprint",
					"Stakeholder alignment and rapid feature prioritization",
					"Live UI/UX prototyping and user journey mapping",
					"Clickable prototype delivery and build roadmap",
				],
			},
		},
		highlighted: false,
		cta: { text: "Plan a Workshop", type: "link", href: "/contact" },
	},
];

export default pricingCatalog;
