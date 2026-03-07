import { defineAbTests } from "./copy";

export const salesScriptsMarketplaceABTests = defineAbTests([
	{
		id: "ab-test-launch-copy-marketplace-v1",
		name: "Launch Copy Marketplace Copy Test",
		description:
			"Testing copy variants for reusable launch messaging and conversion assets.",
		variants: [
			{
				name: "V1 - Productize Your Copy",
				percentage: 50,
				copy: {
					cta: "Sell Your Launch Copy",
					buttonCta: "Submit Copy Pack",
					tagline: "Turn Proven Messaging into a Product.",
					subtitle:
						"Package landing page copy, email sequences, and founder outreach scripts into reusable launch assets.",
					description:
						"Founders need sharp launch messaging fast. Publish the copy systems you already use so other teams can start with something stronger than a blank page.",
					whatsInItForMe:
						"You turn your best messaging work into repeatable revenue without adding client delivery overhead.",
					target_audience:
						"Copywriters, growth consultants, and founders with proven launch messaging.",
					pain_point:
						"Great copy lives in docs and old projects instead of becoming an asset you can sell repeatedly.",
					fear: "Your best messaging never compounds because it stays trapped in one-off engagements.",
					hope: "You build a catalog of launch assets teams can buy whenever they need faster momentum.",
					solution:
						"The marketplace makes it easy to package, list, and distribute proven messaging systems.",
					highlights: [
						"Package proven messaging",
						"Create repeatable revenue",
						"Help founders launch faster",
						"Keep delivery lightweight",
					],
					highlighted_words: ["Messaging", "Product", "Revenue"],
				},
			},
			{
				name: "V2 - Build Category Authority",
				percentage: 50,
				copy: {
					cta: "Share Your Launch Framework",
					buttonCta: "List Copy System",
					tagline: "Be Known for the Messaging That Ships.",
					subtitle:
						"Turn your best launch messaging into a visible proof-of-work asset founders can actually use.",
					description:
						"Publishing your best launch copy is an easier signal of expertise than another thread, portfolio site, or opinion post. Let the work itself do the selling.",
					whatsInItForMe:
						"You build authority through assets that show how you think, not just how you talk.",
					target_audience:
						"Consultants and operators building a reputation around launch and conversion work.",
					pain_point:
						"It is hard to prove messaging expertise when most of the work sits inside client docs and private projects.",
					fear: "You stay hard to differentiate because your best thinking is never productized.",
					hope: "Your launch systems become the thing founders reference when they need better messaging.",
					solution:
						"Listing your frameworks creates a public, reusable asset that compounds authority and reach.",
					highlights: [
						"Show your thinking",
						"Build visible proof of work",
						"Reach new founders",
						"Grow authority through assets",
					],
					highlighted_words: ["Authority", "Framework", "Assets"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Monetization", "Launch Copy"],
	},
]);

export const workflowsMarketplaceABTests = defineAbTests([
	{
		id: "ab-test-delivery-systems-marketplace-v1",
		name: "Delivery Systems Marketplace Copy Test",
		description:
			"Testing copy variants for reusable launch workflows, SOPs, and delivery systems.",
		variants: [
			{
				name: "V1 - Productize Your Process",
				percentage: 50,
				copy: {
					cta: "Sell Your Delivery System",
					buttonCta: "List Workflow",
					tagline: "Turn Internal Process into Product Revenue.",
					subtitle:
						"Package onboarding flows, launch checklists, and delivery SOPs into reusable systems other teams can adopt.",
					description:
						"Most agencies and product teams already have a repeatable launch process. This is how you turn that internal operating logic into something useful and sellable.",
					whatsInItForMe:
						"You create a new revenue stream from work your team already refined through delivery.",
					target_audience:
						"Operators, agencies, and startup teams with proven delivery systems.",
					pain_point:
						"Your best processes save time internally but never become assets that compound.",
					fear: "You keep selling hours when your real leverage is the system behind the hours.",
					hope: "Your internal workflow becomes a product that funds itself repeatedly.",
					solution:
						"List the process, package the templates, and let other teams buy the structure.",
					highlights: [
						"Package internal process",
						"Create repeatable product revenue",
						"Help teams launch faster",
						"Reduce custom delivery overhead",
					],
					highlighted_words: ["Process", "Systems", "Revenue"],
				},
			},
			{
				name: "V2 - Capture Down-Market Demand",
				percentage: 50,
				copy: {
					cta: "Productize Your Delivery",
					buttonCta: "Start Selling",
					tagline: "Sell Systems to Teams Not Ready for Full Service.",
					subtitle:
						"Turn the playbooks behind your work into lower-friction offers for founders who need structure before they need your full engagement.",
					description:
						"Some buyers are not ready for a workshop or a build. They still need a better process. Productized delivery systems let you serve them without taking on extra service load.",
					whatsInItForMe:
						"You monetize demand that would otherwise leave without buying anything.",
					target_audience:
						"Service businesses and advisors that already have strong internal launch workflows.",
					pain_point:
						"You lose smaller opportunities because the full-service engagement is too expensive or too early.",
					fear: "Good-fit buyers leave empty handed because your only offer is the expensive one.",
					hope: "You capture more of the demand curve with products that scale better than services.",
					solution:
						"Package the workflow as a self-serve offer and keep your service business focused on the higher-leverage work.",
					highlights: [
						"Capture smaller buyers",
						"Add scalable revenue",
						"Protect service bandwidth",
						"Extend your offer ladder",
					],
					highlighted_words: ["Productize", "Scale", "Offer Ladder"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Monetization", "Delivery Systems"],
	},
]);

export const mcpPluginsMarketplaceABTests = defineAbTests([
	{
		id: "ab-test-ai-tools-marketplace-v1",
		name: "AI Tools Marketplace Copy Test",
		description:
			"Testing copy variants for reusable AI tools, prompts, and productized launch helpers.",
		variants: [
			{
				name: "V1 - Launch Tooling",
				percentage: 50,
				copy: {
					cta: "Sell Your Launch Tooling",
					buttonCta: "Submit Tool",
					tagline: "Package the Small Tools Teams Keep Reusing.",
					subtitle:
						"List prompts, internal generators, AI helpers, and validation tools that make launching easier.",
					description:
						"Teams repeatedly build the same small utilities around scope, copy, QA, analytics, and AI flows. Productize those helpers instead of recreating them in every engagement.",
					whatsInItForMe:
						"You turn practical launch tooling into a product catalog that keeps selling.",
					target_audience:
						"AI engineers, product teams, and consultants building reusable internal tools.",
					pain_point:
						"Useful launch helpers stay trapped inside one workspace instead of becoming products.",
					fear: "You keep rebuilding the same tool for clients without capturing the long-term upside.",
					hope: "Your internal launch tools become a compact product portfolio with clear demand.",
					solution:
						"List the tool once, package the docs, and let the marketplace handle discovery.",
					highlights: [
						"List reusable AI helpers",
						"Turn internal tools into products",
						"Reach founder teams faster",
						"Build a tighter offer catalog",
					],
					highlighted_words: ["Tooling", "Products", "AI"],
				},
			},
			{
				name: "V2 - Distribution and Reach",
				percentage: 50,
				copy: {
					cta: "Reach More Founder Teams",
					buttonCta: "List Your Tool",
					tagline: "Put Useful Launch Tools in Front of Buyers Faster.",
					subtitle:
						"Use the marketplace as a distribution channel for compact tools founders can adopt without a custom build.",
					description:
						"Distribution is usually harder than building the tool. Listing practical launch tooling gives it a home where teams already expect to buy operational leverage.",
					whatsInItForMe:
						"You spend less time trying to invent distribution from scratch for every small product.",
					target_audience:
						"Indie builders and productized-service operators with useful launch tooling.",
					pain_point:
						"Small products die because distribution takes more effort than building them.",
					fear: "Your best niche tools never reach the teams that would pay for them.",
					hope: "You find faster traction by meeting buyers where they already browse for leverage.",
					solution:
						"The marketplace gives your tools a clearer shelf, audience, and path to discovery.",
					highlights: [
						"Clearer distribution",
						"Faster buyer discovery",
						"Useful niche products",
						"Lower go-to-market friction",
					],
					highlighted_words: ["Distribution", "Reach", "Traction"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Monetization", "Launch Tooling"],
	},
]);
