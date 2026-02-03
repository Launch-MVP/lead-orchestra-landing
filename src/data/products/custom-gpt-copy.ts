import { defineAbTests } from "@/data/products/copy";

export const customBlogGptTemplateABTest = defineAbTests([
	{
		id: "ab-test-gpt-template-v1",
		name: "Blog GPT Template Copy",
		description: "Copy optimization for Self-Serve Blog GPT Template.",
		variants: [
			{
				name: "V1 - Framework Focus",
				percentage: 100,
				copy: {
					cta: "Start Writing Faster",
					buttonCta: "Get the Template",
					tagline: "Your Content System in a Box.",
					subtitle:
						"The exact frameworks, prompt chains, and output rules we use to generate high-ranking content. Pre-packaged for you.",
					whatsInItForMe:
						"Skip the years of trial and error. Get a proven, deterministic system for generating high-quality blog content immediately.",
					target_audience: "DIY Marketers and Content Creators.",
					pain_point:
						'Most "blogging prompts" produce generic, robotic trash that hurts your brand and rankings.',
					fear: "You waste hours tweaking prompts only to get mediocre results that you have to rewrite anyway.",
					hope: "You plug in a proven template and immediately start generating rough drafts that are 90% ready to publish.",
					solution:
						"This isn't just a prompt; it's a complete productized workflow with scoring rules, formatting specs, and QA checks built in.",
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
					cta: "Scale Your Unique Voice",
					buttonCta: "Get Custom Build",
					tagline: "AI That Sounds Like You.",
					subtitle:
						"We ingest your best content and brand guidelines to train a custom GPT that writes with your specific tone and style.",
					whatsInItForMe:
						"Finally scale your content production without sacrificing the unique voice that makes your brand special.",
					target_audience: "Established Brands and Thought Leaders.",
					pain_point:
						"You want to use AI, but every tool sounds generic and fails to capture your brand's nuance.",
					fear: "You dilute your brand equity by publishing generic, robotic content that sounds like everyone else.",
					hope: "Your audience can't tell the difference between your human-written posts and your AI-assisted ones.",
					solution:
						"We don't just prompt; we fine-tune. We build a custom knowledge base from your specific data so the AI knows your history, tone, and rules.",
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
					cta: "Automate End-to-End",
					buttonCta: "Build Content Engine",
					tagline: "From Trend to Indexing.",
					subtitle:
						"A complete, automated content infrastructure. We automate topic sourcing, drafting, and distribution workflows for scale.",
					whatsInItForMe:
						"Turn content marketing into a scalable, predictable machine that runs without your constant supervision.",
					target_audience: "Media Companies and High-Volume Publishers.",
					pain_point:
						"Managing a high-volume content calendar involves messy spreadsheets, missed deadlines, and constant coordination.",
					fear: "Your content machine breaks down the moment you or your editor steps away.",
					hope: "You have a fully automated assembly line where high-quality content flows from idea to published post automatically.",
					solution:
						"We build the entire infrastructure—connecting trend sources, AI generators, and your CMS—into a seamless, automated pipeline.",
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
