import { defineAbTests } from "./copy";

export const notionInvestorCrmABTests = defineAbTests([
	{
		id: "ab-test-notion-crm-v1",
		name: "Notion Investor CRM Copy Test",
		description:
			"Testing copy variants (Organization vs. Relationship Focus) for the Notion Investor CRM to optimize sales.",
		variants: [
			{
				name: "V1 - Organization & Control",
				percentage: 50,
				copy: {
					cta: "Organize Your Investors Now",
					buttonCta: "Get the CRM",
					tagline: "Ditch the Messy Spreadsheet.",
					subtitle:
						"A powerful Notion CRM to track investors, conversations, and deal status in one organized place.",
					whatsInItForMe:
						"This template ends the chaos of managing investor relations in spreadsheets, so you never miss a follow-up or lose a key contact.",
					target_audience:
						"Founders and startups actively managing investor relations or raising capital.",
					pain_point:
						"Tracking investor conversations across spreadsheets, emails, and notes is chaotic and leads to missed opportunities.",
					solution:
						"Our Notion CRM centralizes all investor data, conversations, and statuses into a single, easy-to-manage dashboard.",
					highlights: [
						"Track every conversation",
						"Never miss a follow-up",
						"Manage your pipeline visually",
					],
				},
			},
			{
				name: "V2 - Relationship & Capital",
				percentage: 50,
				copy: {
					cta: "Raise Capital More Effectively",
					buttonCta: "Get the Template",
					tagline: "Build Relationships, Raise Capital.",
					subtitle:
						"The essential Notion CRM for building stronger investor relationships and closing your next round faster.",
					whatsInItForMe:
						"By systematically managing your relationships, you build the trust and momentum needed to get to a 'yes' faster.",
					target_audience:
						"Startups focused on building strong, long-term relationships with their investors.",
					pain_point:
						"Failing to properly nurture investor relationships leads to cold leads and a stalled fundraising process.",
					solution:
						"This CRM is designed to help you manage and nurture investor relationships effectively, turning contacts into commitments.",
					highlights: [
						"Build stronger relationships",
						"Close your round faster",
						"Turn contacts into capital",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Notion", "CRM", "Fundraising", "Copywriting"],
	},
]);

export const notionDealPipelineABTests = defineAbTests([
	{
		id: "ab-test-notion-pipeline-v1",
		name: "Notion Deal Pipeline Copy Test",
		description:
			"Testing copy variants (Visual Tracking vs. Closing Faster) for the Notion Deal Pipeline to optimize sales.",
		variants: [
			{
				name: "V1 - Visual Tracking",
				percentage: 50,
				copy: {
					cta: "Visualize Your Pipeline",
					buttonCta: "Get the Board",
					tagline: "See Your Entire Deal Flow.",
					subtitle:
						"A clear, Kanban-style board in Notion to visually track every deal from lead to close.",
					whatsInItForMe:
						"Get a high-level view of your entire pipeline in seconds, so you instantly know where every deal stands.",
					target_audience:
						"Founders and sales teams who want a simple, visual way to manage their opportunities.",
					pain_point:
						"Deals are falling through the cracks because you can't easily see the status of your entire pipeline.",
					solution:
						"Our Kanban-style board gives you a crystal-clear, visual overview of your deal stages, ensuring nothing gets missed.",
					highlights: [
						"Visualize every deal",
						"Drag-and-drop simplicity",
						"Never lose a lead again",
					],
				},
			},
			{
				name: "V2 - Closing Faster",
				percentage: 50,
				copy: {
					cta: "Close Deals Faster",
					buttonCta: "Get the Pipeline",
					tagline: "Move Deals from Lead to Close.",
					subtitle:
						"The streamlined Notion pipeline board designed to help you increase sales velocity and close more deals.",
					whatsInItForMe:
						"This template helps you identify bottlenecks and focus your efforts, shortening your sales cycle and increasing revenue.",
					target_audience:
						"Sales-focused teams and founders who want to improve their sales process and increase revenue.",
					pain_point:
						"A disorganized sales process leads to a slow sales cycle and lost revenue.",
					solution:
						"This streamlined pipeline provides the structure needed to manage deals efficiently, reduce friction, and accelerate your sales cycle.",
					highlights: [
						"Shorten your sales cycle",
						"Identify and fix bottlenecks",
						"Increase sales velocity",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Notion", "Sales", "Pipeline", "Copywriting"],
	},
]);

export const notionStartupOsABTests = defineAbTests([
	{
		id: "ab-test-notion-startup-os-v1",
		name: "Notion Startup OS Copy Test",
		description:
			"Testing copy variants (All-in-One vs. Acceleration) for the Notion Startup OS to optimize sales.",
		variants: [
			{
				name: "V1 - All-in-One System",
				percentage: 50,
				copy: {
					cta: "Get Your All-in-One Workspace",
					buttonCta: "Get the OS",
					tagline: "Your Entire Startup in One Place.",
					subtitle:
						"The complete, all-in-one Notion workspace for startups. Manage product, marketing, hiring, and more.",
					whatsInItForMe:
						"Stop switching between a dozen apps. This OS centralizes your entire startup's operations, saving you time and money.",
					target_audience:
						"Early-stage startups looking for a single, central system to run their company.",
					pain_point:
						"Information is scattered across too many different tools, creating confusion and inefficiency.",
					solution:
						"Our Startup OS integrates all key business functions into a single, interconnected Notion workspace.",
					highlights: [
						"Manage everything in one place",
						"Stop paying for multiple tools",
						"Create a single source of truth",
					],
				},
			},
			{
				name: "V2 - Day One Acceleration",
				percentage: 50,
				copy: {
					cta: "Build Faster from Day One",
					buttonCta: "Install Now",
					tagline: "Get Organized. Move Faster.",
					subtitle:
						"The ultimate Notion workspace for startups, designed to get you organized and executing from day one.",
					whatsInItForMe:
						"This template gives you the structure you need to hit the ground running, so you can focus on building, not on setting up tools.",
					target_audience:
						"New founders who want to establish strong operational processes from the very beginning.",
					pain_point:
						"Setting up systems and processes from scratch is slow and distracts you from building your product.",
					solution:
						"This pre-built OS provides all the dashboards and templates you need to run efficiently from day one, giving you an instant operational boost.",
					highlights: [
						"Get organized instantly",
						"Focus on building your product",
						"Implement best practices",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Notion", "Startups", "Operations", "Copywriting"],
	},
]);

export const notionFundraisingTrackerABTests = defineAbTests([
	{
		id: "ab-test-notion-fundraising-tracker-v1",
		name: "Notion Fundraising Tracker Copy Test",
		description:
			"Testing copy variants (Organization vs. Closing Faster) for the Notion Fundraising Tracker to optimize sales.",
		variants: [
			{
				name: "V1 - Stay Organized",
				percentage: 50,
				copy: {
					cta: "Organize Your Fundraise",
					buttonCta: "Get Tracker",
					tagline: "Run a Stress-Free Fundraise.",
					subtitle:
						"Track investor outreach, commitments, and follow-ups in one clean Notion dashboard.",
					whatsInItForMe:
						"This template brings calm to the chaos of fundraising, ensuring you stay on top of every detail and run a professional process.",
					target_audience:
						"Founders who are currently or about to start fundraising.",
					pain_point:
						"Fundraising is a chaotic and stressful process where it's easy to drop the ball on critical follow-ups.",
					solution:
						"Our tracker provides a clear, simple system to manage every aspect of your raise, so nothing gets overlooked.",
					highlights: [
						"Track every conversation",
						"Manage your investor pipeline",
						"Run a professional process",
					],
				},
			},
			{
				name: "V2 - Close Faster",
				percentage: 50,
				copy: {
					cta: "Close Your Round Faster",
					buttonCta: "Get the Tracker",
					tagline: "From First Call to Term Sheet.",
					subtitle:
						"The Notion dashboard designed to help you manage momentum and close your fundraising round in record time.",
					whatsInItForMe:
						"A well-managed process creates momentum. This tracker helps you manage that momentum to get to a term sheet faster.",
					target_audience:
						"Goal-oriented founders who want to complete their fundraising round as efficiently as possible.",
					pain_point:
						"A disorganized fundraising process loses momentum, dragging out the timeline and risking the entire round.",
					solution:
						"This tracker gives you the tool to run a tight, efficient process that builds momentum and accelerates your path to closing.",
					highlights: [
						"Build and maintain momentum",
						"Accelerate your timeline",
						"Impress investors",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Notion", "Fundraising", "Startups", "Copywriting"],
	},
]);

export const notionTeamWikiABTests = defineAbTests([
	{
		id: "ab-test-notion-team-wiki-v1",
		name: "Notion Team Wiki Copy Test",
		description:
			"Testing copy variants (Centralized Knowledge vs. Faster Scaling) for the Notion Team Wiki to optimize sales.",
		variants: [
			{
				name: "V1 - Centralized Knowledge",
				percentage: 50,
				copy: {
					cta: "Create Your Single Source of Truth",
					buttonCta: "Get the Wiki",
					tagline: "Your Team's Central Brain.",
					subtitle:
						"A central wiki to document your team's processes, policies, and knowledge in one organized Notion workspace.",
					whatsInItForMe:
						"Stop answering the same questions over and over. This wiki becomes your team's single source of truth, saving everyone time.",
					target_audience:
						"Teams looking to eliminate repetitive questions and centralize company knowledge.",
					pain_point:
						"Key information is scattered, and team members constantly interrupt each other with repetitive questions.",
					solution:
						"Our template provides a structured home for all your team's knowledge, making information easy to find and share.",
					highlights: [
						"Stop repeating yourself",
						"Centralize company knowledge",
						"Easy to search and update",
					],
				},
			},
			{
				name: "V2 - Faster Scaling",
				percentage: 50,
				copy: {
					cta: "Onboard & Scale Your Team Faster",
					buttonCta: "Get the Handbook",
					tagline: "The Foundation for Growth.",
					subtitle:
						"The essential team wiki and handbook for onboarding new hires and scaling your company culture.",
					whatsInItForMe:
						"A good wiki makes onboarding new hires seamless, allowing you to grow your team without the chaos.",
					target_audience:
						"Growing startups that need to streamline their onboarding process and document their culture.",
					pain_point:
						"Onboarding new team members is a slow, manual, and inconsistent process that hinders your ability to scale.",
					solution:
						"This handbook template provides a scalable system for onboarding, ensuring every new hire gets up to speed quickly and consistently.",
					highlights: [
						"Onboard new hires in half the time",
						"Document your processes to scale",
						"Build a consistent culture",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Notion", "Team", "Onboarding", "Copywriting"],
	},
]);
