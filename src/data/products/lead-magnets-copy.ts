import { defineAbTests } from "./copy";

export const ossScraperStarterPackABTest = defineAbTests([
	{
		id: "ab-test-oss-starter-pack",
		name: "OSS Scraper Starter Pack Messaging",
		description:
			'Testing developer-focused messaging: "Speed to Deploy" vs "Learning Resource".',
		variants: [
			{
				name: "V1 - Builder Focus",
				percentage: 100,
				copy: {
					cta: "Start Scraping in 5 Minutes",
					buttonCta: "Clone the Repo",
					tagline: "The Hackable Starting Point for Any Scraper.",
					subtitle:
						"Boilerplate code, type definitions, and examples to build your own MCP scrapers today.",
					description:
						"Don't start from scratch. This starter pack gives you the exact TypeScript setup, Playwright config, and LSF schema validation we use in production.",
					whatsInItForMe:
						"Save 4+ hours of setup time and jump straight to writing the extraction logic that matters.",
					target_audience: "Developers building custom scrapers.",
					pain_point:
						"Setting up a robust scraping project with correct linting, types, and headless config takes forever.",
					solution:
						"A production-ready repo you can clone and extend immediately.",
					highlights: [
						"Typescript + Playwright",
						"MCP Server included",
						"Docker ready",
						"LSF Validation",
					],
					highlighted_words: ["Hackable", "Production", "Typescript"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Developer", "OSS"],
	},
])[0];

export const mcpScraperTemplatesABTest = defineAbTests([
	{
		id: "ab-test-mcp-templates",
		name: "MCP Scraper Templates Messaging",
		description: "Messaging test for the template bundle.",
		variants: [
			{
				name: "V1 - Template Variety",
				percentage: 100,
				copy: {
					cta: "10 Scrapers, Ready to Run",
					buttonCta: "Get the Templates",
					tagline: "Copy-Paste Your Way to Data.",
					subtitle:
						"Ten fully coded MCP scraper templates for directories, job boards, and e-commerce sites.",
					description:
						"Why reinvent the wheel? These templates cover 80% of common scraping patterns. Just swap the selectors and go.",
					whatsInItForMe:
						"Instantly support 10 new site types without writing the core logic yourself.",
					target_audience: "Developers and agencies needing quick wins.",
					pain_point:
						"Writing scrapers for every single site structure is tedious and repetitive.",
					solution:
						"Templates that handle pagination, navigation, and extraction for you.",
					highlights: [
						"Job Boards",
						"Directories",
						"E-commerce",
						"Pagination Logic",
					],
					highlighted_words: ["Copy-Paste", "Templates", "Data"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Templates", "MCP"],
	},
])[0];

export const lsfSpecABTest = defineAbTests([
	{
		id: "ab-test-lsf-spec",
		name: "LSF Spec Messaging",
		description: "Messaging verification for the data standard.",
		variants: [
			{
				name: "V1 - Standardization",
				percentage: 100,
				copy: {
					cta: "Standardize Your Data Pipeline",
					buttonCta: "Download Spec v1.0",
					tagline: "The Gold Standard for Lead Data.",
					subtitle:
						"The schema that connects scrapers, enrichers, and CRMs without mapping hell.",
					description:
						"Stop fighting with messy column names. LSF provides a rigorous JSON schema for normalizing people, companies, and property data.",
					whatsInItForMe:
						"Build integrations once and have them work forever, regardless of the data source.",
					target_audience: "Data engineers and architects.",
					pain_point:
						"Every CSV imports differently, breaking downstream automations.",
					solution:
						"A universal schema that guarantees compatibility across your stack.",
					highlights: [
						"JSON Schema",
						"Validation Rules",
						"Typescript Interfaces",
						"CRM Mappings",
					],
					highlighted_words: ["Standard", "Schema", "Normalize"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Data", "Spec"],
	},
])[0];

export const scrapingUniversityABTest = defineAbTests([
	{
		id: "ab-test-scraping-uni",
		name: "Scraping University Messaging",
		description: "Messaging for the educational course.",
		variants: [
			{
				name: "V1 - Master the Craft",
				percentage: 100,
				copy: {
					cta: "Become a Scraping Expert",
					buttonCta: "Start Learning",
					tagline: "Free Crash Course in Web Scraping.",
					subtitle:
						"20 bite-sized lessons on bypassing anti-bots, handling proxies, and extracting data at scale.",
					description:
						"From simple cURL requests to complex headless browser automation, this free course covers the techniques pros use to harvest the web.",
					whatsInItForMe:
						"Level up your engineering skills and learn to extract data from even the toughest sites.",
					target_audience:
						"Developers wanting to specialize in data engineering.",
					pain_point:
						"Most scraping tutorials are outdated or don't cover real-world blockers like Cloudflare.",
					solution:
						"Modern, practical lessons derived from building Lead Orchestra.",
					highlights: [
						"Anti-bot bypass",
						"Proxy rotation",
						"Headless Browser",
						"Rate Limiting",
					],
					highlighted_words: ["Master", "Expert", "Free"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Education", "Course"],
	},
])[0];

export const nicheLeadSourcesABTest = defineAbTests([
	{
		id: "ab-test-niche-sources",
		name: "Niche Lead Sources Messaging",
		description: "Messaging for the niche list.",
		variants: [
			{
				name: "V1 - Opportunity",
				percentage: 100,
				copy: {
					cta: "Find Untapped Markets",
					buttonCta: "Get the List",
					tagline: "50 Goldmines Your Competitors Missed.",
					subtitle:
						"A curated list of niche vertical sites perfect for high-margin lead generation.",
					description:
						"Stop fighting over LinkedIn. These 50 niche directories hold the specialized leads that agencies pay top dollar for.",
					whatsInItForMe:
						"Discover blue-ocean lead sources where you can be the dominant data provider.",
					target_audience: "Agency owners and list builders.",
					pain_point:
						"Mainstream platforms are saturated and expensive to scrape.",
					solution:
						"Hidden directories with high-intent leads that no one else is farming.",
					highlights: [
						"Low competition",
						"High intent",
						"Vertical specific",
						"Direct contacts",
					],
					highlighted_words: ["Untapped", "Goldmine", "Niche"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Strategy", "List"],
	},
])[0];

export const listBuildingChallengeABTest = defineAbTests([
	{
		id: "ab-test-list-challenge",
		name: "List Building Challenge Messaging",
		description: "Messaging for the 7-day challenge.",
		variants: [
			{
				name: "V1 - Action Oriented",
				percentage: 100,
				copy: {
					cta: "Build a Pipeline in 7 Days",
					buttonCta: "Join the Challenge",
					tagline: "From Zero to Leads in One Week.",
					subtitle:
						"A daily action plan to scrape, enrich, and convert your first list of prospects.",
					description:
						"Stop planning and start executing. Follow our daily video guides to build a live lead generation machine by next Sunday.",
					whatsInItForMe:
						"Force yourself to take action and get a tangible result—a booked meeting—in just 7 days.",
					target_audience: "Action-takers and procrastinators needing a push.",
					pain_point:
						"Overthinking tools and strategy prevents you from ever actually sending a message.",
					solution:
						"A strict, guided timeline that forces execution and gets results.",
					highlights: [
						"Daily guides",
						"Templates",
						"Accountability",
						"Fast results",
					],
					highlighted_words: ["Action", "Pipeline", "7 Days"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Challenge", "Action"],
	},
])[0];

export const agencyLeadMachineABTest = defineAbTests([
	{
		id: "ab-test-agency-funnel",
		name: "Agency Lead Machine Messaging",
		description: "Messaging for the full funnel kit.",
		variants: [
			{
				name: "V1 - Systemization",
				percentage: 100,
				copy: {
					cta: "Clone Our Agency Funnel",
					buttonCta: "Download Funnel Kit",
					tagline: "The Blueprint for a 6-Figure Agency.",
					subtitle:
						"Steal the exact landing page, email sequence, and offer stack used to scale lead agencies.",
					description:
						"This isn't just theory. It's the actual assets we use. Plug them into your CRM, swap the logo, and turn on the traffic.",
					whatsInItForMe:
						"Launch a professional agency offer without spending weeks writing copy and designing pages.",
					target_audience: "Aspiring agency owners.",
					pain_point:
						"Building an agency infrastructure from scratch is overwhelming.",
					solution:
						'A "business in a box" funnel kit that handles the marketing ops for you.',
					highlights: [
						"Landing Page",
						"Email Scripts",
						"Offer Stack",
						"Pricing Model",
					],
					highlighted_words: ["Clone", "Blueprint", "6-Figure"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Agency", "Funnel"],
	},
])[0];

export const appointmentSetterPlaybookABTest = defineAbTests([
	{
		id: "ab-test-appt-setter",
		name: "Appointment Setter Playbook Messaging",
		description: "Messaging for the setter guide.",
		variants: [
			{
				name: "V1 - Career Growth",
				percentage: 100,
				copy: {
					cta: "Book Meetings Like a Pro",
					buttonCta: "Get the Playbook",
					tagline: "The $100k/yr Setter Skillset.",
					subtitle:
						"Master the art of outbound prospecting and efficient appointment setting.",
					description:
						"Learn the scripts, objections handlers, and CRM workflows that top-tier setters use to earn high ticket commissions.",
					whatsInItForMe:
						"Acquire a high-value skill that every B2B business needs desperately.",
					target_audience: "Setters and SDRs.",
					pain_point:
						"Most setters fail because they lack a systematic approach to follow-up.",
					solution:
						"A proven playbook that turns activity into booked calls on the calendar.",
					highlights: [
						"Scripting",
						"Objection Handling",
						"CRM Mgmt",
						"Daily Routine",
					],
					highlighted_words: ["Pro", "Skillset", "$100k/yr"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Sales", "Playbook"],
	},
])[0];

export const sdrProspectingPackABTest = defineAbTests([
	{
		id: "ab-test-sdr-pack",
		name: "SDR Prospecting Pack Messaging",
		description: "Messaging for the SDR toolkit.",
		variants: [
			{
				name: "V1 - Pipeline Velocity",
				percentage: 100,
				copy: {
					cta: "Fill Your Quota Faster",
					buttonCta: "Download Super Pack",
					tagline: "Weapons for the Modern SDR.",
					subtitle:
						"Templates for competitor scraping, intent monitoring, and precision list building.",
					description:
						"Stop cold calling the phonebook. Use these templates to identify high-probability prospects who are actually ready to buy.",
					whatsInItForMe:
						"Hit your quota in half the time by talking to better qualified prospects.",
					target_audience: "SDRs under pressure to perform.",
					pain_point:
						"Grinding out calls to bad leads is soul-crushing and ineffective.",
					solution:
						"Smarter prospecting tools that surface the low-hanging fruit.",
					highlights: [
						"Competitor Intel",
						"Intent Data",
						"List Building",
						"Efficiency",
					],
					highlighted_words: ["Quota", "Velocity", "Weapons"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "SDR", "Sales"],
	},
])[0];

export const gtmPlaybooksABTest = defineAbTests([
	{
		id: "ab-test-gtm-playbooks",
		name: "GTM Playbooks Messaging",
		description: "Messaging for the weekly plays.",
		variants: [
			{
				name: "V1 - Strategic Variety",
				percentage: 100,
				copy: {
					cta: "30 Ways to Go to Market",
					buttonCta: "Get 30 Playbooks",
					tagline: "A New Growth Leaver Every Week.",
					subtitle:
						"Weekly distinct scraping and outreach strategies to test in your market.",
					description:
						'From "Hiring Signals" to "Competitor Reviews," these playbooks give you fresh angles to attack your market and find leads.',
					whatsInItForMe:
						"Never run out of growth ideas. Test a new proven strategy every single week.",
					target_audience: "Growth marketers and founders.",
					pain_point:
						"Marketing channels get stale, and you need fresh creative ways to find customers.",
					solution:
						"A library of diverse, creative scraping strategies that work.",
					highlights: [
						"30 Unique Plays",
						"Step-by-Step",
						"Creative Sourcing",
						"Outreach Angles",
					],
					highlighted_words: ["Growth", "Strategy", "Fresh"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "GTM", "Strategy"],
	},
])[0];

export const hubspotKitABTest = defineAbTests([
	{
		id: "ab-test-hubspot-kit",
		name: "HubSpot Kit Messaging",
		description: "Messaging for the integration kit.",
		variants: [
			{
				name: "V1 - Integration Ease",
				percentage: 100,
				copy: {
					cta: "Supercharge Your HubSpot",
					buttonCta: "Get Integration Kit",
					tagline: "Feed Clean Data Directly to HubSpot.",
					subtitle:
						"Property definitions, workflow templates, and data mapping for seamless integration.",
					description:
						"Don't mess up your clean CRM with bad imports. This kit sets up your HubSpot properties perfectly to receive Lead Orchestra data.",
					whatsInItForMe:
						"A perfectly organized CRM that triggers automation the moment a lead lands.",
					target_audience: "RevOps and HubSpot users.",
					pain_point:
						"Mapping custom fields from scrapers to CRM is tedious and error-prone.",
					solution: "Pre-defined property groups and workflows that just work.",
					highlights: [
						"Property Groups",
						"Workflows",
						"Data Mapping",
						"Automation",
					],
					highlighted_words: ["Seamless", "Clean", "HubSpot"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "HubSpot", "RevOps"],
	},
])[0];

export const fsboScrapingKitABTest = defineAbTests([
	{
		id: "ab-test-fsbo-kit",
		name: "FSBO Kit Messaging",
		description: "Messaging for real estate kit.",
		variants: [
			{
				name: "V1 - Direct to Owner",
				percentage: 100,
				copy: {
					cta: "Dominate FSBO Listings",
					buttonCta: "Download Starter Kit",
					tagline: "First to Call, First to Close.",
					subtitle:
						"How to scrape, enrich, and contact For Sale By Owner listings before agents do.",
					description:
						"FSBOs are the lowest hanging fruit in real estate. This kit shows you how to automate the retrieval of their phone numbers so you can pitch them instantly.",
					whatsInItForMe:
						"Beat every other investor to the deal by automating your speed-to-lead.",
					target_audience: "Real estate investors.",
					pain_point:
						"Manually calling FSBO signs is slow and you often get blocked.",
					solution:
						"Automated scraping and enrichment that delivers cell numbers to your dialer.",
					highlights: [
						"FSBO Sources",
						"Owner Enrichment",
						"Dialer Integ.",
						"Scripts",
					],
					highlighted_words: ["Dominate", "First", "FSBO"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Real Estate", "FSBO"],
	},
])[0];

export const offMarketSourcesABTest = defineAbTests([
	{
		id: "ab-test-offmarket-sources",
		name: "Off-Market Sources Messaging",
		description: "Messaging for off-market list.",
		variants: [
			{
				name: "V1 - Hidden Inventory",
				percentage: 100,
				copy: {
					cta: "Find Hidden Deals",
					buttonCta: "Get 40 Sources",
					tagline: "Go Where the MLS Isn't.",
					subtitle:
						"40 sources for probate, tax delinquent, divorce, and tired landlord leads.",
					description:
						"The best deals aren't on Zillow. They are hidden in county records and niche sites. This guide tells you exactly where to look.",
					whatsInItForMe: "Access high-equity leads with zero competition.",
					target_audience: "Wholesalers and flippers.",
					pain_point:
						"MLS deals are overpriced and bidding wars destroy your margins.",
					solution:
						"A map to the hidden inventory that savvy investors trade on.",
					highlights: [
						"Probate",
						"Tax Delinquent",
						"Code Violations",
						"Divorce",
					],
					highlighted_words: ["Hidden", "Deals", "Off-Market"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Real Estate", "Off-Market"],
	},
])[0];

export const wholesalerPipelineABTest = defineAbTests([
	{
		id: "ab-test-wholesaler-pipeline",
		name: "Wholesaler Pipeline Messaging",
		description: "Messaging for the full pipeline template.",
		variants: [
			{
				name: "V1 - End-to-End Automation",
				percentage: 100,
				copy: {
					cta: "Automate Your Deal Flow",
					buttonCta: "Get Pipeline Template",
					tagline: "The Modern Wholesaling Stack.",
					subtitle:
						"From Scraper to Docusign: A complete automation architecture for wholesalers.",
					description:
						"Stop glueing tools together with Zapier. This template provides a cohesive architecture for handling leads from scraping to contract.",
					whatsInItForMe:
						"Scale your wholesaling operation without adding more headcount.",
					target_audience: "Wholesaling business owners.",
					pain_point:
						"Operations are messy, leads get lost, and follow-up is inconsistent.",
					solution:
						"A structured, automated pipeline that ensures every lead is worked perfectly.",
					highlights: ["Scraping", "Enrichment", "Follow-Up", "Contracts"],
					highlighted_words: ["Automate", "Stack", "Wholesaling"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Real Estate", "Wholesaling"],
	},
])[0];

export const openLeadPlaybookABTest = defineAbTests([
	{
		id: "ab-test-playbook",
		name: "Open Lead Playbook Messaging",
		description: "Messaging for the flagship manifesto.",
		variants: [
			{
				name: "V1 - The Manifesto",
				percentage: 100,
				copy: {
					cta: "Read the Manifesto",
					buttonCta: "Download Playbook",
					tagline: "The Future of Lead Gen is Open.",
					subtitle:
						"Why proprietary databases are dying and how to build your own lead engine.",
					description:
						"This 30-page guide shatters the myths of buying leads and lays out the methodology for building a sovereign, improved data asset.",
					whatsInItForMe:
						"Understand the macro shift in the data industry and position yourself to win.",
					target_audience: "Visionary founders and marketers.",
					pain_point:
						"Relying on expensive, decaying third-party data is a strategic risk.",
					solution:
						'Building an internal "Lead Orchestra" that allows you to control your own destiny.',
					highlights: [
						"Data Sovereignty",
						"Scraping Ethics",
						"Enrichment Strategy",
						"Future Proof",
					],
					highlighted_words: ["Future", "Open", "Sovereign"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Vision", "Playbook"],
	},
])[0];

export const sitesToScrapeABTest = defineAbTests([
	{
		id: "ab-test-500-sites",
		name: "500 Sites to Scrape Messaging",
		description: "Messaging for the viral list.",
		variants: [
			{
				name: "V1 - Volume",
				percentage: 100,
				copy: {
					cta: "Unlock the Entire Web",
					buttonCta: "Get the 500 List",
					tagline: "The Ultimate Web Scraping Directory.",
					subtitle:
						"500+ websites organized by industry, difficulty, and data richness.",
					description:
						"Never run out of sources again. This massive directory categorizes the entire web into valid scraping targets for every industry imaginable.",
					whatsInItForMe:
						"Instant inspiration for your next data product or lead campaign.",
					target_audience: "Everyone hungry for data.",
					pain_point: "Not knowing where to look for specific types of data.",
					solution:
						"A Master List of the internet's most valuable data sources.",
					highlights: [
						"500+ Sites",
						"Categorized",
						"Difficulty Rated",
						"Global",
					],
					highlighted_words: ["Ultimate", "Directory", "Unlock"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Viral", "Directory"],
	},
])[0];

export const mcpBuilderKitABTest = defineAbTests([
	{
		id: "ab-test-mcp-builder",
		name: "MCP Builder Kit Messaging",
		description: "Messaging for the builder toolkit.",
		variants: [
			{
				name: "V1 - Creator Economy",
				percentage: 100,
				copy: {
					cta: "Build & Sell Scrapers",
					buttonCta: "Start Building",
					tagline: "Your Toolkit for the Data Economy.",
					subtitle:
						"Everything you need to build, package, and monetize MCP scraper plugins.",
					description:
						"The demand for custom data is exploding. This kit gives you the tools to become a supplier in the new data economy.",
					whatsInItForMe:
						"Create a new revenue stream by building tools that others desperately need.",
					target_audience: "Developers and entrepreneurs.",
					pain_point:
						"You have coding skills but don't know how to package them into a sellable product.",
					solution:
						"A framework for building and distributing valuable data tools.",
					highlights: ["Monetization", "Packaging", "Distribution", "Docs"],
					highlighted_words: ["Build", "Sell", "Economy"],
				},
			},
		],
		isActive: true,
		tags: ["Lead Magnet", "Builder", "Monetize"],
	},
])[0];
