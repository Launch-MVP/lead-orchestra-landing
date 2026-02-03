import { defineAbTests } from "./copy";

export const salesScriptsMarketplaceABTests = defineAbTests([
	{
		id: "ab-test-sales-scripts-marketplace-v1",
		name: "Sales Scripts Marketplace Copy Test",
		description:
			"Testing copy variants (Passive Income vs. Community Impact) for Sales Scripts.",
		variants: [
			{
				name: "V1 - Passive Income",
				percentage: 50,
				copy: {
					cta: "Start Selling Scripts",
					buttonCta: "Apply to Sell",
					tagline: "Turn Your Sales Copy into Cash.",
					subtitle:
						"Monetize your proven cold email templates, calling scripts, and objection handlers by selling them on our marketplace.",
					description:
						"You've already written the perfect script. Now let it pay you forever. List your high-converting sales assets on the Lead Orchestra marketplace and earn recurring revenue every time another user downloads them.",
					whatsInItForMe:
						"You create a new stream of passive income from work you've already done, diversifying your revenue without extra effort.",
					target_audience: "Sales pros and copywriters with proven assets.",
					pain_point:
						"You treat your best scripts as one-time tools, leaving money on the table by not productizing your knowledge.",
					fear: "Your valuable IP sits in a Google Doc gathering dust while others are making money selling inferior templates.",
					hope: "You wake up to notification after notification of new sales, turning your expertise into a scalable digital product business.",
					solution:
						"Our marketplace handles the distribution and payments, letting you simply upload your assets and collect royalties.",
					highlights: [
						"Earn recurring royalties",
						"Monetize existing assets",
						"Reach thousands of buyers",
						"Zero technical setup",
					],
					highlighted_words: ["Cash", "Passive Income", "Royalties"],
				},
			},
			{
				name: "V2 - Community Authority",
				percentage: 50,
				copy: {
					cta: "Become a Sales Thought Leader",
					buttonCta: "Share Your Expertise",
					tagline: "Lead the Industry with Your Methods.",
					subtitle:
						"Establish yourself as a top authority by sharing your winning sales strategies with the Lead Orchestra community.",
					description:
						"The best way to build your personal brand is by helping others succeed. By listing your scripts, you position yourself as a go-to expert in your niche, opening doors for consulting and speaking opportunities.",
					whatsInItForMe:
						"You build an incredible reputation as a subject matter expert, attracting high-value clients and followers who trust your methods.",
					target_audience: "Consultants and coaches building a personal brand.",
					pain_point:
						"It's hard to stand out in a crowded market without tangible proof of your expertise.",
					fear: 'You remain "just another vendors" instead of becoming the requested expert that everyone wants to work with.',
					hope: "Your name becomes synonymous with success in your industry, and clients beg to work with you.",
					solution:
						"The marketplace gives you a platform to showcase your best work, proving your value to a massive audience of potential clients.",
					highlights: [
						"Build your personal brand",
						"Showcase your expertise",
						"Attract high-ticket clients",
						"Help others succeed",
					],
					highlighted_words: ["Authority", "Expert", "Brand"],
				},
			},
		],
		startDate: new Date("2024-01-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Monetization", "Sales Scripts"],
	},
]);

export const workflowsMarketplaceABTests = defineAbTests([
	{
		id: "ab-test-workflows-marketplace-v1",
		name: "Workflows Marketplace Copy Test",
		description:
			"Testing copy variants (Developer Revenue vs. Agency Scale) for Workflows.",
		variants: [
			{
				name: "V1 - Developer Revenue",
				percentage: 50,
				copy: {
					cta: "Sell Your Automations",
					buttonCta: "List Workflow",
					tagline: "Code Once. get Paid Forever.",
					subtitle:
						"Publish your custom scraping and automation workflows to the marketplace and earn from every install.",
					description:
						'Use your technical skills to build detailed scraping workflows, then sell them to non-technical users. It\'s the "App Store" for lead generation automation.',
					whatsInItForMe:
						"You turn your coding skills into a scalable product business, escaping the hourly billing trap.",
					target_audience: "Developers and automation engineers.",
					pain_point:
						"Trading time for money as a freelancer limits your income and burns you out.",
					fear: "You're stuck debugging client projects for an hourly rate while product owners make the real upside.",
					hope: "You build a portfolio of digital assets that generate revenue while you sleep, giving you true financial freedom.",
					solution:
						"We provide the platform to sell your code as a product, handling all the billing and delivery for you.",
					highlights: [
						"Sell your code as a product",
						"No customer support headaches",
						"Global distribution",
						"High profit margins",
					],
					highlighted_words: ["Paid Forever", "Product", "Scalable"],
				},
			},
			{
				name: "V2 - Agency Scale",
				percentage: 50,
				copy: {
					cta: "Productize Your Agency",
					buttonCta: "Start Selling",
					tagline: "Stop Selling Services. Start Selling Systems.",
					subtitle:
						"Package your agency's internal processes into sellable workflows for other businesses.",
					description:
						'Your agency has already solved these problems. Now package those solutions and sell them to clients who can\'t afford your full service. Monetize the "down market" without adding operational drag.',
					whatsInItForMe:
						"You unlock a new revenue tier, capturing value from smaller leads without distracting your team from high-ticket clients.",
					target_audience: "Agency owners and service providers.",
					pain_point:
						"You leave money on the table every time you turn down a small prospect, but taking them on would crush your margins.",
					fear: "Your agency hits a revenue ceiling because you simply can't hire bright people fast enough.",
					hope: 'You have a "product downsell" that captures revenue from every lead, boosting your bottom line effortlessly.',
					solution:
						'The marketplace allows you to sell your "secret sauce" as a self-serve product, scaling your revenue without scaling your headcount.',
					highlights: [
						"Monetize smaller leads",
						"High-margin product revenue",
						"Zero fulfillment cost",
						"Build brand authority",
					],
					highlighted_words: ["Systems", "Productize", "Scale"],
				},
			},
		],
		startDate: new Date("2024-01-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Monetization", "Workflows"],
	},
]);

export const mcpPluginsMarketplaceABTests = defineAbTests([
	{
		id: "ab-test-mcp-plugins-marketplace-v1",
		name: "MCP Plugins Marketplace Copy Test",
		description:
			"Testing copy variants (Innovation vs. Distribution) for MCP Plugins.",
		variants: [
			{
				name: "V1 - Innovation & Revenue",
				percentage: 50,
				copy: {
					cta: "Monetize Your Tools",
					buttonCta: "Submit Plugin",
					tagline: "The App Store for AI Agents.",
					subtitle:
						"Build and sell MCP plugins that power the next generation of AI agents and scraping workflows.",
					description:
						"The demand for specialized AI tools is exploding. Build the connectors, scrapers, and data tools that feed the AI revolution, and get paid for every user.",
					whatsInItForMe:
						'You position yourself at the forefront of the AI wave, building the "picks and shovels" for the gold rush.',
					target_audience: "AI developers and tool builders.",
					pain_point:
						"Building cool AI tools is fun, but distribution and monetization are hard.",
					fear: "You build incredible technology that nobody ever finds or pays for.",
					hope: "Your tool becomes the standard infrastructure for thousands of AI agents, generating massive adoption and revenue.",
					solution:
						"We provide the distribution network to thousands of active users who are hungry for new tools to power their workflows.",
					highlights: [
						"Access a hungry audience",
						"Simple monetization",
						"Standardized protocol (MCP)",
						"Rapid adoption",
					],
					highlighted_words: ["Revenue", "AI Agents", "Innovation"],
				},
			},
			{
				name: "V2 - Distribution Network",
				percentage: 50,
				copy: {
					cta: "Reach Thousands of Users",
					buttonCta: "List Your Tool",
					tagline: "Instant Distribution for Your Code.",
					subtitle:
						"Get your data tools in front of thousands of high-value business users instantly.",
					description:
						"Don't build in a vacuum. Launch your plugin on the Lead Orchestra marketplace and get immediate access to a user base of serious investors and agencies willing to pay for tools that work.",
					whatsInItForMe:
						"You solve the hardest part of software—finding customers—by plugging directly into our existing ecosystem.",
					target_audience: "SaaS founders and indie hackers.",
					pain_point:
						"Marketing your tool is expensive and slow, and customer acquisition costs are eating all your profit.",
					fear: "You run out of runway marketing a great product that just needs an audience to take off.",
					hope: "You launch to immediate sales and feedback, validating your product and funding your roadmap on day one.",
					solution:
						"Our marketplace handles the audience and trust, so you can focus on building the best possible tool.",
					highlights: [
						"Instant customer base",
						"Zero marketing cost",
						"Feedback from power users",
						"Trusted platform",
					],
					highlighted_words: ["Distribution", "Users", "Instant"],
				},
			},
		],
		startDate: new Date("2024-01-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Monetization", "MCP Plugins"],
	},
]);
