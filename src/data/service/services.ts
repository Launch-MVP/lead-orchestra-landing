import type { FAQProps } from "@/types/faq";
import type { Plan } from "@/types/service/plans";
import {
	type IconName,
	SERVICE_CATEGORIES,
	type ServiceCategoryValue,
	type ServiceHowItWorks,
	type ServiceItemData,
	type ServiceProblemSolution,
	type ServicesData,
	type TechStack,
} from "@/types/service/services";
import type { Testimonial } from "@/types/testimonial";
import { PricingPlans } from "./slug_data/pricing";

const DEFAULT_SPLINE_URL =
	"https://prod.spline.design/homQGDx44sO4Aflh/scene.splinecode";
const LAST_UPDATED = new Date("2026-03-06T00:00:00.000Z");

const planIds = (...ids: string[]): Plan[] =>
	ids
		.map((id) => PricingPlans.find((plan) => plan.id === id))
		.filter((plan): plan is Plan => Boolean(plan));

const faqFor = (title: string): FAQProps => ({
	title: `${title} FAQs`,
	subtitle: `Common questions about ${title.toLowerCase()}, fit, and delivery.`,
	faqItems: [
		{
			question: "Who is this for?",
			answer:
				"Founders and small teams that need a tighter launch path, cleaner execution, and less product drift.",
		},
		{
			question: "Can this start from an existing prototype?",
			answer:
				"Yes. We can start from a rough prototype, an active codebase, or a founder brief and reduce it to the right next move.",
		},
		{
			question: "What do we leave with?",
			answer:
				"You leave with usable product artifacts, clearer priorities, and a practical handoff instead of generic recommendations.",
		},
	],
});

const testimonialsFor = (title: string): Testimonial[] => [
	{
		id: 1,
		name: "Nadia Chen",
		role: "Founder",
		company: "Peridot",
		content: `${title} gave us a cleaner version-one path and cut weeks of indecision.`,
		problem: "The product vision was broad and execution kept drifting.",
		solution: "Scope tightened fast and the launch path became concrete.",
		rating: 5,
	},
	{
		id: 2,
		name: "Marcus Hill",
		role: "Operator",
		company: "Bookt",
		content:
			"We finally had a build path that felt launchable instead of experimental.",
		problem: "Prototype work was moving without a stable foundation.",
		solution: "Clearer priorities, better structure, and less cleanup debt.",
		rating: 5,
	},
];

const problems = (
	firstProblem: string,
	firstSolution: string,
	secondProblem: string,
	secondSolution: string,
): ServiceProblemSolution[] => [
	{ problem: firstProblem, solution: firstSolution },
	{ problem: secondProblem, solution: secondSolution },
];

const steps = (
	a: [string, string, IconName],
	b: [string, string, IconName],
	c: [string, string, IconName],
): ServiceHowItWorks[] =>
	[a, b, c].map(([title, description, icon], index) => ({
		stepNumber: index + 1,
		title,
		subtitle: `Step ${index + 1}`,
		description,
		icon,
		label: `step-${index + 1}`,
		positionLabel: `step-${index + 1}`,
	}));

const stacks = {
	strategy: [
		{
			category: "Planning Stack",
			libraries: [
				{
					name: "Notion",
					description: "Launch memos, scope docs, and decision records.",
					lucideIcon: "FileText",
				},
				{
					name: "Figma",
					description: "Fast UX direction, wireframes, and flow mapping.",
					lucideIcon: "Palette",
				},
				{
					name: "Miro",
					description: "Founder workshops, system maps, and journey planning.",
					lucideIcon: "LayoutGrid",
				},
			],
		},
	] satisfies TechStack[],
	build: [
		{
			category: "Build Stack",
			libraries: [
				{
					name: "Next.js",
					description: "Web apps, dashboards, and launch pages.",
					lucideIcon: "Rocket",
				},
				{
					name: "React Native",
					description: "Mobile delivery when the MVP needs app distribution.",
					lucideIcon: "Smartphone",
				},
				{
					name: "Supabase",
					description: "Auth, database, storage, and backend helpers.",
					lucideIcon: "Database",
				},
				{
					name: "Stripe",
					description: "Payments and subscription flows for launch-ready apps.",
					lucideIcon: "CreditCard",
				},
			],
		},
	] satisfies TechStack[],
	ai: [
		{
			category: "AI Stack",
			libraries: [
				{
					name: "OpenAI",
					description: "Prompted workflows, agents, and product copilots.",
					lucideIcon: "BrainCircuit",
				},
				{
					name: "n8n",
					description: "Operational automations and workflow glue.",
					lucideIcon: "RefreshCw",
				},
				{
					name: "Pinecone",
					description: "Retrieval and context layers for AI features.",
					lucideIcon: "DatabaseZap",
				},
			],
		},
	] satisfies TechStack[],
	support: [
		{
			category: "Support Stack",
			libraries: [
				{
					name: "Sentry",
					description: "Production error monitoring and issue triage.",
					lucideIcon: "ShieldCheck",
				},
				{
					name: "PostHog",
					description:
						"Usage review, funnel analysis, and launch feedback loops.",
					lucideIcon: "BarChartBig",
				},
				{
					name: "GitHub Actions",
					description: "CI, release automation, and environment checks.",
					lucideIcon: "Code",
				},
			],
		},
	] satisfies TechStack[],
	resources: [
		{
			category: "Handoff Assets",
			libraries: [
				{
					name: "README",
					description: "Setup instructions and operating notes.",
					lucideIcon: "FileText",
				},
				{
					name: "Launch Checklist",
					description: "QA, deployment, tracking, and owner responsibilities.",
					lucideIcon: "CalendarCheck",
				},
				{
					name: "Analytics Plan",
					description: "KPIs, events, and instrumentation notes.",
					lucideIcon: "PieChart",
				},
			],
		},
	] satisfies TechStack[],
};

type Seed = {
	id: string;
	title: string;
	iconName: IconName;
	description: string;
	features: string[];
	price?: number | string;
	category: ServiceCategoryValue;
	slug: string;
	pricing: Plan[];
	heroSubtitle: string;
	problemsAndSolutions: ServiceProblemSolution[];
	howItWorks: ServiceHowItWorks[];
	integrations: TechStack[];
	showBanner?: boolean;
	bannerText?: string;
	bannerColor?: string;
};

const service = (seed: Seed): ServiceItemData => ({
	id: seed.id,
	iconName: seed.iconName,
	title: seed.title,
	description: seed.description,
	features: seed.features,
	price: seed.price,
	showBanner: seed.showBanner,
	bannerText: seed.bannerText,
	bannerColor: seed.bannerColor,
	categories: [seed.category],
	slugDetails: {
		slug: seed.slug,
		dilemma: seed.problemsAndSolutions[0]?.problem ?? seed.description,
		solution: seed.problemsAndSolutions[0]?.solution ?? seed.heroSubtitle,
		pricing: seed.pricing,
		faq: faqFor(seed.title),
		splineUrl: {
			splineUrl: DEFAULT_SPLINE_URL,
			defaultZoom: 1,
		},
		defaultZoom: 1,
		problemsAndSolutions: seed.problemsAndSolutions,
		howItWorks: seed.howItWorks,
		testimonials: testimonialsFor(seed.title),
		integrations: seed.integrations,
		copyright: {
			title: `Need help with ${seed.title.toLowerCase()}?`,
			subtitle: seed.heroSubtitle,
			ctaText: "Talk to Sales",
			ctaLink: "/contact",
		},
		lastModified: LAST_UPDATED,
		datePublished: LAST_UPDATED,
	},
});

export const services: ServicesData = {
	[SERVICE_CATEGORIES.STRATEGY]: {
		freeConsultation: service({
			id: "service-free-mvp-consultation",
			title: "Free MVP Consultation",
			iconName: "Lightbulb",
			description:
				"A quick founder session to test the idea, the launch path, and whether the current MVP direction is worth building.",
			features: [
				"Idea review",
				"Version-one pressure test",
				"Launch-path guidance",
				"Clear next step",
			],
			price: "Free",
			category: SERVICE_CATEGORIES.STRATEGY,
			slug: "free-mvp-consultation",
			pricing: [],
			heroSubtitle:
				"Get a fast reality check before spending weeks building the wrong version one.",
			problemsAndSolutions: problems(
				"Founders often treat every idea as launch-critical.",
				"We reduce the product to the smallest useful path worth testing first.",
				"Teams lose time deciding whether they need strategy, design, or engineering next.",
				"We leave with a concrete recommendation on the next highest-leverage move.",
			),
			howItWorks: steps(
				[
					"Review the idea",
					"Map the user, offer, and launch constraint set.",
					"Lightbulb",
				],
				[
					"Cut the noise",
					"Separate launch-critical work from optional features.",
					"SlidersHorizontal",
				],
				[
					"Recommend the next move",
					"Choose the right workshop, build, or cleanup path.",
					"Rocket",
				],
			),
			integrations: stacks.strategy,
		}),
		startupScoping: service({
			id: "startup-scoping-session",
			title: "Startup Scoping Session",
			iconName: "FileText",
			description:
				"Turn founder context into a scoped build memo, realistic technical direction, and a smaller version-one plan.",
			features: [
				"Founder working session",
				"Scope cut",
				"Stack recommendation",
				"Credited toward project",
			],
			price: 750,
			category: SERVICE_CATEGORIES.STRATEGY,
			slug: "startup-scoping-session",
			pricing: planIds("startup-scoping-session"),
			heroSubtitle:
				"Convert founder context into a buildable scope before committing to a larger sprint.",
			problemsAndSolutions: problems(
				"Planning stalls when every feature feels equally important.",
				"We cut scope to the smallest version that can still validate demand.",
				"Early technical decisions are easy to overcomplicate.",
				"We choose a stack that supports speed now without reckless cleanup debt later.",
			),
			howItWorks: steps(
				["Capture the goal", "Align on user, offer, and constraints.", "Users"],
				[
					"Map the MVP",
					"Define the minimum user journey worth shipping.",
					"LayoutGrid",
				],
				[
					"Ship the memo",
					"Document priorities, tradeoffs, and next steps.",
					"FileCheck",
				],
			),
			integrations: stacks.strategy,
			showBanner: true,
			bannerText: "One-Time",
			bannerColor: "bg-gradient-to-r from-primary to-focus",
		}),
		enterpriseScoping: service({
			id: "enterprise-scoping-session",
			title: "Enterprise & Greenfield Scoping Session",
			iconName: "Network",
			description:
				"Turn strategic corporate initiatives into a buildable architecture, scope, and technical plan.",
			features: [
				"Stakeholder alignment",
				"Architecture & compliance review",
				"Stack recommendation",
				"Credited toward prototyping",
			],
			price: 1500,
			category: SERVICE_CATEGORIES.STRATEGY,
			slug: "enterprise-scoping-session",
			pricing: planIds("enterprise-scoping-session"),
			heroSubtitle:
				"Validate constraints, compliance, and scope before committing to a greenfield enterprise build.",
			problemsAndSolutions: problems(
				"Enterprise greenfield projects often stall due to unmapped constraints.",
				"We surface compliance, security, and integration requirements early.",
				"Legacy systems make building new systems complex and slow.",
				"We identify the quickest path to value through modernization or replacement.",
			),
			howItWorks: steps(
				["Align Stakeholders", "Define KPIs, constraints, and business goals.", "Users"],
				[
					"Map Constraints",
					"Review security, integration points, and legacy dependencies.",
					"ShieldCheck",
				],
				[
					"Deliver the Plan",
					"Provide a clear architecture and phase-one build scope.",
					"FileCheck",
				],
			),
			integrations: stacks.strategy,
			showBanner: true,
			bannerText: "Enterprise",
			bannerColor: "bg-gradient-to-r from-accent to-focus",
		}),
		technicalReview: service({
			id: "service-technical-architecture-review",
			title: "Technical Architecture Review",
			iconName: "Network",
			description:
				"Review the system before more time gets sunk into architecture that is too fragile, too complex, or both.",
			features: [
				"Architecture audit",
				"Risk flags",
				"Stack tradeoffs",
				"Implementation memo",
			],
			price: 2000,
			category: SERVICE_CATEGORIES.STRATEGY,
			slug: "technical-architecture-review",
			pricing: [],
			heroSubtitle:
				"Get a technical decision memo before the MVP turns into a cleanup trap.",
			problemsAndSolutions: problems(
				"Teams keep shipping without confidence in the architecture beneath the product.",
				"We identify what to keep, simplify, or change before the next build cycle.",
				"Founders struggle to evaluate backend, infra, and data tradeoffs.",
				"We translate technical choices into business consequences and sequencing.",
			),
			howItWorks: steps(
				[
					"Inspect the system",
					"Review flows, data, auth, and deployment shape.",
					"Search",
				],
				[
					"Find the risk",
					"Flag scale, reliability, and maintainability problems.",
					"ShieldCheck",
				],
				[
					"Prioritize fixes",
					"Deliver a memo of what to change now versus later.",
					"BarChart",
				],
			),
			integrations: stacks.strategy,
			showBanner: true,
			bannerText: "One-Time",
			bannerColor: "bg-gradient-to-r from-accent to-focus",
		}),
	},
	[SERVICE_CATEGORIES.BUILD]: {
		frontendPolish: service({
			id: "service-frontend-polish-sprint",
			title: "Frontend Polish Sprint",
			iconName: "Palette",
			description:
				"Clean up rough screens, interactions, and responsive behavior so the product feels credible at launch.",
			features: [
				"UI cleanup",
				"Responsive fixes",
				"Interaction polish",
				"Handoff notes",
			],
			price: 2500,
			category: SERVICE_CATEGORIES.BUILD,
			slug: "frontend-polish-sprint",
			pricing: [],
			heroSubtitle:
				"Upgrade a working MVP into something users can trust and teams can demo confidently.",
			problemsAndSolutions: problems(
				"Products often work before they feel trustworthy.",
				"We improve clarity, consistency, and perceived quality on the highest-impact screens.",
				"Frontend debt compounds when design decisions stay informal.",
				"We tighten the implementation so iteration gets cheaper after launch.",
			),
			howItWorks: steps(
				[
					"Audit the flows",
					"Choose the screens that most affect trust and conversion.",
					"Search",
				],
				[
					"Polish the UI",
					"Improve hierarchy, states, and responsiveness.",
					"Palette",
				],
				[
					"Hand off cleanly",
					"Document what changed and where to iterate next.",
					"FileCheck",
				],
			),
			integrations: stacks.build,
			showBanner: true,
			bannerText: "One-Time",
			bannerColor: "bg-gradient-to-r from-primary to-accent",
		}),
		vibeCleanup: service({
			id: "service-vibe-code-cleanup",
			title: "Vibe Code Cleanup",
			iconName: "Code",
			description:
				"Clean up fast-shipped code before the next sprint turns small shortcuts into a full rebuild.",
			features: [
				"Code review",
				"Cleanup priorities",
				"Core refactors",
				"Written handoff",
			],
			price: 3000,
			category: SERVICE_CATEGORIES.BUILD,
			slug: "vibe-code-cleanup",
			pricing: planIds("vibe-code-cleanup"),
			heroSubtitle:
				"Reduce cleanup debt before the MVP becomes too expensive to keep evolving.",
			problemsAndSolutions: problems(
				"Fast shipping creates hidden coupling and brittle flows.",
				"We target the worst pressure points before they spread further.",
				"Founders need momentum without a full rebuild too early.",
				"We preserve what still works and refactor only where the drag is real.",
			),
			howItWorks: steps(
				[
					"Audit the code",
					"Find fragility, duplication, and launch risk.",
					"Code",
				],
				[
					"Clean the core path",
					"Refactor the flows that block speed and reliability.",
					"RefreshCw",
				],
				[
					"Document the state",
					"Hand off what changed and what still needs work.",
					"FileText",
				],
			),
			integrations: stacks.support,
			showBanner: true,
			bannerText: "One-Time",
			bannerColor: "bg-gradient-to-r from-primary to-focus",
		}),
		vibeRescue: service({
			id: "service-vibe-coding-rescue",
			title: "Vibe Coding Rescue",
			iconName: "ShieldCheck",
			description:
				"A heavier rescue for prototypes that demo just enough to be tempting but are too fragile to trust.",
			features: [
				"Prototype triage",
				"Critical fixes",
				"Keep-vs-rebuild guidance",
				"Launch-risk memo",
			],
			price: 4500,
			category: SERVICE_CATEGORIES.BUILD,
			slug: "vibe-coding-rescue",
			pricing: planIds("vibe-coding-rescue"),
			heroSubtitle:
				"Stabilize a shaky prototype before it becomes a reputation problem or a rewrite surprise.",
			problemsAndSolutions: problems(
				"Prototype logic hides fragile assumptions and silent launch blockers.",
				"We surface what is unsafe, what can be saved, and what should be rebuilt later.",
				"Teams keep shipping on top of unstable foundations because there is no rescue plan.",
				"We turn technical discomfort into explicit decisions and sequencing.",
			),
			howItWorks: steps(
				[
					"Triage the prototype",
					"Find the highest-risk failure points first.",
					"ShieldCheck",
				],
				[
					"Rescue the core path",
					"Fix what matters for launch credibility.",
					"Rocket",
				],
				[
					"Define the boundary",
					"Document what survives into the next version.",
					"Network",
				],
			),
			integrations: stacks.support,
			showBanner: true,
			bannerText: "One-Time",
			bannerColor: "bg-gradient-to-r from-focus to-accent",
		}),
	},
	[SERVICE_CATEGORIES.IN_PERSON]: {
		mvpWorkshop: service({
			id: "service-in-person-mvp-build",
			title: "3-Day In-Person MVP Build Workshop",
			iconName: "RocketLaunch",
			description:
				"A Denver sprint for founders who need the full MVP built around the core user journey without weeks of drift.",
			features: [
				"3-day sprint",
				"Full MVP build",
				"Scope lock",
				"Launch handoff",
			],
			price: 7500,
			category: SERVICE_CATEGORIES.IN_PERSON,
			slug: "in-person-mvp-build-workshop",
			pricing: planIds("in-person-mvp-build"),
			heroSubtitle:
				"Compress idea, scope, and implementation into a focused Denver build sprint.",
			problemsAndSolutions: problems(
				"Remote async work adds lag to every product decision.",
				"We make the decisions live and keep the build centered on the core workflow.",
				"Teams overbuild when version one is not forced into a smaller window.",
				"We use time constraints to protect focus and ship the minimum useful product.",
			),
			howItWorks: steps(
				[
					"Lock the scope",
					"Align on what the MVP must do before touching the build.",
					"SlidersHorizontal",
				],
				[
					"Build in person",
					"Move through design, implementation, and integration together.",
					"RocketLaunch",
				],
				[
					"Launch and hand off",
					"Leave with a working product and next-step roadmap.",
					"CalendarCheck",
				],
			),
			integrations: stacks.build,
			showBanner: true,
			bannerText: "Denver",
			bannerColor: "bg-gradient-to-r from-primary to-focus",
		}),
		appAndLanding: service({
			id: "service-in-person-app-launch",
			title: "In-Person App + Landing Page Workshop",
			iconName: "Smartphone",
			description:
				"A Denver workshop for teams that need the product and its launch surface built together so the message and the UX stay aligned.",
			features: [
				"Denver workshop",
				"Web or mobile app",
				"Landing page",
				"QA and handoff",
			],
			price: 10000,
			category: SERVICE_CATEGORIES.IN_PERSON,
			slug: "in-person-app-landing-page-workshop",
			pricing: planIds("in-person-app-launch"),
			heroSubtitle:
				"Build the product and its launch story together in a single Denver sprint.",
			problemsAndSolutions: problems(
				"Apps often launch with disconnected messaging and weak acquisition surfaces.",
				"We build the app flow and landing-page story together inside one sprint.",
				"Teams lose time when design, product, and launch copy are split across vendors.",
				"We keep the tradeoffs in one room and make them live.",
			),
			howItWorks: steps(
				[
					"Align the offer",
					"Define the product promise and conversion story.",
					"MessageSquare",
				],
				[
					"Build the surfaces",
					"Ship the app flow and landing experience together.",
					"Smartphone",
				],
				[
					"Prep the launch",
					"Leave with product, page, and launch next steps.",
					"Globe",
				],
			),
			integrations: stacks.build,
			showBanner: true,
			bannerText: "Denver",
			bannerColor: "bg-gradient-to-r from-accent to-focus",
		}),
		aiPrototype: service({
			id: "service-in-person-ai-prototype",
			title: "In-Person AI Prototype Workshop",
			iconName: "Brain",
			description:
				"A Denver sprint to prototype one AI-assisted workflow before committing to a larger product build.",
			features: [
				"Denver workshop",
				"AI workflow prototype",
				"Feasibility review",
				"Build roadmap",
			],
			price: 8500,
			category: SERVICE_CATEGORIES.IN_PERSON,
			slug: "in-person-ai-prototype-workshop",
			pricing: [],
			heroSubtitle:
				"Turn vague AI ambition into a concrete product workflow in a focused in-person sprint.",
			problemsAndSolutions: problems(
				"AI ideas stay abstract when no one defines the exact user workflow.",
				"We turn the idea into a concrete interaction with clear product boundaries.",
				"Teams overcommit to AI complexity without testing feasibility first.",
				"We validate the workflow and decide what is worth building next.",
			),
			howItWorks: steps(
				[
					"Define the workflow",
					"Isolate the single AI-assisted job worth testing first.",
					"Brain",
				],
				[
					"Prototype live",
					"Map prompts, retrieval, and flow in the room.",
					"Sparkles",
				],
				[
					"Choose the next build",
					"Leave with a prototype and implementation roadmap.",
					"Rocket",
				],
			),
			integrations: stacks.ai,
			showBanner: true,
			bannerText: "Denver",
			bannerColor: "bg-gradient-to-r from-primary to-accent",
		}),
	},
	[SERVICE_CATEGORIES.SPECIALISTS]: {
		backendEngineer: service({
			id: "service-embedded-backend-engineer",
			title: "Embedded Backend Engineer",
			iconName: "Database",
			description:
				"Month-to-month backend support for APIs, auth, integrations, database design, and launch-critical architecture work.",
			features: [
				"API design",
				"Database modeling",
				"Auth and payments",
				"Launch support",
			],
			price: 3000,
			category: SERVICE_CATEGORIES.SPECIALISTS,
			slug: "embedded-backend-engineer",
			pricing: planIds("backend-engineer-support"),
			heroSubtitle:
				"Bring in backend support without turning the MVP into a longer hiring problem.",
			problemsAndSolutions: problems(
				"Backend architecture keeps becoming the bottleneck for product speed.",
				"We handle the backend pressure points before they slow feature delivery further.",
				"API and data choices made under pressure are expensive to revisit later.",
				"We design for speed now while keeping the structure reasonable for the next phase.",
			),
			howItWorks: steps(
				[
					"Review the backend",
					"Find where architecture is blocking speed.",
					"Database",
				],
				[
					"Own the critical work",
					"Implement the APIs, models, and integrations that matter most.",
					"Network",
				],
				[
					"Support the launch",
					"Stay close until the release pressure drops.",
					"ShieldCheck",
				],
			),
			integrations: stacks.build,
			showBanner: true,
			bannerText: "Monthly",
			bannerColor: "bg-gradient-to-r from-primary to-focus",
		}),
		frontendEngineer: service({
			id: "service-embedded-frontend-engineer",
			title: "Embedded Frontend Engineer",
			iconName: "Palette",
			description:
				"Month-to-month frontend support for product flows, landing experiences, responsive polish, and interaction cleanup.",
			features: [
				"UI implementation",
				"Responsive polish",
				"Component cleanup",
				"Launch-facing UX",
			],
			price: 2500,
			category: SERVICE_CATEGORIES.SPECIALISTS,
			slug: "embedded-frontend-engineer",
			pricing: planIds("frontend-engineer-support"),
			heroSubtitle:
				"Add frontend help where the product most needs clarity, polish, and shipping speed.",
			problemsAndSolutions: problems(
				"Products can work before they feel trustworthy.",
				"We improve the screens that most affect conversion and confidence.",
				"Landing-page and product UX often drift apart.",
				"We keep both surfaces aligned so the product matches the promise.",
			),
			howItWorks: steps(
				[
					"Prioritize the surface",
					"Choose the screens that most affect trust and conversion.",
					"LayoutGrid",
				],
				[
					"Implement cleanly",
					"Refine the UI and remove the obvious frontend drag.",
					"Palette",
				],
				[
					"Keep iterating",
					"Stay available for launch-facing improvements month to month.",
					"RefreshCw",
				],
			),
			integrations: stacks.build,
			showBanner: true,
			bannerText: "Monthly",
			bannerColor: "bg-gradient-to-r from-primary to-accent",
		}),
		aiEngineer: service({
			id: "service-embedded-ai-engineer",
			title: "Embedded AI Engineer",
			iconName: "BrainCircuit",
			description:
				"Month-to-month AI support for agent workflows, prompts, retrieval, eval loops, and production-minded AI features.",
			features: [
				"Agent design",
				"Prompt systems",
				"Retrieval and evals",
				"AI productization",
			],
			price: 4500,
			category: SERVICE_CATEGORIES.SPECIALISTS,
			slug: "embedded-ai-engineer",
			pricing: planIds("ai-engineer-support"),
			heroSubtitle:
				"Add AI engineering help where the workflow needs to become real and usable, not just impressive.",
			problemsAndSolutions: problems(
				"AI demos often look convincing before reliability is tested.",
				"We work on the actual workflow, not just the output veneer.",
				"Prompt logic without evals is hard to trust in production.",
				"We add structure around testing, retrieval quality, and operational behavior.",
			),
			howItWorks: steps(
				[
					"Define the AI job",
					"Isolate the workflow the model needs to handle.",
					"BrainCircuit",
				],
				[
					"Wire the system",
					"Connect prompts, tools, and retrieval to the product flow.",
					"Puzzle",
				],
				[
					"Harden for launch",
					"Improve reliability and next-step decisions.",
					"ShieldCheck",
				],
			),
			integrations: stacks.ai,
			showBanner: true,
			bannerText: "Monthly",
			bannerColor: "bg-gradient-to-r from-focus to-accent",
		}),
	},
	[SERVICE_CATEGORIES.SUPPORT]: {
		managedLaunchSupport: service({
			id: "service-managed-launch-support",
			title: "Managed Launch Support",
			iconName: "RefreshCw",
			description:
				"Ongoing support for launch stabilization, bug fixes, small feature improvements, and feedback loops after go-live.",
			features: [
				"Bug fixes",
				"Launch stabilization",
				"Small feature iterations",
				"Roadmap prioritization",
			],
			price: 3000,
			category: SERVICE_CATEGORIES.SUPPORT,
			slug: "managed-launch-support",
			pricing: planIds("support-plan"),
			heroSubtitle:
				"Keep the MVP stable after launch without immediately expanding the team.",
			problemsAndSolutions: problems(
				"Post-launch issues stack up quickly and erase early momentum.",
				"We handle the most important fixes and keep the release stable while usage grows.",
				"Founders need help deciding what to improve next, not just someone to close tickets.",
				"We pair iteration work with roadmap judgment and analytics review.",
			),
			howItWorks: steps(
				[
					"Triage the launch",
					"Review issues, analytics, and product feedback.",
					"BarChartBig",
				],
				[
					"Ship targeted fixes",
					"Stabilize the product and iterate on what matters.",
					"RefreshCw",
				],
				[
					"Prioritize the next cycle",
					"Tighten the roadmap instead of growing a loose backlog.",
					"CalendarCheck",
				],
			),
			integrations: stacks.support,
			showBanner: true,
			bannerText: "Monthly",
			bannerColor: "bg-gradient-to-r from-primary to-focus",
		}),
		devOpsEngineer: service({
			id: "service-embedded-devops-engineer",
			title: "Embedded DevOps Engineer",
			iconName: "Cloud",
			description:
				"Month-to-month DevOps support for CI, environments, deployment reliability, observability, and launch readiness.",
			features: [
				"Deployment pipelines",
				"Environment management",
				"Observability",
				"Release reliability",
			],
			price: 3500,
			category: SERVICE_CATEGORIES.SUPPORT,
			slug: "embedded-devops-engineer",
			pricing: planIds("devops-engineer-support"),
			heroSubtitle:
				"Bring in practical DevOps support when release confidence matters more than infra theater.",
			problemsAndSolutions: problems(
				"Manual releases and unclear environments create avoidable launch risk.",
				"We improve release confidence with cleaner pipelines and environment discipline.",
				"Teams do not notice operational issues until users hit them first.",
				"We add visibility, alerts, and practical operational guardrails.",
			),
			howItWorks: steps(
				[
					"Review release flow",
					"Map deploy, environment, and incident gaps.",
					"Cloud",
				],
				[
					"Harden the system",
					"Improve CI, environments, and observability.",
					"ShieldCheck",
				],
				[
					"Support the launch",
					"Stay close during releases and stabilization.",
					"Power",
				],
			),
			integrations: stacks.support,
			showBanner: true,
			bannerText: "Monthly",
			bannerColor: "bg-gradient-to-r from-accent to-focus",
		}),
	},
	[SERVICE_CATEGORIES.RESOURCES]: {
		launchAssets: service({
			id: "service-launch-assets-handoff",
			title: "Launch Assets & Handoff",
			iconName: "UploadCloud",
			description:
				"Documentation, checklists, analytics notes, and handoff materials so the product can keep moving after the initial build.",
			features: [
				"Setup docs",
				"Launch checklist",
				"Analytics notes",
				"Future roadmap handoff",
			],
			price: "Included with build services",
			category: SERVICE_CATEGORIES.RESOURCES,
			slug: "launch-assets-and-handoff",
			pricing: [],
			heroSubtitle:
				"Keep the launch usable after delivery with docs, checklists, and a cleaner handoff package.",
			problemsAndSolutions: problems(
				"Fast launch work often leaves critical context trapped in memory and chat.",
				"We turn the key build decisions into usable operating documents.",
				"The next sprint slows down when no one knows what was shipped or why.",
				"We give the team a handoff package that reduces context loss.",
			),
			howItWorks: steps(
				[
					"Collect the decisions",
					"Turn build context into concise operating notes.",
					"FileText",
				],
				[
					"Package the assets",
					"Create checklists, docs, and tracking notes.",
					"UploadCloud",
				],
				[
					"Hand off clearly",
					"The next builder can step in without reconstructing the project.",
					"Users",
				],
			),
			integrations: stacks.resources,
		}),
	},
};

export const getAllServiceCategories = () =>
	Object.keys(services) as ServiceCategoryValue[];

export const getServicesByCategory = (category: ServiceCategoryValue) =>
	services[category] || {};

export const getAllServices = () =>
	Object.values(services).flatMap((categoryObj) => Object.values(categoryObj));

export default services;
