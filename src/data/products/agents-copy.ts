import { defineAbTests } from "./copy";

export const realtorMcpPluginABTests = defineAbTests([
	{
		id: "ab-test-realtor-mcp-v1",
		name: "Realtor.com MCP Plugin Copy Test",
		description:
			"Testing copy variants (Speed vs. Data Depth) for the Realtor.com MCP Plugin.",
		variants: [
			{
				name: "V1 - Speed & Efficiency",
				percentage: 50,
				copy: {
					cta: "Start Scraping Realtor.com",
					buttonCta: "Get Plugin",
					tagline: "Extract Realtor.com Data in Seconds.",
					subtitle:
						"The fastest, most reliable way to scrape property details, agent contacts, and listings from Realtor.com.",
					description:
						"Stop wasting hours manually copying data. This MCP plugin connects directly to your Lead Orchestra workflow to extract thousands of listings automatically. Get clean, normalized data instantly.",
					whatsInItForMe:
						"You save hours of manual work and get instant access to live market data, allowing you to move faster than your competition.",
					target_audience:
						"Investors and agents who need rapid access to property data.",
					pain_point:
						"Manually copying property details is slow, error-prone, and impossible to scale.",
					fear: "While you copy one listing, your competitor has already analyzed the entire neighborhood.",
					hope: "Imagine having a live feed of every new listing in your target market, automatically enriched and ready for outreach.",
					solution:
						"This plugin automates the entire extraction process, giving you a structured database of properties in minutes.",
					highlights: [
						"Scrape 1000+ listings/hour",
						"Extract agent contact info",
						"Automatic LSF normalization",
						"Anti-blocking technology",
					],
					highlighted_words: ["Fastest", "Reliable", "Seconds"],
				},
			},
			{
				name: "V2 - Data Depth",
				percentage: 50,
				copy: {
					cta: "Unlock Deep Property Insights",
					buttonCta: "Get Data Access",
					tagline: "The Complete Realtor.com Data Engine.",
					subtitle:
						"Extract comprehensive property data including tax history, owner details, and agent connect info.",
					description:
						"Don't settle for basic listing info. This plugin digs deep to retrieve full property history, tax records, and direct agent contact details, giving you the complete picture of every deal.",
					whatsInItForMe:
						"You get a competitive edge with deeper data that reveals the true potential of every property, helping you make smarter investment decisions.",
					target_audience:
						"Serious investors who need granular data analysis to find hidden gems.",
					pain_point:
						"Basic scrapers miss critical details like tax history and owner info, leading to bad investment decisions.",
					fear: "Making an offer without the full story is a recipe for losing money on a bad deal.",
					hope: "You can analyze deals with 100% confidence, knowing you have every single data point at your fingertips.",
					solution:
						"Our advanced extraction engine pulls every available data point, ensuring you have total clarity on every property.",
					highlights: [
						"Full tax & price history",
						"Owner & agent details",
						"Property characteristics",
						"Schools & neighborhood data",
					],
					highlighted_words: ["Comprehensive", "Deep", "Complete"],
				},
			},
		],
		startDate: new Date("2024-01-01T00:00:00Z"),
		isActive: true,
		tags: ["MCP", "Scraping", "Realtor.com", "Real Estate"],
	},
]);

export const mlsScraperPluginABTests = defineAbTests([
	{
		id: "ab-test-mls-scraper-v1",
		name: "MLS Scraper Plugin Copy Test",
		description:
			"Testing copy variants (Access vs. Automation) for the MLS Scraper Plugin.",
		variants: [
			{
				name: "V1 - Direct Access",
				percentage: 50,
				copy: {
					cta: "Access MLS Data Directly",
					buttonCta: "Connect MLS",
					tagline: "Direct MLS Data. No License Required.",
					subtitle:
						"Access unified MLS data streams through a simple, powerful MCP plugin interface.",
					description:
						"Get direct access to MLS listings across multiple regions without the hassle of individual feeds. We normalize everything into one standard format for easy analysis and export.",
					whatsInItForMe:
						"You bypass the gatekeepers and get direct access to the most accurate, real-time property data available.",
					target_audience:
						"Proptech developers and investors building data-heavy applications.",
					pain_point:
						"Getting MLS access is expensive, legally complex, and technically difficult to integrate.",
					fear: "Building your business on delayed, third-party data means you're always a step behind the market.",
					hope: "You have a direct line to the source of truth, giving your application or investment strategy an unfair advantage.",
					solution:
						"Our plugin bridges the gap, providing a unified, developer-friendly interface to accessing standardized MLS data.",
					highlights: [
						"Unified MLS schema",
						"Real-time listing updates",
						"Standardized status codes",
						"Developer-friendly API",
					],
					highlighted_words: ["Direct", "Unified", "Real-time"],
				},
			},
			{
				name: "V2 - Automation Power",
				percentage: 50,
				copy: {
					cta: "Automate Your Market Analysis",
					buttonCta: "Start Automating",
					tagline: "Your 24/7 Market Watchdog.",
					subtitle:
						"Automatically monitor MLS feeds for new listings, price drops, and status changes.",
					description:
						"Turn MLS data into action. This plugin continuously monitors the market and triggers your workflows the moment a property matches your criteria.",
					whatsInItForMe:
						"You stop searching for deals and start letting the deals find you. Be the first to know about every price drop and new listing.",
					target_audience:
						"Investors who want to automate their deal sourcing.",
					pain_point:
						"Manually refreshing searches means you miss the best deals that sell in hours.",
					fear: "While you sleep, the perfect deal hits the market and is sold before you even wake up.",
					hope: "Your system catches every opportunity instantly, putting you ahead of every other buyer in the market.",
					solution:
						"This automation engine watches the MLS 24/7, filtering and alerting you only when a property meets your exact buy box.",
					highlights: [
						"Instant new listing alerts",
						"Price drop monitoring",
						'Custom "Buy Box" filters',
						"Auto-export to CRM",
					],
					highlighted_words: ["Automate", "Monitor", "Instant"],
				},
			},
		],
		startDate: new Date("2024-01-01T00:00:00Z"),
		isActive: true,
		tags: ["MCP", "Scraping", "MLS", "Data"],
	},
]);

export const jobBoardScraperPluginABTests = defineAbTests([
	{
		id: "ab-test-job-board-scraper-v1",
		name: "Job Board Scraper Plugin Copy Test",
		description:
			"Testing copy variants (Hiring Signals vs. Efficiency) for the Job Board Scraper.",
		variants: [
			{
				name: "V1 - Hiring Signals",
				percentage: 50,
				copy: {
					cta: "Find Growing Companies",
					buttonCta: "Get Hiring Data",
					tagline: "Spot Growth Before Competitors.",
					subtitle:
						"Use job postings as a leading indicator to identify companies that are funded and growing.",
					description:
						"Hiring is the strongest signal of growth. This scraper monitors job boards to find companies hiring for key roles, giving you a list of high-intent prospects before they hit the radar of other sales teams.",
					whatsInItForMe:
						"You get a list of prospects who definitely have budget and valid needs, increasing your sales conversion rates dramatically.",
					target_audience:
						"B2B sales teams and agencies looking for high-intent leads.",
					pain_point:
						"Cold outreach to stagnant companies is a waste of time. You need to know who has money to spend right now.",
					fear: "You're pitching to companies that are firing, not hiring, wasting your limited sales bandwidth.",
					hope: "Every lead you call is in growth mode, with an approved budget and an urgent problem to solve.",
					solution:
						"Our scraper identifies these high-growth companies by analyzing their hiring patterns, delivering you a list of qualified, budget-ready prospects.",
					highlights: [
						"Identify localized growth",
						"Track specific roles",
						"Estimate team budgets",
						"Find decision makers",
					],
					highlighted_words: ["Growth", "Funded", "High-Intent"],
				},
			},
			{
				name: "V2 - Recruitment Efficiency",
				percentage: 50,
				copy: {
					cta: "Fill Roles Faster",
					buttonCta: "Start Scraping",
					tagline: "Automate Candidate Sourcing.",
					subtitle:
						"Aggregate job postings and requirements to build better candidate profiles and market maps.",
					description:
						"For recruiters and staffing agencies: scrape job descriptions across the web to understand market demand, salary ranges, and required skills. Build a comprehensive map of the talent market.",
					whatsInItForMe:
						"You become the market expert, armed with real-time data on who is hiring, for how much, and for what skills.",
					target_audience: "Recruiters and staffing agencies.",
					pain_point:
						"Manually researching client requirements and competitor open roles is slow and keeps you from placing candidates.",
					fear: "You lose clients because you don't understand the current salary benchmarks or talent availability.",
					hope: "You allow data to drive your placement strategy, impressing clients with your deep market knowledge.",
					solution:
						"This tool automates the market research, giving you a live view of the entire employment landscape in your niche.",
					highlights: [
						"Analyze salary trends",
						"Map skills demand",
						"Monitor competitor hiring",
						"Batch export to ATS",
					],
					highlighted_words: ["Automate", "Market Map", "Sourcing"],
				},
			},
		],
		startDate: new Date("2024-01-01T00:00:00Z"),
		isActive: true,
		tags: ["MCP", "Scraping", "Jobs", "B2B"],
	},
]);
