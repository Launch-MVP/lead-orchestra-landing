import type { TechStack } from "@/types/service/services";

export const leadGenIntegrations: TechStack[] = [
	{
		category: "Strategy & UX",
		libraries: [
			{
				name: "Notion",
				description:
					"Working docs, decision records, scoping notes, and launch plans that keep founder context organized.",
				lucideIcon: "FileText",
			},
			{
				name: "Figma",
				description:
					"Wireframes, user flows, and interface direction before code starts moving.",
				lucideIcon: "Palette",
			},
			{
				name: "Miro",
				description:
					"Workshop mapping for user journeys, product structure, and systems thinking.",
				lucideIcon: "LayoutGrid",
			},
			{
				name: "Loom",
				description:
					"Async walkthroughs, founder reviews, and clear handoff notes between sessions.",
				lucideIcon: "Video",
			},
		],
	},
	{
		category: "Build & Launch",
		libraries: [
			{
				name: "Next.js",
				description:
					"Web apps, dashboards, and launch pages built for fast iteration and production delivery.",
				lucideIcon: "Rocket",
			},
			{
				name: "React Native",
				description:
					"Mobile app delivery when the MVP needs a native-feeling launch surface.",
				lucideIcon: "Smartphone",
			},
			{
				name: "Supabase",
				description:
					"Authentication, database, storage, and backend scaffolding for launch-speed development.",
				lucideIcon: "Database",
			},
			{
				name: "Stripe",
				description:
					"Payments, subscriptions, and checkout flows wired into launch-ready products.",
				lucideIcon: "CreditCard",
			},
		],
	},
	{
		category: "Analytics & Ops",
		libraries: [
			{
				name: "PostHog",
				description:
					"Activation, retention, and launch KPI tracking so teams can measure what changed after release.",
				lucideIcon: "BarChart3",
			},
			{
				name: "Sentry",
				description:
					"Error monitoring and issue triage for stabilization after the MVP ships.",
				lucideIcon: "ShieldCheck",
			},
			{
				name: "n8n",
				description:
					"Workflow automations for onboarding, notifications, and founder operations after launch.",
				lucideIcon: "RefreshCw",
			},
			{
				name: "Vercel",
				description:
					"Preview environments, deployments, and release workflows that keep shipping friction low.",
				lucideIcon: "Cloud",
			},
		],
	},
];

export const aiSocialMediaOutreachIntegrations: TechStack[] = [
	{
		category: "AI Workflow Stack",
		libraries: [
			{
				name: "OpenAI",
				description:
					"Prompted workflows, agents, and product copilots for AI-assisted MVP features.",
				lucideIcon: "BrainCircuit",
			},
			{
				name: "Pinecone",
				description:
					"Retrieval and context infrastructure for AI experiences that need memory or search.",
				lucideIcon: "DatabaseZap",
			},
			{
				name: "LangChain",
				description:
					"Tool orchestration and workflow structure for more complex AI product patterns.",
				lucideIcon: "Puzzle",
			},
		],
	},
];

export const embeddableAIChatbotIntegrations: TechStack[] = [
	{
		category: "Launch Surfaces",
		libraries: [
			{
				name: "Web App",
				description:
					"Interactive product surfaces where onboarding, activation, and early usage happen.",
				lucideIcon: "Globe",
			},
			{
				name: "Landing Page",
				description:
					"Acquisition and conversion surface aligned to the product promise and offer.",
				lucideIcon: "PanelTop",
			},
			{
				name: "Email & Notifications",
				description:
					"Transactional messaging, launch updates, and follow-up touchpoints.",
				lucideIcon: "Mail",
			},
		],
	},
];

export const aiSocialMediaIntegrations: TechStack[] = [
	{
		category: "Support Systems",
		libraries: [
			{
				name: "Linear",
				description:
					"Roadmap tracking, issue triage, and prioritization for post-launch support cycles.",
				lucideIcon: "CheckSquare",
			},
			{
				name: "GitHub",
				description:
					"Code reviews, release coordination, and pull-request workflows across the build.",
				lucideIcon: "Code",
			},
			{
				name: "Calendly",
				description:
					"Founder sessions, workshops, and follow-on support scheduling.",
				lucideIcon: "CalendarCheck",
			},
		],
	},
];
