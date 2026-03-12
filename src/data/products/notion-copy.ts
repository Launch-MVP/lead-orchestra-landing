import { defineAbTests } from "./copy";

export const notionInvestorCrmABTests = defineAbTests([
	{
		id: "ab-test-notion-crm-v1",
		name: "Notion Founder CRM Copy Test",
		description:
			"Testing copy variants for the founder CRM template in a Pilot Spring context.",
		variants: [
			{
				name: "V1 - Organization & Control",
				percentage: 50,
				copy: {
					cta: "Organize Your Launch Relationships",
					buttonCta: "Get the CRM",
					tagline: "One CRM for Launch Momentum.",
					subtitle:
						"A founder-friendly Notion CRM for tracking investors, partners, prospects, and launch-critical conversations in one place.",
					whatsInItForMe:
						"You stop juggling scattered notes and keep the people who matter to the launch in one usable system.",
					target_audience:
						"Founders managing fundraising, pilots, or launch relationships.",
					pain_point:
						"Critical follow-ups get lost when investor, partner, and prospect conversations live across notes, email, and memory.",
					solution:
						"Our Notion CRM centralizes the key launch relationships and their status into a single founder dashboard.",
					highlights: [
						"Track every conversation",
						"Never miss a follow-up",
						"Keep launch context visible",
					],
				},
			},
			{
				name: "V2 - Relationship & Capital",
				percentage: 50,
				copy: {
					cta: "Run Founder Outreach More Cleanly",
					buttonCta: "Get the Template",
					tagline: "Relationships That Support the Launch.",
					subtitle:
						"The essential Notion CRM for building stronger investor, advisor, and partner relationships around the MVP launch.",
					whatsInItForMe:
						"You build more momentum because the right people, conversations, and next steps stay organized.",
					target_audience:
						"Founders who need stronger relationship management around fundraising and go-to-market.",
					pain_point:
						"When relationship management is loose, both fundraising and launch partnerships lose momentum.",
					solution:
						"This CRM gives founders a cleaner system for nurturing the relationships that move the launch forward.",
					highlights: [
						"Build stronger relationships",
						"Support launch momentum",
						"Turn contacts into next steps",
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
		name: "Notion MVP Pipeline Copy Test",
		description: "Testing copy variants for the MVP pipeline board.",
		variants: [
			{
				name: "V1 - Visual Tracking",
				percentage: 50,
				copy: {
					cta: "Visualize the Launch Pipeline",
					buttonCta: "Get the Board",
					tagline: "See the Work Move.",
					subtitle:
						"A clear, Kanban-style board in Notion to track launch work, pilots, and active opportunities from first touch to shipped outcome.",
					whatsInItForMe:
						"Get a high-level view of your entire pipeline in seconds, so you instantly know where every deal stands.",
					target_audience:
						"Founders and small teams who want a simple visual way to manage launch activity.",
					pain_point:
						"Launch work falls through the cracks when there is no shared view of what is moving, blocked, or done.",
					solution:
						"Our Kanban-style board gives you a shared visual pipeline so work, follow-up, and opportunities stay visible.",
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
					cta: "Move Launch Work Faster",
					buttonCta: "Get the Pipeline",
					tagline: "Reduce Friction Across the Launch.",
					subtitle:
						"The streamlined Notion board designed to help founders reduce bottlenecks and move the MVP toward launch faster.",
					whatsInItForMe:
						"This template helps you spot delays earlier so the launch does not slow down because of invisible blockers.",
					target_audience:
						"Founders and operators who want better launch coordination.",
					pain_point:
						"A disorganized delivery pipeline creates delays, missed follow-ups, and slower launches.",
					solution:
						"This streamlined board provides the structure needed to manage launch work efficiently and accelerate execution.",
					highlights: [
						"Shorten the launch cycle",
						"Identify and fix bottlenecks",
						"Increase execution velocity",
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
					cta: "Get the Pilot Spring Workspace",
					buttonCta: "Get the OS",
					tagline: "One Workspace for Product and Launch.",
					subtitle:
						"The complete Notion workspace for Pilot Spring teams managing product scope, marketing, hiring, fundraising, and launch execution.",
					whatsInItForMe:
						"Stop switching between a dozen apps. This OS centralizes your entire startup's operations, saving you time and money.",
					target_audience:
						"Early-stage founders who want a single system for building and launching.",
					pain_point:
						"Information is scattered across too many different tools, creating confusion and inefficiency.",
					solution:
						"Our Pilot Spring OS integrates product, launch, and operating functions into one interconnected Notion workspace.",
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
					cta: "Operate Faster From Day One",
					buttonCta: "Install Now",
					tagline: "Get Organized. Move Faster.",
					subtitle:
						"The Notion workspace for founders who want a cleaner system for scoping, building, and launching from day one.",
					whatsInItForMe:
						"This template gives you the structure you need to hit the ground running, so you can focus on building, not on setting up tools.",
					target_audience:
						"New founders who want to establish strong operational processes from the very beginning.",
					pain_point:
						"Setting up systems from scratch slows down product work and launch prep at the exact moment speed matters most.",
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
					cta: "Organize the Raise and Launch",
					buttonCta: "Get Tracker",
					tagline: "Keep the Raise and Product Story Aligned.",
					subtitle:
						"Track investor outreach, commitments, follow-ups, and launch milestones in one clean Notion dashboard.",
					whatsInItForMe:
						"This template brings calm to the chaos of fundraising, ensuring you stay on top of every detail and run a professional process.",
					target_audience:
						"Founders fundraising while preparing a product launch.",
					pain_point:
						"Fundraising is a chaotic and stressful process where it's easy to drop the ball on critical follow-ups.",
					solution:
						"Our tracker provides one system for managing the raise and the launch narrative so nothing gets overlooked.",
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
					cta: "Keep Fundraising Momentum High",
					buttonCta: "Get the Tracker",
					tagline: "From First Call to Term Sheet.",
					subtitle:
						"The Notion dashboard designed to help you manage fundraising momentum while keeping the product story launch-ready.",
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
						"Keep launch traction visible",
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
					cta: "Create the Launch Handbook",
					buttonCta: "Get the Wiki",
					tagline: "The Team Brain for Launch.",
					subtitle:
						"A central wiki for documenting processes, product context, launch checklists, and operating knowledge in one Notion workspace.",
					whatsInItForMe:
						"Stop answering the same questions over and over. This wiki becomes your team's single source of truth, saving everyone time.",
					target_audience:
						"Teams looking to centralize launch knowledge and reduce repeated questions.",
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
					cta: "Onboard the Next Teammate Faster",
					buttonCta: "Get the Handbook",
					tagline: "The Foundation for Growth.",
					subtitle:
						"The team wiki and handbook for onboarding new hires while preserving the product and launch context they need to execute well.",
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
