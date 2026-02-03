import { defineAbTests } from "@/data/products/copy";

export const freeAeoContentCalendarABTest = defineAbTests([
	{
		id: "ab-test-aeo-calendar-v1",
		name: "Free AEO Content Calendar Copy",
		description: "SEO copy for Free AEO Content Calendar.",
		variants: [
			{
				name: "V1 - Visibility Focus",
				percentage: 100,
				copy: {
					cta: "Get Visible in AI Search",
					buttonCta: "Download Free Calendar",
					tagline: "Plan for the AI Era.",
					subtitle:
						"A 90-day content calendar designed to help you rank in ChatGPT, Perplexity, and Google AI Overviews.",
					whatsInItForMe:
						"Stop writing content that gets ignored by AI. This calendar gives you the exact answer-first topics you need to get cited.",
					target_audience: "Content Marketers and SEOs.",
					pain_point:
						"Traditional content calendars focus on keywords, but AI models look for answers and entities.",
					fear: "You pour hours into content that AI engines—and your future customers—will never see.",
					hope: "You have a strategic roadmap to becoming a cited authority in the generative AI landscape.",
					solution:
						"Our AEO-first content calendar provides a structured plan to cover foundational topics, entities, and answers that AI models prioritize.",
					highlights: [
						"30/60/90 Day Plan",
						"Answer-First Topics",
						"Internal Link Strategy",
					],
					highlighted_words: ["AI Search", "Cited", "Roadmap"],
				},
			},
		],
		isActive: true,
		tags: ["AEO", "Free Resource", "Calendar"],
	},
])[0];

export const aeoLandingPageTemplateABTest = defineAbTests([
	{
		id: "ab-test-aeo-template-v1",
		name: "AEO Landing Page Template Copy",
		description: "Copy optimization for AEO Landing Page Template.",
		variants: [
			{
				name: "V1 - Technical Optimization",
				percentage: 100,
				copy: {
					cta: "Deploy AI-Ready Pages",
					buttonCta: "Get the Template",
					tagline: "Optimized for Machines & Humans.",
					subtitle:
						"A conversion-focused landing page template pre-configured with the schema and structure AI models love.",
					whatsInItForMe:
						"Save dozens of development hours. We’ve already built the semantic HTML and JSON-LD schema you need to be understood by AI.",
					target_audience: "Developers and Growth Teams.",
					pain_point:
						"Building structured data and semantic HTML from scratch is technical, tedious, and easy to mess up.",
					fear: "Your beautifully designed pages are technically invisible to the AI crawlers deciding the future of search.",
					hope: "You launch perfectly optimized pages that rank in standard search AND get picked up by AI answers.",
					solution:
						"Our template comes pre-loaded with comprehensive FAQ schema, semantic tagging, and answer-optimized layouts.",
					highlights: [
						"Pre-built JSON-LD Schema",
						"Semantic HTML5",
						"Next.js & React Ready",
					],
					highlighted_words: ["Schema", "Semantic", "Optimization"],
				},
			},
		],
		isActive: true,
		tags: ["AEO", "Template", "Dev"],
	},
])[0];

export const aeoLandingPageDfyServiceABTest = defineAbTests([
	{
		id: "ab-test-aeo-dfy-v1",
		name: "AEO DFY Service Copy",
		description: "Copy optimization for AEO Done-For-You Service.",
		variants: [
			{
				name: "V1 - Expert Implementation",
				percentage: 100,
				copy: {
					cta: "Let Us Build It",
					buttonCta: "Book Discovery Call",
					tagline: "Your Brand, AI Optimized.",
					subtitle:
						"We design, write, and deploy a custom AEO landing page that positions your brand as the answer.",
					whatsInItForMe:
						"Get a world-class, AI-optimized asset without lifting a finger. We handle strategy, code, and copy.",
					target_audience: "Founders and Marketing Executives.",
					pain_point:
						"You know you need an AI strategy, but your team lacks the specialized technical SEO and AEO writing skills.",
					fear: "You continually delay your AI strategy while competitors cement their position as the industry authority.",
					hope: "You launch a flagship AEO page that drives traffic and proves your thought leadership to both humans and machines.",
					solution:
						"Our expert team handles everything—from entity analysis to schema code—delivering a turnkey AEO asset for your brand.",
					highlights: [
						"Custom Design & Copy",
						"Full Technical AEO",
						"Turnkey Deployment",
					],
					highlighted_words: ["Turnkey", "Authority", "Expert"],
				},
			},
		],
		isActive: true,
		tags: ["AEO", "Service", "Agency"],
	},
])[0];
