import { defineAbTests } from "./copy";

export const AIConversationCreditsABTest = defineAbTests([
	{
		id: "ab-test-ai-credits-v1",
		name: "Lead Credits Copy",
		description: "Copy optimization for Lead Credits (AI usage).",
		variants: [
			{
				name: "V1 - Operational Efficiency",
				percentage: 100,
				copy: {
					cta: "Top Up Your Credits",
					buttonCta: "Get Credits",
					tagline: "Fuel Your Data Pipeline.",
					subtitle:
						"The fuel for your lead scraping engine. Scrape, enrich, and export without interruption.",
					whatsInItForMe:
						"Ensure your lead generation workflows never stop running. Keep your pipeline full by maintaining a healthy credit balance.",
					target_audience: "Heavy users of scraping and enrichment workflows.",
					pain_point:
						"Running out of credits mid-scrape stops your business processes cold, costing you time and momentum.",
					fear: "Your automated workflows break because of a zero balance, and you miss critical lead data.",
					hope: "Your system runs on autopilot, consistently feeding your CRM with fresh data day and night.",
					solution:
						"Lead Credits are the universal currency for all data operations on our platform—flexible, non-expiring, and essential for scale.",
					highlights: [
						"Power all scrapers",
						"Enrichment compatible",
						"Never expire",
						"Volume discounts",
					],
					highlighted_words: ["Fuel", "Pipeline", "Credits"],
				},
			},
		],
		isActive: true,
		tags: ["Credits", "Automation", "Infrastructure"],
	},
])[0];
