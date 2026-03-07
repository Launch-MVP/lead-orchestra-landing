import type { FeatureTimelineMilestone } from "@/components/features/FeatureTimelineTable";

export const featureTimeline: FeatureTimelineMilestone[] = [
	{
		quarter: "Q4 2025",
		status: "Live",
		initiative: "MVP Strategy Sessions",
		focus: "Scoping and decision-making",
		summary:
			"Founder consultations and paid scoping sessions are live to help teams cut scope, choose the right stack, and stop version one from bloating before code starts.",
		highlights: [
			"Free consultation for fast launch-direction review.",
			"Paid scoping session with stack recommendations and a launch memo.",
			"Clearer decision path into workshops, cleanup, or specialist support.",
		],
	},
	{
		quarter: "Q1 2026",
		status: "Live",
		initiative: "In-Person Build Workshops",
		focus: "Fast execution",
		summary:
			"Denver-based workshops now support full MVP builds, app-plus-landing launches, and AI prototype sessions for founders who need tighter execution in person.",
		highlights: [
			"3-day in-person MVP build workshop.",
			"App plus landing page workshop for launch alignment.",
			"AI prototype workshop for testing one core workflow before scaling scope.",
		],
	},
	{
		quarter: "Q1 2026",
		status: "Limited Beta",
		initiative: "Launch Support Layer",
		focus: "Post-launch stability",
		summary:
			"Managed launch support and embedded specialists are being packaged to help founders stabilize releases, fix the rough edges, and keep improving without hiring full-time immediately.",
		highlights: [
			"Managed launch support for bugs, polish, and next-step prioritization.",
			"Embedded frontend, backend, AI, and DevOps support options.",
			"Cleaner path from launch week into the next iteration cycle.",
		],
	},
	{
		quarter: "Q2 2026",
		status: "In Build",
		initiative: "Launch Assets & Handoff",
		focus: "Documentation and operations",
		summary:
			"Reusable launch assets are being expanded so teams leave with setup docs, KPI tracking notes, handoff materials, and operating context instead of a black-box build.",
		highlights: [
			"Launch checklists and QA notes.",
			"Analytics plans and event instrumentation guidance.",
			"Technical handoff materials for the next engineer or operator.",
		],
	},
	{
		quarter: "Q2 2026",
		status: "Planning",
		initiative: "Productized Launch Add-Ons",
		focus: "Expansion paths",
		summary:
			"Additional launch services are being prioritized around mobile-first builds, landing-page copy, and specialist pairings that extend the core MVP workshop model.",
		highlights: [
			"Mobile app workshop track.",
			"Launch copy and landing-page add-on.",
			"Specialist bundles for product teams that need focused follow-on execution.",
		],
	},
];
