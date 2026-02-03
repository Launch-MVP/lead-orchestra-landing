import { defineAbTests } from "@/data/products/copy";

export const targetedLeadCreditsABTest = defineAbTests([
	{
		id: "ab-test-targeted-leads-v1",
		name: "Targeted Lead Credits Copy",
		description: "Copy optimization for Targeted Lead Credits.",
		variants: [
			{
				name: "V1 - Quality Focus",
				percentage: 100,
				copy: {
					cta: "Build Your Ideal Lead List",
					buttonCta: "Get High-Quality Leads",
					tagline: "Stop Chasing Bad Leads. Start Closing Good Ones.",
					subtitle:
						"Generate laser-targeted lists of property leads that perfectly match your specific investment criteria.",
					whatsInItForMe:
						"You get a pre-qualified list that perfectly matches your investment strategy. This means less time wasted on unqualified prospects and more time spent talking to motivated sellers and closing profitable deals.",
					target_audience:
						"Real estate investors who need a reliable source of high-quality leads that fit a specific niche or investment model.",
					pain_point:
						"Current lead sources are expensive, unreliable, and deliver untargeted lists, forcing you to waste time and money sifting through junk.",
					fear: "Your marketing budget evaporates on leads that never convert, while competitors scoop up the best deals.",
					hope: "Imagine filling your pipeline with prospects who actually fit your buy box and are ready to sell.",
					solution:
						"Our platform allows you to apply dozens of filters to our massive property database, ensuring you only pay for hyper-targeted leads that fit your exact criteria, maximizing your marketing ROI.",
					highlights: [
						"Build Hyper-Targeted Lists",
						"Access 140M+ Properties",
						"Pay Only For Qualified Leads",
					],
					highlighted_words: ["Targeted", "Quality", "Qualified"],
				},
			},
		],
		isActive: true,
		tags: ["Credits", "Leads"],
	},
])[0];

export const realEstateOffMarketLeadsABTest = defineAbTests([
	{
		id: "ab-test-re-offmarket-leads-v1",
		name: "Real Estate Off-Market Leads Copy",
		description: "SEO copy for Real Estate Off-Market Leads.",
		variants: [
			{
				name: "V1 - Deal Flow",
				percentage: 100,
				copy: {
					cta: "Find Your Next Deal",
					buttonCta: "Get Off-Market Leads",
					tagline: "Unlock Hidden Real Estate Opportunities.",
					subtitle:
						"Access a vast inventory of off-market properties before they ever hit the MLS.",
					whatsInItForMe:
						"Gain a competitive advantage by accessing properties with less competition and higher profit potential.",
					target_audience: "Real estate investors, flippers, and wholesalers.",
					pain_point:
						"The MLS is saturated with competition, driving prices up and margins down.",
					fear: "You miss out on the best deals because you are fighting over the same public listings as everyone else.",
					hope: "You consistently find profitable deals with hidden equity before other investors even know they exist.",
					solution:
						"Our off-market lead feed connects you directly with property owners, giving you exclusive access to high-equity opportunities.",
					highlights: [
						"Exclusive off-market inventory",
						"Direct-to-owner contact info",
						"High-equity opportunities",
					],
					highlighted_words: ["Off-Market", "Exclusive", "High-Equity"],
				},
			},
		],
		isActive: true,
		tags: ["Leads", "Real Estate"],
	},
])[0];

export const realEstateInvestorLeadsABTest = defineAbTests([
	{
		id: "ab-test-re-investor-leads-v1",
		name: "Real Estate Investor Leads Copy",
		description: "SEO copy for Real Estate Investor B2B Leads.",
		variants: [
			{
				name: "V1 - B2B Growth",
				percentage: 100,
				copy: {
					cta: "Expand Your Buyer Network",
					buttonCta: "Get Investor Leads",
					tagline: "Connect with Active Cash Buyers.",
					subtitle:
						"Build your disposition network with verified contacts for active real estate investors and wholesalers.",
					whatsInItForMe:
						"Sell your wholesale deals faster by building a robust list of reliable cash buyers.",
					target_audience: "Wholesalers and agents looking for cash buyers.",
					pain_point:
						"You have a great deal under contract but no one to sell it to, risking the assignment fee.",
					fear: "You lose the deal and your credibility because you couldn't find a buyer in time.",
					hope: "You have a list of hungry cash buyers ready to purchase your deals the moment you send them out.",
					solution:
						"Our B2B investor leads give you direct access to active buyers in your market, ensuring you always have an exit strategy.",
					highlights: [
						"Verified cash buyers",
						"Active investor profiles",
						"Scale your dispositions",
					],
					highlighted_words: ["Cash Buyers", "Network", "Wholesale"],
				},
			},
		],
		isActive: true,
		tags: ["Leads", "B2B", "investors"],
	},
])[0];

export const localBusinessLeadsABTest = defineAbTests([
	{
		id: "ab-test-local-biz-leads-v1",
		name: "Local Business Leads Copy",
		description: "SEO copy for Local Business Listing Leads.",
		variants: [
			{
				name: "V1 - B2B Sales",
				percentage: 100,
				copy: {
					cta: "Target Local Businesses",
					buttonCta: "Get Business Leads",
					tagline: "Fill Your B2B Pipeline.",
					subtitle:
						"Scrape and export contact details for local businesses in any industry to fuel your sales outreach.",
					whatsInItForMe:
						"Rapidly build a prospect list of local businesses to pitch your services to.",
					target_audience: "Agencies, B2B service providers, and sales teams.",
					pain_point:
						"Manually copying business details from directories is slow, tedious, and unscalable.",
					fear: "Your sales team runs out of prospects, and revenue stalls because lead generation is too slow.",
					hope: "Your pipeline is always full of fresh local prospects ready for your pitch.",
					solution:
						"Automate your list building with wide-scale local business scraping, delivering thousands of verified contacts in minutes.",
					highlights: [
						"Any industry, any location",
						"Verified contact info",
						"Scale your outreach",
					],
					highlighted_words: ["Pipeline", "Automate", "B2B"],
				},
			},
		],
		isActive: true,
		tags: ["Leads", "Local Business"],
	},
])[0];

export const eventOrganizerLeadsABTest = defineAbTests([
	{
		id: "ab-test-event-org-leads-v1",
		name: "Event Organizer Leads Copy",
		description: "SEO copy for Event Organizer Leads.",
		variants: [
			{
				name: "V1 - Event Sales",
				percentage: 100,
				copy: {
					cta: "Connect with Organizers",
					buttonCta: "Get Event Leads",
					tagline: "Pitch Your Services to Events.",
					subtitle:
						"Reach decision-makers for conferences, weddings, and festivals to book more gigs and sponsorships.",
					whatsInItForMe:
						"Directly contact the people who hire vendors and sign contracts for major events.",
					target_audience: "Event vendors, speakers, and sponsors.",
					pain_point:
						"Finding the right person to pitch for an event is difficult and often leads to dead ends.",
					fear: "You miss out on lucrative event contracts because you couldn't reach the organizer in time.",
					hope: "You are the first vendor the organizer calls because you reached out directly with a perfect pitch.",
					solution:
						"Our event organizer leads provide direct contact info for decision-makers, helping you bypass gatekeepers and book more business.",
					highlights: [
						"Decision-maker contacts",
						"Wide range of event types",
						"Book more gigs",
					],
					highlighted_words: ["Organizers", "Bookings", "Events"],
				},
			},
		],
		isActive: true,
		tags: ["Leads", "Events"],
	},
])[0];

export const datingProfileLeadsABTest = defineAbTests([
	{
		id: "ab-test-dating-leads-v1",
		name: "Dating Profile Leads Copy",
		description: "SEO copy for Dating Profile Leads.",
		variants: [
			{
				name: "V1 - Niche Targeting",
				percentage: 100,
				copy: {
					cta: "Access Public Profiles",
					buttonCta: "Get Profile Data",
					tagline: "Data for Social Research.",
					subtitle:
						"Aggregate public profile data for market research, social trends, and demographic analysis.",
					whatsInItForMe:
						"Access large-scale demographic datasets to understand social trends and user behavior.",
					target_audience: "Data analysts, researchers, and marketers.",
					pain_point:
						"Gathering demographic data manually from social platforms is impossibly slow.",
					fear: "Your research is based on outdated or incomplete data, leading to incorrect conclusions.",
					hope: "You have access to real-time, large-scale social data to drive accuracy in your insights.",
					solution:
						"Our scraping tools aggregate public interest and demographic data at scale, providing the raw material for deep social analysis.",
					highlights: [
						"Public profile aggregation",
						"Demographic insights",
						"Market research ready",
					],
					highlighted_words: ["Research", "Demographics", "Data"],
				},
			},
		],
		isActive: true,
		tags: ["Leads", "Dating", "Research"],
	},
])[0];

export const b2cConsumerLeadsABTest = defineAbTests([
	{
		id: "ab-test-b2c-leads-v1",
		name: "B2C Consumer Leads Copy",
		description: "SEO copy for B2C Consumer Leads.",
		variants: [
			{
				name: "V1 - Consumer Reach",
				percentage: 100,
				copy: {
					cta: "Reach More Customers",
					buttonCta: "Get Consumer Leads",
					tagline: "Direct-to-Consumer Growth.",
					subtitle:
						"Fuel your B2C marketing campaigns with compliant, publicly available consumer contact lists.",
					whatsInItForMe:
						"Expand your reach to thousands of potential new customers in your target demographic.",
					target_audience: "Direct marketers and B2C brands.",
					pain_point:
						"Reliance on expensive ad platforms limits your reach and eats into your margins.",
					fear: "Your CAC (Customer Acquisition Cost) becomes unsustainable, killing your profitability.",
					hope: "You own your audience data and can reach potential customers directly without paying a gatekeeper.",
					solution:
						"Our B2C lead feeds provide cost-effective access to potential customers, lowering your CAC and diversifying your acquisition channels.",
					highlights: [
						"Lower acquisition costs",
						"Direct marketing lists",
						"Broad consumer reach",
					],
					highlighted_words: ["Growth", "Direct", "B2C"],
				},
			},
		],
		isActive: true,
		tags: ["Leads", "B2C", "Consumer"],
	},
])[0];
