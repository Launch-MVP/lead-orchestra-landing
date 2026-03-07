import { defineAbTests } from "@/data/products/copy";

export const customBlogGptTemplateABTest = defineAbTests([
	{
		id: "ab-test-gpt-template-v1",
		name: "Launch Content GPT Template Copy",
		description:
			"Copy optimization for the self-serve launch content GPT template.",
		variants: [
			{
				name: "V1 - Framework Focus",
				percentage: 100,
				copy: {
					cta: "Ship Launch Content Faster",
					buttonCta: "Get the Template",
					tagline: "Your Launch Content System in a Box.",
					subtitle:
						"The exact frameworks, prompt chains, and output rules we use to generate answer-first content for founder-led launches.",
					whatsInItForMe:
						"Skip the trial and error and use a proven system for generating drafts that support launch education, authority, and AI-search visibility.",
					target_audience: "Founders, DIY marketers, and content operators.",
					pain_point:
						'Most "blogging prompts" produce generic, robotic output that weakens the launch story instead of strengthening it.',
					fear: "You waste hours tweaking prompts and still publish content that sounds generic and misses the offer.",
					hope: "You plug in a proven template and start generating rough drafts that are much closer to publishable on day one.",
					solution:
						"This is not just a prompt. It is a productized workflow with scoring rules, formatting specs, internal-link guidance, and QA built in.",
					highlights: [
						"Proven Prompt Chains",
						"Output Scoring System",
						"Internal Link Rules",
					],
					highlighted_words: ["System", "Proven", "Workflow"],
				},
			},
		],
		isActive: true,
		tags: ["GPT", "Template", "DIY"],
	},
])[0];

export const customBlogGptStandardABTest = defineAbTests([
	{
		id: "ab-test-gpt-standard-v1",
		name: "Blog GPT Standard Build Copy",
		description: "Copy optimization for Custom Blog GPT Standard Build.",
		variants: [
			{
				name: "V1 - Brand Voice Match",
				percentage: 100,
				copy: {
					cta: "Scale Your Founder Voice",
					buttonCta: "Get Custom Build",
					tagline: "Launch Content That Sounds Like You.",
					subtitle:
						"We ingest your best content, brand docs, and launch offers to build a custom GPT that writes in your specific voice and structure.",
					whatsInItForMe:
						"Scale launch-content production without sacrificing the founder voice, offer nuance, and brand language that make the product credible.",
					target_audience: "Founders, brands, and thought-leader teams.",
					pain_point:
						"You want the leverage of AI content, but generic systems miss your offer, your voice, and your actual launch priorities.",
					fear: "You dilute the brand by publishing AI content that sounds polished but disconnected from the product and offer.",
					hope: "Your audience sees consistent founder-quality content that reinforces the launch instead of diluting it.",
					solution:
						"We do not just hand over prompts. We configure a custom knowledge base and writing system that understands your history, tone, offer, and rules.",
					highlights: [
						"Custom Voice Training",
						"Brand Document Ingestion",
						"10-Day Turnaround",
					],
					highlighted_words: ["Voice", "Custom", "Nuance"],
				},
			},
		],
		isActive: true,
		tags: ["GPT", "Service", "Standard"],
	},
])[0];

export const customBlogGptEngineABTest = defineAbTests([
	{
		id: "ab-test-gpt-engine-v1",
		name: "Blog GPT Engine Copy",
		description: "Copy optimization for Blog GPT Engine Infrastructure.",
		variants: [
			{
				name: "V1 - Automated Pipeline",
				percentage: 100,
				copy: {
					cta: "Automate the Content Engine",
					buttonCta: "Build Content Engine",
					tagline: "From Signal to Published Authority.",
					subtitle:
						"A complete automated content infrastructure for sourcing topics, drafting assets, and moving launch content through distribution and indexing.",
					whatsInItForMe:
						"Turn launch-content production into a scalable, predictable system that keeps shipping without constant manual orchestration.",
					target_audience: "Founder-led brands and high-output content teams.",
					pain_point:
						"Managing a high-volume content calendar with launch priorities, approvals, and indexing steps becomes operationally messy fast.",
					fear: "The content machine falls apart the moment the founder or editor stops manually pushing it forward.",
					hope: "You have a system where launch-relevant content moves from idea to published asset with much less coordination drag.",
					solution:
						"We build the infrastructure that connects topic sources, AI drafting, approvals, and publishing into one durable pipeline.",
					highlights: [
						"Automated Topic Sourcing",
						"End-to-End Pipeline",
						"Scale to 20+ Posts/Mo",
					],
					highlighted_words: ["Pipeline", "Automate", "End-to-End"],
				},
			},
		],
		isActive: true,
		tags: ["GPT", "Engine", "Automation"],
	},
])[0];
