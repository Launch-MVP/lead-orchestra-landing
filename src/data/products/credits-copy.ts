import { defineAbTests } from "./copy";

export const AIConversationCreditsABTest = defineAbTests([
	{
		id: "ab-test-ai-credits-v1",
		name: "AI Credits Copy",
		description:
			"Copy optimization for AI credits and launch operations usage.",
		variants: [
			{
				name: "V1 - Keep the AI Loop Running",
				percentage: 100,
				copy: {
					cta: "Top Up AI Credits",
					buttonCta: "Get AI Credits",
					tagline: "Fuel Your MVP and AI Workflows.",
					subtitle:
						"Credits for prompts, evaluations, automations, and launch operations that rely on AI usage behind the scenes.",
					whatsInItForMe:
						"Keep product experiments, AI features, and launch automations running without pausing the workflow every time usage spikes.",
					target_audience:
						"Teams using AI features, launch automations, and internal product workflows regularly.",
					pain_point:
						"Running out of credits mid-workflow interrupts testing, demos, and operational routines right when momentum matters most.",
					fear: "You hit a usage wall in the middle of launch prep, internal testing, or customer-facing AI flows.",
					hope: "Your product team can keep shipping, testing, and iterating without the AI layer becoming the bottleneck.",
					solution:
						"AI Credits are a flexible usage balance for Launch MVP products and AI-enabled workflows, with simple top-ups and no forced monthly expiry.",
					highlights: [
						"Supports AI product features",
						"Works across launch workflows",
						"Simple top-ups",
						"No forced expiry",
					],
					highlighted_words: ["AI", "MVP", "Workflows"],
				},
			},
		],
		isActive: true,
		tags: ["Credits", "AI", "Launch Operations"],
	},
])[0];
