import { defineAbTests } from "./copy";

export const zillowScrapingWorkflowABTests = defineAbTests([
	{
		id: "ab-test-zillow-scraper-v1",
		name: "Zillow Scraper Workflow Copy Test",
		description:
			"Testing copy variants (Speed vs. Data Quality) for the Zillow Scraping Workflow to optimize sales.",
		variants: [
			{
				name: "V1 - Speed & Volume",
				percentage: 50,
				copy: {
					cta: "Scrape Zillow at Scale",
					buttonCta: "Get the Workflow",
					tagline: "Turn Zillow into Your Personal Database.",
					subtitle:
						"The fastest way to scrape thousands of Zillow listings and turn them into actionable leads.",
					description:
						"Stop manually copying and pasting properties. This workflow automates the entire process, scraping listings, prices, and agent details in seconds so you can focus on making offers.",
					whatsInItForMe:
						"Save hundreds of hours of manual work and get instant access to market data across entire zip codes.",
					target_audience:
						"Real estate investors and wholesalers looking for volume.",
					pain_point:
						"Manually building lists from Zillow is slow, tedious, and doesn't scale.",
					fear: "You miss out on deals because you cant analyze the market fast enough.",
					hope: "You have a constant stream of fresh property data feeding your deal pipeline.",
					solution:
						"Automated scraping that pulls every detail you need from Zillow instantly.",
					highlights: [
						"Scrape thousands of listings",
						"Extract agent contacts",
						"Export to CSV/Excel",
						"Daily automated runs",
					],
					highlighted_words: ["Scale", "Automated", "Speed"],
				},
			},
			{
				name: "V2 - Data Quality & Analysis",
				percentage: 50,
				copy: {
					cta: "Get Precision Property Data",
					buttonCta: "Install Scraper",
					tagline: "Deep Insights for Smarter Deals.",
					subtitle:
						"Extract comprehensive property details, tax history, and price changes for superior market analysis.",
					description:
						"Make data-driven decisions with complete property profiles. This tool goes beyond basic listings to capture hidden value indicators like price drops and tax history.",
					whatsInItForMe:
						"Get the high-fidelity data you need to accurately underwrite deals and spot opportunities others miss.",
					target_audience:
						"Sophisticated investors and analysts requiring detailed property data.",
					pain_point:
						"Incomplete data leads to bad underwriting and risky investment decisions.",
					fear: "Buying a lemon or overpaying because you didn't have the full picture.",
					hope: "You have a competitive edge with deeper data than your competition.",
					solution:
						"A precision scraper that captures every available data point for thorough analysis.",
					highlights: [
						"Deep property details",
						"Price history tracking",
						"Tax & assessment data",
						"Clean, normalized format",
					],
					highlighted_words: ["Precision", "Insights", "Data"],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Workflows", "Scraping", "Zillow", "Data"],
	},
]);

export const linkedinScrapingWorkflowABTests = defineAbTests([
	{
		id: "ab-test-linkedin-scraper-v1",
		name: "LinkedIn Scraper Workflow Copy Test",
		description:
			"Testing copy variants (Lead Gen vs. Enrichment) for the LinkedIn Scraping Workflow.",
		variants: [
			{
				name: "V1 - B2B Lead Gen",
				percentage: 50,
				copy: {
					cta: "Fill Your B2B Pipeline",
					buttonCta: "Start Scraping",
					tagline: "The Ultimate B2B Lead Gen Tool.",
					subtitle:
						"Automatically find and export decision-makers in your target niche directly from LinkedIn.",
					description:
						"Forget expensive lead databases. Build your own targeted lists by scraping companies and employees directly from the source. Get verify email addresses and direct contact info.",
					whatsInItForMe:
						"Generate unlimited B2B leads for a fraction of the cost of buying lists.",
					target_audience: "B2B sales teams, recruiters, and agencies.",
					pain_point:
						"Paying heavily for outdated lead lists that have low response rates.",
					fear: "Your sales team has an empty pipeline and no one to call.",
					hope: "You have a self-filling pipeline of high-quality, targeted prospects.",
					solution:
						"Automated LinkedIn scraping that identifies and captures your ideal customer profiles.",
					highlights: [
						"Find decision makers",
						"Export company data",
						"Enrich with emails",
						"Target by industry/role",
					],
					highlighted_words: ["Pipeline", "Leads", "B2B"],
				},
			},
			{
				name: "V2 - Data Enrichment",
				percentage: 50,
				copy: {
					cta: "Enrich Your CRM Data",
					buttonCta: "Get Data Tool",
					tagline: "Keep Your CRM Up to Date.",
					subtitle:
						"Automatically update your contact records with the latest job titles, companies, and locations from LinkedIn.",
					description:
						"Bad data is the silent killer of sales productivity. Keep your CRM fresh by verifying and updating contact details against live LinkedIn profiles automatically.",
					whatsInItForMe:
						"Maintain a pristine database that improves email deliverability and personalization.",
					target_audience:
						"RevOps professionals and data-driven sales organizations.",
					pain_point:
						"Your CRM is full of decayed data, leading to bounced emails and wasted effort.",
					fear: "Your outreach is landing in the void because your data is old.",
					hope: "Your team trusts their data implicitly, knowing it mimics the live state of the network.",
					solution:
						"A workflow that continuously validates and updates your records against LinkedIn data.",
					highlights: [
						"Verify job titles",
						"Update company info",
						"Clean old data",
						"Improve deliverability",
					],
					highlighted_words: ["Enrich", "Fresh", "Verify"],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Workflows", "Scraping", "LinkedIn", "B2B"],
	},
]);

export const multiSourceScrapingWorkflowABTests = defineAbTests([
	{
		id: "ab-test-multi-source-scraper-v1",
		name: "Multi-Source Scraper Workflow Copy Test",
		description:
			"Testing copy variants (Unified Data vs. Agency Scale) for the Multi-Source Scraping Workflow.",
		variants: [
			{
				name: "V1 - Unified Data Schema",
				percentage: 50,
				copy: {
					cta: "All Your Data, One Format",
					buttonCta: "Get Unified Workflow",
					tagline: "Stop Wrestling with Messy CSVs.",
					subtitle:
						"Scrape Zillow, Realtor.com, and LinkedIn and get one clean, unified dataset ready for your CRM.",
					description:
						"Data form different sources is a nightmare to merge. This workflow uses Lead Standard Format (LSF) to normalize everything automatically, so you can upload to your CRM without a headache.",
					whatsInItForMe:
						"Save hours of data cleaning and formatting every single week.",
					target_audience:
						"Data engineers and operations managers handling multiple data streams.",
					pain_point:
						"Spending more time formatting spreadsheets than actually using the data.",
					fear: "Your database becomes a swamp of duplicate and mismatched records.",
					hope: "You have a pristine, golden record for every lead, regardless of where it came from.",
					solution:
						"Automatic normalization that maps every source to a single, consistent schema.",
					highlights: [
						"Unified Lead Standard Format",
						"Auto-deduplication",
						"Clean address parsing",
						"CRM-ready exports",
					],
					highlighted_words: ["Unified", "Clean", "Normalized"],
				},
			},
			{
				name: "V2 - Agency Scale",
				percentage: 50,
				copy: {
					cta: "Power Your Lead Agency",
					buttonCta: "Scale Operations",
					tagline: "Enterprise-Grade Scraping Infrastructure.",
					subtitle:
						"The robust engine designed to handle millions of records across multiple platforms for high-volume lead agencies.",
					description:
						"When you are selling data, reliability is everything. This multi-source workflow is built for high throughput and redundancy, ensuring you always have data to deliver to your clients.",
					whatsInItForMe:
						"Build a scalable data business on top of rock-solid infrastructure.",
					target_audience:
						"Lead generation agencies and large-scale data vendors.",
					pain_point:
						"Scrapers breaking constantly and IP bans stopping your delivery.",
					fear: "Losing clients because you can't fulfill their data orders on time.",
					hope: "You become the most reliable data provider in your niche, commanding premium prices.",
					solution:
						"A resilient, multi-proxy scraping network that guarantees data delivery at scale.",
					highlights: [
						"High-volume throughput",
						"Smart proxy rotation",
						"99.9% uptime reliability",
						"API access",
					],
					highlighted_words: ["Scale", "Reliable", "Enterprise"],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Workflows", "Scraping", "Enterprise", "Scale"],
	},
]);

export const buyerLeadNurtureWorkflowABTests = defineAbTests([
	{
		id: "ab-test-buyer-lead-nurture-workflow-v1",
		name: "Buyer Lead Nurture Workflow Copy Test",
		description:
			"Testing copy variants (Conversion Rate vs. Client Experience) for the Buyer Lead Nurture Workflow to optimize sales.",
		variants: [
			{
				name: "V1 - Maximize Conversions",
				percentage: 50,
				copy: {
					cta: "Convert More Buyer Leads",
					buttonCta: "Get the Workflow",
					tagline: "Turn More Leads into Commissions.",
					subtitle:
						"The automated workflow designed to nurture your buyer leads and maximize your conversion rates.",
					whatsInItForMe:
						"This system ensures no lead is forgotten, increasing your appointment-set rate and directly boosting your commission income.",
					target_audience:
						"Real estate agents and teams focused on maximizing revenue from their lead spend.",
					pain_point:
						"You're paying for buyer leads, but a low conversion rate is killing your ROI because you can't follow up with all of them effectively.",
					solution:
						"This workflow automates the follow-up and nurturing process, systematically turning your expensive leads into closed deals.",
					highlights: [
						"Maximize lead ROI",
						"Increase appointment-set rate",
						"Automate drip campaigns",
					],
				},
			},
			{
				name: "V2 - Perfect Client Experience",
				percentage: 50,
				copy: {
					cta: "Deliver a 5-Star Experience",
					buttonCta: "Install Workflow",
					tagline: "Never Drop the Ball on a Lead.",
					subtitle:
						"Give every buyer lead a professional, 5-star experience with automated follow-ups and appointment scheduling.",
					whatsInItForMe:
						"This workflow ensures every lead receives prompt, professional communication, building trust and setting you apart from the competition.",
					target_audience:
						"Agents and teams who want to build a reputation for excellent customer service.",
					pain_point:
						"Being too busy means leads get ignored, making you look unprofessional and damaging your reputation.",
					solution:
						"Automate your follow-up process to guarantee every single lead receives timely, helpful communication, creating happy clients from day one.",
					highlights: [
						"Build trust with buyers",
						"Professional communication, automated",
						"Schedule appointments effortlessly",
						"Build your reputation",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Workflows", "Automation", "Buyer Leads", "Copywriting"],
	},
]);

export const motivatedSellerWorkflowABTests = defineAbTests([
	{
		id: "ab-test-outreach-workflow-v1",
		name: "Outreach Automation Workflow Copy Test",
		description:
			"Testing copy variants (Time Savings vs. Deal Closing) for the Outreach Workflow to optimize sales.",
		variants: [
			{
				name: "V1 - Autopilot & Efficiency",
				percentage: 50,
				copy: {
					cta: "Put Your Outreach on Autopilot",
					buttonCta: "Get the Workflow",
					tagline: "Automate Your Outreach in Your Sleep.",
					subtitle:
						"The all-in-one workflow to automate your outreach, follow-up, and lead nurturing.",
					whatsInItForMe:
						"This workflow runs your outreach campaigns 24/7, freeing you from tedious manual follow-ups so you can focus on closing deals.",
					target_audience:
						"Real estate investors and wholesalers who want to save time and scale their lookalike audience expansion strategy inspired by How to Win Friends and Influence People.",
					pain_point:
						"Manually following up with dozens of potential sellers is a full-time job that burns you out and limits your deal flow.",
					solution:
						"Our pre-built workflow automates the entire outreach and nurturing process, so you can scale your campaigns without scaling your workload.",
					highlights: [
						"Automate multi-channel outreach",
						"Nurture leads 24/7",
						"Save 10+ hours per week",
					],
				},
			},
			{
				name: "V2 - More Deals & Revenue",
				percentage: 50,
				copy: {
					cta: "Close More Off-Market Deals",
					buttonCta: "Install Workflow",
					tagline: "Never Let a Hot Lead Go Cold.",
					subtitle:
						"The ultimate workflow to convert more leads into profitable, lookalike off-market deals identified by our prediction features.",
					whatsInItForMe:
						"By instantly and persistently following up with every lead, this workflow ensures you engage hot prospects at the perfect moment, maximizing your conversions.",
					target_audience:
						"Deal-focused investors who want to maximize the ROI from their lead lists.",
					pain_point:
						"Hot leads are lost every day due to slow response times and inconsistent follow-up, costing you profitable deals.",
					solution:
						"This workflow automates instant and persistent follow-up, ensuring every valuable lead is nurtured until they are ready to talk.",
					highlights: [
						"Increase lead conversion rates",
						"Engage leads instantly",
						"Maximize your deal pipeline",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Workflows", "Automation", "Outreach", "Copywriting"],
	},
]);

export const openHouseWorkflowABTests = defineAbTests([
	{
		id: "ab-test-open-house-workflow-v1",
		name: "Open House Follow-Up Workflow Copy Test",
		description:
			"Testing copy variants (Efficiency vs. Opportunity) for the Open House Follow-Up Workflow to optimize sales.",
		variants: [
			{
				name: "V1 - Time-Saving Efficiency",
				percentage: 50,
				copy: {
					cta: "Automate Your Follow-Up",
					buttonCta: "Get the Workflow",
					tagline: "Save Hours After Every Open House.",
					subtitle:
						"Instantly follow up with every open house attendee without lifting a finger. Automate thank-yous, messages, and call reminders.",
					whatsInItForMe:
						"Stop spending your Sunday evening manually emailing attendees. This workflow does it all for you, saving you hours of tedious work.",
					target_audience:
						"Busy real estate agents who run frequent open houses.",
					pain_point:
						"Manually following up with dozens of open house attendees is a time-consuming chore that you dread every weekend.",
					solution:
						"This one-click workflow instantly handles all your post-event follow-up, giving you back your time.",
					highlights: [
						"Save hours of manual work",
						"Follow up with 100% of attendees",
						"Automated thank-you messages",
					],
				},
			},
			{
				name: "V2 - Capture Every Opportunity",
				percentage: 50,
				copy: {
					cta: "Turn Attendees into Clients",
					buttonCta: "Install Workflow",
					tagline: "Don't Let Hot Leads Walk Away.",
					subtitle:
						"The workflow that automatically engages every open house visitor, identifies hot prospects, and helps you set more appointments.",
					whatsInItForMe:
						"This system ensures the hottest leads from your open house get immediate attention, dramatically increasing your chances of converting an attendee into a client.",
					target_audience:
						"Agents who want to maximize the business generated from their open house events.",
					pain_point:
						"You're meeting potential clients at open houses, but they're getting lost in the shuffle and you're missing out on real business.",
					solution:
						"This workflow automatically engages everyone and helps surface the most interested prospects, ensuring no opportunity is missed.",
					highlights: [
						"Convert attendees to clients",
						"Identify the hottest prospects",
						"Schedule more appointments",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Workflows", "Automation", "Open House", "Copywriting"],
	},
]);
