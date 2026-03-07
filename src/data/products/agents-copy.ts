import { defineAbTests } from "./copy";

export const realtorMcpPluginABTests = defineAbTests([
	{
		id: "ab-test-scope-agent-v1",
		name: "Scope Agent Copy Test",
		description:
			"Testing copy variants for a reusable AI scope and requirements assistant.",
		variants: [
			{
				name: "V1 - Clarify the Product Faster",
				percentage: 50,
				copy: {
					cta: "Use the Scope Agent",
					buttonCta: "Get Agent",
					tagline: "Turn Loose Ideas into a Sharper Spec.",
					subtitle:
						"An AI assistant for gathering requirements, pressure-testing ideas, and reducing early product ambiguity.",
					description:
						"Instead of starting with a blank document, use an AI scope agent to interview the product idea, challenge assumptions, and generate a cleaner foundation for version one.",
					whatsInItForMe:
						"You get to a better starting point faster without stretching the planning phase endlessly.",
					target_audience:
						"Founders and product teams shaping the first real version of an MVP.",
					pain_point:
						"Requirements stay fuzzy for too long, which makes design and engineering work noisier than it should be.",
					fear: "The team starts building while the product definition is still too loose to support good decisions.",
					hope: "You create a cleaner spec that helps design and development move with less friction.",
					solution:
						"The scope agent structures the discovery work and turns early inputs into something more usable.",
					highlights: [
						"Clarify requirements faster",
						"Pressure-test assumptions",
						"Generate cleaner specs",
						"Reduce planning sprawl",
					],
					highlighted_words: ["Scope", "Spec", "Clarity"],
				},
			},
			{
				name: "V2 - Avoid Version-One Drift",
				percentage: 50,
				copy: {
					cta: "Reduce Product Ambiguity",
					buttonCta: "Get Planning Agent",
					tagline: "Make Better Early Product Calls.",
					subtitle:
						"Use AI to identify unclear requirements, missing edge cases, and risky assumptions before they become expensive build work.",
					description:
						"A planning agent is useful when the product is still full of vague language, overlapping ideas, and hidden complexity. It helps teams tighten the thinking before implementation.",
					whatsInItForMe:
						"You reduce the odds of rework by making the fuzzy parts visible earlier.",
					target_audience:
						"Teams that need stronger product definition before moving into design and build.",
					pain_point:
						"Version-one plans often look coherent until engineering starts exposing the gaps.",
					fear: "You spend build time resolving problems that should have been surfaced at the requirements stage.",
					hope: "The team starts implementation with a narrower, more trustworthy definition of the product.",
					solution:
						"The planning agent turns ambiguity into explicit questions and tighter decisions.",
					highlights: [
						"Expose edge cases early",
						"Reduce version-one drift",
						"Improve product decisions",
						"Support cleaner handoff",
					],
					highlighted_words: ["Ambiguity", "Rework", "Decisions"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Agents", "AI", "Scope"],
	},
]);

export const mlsScraperPluginABTests = defineAbTests([
	{
		id: "ab-test-feedback-agent-v1",
		name: "Feedback Agent Copy Test",
		description:
			"Testing copy variants for an AI assistant that organizes post-launch feedback.",
		variants: [
			{
				name: "V1 - Tighten Feedback Triage",
				percentage: 50,
				copy: {
					cta: "Use the Feedback Agent",
					buttonCta: "Connect Agent",
					tagline: "Turn Feedback into a Usable Queue.",
					subtitle:
						"An AI assistant for organizing user notes, issue signals, and launch feedback into cleaner next-step priorities.",
					description:
						"After launch, feedback comes from too many directions. The feedback agent helps gather those signals, summarize patterns, and make the next sprint easier to reason about.",
					whatsInItForMe:
						"You get a cleaner signal from users without spending hours sorting through noise manually.",
					target_audience:
						"Founders and operators trying to keep post-launch learning organized.",
					pain_point:
						"Useful product feedback gets lost because the intake process is too messy and inconsistent.",
					fear: "The important feedback is buried under general commentary, duplicate reports, and reactive issue handling.",
					hope: "You can route user signals into clearer product priorities without drowning in admin.",
					solution:
						"The feedback agent helps structure, summarize, and prioritize what users are actually telling the team.",
					highlights: [
						"Organize user input",
						"Summarize patterns faster",
						"Support sprint planning",
						"Reduce manual triage",
					],
					highlighted_words: ["Feedback", "Triage", "Priorities"],
				},
			},
			{
				name: "V2 - Improve the Next Sprint",
				percentage: 50,
				copy: {
					cta: "Prioritize Better After Launch",
					buttonCta: "Start Agent",
					tagline: "Give Post-Launch Learning a System.",
					subtitle:
						"Use AI to help convert issue reports, user notes, and support signals into a tighter roadmap for version two.",
					description:
						"Teams rarely need more feedback. They need a better operating system for reading it and deciding what to do next. This agent helps with that translation step.",
					whatsInItForMe:
						"You create a clearer bridge between user behavior and product decisions.",
					target_audience:
						"Product teams that want more disciplined post-launch iteration.",
					pain_point:
						"Without a consistent triage pattern, launch feedback creates churn more than clarity.",
					fear: "You keep reacting to the loudest signal instead of the most important one.",
					hope: "The next roadmap reflects actual user learning instead of whoever spoke last.",
					solution:
						"The agent gives teams a more structured view of what changed, what matters, and what should move next.",
					highlights: [
						"Translate feedback into action",
						"Reduce noisy prioritization",
						"Support roadmap clarity",
						"Keep learning visible",
					],
					highlighted_words: ["Roadmap", "Learning", "Action"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Agents", "AI", "Feedback"],
	},
]);

export const jobBoardScraperPluginABTests = defineAbTests([
	{
		id: "ab-test-launch-ops-agent-v1",
		name: "Launch Ops Agent Copy Test",
		description:
			"Testing copy variants for an AI assistant that helps teams manage launch operations.",
		variants: [
			{
				name: "V1 - Support Launch Coordination",
				percentage: 50,
				copy: {
					cta: "Use the Launch Ops Agent",
					buttonCta: "Get Agent",
					tagline: "Keep the Launch Week Tight.",
					subtitle:
						"An AI assistant that helps coordinate tasks, summarize progress, and keep launch details from slipping through the cracks.",
					description:
						"Launches create dozens of small coordination tasks that are easy to miss. This agent helps teams keep the checklist, blockers, and daily updates easier to manage.",
					whatsInItForMe:
						"You spend less energy reconstructing status and more energy moving the launch forward.",
					target_audience:
						"Teams managing launch prep, release coordination, and immediate post-launch follow-through.",
					pain_point:
						"Operational details fragment across docs, chats, and memory right when the team needs more clarity.",
					fear: "Important launch tasks slip because everyone assumes someone else is tracking them.",
					hope: "The team moves through launch week with better visibility and fewer dropped details.",
					solution:
						"The launch ops agent keeps status, tasks, and blockers easier to summarize and coordinate.",
					highlights: [
						"Track launch details",
						"Summarize blockers quickly",
						"Reduce coordination drag",
						"Support daily momentum",
					],
					highlighted_words: ["Launch", "Coordination", "Momentum"],
				},
			},
			{
				name: "V2 - Reduce Release Chaos",
				percentage: 50,
				copy: {
					cta: "Reduce Launch Chaos",
					buttonCta: "Start Agent",
					tagline: "Give Release Work a Better Operating Rhythm.",
					subtitle:
						"Use AI to keep the launch checklist, open issues, and coordination layer easier to manage under pressure.",
					description:
						"Release work becomes messy when status is scattered and the team is context-switching. The launch ops agent helps stabilize the coordination layer.",
					whatsInItForMe:
						"You make launch week easier to operate without adding unnecessary process overhead.",
					target_audience:
						"Startup teams that need a lighter-weight operating system around release work.",
					pain_point:
						"The details around launch create drag because no one has time to keep everything aligned manually.",
					fear: "Small misses compound into avoidable launch friction and cleanup work.",
					hope: "The launch process feels controlled enough that the team can focus on the work itself.",
					solution:
						"The agent provides a clearer coordination layer around the release without pretending to replace real judgment.",
					highlights: [
						"Reduce release chaos",
						"Keep status visible",
						"Lower coordination overhead",
						"Support cleaner handoff",
					],
					highlighted_words: ["Release", "Status", "Control"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Agents", "AI", "Launch Ops"],
	},
]);
