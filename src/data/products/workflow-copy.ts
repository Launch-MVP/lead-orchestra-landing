import { defineAbTests } from "./copy";

export const zillowScrapingWorkflowABTests = defineAbTests([
	{
		id: "ab-test-mvp-scope-system-v1",
		name: "MVP Scope System Copy Test",
		description:
			"Testing copy variants for a reusable MVP scoping workflow product.",
		variants: [
			{
				name: "V1 - Scope Faster",
				percentage: 50,
				copy: {
					cta: "Scope Your MVP Faster",
					buttonCta: "Get the System",
					tagline: "Turn Product Chaos into a Launchable Plan.",
					subtitle:
						"A reusable scope-cutting system for founders who need the right version-one plan before they start building.",
					description:
						"Use a structured scoping workflow to cut loose ideas down into a tighter product plan, clearer priorities, and a more realistic launch path.",
					whatsInItForMe:
						"You stop guessing which features matter and start making tighter product decisions faster.",
					target_audience:
						"Founders and product teams still shaping the first real version of the product.",
					pain_point:
						"The MVP keeps expanding because there is no disciplined scoping system in place.",
					fear: "You waste budget building a bigger, blurrier version one than you actually need.",
					hope: "You get to a sharper product plan without long planning cycles or consulting sprawl.",
					solution:
						"This system gives you a repeatable framework for reducing scope and clarifying the launch path.",
					highlights: [
						"Reduce scope faster",
						"Clarify version-one priorities",
						"Make tradeoffs visible",
						"Create a cleaner launch plan",
					],
					highlighted_words: ["Scope", "Plan", "Launch"],
				},
			},
			{
				name: "V2 - Avoid Rebuilds",
				percentage: 50,
				copy: {
					cta: "Avoid the Wrong Version One",
					buttonCta: "Install Workflow",
					tagline: "Decide Better Before You Build More.",
					subtitle:
						"A decision workflow built to reduce expensive feature drift and avoid rebuilding the wrong product later.",
					description:
						"The fastest way to lose time is to build too much too early. This workflow helps teams pressure-test assumptions before they become costly implementation work.",
					whatsInItForMe:
						"You reduce wasted engineering effort by making the key product choices earlier and more clearly.",
					target_audience:
						"Startup teams that need stronger product judgment before committing engineering time.",
					pain_point:
						"Teams start building before the product shape is stable enough to justify the effort.",
					fear: "You end up paying twice for architecture and UX because version one was never scoped tightly.",
					hope: "You reach a launchable product shape that can actually survive first contact with users.",
					solution:
						"The workflow structures the questions and decisions that stop rebuilds before they start.",
					highlights: [
						"Reduce rebuild risk",
						"Pressure-test assumptions",
						"Make cleaner tradeoffs",
						"Protect build budget",
					],
					highlighted_words: ["Rebuild", "Tradeoffs", "Budget"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Workflows", "Strategy", "MVP", "Scoping"],
	},
]);

export const linkedinScrapingWorkflowABTests = defineAbTests([
	{
		id: "ab-test-beta-feedback-system-v1",
		name: "Beta Feedback System Copy Test",
		description:
			"Testing copy variants for a reusable beta user recruitment and feedback workflow.",
		variants: [
			{
				name: "V1 - Recruit Better Testers",
				percentage: 50,
				copy: {
					cta: "Recruit Better Beta Users",
					buttonCta: "Get the Workflow",
					tagline: "Find the Right Early Users Faster.",
					subtitle:
						"A reusable workflow for beta-user outreach, intake, and structured feedback collection.",
					description:
						"Launches stall when the team has no clear way to recruit testers and capture usable feedback. This workflow gives founders a cleaner beta loop.",
					whatsInItForMe:
						"You create a repeatable path from outreach to actionable product feedback.",
					target_audience:
						"Founders trying to validate quickly with early users instead of building in a vacuum.",
					pain_point:
						"Feedback collection is inconsistent, unstructured, and easy to ignore after launch pressure kicks in.",
					fear: "You ship without learning enough from the first users who actually touch the product.",
					hope: "You turn early conversations into specific product insight instead of vague opinions.",
					solution:
						"The workflow ties outreach, intake, and follow-up into one clearer feedback system.",
					highlights: [
						"Recruit testers faster",
						"Collect structured feedback",
						"Keep the loop organized",
						"Improve post-launch learning",
					],
					highlighted_words: ["Beta Users", "Feedback", "Validation"],
				},
			},
			{
				name: "V2 - Learn Faster After Launch",
				percentage: 50,
				copy: {
					cta: "Tighten Your Feedback Loop",
					buttonCta: "Start System",
					tagline: "Make Early User Input Actually Useful.",
					subtitle:
						"A launch workflow designed to turn scattered feedback into prioritized next steps.",
					description:
						"Collecting feedback is not enough. Teams need a clearer way to route what matters back into the roadmap without drowning in notes and opinions.",
					whatsInItForMe:
						"You shorten the distance between user feedback and product improvement.",
					target_audience:
						"Product teams and founders who want tighter iteration after the first release.",
					pain_point:
						"Useful feedback gets buried because there is no clear operating system around it.",
					fear: "You miss the signals that would have helped version two improve faster.",
					hope: "You build a launch process where early user input directly sharpens the roadmap.",
					solution:
						"The workflow creates a cleaner path from first user contact to concrete product action.",
					highlights: [
						"Reduce feedback chaos",
						"Prioritize with structure",
						"Improve iteration speed",
						"Connect insight to roadmap",
					],
					highlighted_words: ["Feedback Loop", "Roadmap", "Iteration"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Workflows", "Support", "Beta", "Feedback"],
	},
]);

export const multiSourceScrapingWorkflowABTests = defineAbTests([
	{
		id: "ab-test-launch-analytics-system-v1",
		name: "Launch Analytics System Copy Test",
		description:
			"Testing copy variants for a reusable launch analytics and reporting workflow.",
		variants: [
			{
				name: "V1 - Get Visibility Fast",
				percentage: 50,
				copy: {
					cta: "See What the Launch Is Doing",
					buttonCta: "Get Dashboard Workflow",
					tagline: "Launch with Numbers You Can Actually Use.",
					subtitle:
						"A reusable reporting workflow for founders who need a cleaner read on activation, usage, and early product traction.",
					description:
						"Launching without a usable analytics loop creates false confidence. This workflow gives teams a practical way to track what matters right away.",
					whatsInItForMe:
						"You stop relying on vague impressions and start reading launch performance with more clarity.",
					target_audience:
						"Founders and product teams that need a simple operating dashboard after release.",
					pain_point:
						"Launch metrics often end up fragmented across tools, tabs, and ad hoc screenshots.",
					fear: "You make product decisions on intuition because the launch data is too messy to trust.",
					hope: "You know which behaviors matter and where users are stalling after launch.",
					solution:
						"The workflow centralizes the early analytics loop into a cleaner operating view.",
					highlights: [
						"Track activation faster",
						"Centralize launch metrics",
						"Reduce reporting mess",
						"Improve early product judgment",
					],
					highlighted_words: ["Analytics", "Visibility", "Launch"],
				},
			},
			{
				name: "V2 - Improve Product Judgment",
				percentage: 50,
				copy: {
					cta: "Clean Up Your Launch Metrics",
					buttonCta: "Install Reporting Flow",
					tagline: "Stop Guessing What the Product Needs Next.",
					subtitle:
						"A reporting workflow that helps teams connect user behavior to product prioritization after launch.",
					description:
						"Teams frequently have analytics installed but not operationalized. This workflow helps turn events and dashboards into better product decisions.",
					whatsInItForMe:
						"You get a more reliable feedback system for deciding what to fix, improve, or ship next.",
					target_audience:
						"Startup teams trying to keep post-launch decisions grounded in actual usage.",
					pain_point:
						"The team has data, but not a practical system for reading and acting on it.",
					fear: "Roadmap choices drift because the numbers are not helping the team prioritize clearly.",
					hope: "Your analytics become an operating tool instead of a passive dashboard.",
					solution:
						"The workflow turns launch data into a cleaner decision-support system for the next build cycle.",
					highlights: [
						"Improve prioritization",
						"Turn data into decisions",
						"Support the next sprint",
						"Reduce dashboard sprawl",
					],
					highlighted_words: ["Prioritization", "Data", "Decisions"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Workflows", "Data", "Analytics", "Launch"],
	},
]);

export const buyerLeadNurtureWorkflowABTests = defineAbTests([
	{
		id: "ab-test-founder-update-flow-v1",
		name: "Founder Update Flow Copy Test",
		description:
			"Testing copy variants for a reusable stakeholder update and progress workflow.",
		variants: [
			{
				name: "V1 - Keep Stakeholders Aligned",
				percentage: 100,
				copy: {
					cta: "Streamline Founder Updates",
					buttonCta: "Get the Workflow",
					tagline: "Keep Product Progress Easy to See.",
					subtitle:
						"A lightweight operating workflow for weekly updates, launch progress, and stakeholder visibility.",
					whatsInItForMe:
						"You spend less time reconstructing status and more time moving the product forward.",
					target_audience:
						"Founders and product leads managing internal stakeholders.",
					pain_point:
						"Status updates become another source of drift when no repeatable reporting habit exists.",
					solution:
						"The workflow standardizes updates so progress stays visible without extra process overhead.",
					highlights: [
						"Standardize updates",
						"Reduce reporting overhead",
						"Keep stakeholders aligned",
					],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Workflows", "Support", "Founder Ops"],
	},
]);

export const motivatedSellerWorkflowABTests = defineAbTests([
	{
		id: "ab-test-launch-ops-flow-v1",
		name: "Launch Ops Flow Copy Test",
		description:
			"Testing copy variants for a reusable launch operations workflow.",
		variants: [
			{
				name: "V1 - Run Launch with Less Chaos",
				percentage: 100,
				copy: {
					cta: "Run a Cleaner Launch",
					buttonCta: "Get the Workflow",
					tagline: "Keep Launch Tasks from Fragmenting.",
					subtitle:
						"A practical workflow for launch checklists, handoff, and cross-functional coordination.",
					whatsInItForMe:
						"You get a simpler operational backbone for launch week and the immediate aftermath.",
					target_audience: "Founders and operators managing the first release.",
					pain_point:
						"Launch work spreads across docs, chats, and memory unless it is structured on purpose.",
					solution:
						"The workflow turns launch tasks and responsibilities into a repeatable operating rhythm.",
					highlights: [
						"Reduce launch chaos",
						"Coordinate handoff",
						"Keep critical tasks visible",
					],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Workflows", "Support", "Launch Ops"],
	},
]);

export const openHouseWorkflowABTests = defineAbTests([
	{
		id: "ab-test-post-launch-follow-up-flow-v1",
		name: "Post-Launch Follow-Up Flow Copy Test",
		description:
			"Testing copy variants for a post-launch follow-up and cleanup workflow.",
		variants: [
			{
				name: "V1 - Stabilize the First Week",
				percentage: 100,
				copy: {
					cta: "Stabilize Post-Launch Faster",
					buttonCta: "Install Workflow",
					tagline: "Handle the First Wave Without Losing Momentum.",
					subtitle:
						"A workflow for collecting launch issues, triaging fixes, and keeping the next sprint grounded in reality.",
					whatsInItForMe:
						"You get a clearer first-week system for what to fix now, what to defer, and what to learn from.",
					target_audience:
						"Teams that need a better rhythm for the first stretch after release.",
					pain_point:
						"Post-launch cleanup often becomes reactive and scattered as issues come in from multiple directions.",
					solution:
						"The workflow creates a tighter triage loop so the team can stabilize without losing focus.",
					highlights: [
						"Organize issue intake",
						"Prioritize fixes faster",
						"Support the next sprint",
					],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Workflows", "Support", "Post Launch"],
	},
]);
