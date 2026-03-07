import { z } from "zod";

const featureMetricSchema = z.object({
	label: z.string().min(1),
	value: z.string().min(1),
});

const featureHighlightSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	metric: featureMetricSchema.optional(),
	visual: z.string().optional(),
});

const featureMediaSchema = z.object({
	src: z.string().min(1),
	alt: z.string().min(1),
});

const featureChartDatumSchema = z.object({
	period: z.string().min(1),
	current: z.number(),
	previous: z.number().optional(),
	target: z.number().optional(),
});

const featureChartSchema = z.object({
	heading: z.string().min(1),
	description: z.string().min(1),
	data: z.array(featureChartDatumSchema).min(1),
	currentLabel: z.string().min(1),
	previousLabel: z.string().optional(),
	targetLabel: z.string().optional(),
});

export const realTimeFeatureSchema = z.object({
	id: z.string().min(1),
	label: z.string().min(1),
	eyebrow: z.string().min(1),
	description: z.string().min(1),
	media: featureMediaSchema,
	highlights: z.array(featureHighlightSchema).min(1),
	metrics: z.array(featureMetricSchema).default([]),
	chart: featureChartSchema.optional(),
});

const realTimeFeatureListSchema = z.array(realTimeFeatureSchema).min(1);

const realTimeFeaturesSeed = [
	{
		id: "product-blueprint",
		label: "Product Blueprint",
		eyebrow: "Pillar 1: Scope and system design",
		description:
			"We turn the product idea into a defined launch version with clear user flows, architecture decisions, and a realistic sprint plan.",
		media: {
			src: "/demo/static/charts/tab-1/baseline-kpis-top.png",
			alt: "Launch MVP scoping dashboard showing readiness, priorities, and launch planning.",
		},
		chart: {
			heading: "Launch readiness vs. target scope",
			description:
				"Critical scope decisions are resolved first so design, engineering, and launch assets stay aligned to the same version.",
			currentLabel: "Launch-ready scope",
			previousLabel: "Initial wish list",
			targetLabel: "Target MVP",
			data: [
				{ period: "Mon", current: 42, previous: 88, target: 40 },
				{ period: "Tue", current: 39, previous: 84, target: 39 },
				{ period: "Wed", current: 37, previous: 79, target: 37 },
				{ period: "Thu", current: 35, previous: 75, target: 35 },
				{ period: "Fri", current: 34, previous: 72, target: 34 },
			],
		},
		highlights: [
			{
				title: "Scope discipline",
				description:
					"We identify the must-have workflow, remove launch blockers, and cut features that slow down validation.",
				metric: {
					label: "Decision window",
					value: "<48 hrs",
				},
				visual: "/demo/static/charts/tab-1/baseline-kpis-mid.png",
			},
			{
				title: "Technical direction",
				description:
					"Architecture, deployment path, and integration choices are defined early so the build stays clean under time pressure.",
				metric: {
					label: "Core flows defined",
					value: "3-5",
				},
				visual: "/demo/static/charts/tab-1/baseline-kpis-bottom.png",
			},
		],
		metrics: [
			{
				label: "Launch window",
				value: "3 days",
			},
			{
				label: "Primary user flow",
				value: "Locked",
			},
			{
				label: "Build risks",
				value: "Surfaced early",
			},
		],
	},
	{
		id: "production-stack",
		label: "Production-Ready Stack",
		eyebrow: "Pillar 2: Build foundations that survive launch",
		description:
			"The MVP is built on a stack your team can own, with the critical systems wired in from the beginning instead of bolted on later.",
		media: {
			src: "/demo/static/charts/tab-2/ai-agent-overview-top.png",
			alt: "Application architecture board showing auth, billing, analytics, and deployment systems.",
		},
		highlights: [
			{
				title: "Core systems included",
				description:
					"Authentication, billing, analytics, data models, and deployment are treated as part of the launch version when they matter to the product.",
				metric: {
					label: "Core systems",
					value: "4+",
				},
				visual: "/demo/static/charts/tab-2/ai-agent-overview-mid.png",
			},
			{
				title: "Handoff-friendly architecture",
				description:
					"We optimize for clean ownership so internal engineers or future hires can extend the product without a rewrite.",
				metric: {
					label: "Ownership",
					value: "100%",
				},
				visual: "/demo/static/charts/tab-2/ai-agent-overview-bottom.png",
			},
		],
		metrics: [
			{
				label: "Auth and billing",
				value: "Wired",
			},
			{
				label: "Analytics",
				value: "Instrumented",
			},
		],
	},
	{
		id: "integrations-ai",
		label: "Integrations and AI Workflows",
		eyebrow: "Pillar 3: Connect the systems that matter",
		description:
			"We wire the external systems that make the MVP useful on day one and add AI workflows where they create real leverage.",
		media: {
			src: "/demo/static/charts/tab-3/premium-engagement-top.png",
			alt: "Integration dashboard showing workflow automations, CRM sync, and analytics events.",
		},
		highlights: [
			{
				title: "Operational integration",
				description:
					"CRM, email, dashboards, and analytics are connected so the product can support a real launch motion instead of a closed demo loop.",
				metric: {
					label: "Launch systems",
					value: "Connected",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-bottom.png",
			},
			{
				title: "Targeted AI support",
				description:
					"AI is used where it removes friction, such as classification, summarization, routing, or workflow acceleration, not as decorative feature bloat.",
				metric: {
					label: "Manual steps reduced",
					value: "High leverage",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-bottom-2.png",
			},
		],
		metrics: [
			{
				label: "Integrations",
				value: "Launch-critical",
			},
			{
				label: "Workflow coverage",
				value: "End to end",
			},
		],
	},
	{
		id: "launch-handoff",
		label: "Launch Assets and Handoff",
		eyebrow: "Pillar 4: Get the product into market cleanly",
		description:
			"The sprint ends with deployment readiness, QA coverage, launch context, and the documentation needed for the next build cycle.",
		media: {
			src: "/demo/static/charts/tab-3/premium-engagement-mid.png",
			alt: "Launch checklist interface showing QA, deployment, roadmap, and handoff notes.",
		},
		highlights: [
			{
				title: "QA and deployment readiness",
				description:
					"We tighten the release path so the MVP can go live with confidence instead of leaving the highest-risk work for the end.",
				metric: {
					label: "Release state",
					value: "Launch-ready",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-bottom-3.png",
			},
			{
				title: "Roadmap clarity",
				description:
					"You leave with a sharper understanding of what comes next, what should wait, and what users need from version two.",
				metric: {
					label: "Next-step plan",
					value: "Included",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-mid.png",
			},
		],
		metrics: [
			{
				label: "QA pass",
				value: "Complete",
			},
			{
				label: "Handoff docs",
				value: "Included",
			},
		],
	},
] as const satisfies Array<z.input<typeof realTimeFeatureSchema>>;

export const REAL_TIME_FEATURES =
	realTimeFeatureListSchema.parse(realTimeFeaturesSeed);

export type RealTimeFeature = (typeof REAL_TIME_FEATURES)[number];
