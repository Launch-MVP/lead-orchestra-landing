import { defineAbTests } from "@/data/products/copy";

export const freeAeoContentCalendarABTest = defineAbTests([
	{
		id: "ab-test-aeo-calendar-v1",
		name: "Free Launch AEO Content Calendar Copy",
		description: "Copy for the Pilot Spring AEO content calendar.",
		variants: [
			{
				name: "V1 - Visibility Focus",
				percentage: 100,
				copy: {
					cta: "Get Visible When the MVP Launches",
					buttonCta: "Download Free Calendar",
					tagline: "Plan Launch Content for AI Search.",
					subtitle:
						"A 90-day content calendar designed to help Pilot Spring founders publish answer-first content that shows up in AI search.",
					whatsInItForMe:
						"You get a practical content plan that supports founder authority, product education, and AI-search visibility around the launch.",
					target_audience: "Founders, content marketers, and launch teams.",
					pain_point:
						"Most content calendars are generic and do not help founders create the answer-first content AI systems actually surface.",
					fear: "You launch the MVP and still stay invisible because the site never becomes a useful source in AI search.",
					hope: "You build a consistent content engine that strengthens the launch story and gets cited over time.",
					solution:
						"Our AEO-first content calendar gives founders a structured plan for publishing the questions, answers, and entities AI systems prioritize.",
					highlights: [
						"30/60/90 Day Plan",
						"Answer-First Topics",
						"Launch Authority System",
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
					cta: "Launch an AI-Ready Page",
					buttonCta: "Get the Template",
					tagline: "Launch Pages That AI Can Read.",
					subtitle:
						"A conversion-focused landing page template pre-configured with the schema and structure AI systems need to understand your Pilot Spring offer.",
					whatsInItForMe:
						"Save build time and skip the technical guesswork of structuring a launch page for both humans and AI systems.",
					target_audience: "Founders, developers, and growth teams.",
					pain_point:
						"Most launch pages look fine visually but are poorly structured for AI search, schema, and direct-answer extraction.",
					fear: "Your launch page goes live but stays invisible to the AI systems shaping how buyers now discover tools and services.",
					hope: "You ship a launch page that converts users and is technically ready to be cited in AI-generated answers.",
					solution:
						"Our template comes pre-loaded with FAQ schema, semantic tagging, and layouts built for answer-first product positioning.",
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
					cta: "Let Pilot Spring Build It",
					buttonCta: "Book Discovery Call",
					tagline: "Your Launch Surface, AI Optimized.",
					subtitle:
						"We design, write, and deploy a custom AEO landing page that positions your MVP offer as the answer.",
					whatsInItForMe:
						"Get a launch-ready, AI-optimized asset without rebuilding your site strategy, code, and copy internally.",
					target_audience: "Founders and Marketing Executives.",
					pain_point:
						"You know the launch surface matters, but your team lacks the time or specialized AEO execution skills to build it properly.",
					fear: "You keep delaying the landing page upgrade while competitors build clearer, more citeable surfaces around their offers.",
					hope: "You launch a flagship page that improves credibility, conversion, and AI-search visibility at the same time.",
					solution:
						"Our team handles the strategy, copy, design, and schema implementation needed to deliver a turnkey AEO launch asset.",
					highlights: [
						"Custom Design & Copy",
						"Full Technical AEO",
						"Launch-Ready Deployment",
					],
					highlighted_words: ["Turnkey", "Authority", "Expert"],
				},
			},
		],
		isActive: true,
		tags: ["AEO", "Service", "Agency"],
	},
])[0];
