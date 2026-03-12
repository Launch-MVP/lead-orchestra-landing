import type { CaseStudy, Category } from "@/types/case-study";
import {
	aiIntegrationHowItWorks,
	aiPhoneAgentHowItWorks,
	dealScaleProprietaryProcess,
	followUpHowItWorks,
	generalHowItWorks,
	instantLeadEngagement,
	leadGenHowItWorks,
	offMarketAdvantageHowItWorks,
} from "../service/slug_data/how_it_works";
import { leadGenIntegrations } from "../service/slug_data/integrations";

export type CaseStudyCopyright = {
	title: string;
	subtitle: string;
	ctaText: string;
	ctaLink: string;
};

export const caseStudies: CaseStudy[] = [
	{
		id: "peridot-ig-activation-001",
		title:
			"Peridot launched a usable social MVP in 3 days instead of stalling in planning.",
		subtitle:
			"We helped Peridot cut the launch scope, define the core user flow, and ship a real MVP the team could put in front of users immediately.",
		referenceLink: "",
		slug: "peridot-competitor-lead-capture-instagram-activation",
		categories: ["mvp-strategy", "product-launch", "consumer-apps", "startups"],
		industries: ["consumer-apps", "social", "dating"],
		copyright: {
			title: "Need to launch without dragging scope forever?",
			subtitle:
				"We help founders turn rough product ideas into launch-ready MVPs with clean handoff and clear next steps.",
			ctaText: "Book a Consult",
			ctaLink: "/contact",
		},
		tags: [
			"Launch Scope",
			"Activation Flow",
			"Social MVP",
			"User Testing",
			"Launch Handoff",
			"3-Day Workshop",
		],
		clientName: "Peridot",
		clientDescription:
			"A consumer social product that needed to move from concept to usable MVP before momentum disappeared.",
		featuredImage:
			"https://images.unsplash.com/photo-1643639779556-f22985fb5bbc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		thumbnailImage:
			"https://images.unsplash.com/photo-1643639779556-f22985fb5bbc?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		businessChallenges: [
			"The team had strong conviction around the product but no clear definition of what the first launch version should include.",
			"Core onboarding, matching, and activation flows needed to work together without turning the MVP into a bloated roadmap.",
			"They needed something real to test with users fast, not another design-heavy planning cycle.",
			"The build needed enough structure that future engineering work would not start from a throwaway prototype.",
			"Launch timing mattered because traction depended on getting the product into users' hands quickly.",
		],
		lastModified: new Date("2026-01-29T00:00:00.000Z"),
		howItWorks: [
			{
				stepNumber: 1,
				title: "Define Targeting + Streams",
				subtitle: "Lock targeting spec + volume plan",
				description:
					"We align on market radius, demographic filters, exclusion rules, and two-stream inputs: Competitor Stream (competitor surfaces) + Creator Stream (public IG/TikTok follower surfaces).",
				label: "Spec + Inputs",
				positionLabel: "Kickoff",
				payload: [
					{ name: "Targeting Spec", value: 30, fill: "#3b82f6" },
					{ name: "Source List", value: 35, fill: "#22c55e" },
					{ name: "Exclusions", value: 35, fill: "#f59e0b" },
				],
				indicator: "line",
				icon: "SlidersHorizontal",
			},
			{
				stepNumber: 2,
				title: "Source + Normalize Leads",
				subtitle: "Raw-only writes, then qualification",
				description:
					"Scrape to Raw tables only, create provisional dedupe keys, then run deterministic qualification using the Targeting Spec (market match, distance estimate, disqualification reasons).",
				label: "Raw → Qualified",
				positionLabel: "Pipeline",
				payload: [
					{ name: "Raw Capture", value: 40, fill: "#60a5fa" },
					{ name: "Qualification", value: 35, fill: "#34d399" },
					{ name: "Dedupe Prep", value: 25, fill: "#a78bfa" },
				],
				indicator: "line",
				icon: "Database",
			},
			{
				stepNumber: 3,
				title: "Social Attribution + Identity Recovery",
				subtitle: "IG handle + name fields when available",
				description:
					"For qualified competitor leads, we attempt social-first attribution (IG handle) and best-available name extraction when present on-source (no guessing).",
				label: "Enrichment",
				positionLabel: "Jobs A/B",
				payload: [
					{ name: "IG Attribution", value: 45, fill: "#22c55e" },
					{ name: "Name Fields", value: 25, fill: "#f59e0b" },
					{ name: "Confidence Tags", value: 30, fill: "#3b82f6" },
				],
				indicator: "dot",
				icon: "Fingerprint",
			},
			{
				stepNumber: 4,
				title: "Automated Outreach Ops",
				subtitle: "Aged account + controlled DM sending",
				description:
					"Outbound is executed from an aged Instagram account with controlled sending, throttling, and a standardized message prompt provided by Client. Client handles handoff + replies unless otherwise contracted.",
				label: "Outbound",
				positionLabel: "IG DMs",
				payload: [
					{ name: "Rate Limits", value: 35, fill: "#f59e0b" },
					{ name: "Deliverability", value: 35, fill: "#22c55e" },
					{ name: "Consistency", value: 30, fill: "#3b82f6" },
				],
				indicator: "line",
				icon: "MessageSquare",
			},
			{
				stepNumber: 5,
				title: "Delivery + Reporting",
				subtitle: "Weekly rollups + QA flags",
				description:
					"Deliver structured batches with tags (stream, platform, confidence) and clear rollups: volume delivered, dedupe rate, and attribution coverage. Maintain auditability for every record.",
				label: "Delivery",
				positionLabel: "Weekly",
				payload: [
					{ name: "Batches", value: 40, fill: "#3b82f6" },
					{ name: "QA + Audit", value: 35, fill: "#a78bfa" },
					{ name: "Coverage", value: 25, fill: "#22c55e" },
				],
				indicator: "dashed",
				icon: "FileCheck",
			},
		],
		businessOutcomes: [
			{
				title: "Launch Scope Locked",
				subtitle:
					"The first version focused on the critical activation path only",
			},
			{
				title: "Faster Time to Market",
				subtitle: "The team moved from planning into a usable MVP quickly",
			},
			{
				title: "Cleaner Handoff",
				subtitle:
					"Engineering decisions, launch notes, and next steps were documented",
			},
			{
				title: "Validation Ready",
				subtitle:
					"The product could be shown, tested, and iterated with real users",
			},
		],
		solutions: [
			"Cut the concept down to a launchable version centered on the must-have user journey",
			"Defined the stack, system boundaries, and launch sequence before build accelerated",
			"Built the first version around activation, not edge-case feature volume",
			"Preserved clean structure so post-launch iterations did not require a rewrite",
			"Documented launch decisions and roadmap priorities for the next cycle",
		],
		techStacks: [
			{
				category: "Data + Ops",
				libraries: [
					{
						name: "Notion / Sheet Delivery",
						description: "Batch delivery + rollups for weekly drops.",
					},
					{
						name: "Deduplication Rules",
						description: "Provisional keys + canonical merge strategy.",
					},
				],
			},
			{
				category: "Automation",
				libraries: [
					{
						name: "Instagram DM Ops",
						description: "Controlled message sending from aged account.",
					},
					{
						name: "Qualification Jobs",
						description: "Deterministic scoring from targeting spec.",
					},
				],
			},
		],
		description:
			"Peridot needed to stop circling the idea and get a real product in front of users. We narrowed the MVP to the activation path that mattered most, defined the delivery shape clearly, and helped the team move into launch with a usable product and a cleaner roadmap. The result was not just speed. It was speed with enough structure that the next iteration could build on the work instead of replacing it.",
		results: [
			{ title: "Launch version", value: "Defined and shipped" },
			{ title: "Core workflow", value: "Activation focused" },
			{
				title: "Handoff",
				value: "Clean repo and roadmap",
			},
			{
				title: "Next step",
				value: "Iteration-ready",
			},
		],
		featured: true,
		redirectToContact: true,
	},
	{
		id: "bookt-custom-lead-engine-01",
		title:
			"Bookt turned a broad concept into a sharper MVP their team could actually sell.",
		subtitle:
			"We helped Bookt define the right version-one workflow, remove unnecessary scope, and launch an MVP aligned to how the business actually closes customers.",
		slug: "bookt-custom-lead-generation-engine",
		categories: ["mvp-strategy", "go-to-market", "saas", "startups"],
		industries: ["saas", "event-management"],
		copyright: {
			title: "Need sharper product scope before you build?",
			subtitle:
				"We turn broad product ideas into focused launch plans and MVPs built around the user journey that matters first.",
			ctaText: "Start With Strategy",
			ctaLink: "/contact",
		},
		tags: [
			"Product Strategy",
			"Workflow Design",
			"Sales Alignment",
			"Launch Scope",
			"B2B SaaS",
		],
		clientName: "Bookt",
		clientDescription:
			"A SaaS platform that needed a product structure aligned to how its buyers actually discovered value.",
		featuredImage:
			"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"The concept was promising, but the first version was too broad to build and test efficiently.",
			"The team needed a product flow that reflected how real customers evaluated and bought the solution.",
			"Too much energy was going into possibilities instead of a launchable version with clear business value.",
		],
		lastModified: new Date("2025-12-15T10:00:00.000Z"),
		howItWorks: leadGenHowItWorks,
		businessOutcomes: [
			{
				title: "Sharper MVP Definition",
				subtitle:
					"The product shifted from broad concept to a version-one workflow tied to real customer behavior",
			},
			{
				title: "Faster Sales Readiness",
				subtitle:
					"The team had a more credible product to show, demo, and learn from quickly",
			},
		],
		solutions: [
			"Cut the scope to the workflow customers needed to understand value fast",
			"Aligned product decisions to real buyer behavior and launch sequencing",
			"Created a clearer delivery path instead of allowing the roadmap to expand indefinitely",
		],
		description:
			"Bookt did not need more surface-level feature ideas. It needed a version of the product that mapped to how customers understood value and how the team wanted to sell. We helped define that product shape, remove distracting scope, and focus the MVP around the behavior that mattered. The result was a sharper launch version and a clearer path to learning from the market instead of debating internally.",
		results: [
			{
				title: "Version-one focus",
				value: "Clarified",
			},
			{
				title: "Sales alignment",
				value: "Improved",
			},
			{
				title: "Launch path",
				value: "Defined",
			},
		],
		featured: true,
		redirectToContact: false,
	},
	{
		id: "developer-growth-engineer-01",
		title:
			"A founding engineer shipped the MVP without inheriting a cleanup project.",
		subtitle:
			"We helped a startup engineer move from scattered prototype work to a cleaner MVP foundation that could ship fast and still support future product work.",
		slug: "developer-replaced-scraping-code-mcp-plugin",
		categories: ["technical-foundation", "mvp-build", "engineering-handoff", "startups"],
		industries: ["saas", "startups"],
		copyright: {
			title: "Need speed without technical debt?",
			subtitle:
				"We help technical teams scope and ship the launch version without turning the MVP into a future rewrite.",
			ctaText: "Book a Technical Review",
			ctaLink: "/contact",
		},
		tags: [
			"Clean Architecture",
			"MVP Build",
			"Engineering Handoff",
			"Launch Foundation",
			"Technical Debt Control",
		],
		clientName: "Senior Growth Engineer, 20-person SaaS Startup",
		clientDescription:
			"A startup engineer who needed the MVP shipped quickly but did not want to sacrifice architecture quality to get there.",
		featuredImage:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"The team had enough prototype work to move forward, but not enough structure to launch confidently.",
			"Core engineering time was getting absorbed by cleanup and implementation drift instead of product progress.",
			"The MVP needed to ship quickly without becoming technical debt the team would regret.",
			"Future feature work depended on getting the foundation right the first time.",
		],
		lastModified: new Date("2025-01-21T10:00:00.000Z"),
		howItWorks: generalHowItWorks,
		businessOutcomes: [
			{
				title: "Cleaner Launch Foundation",
				subtitle:
					"The MVP moved onto a structure the team could extend instead of rebuild",
			},
			{
				title: "Faster Iteration Velocity",
				subtitle:
					"Engineering time shifted from cleanup into real product iteration after launch",
			},
		],
		solutions: [
			"Clarified what needed to exist for launch versus what could wait for later versions",
			"Structured the implementation around maintainability, not one-off speed hacks",
			"Handled critical launch systems early so the MVP stayed coherent under timeline pressure",
			"Created a cleaner handoff path for ongoing product work",
		],
		description:
			"This engagement was about more than moving fast. It was about moving fast without creating a problem the team would have to undo later. We helped turn scattered MVP work into a cleaner launch foundation, define what really belonged in version one, and keep the build usable for future engineering. The result was faster delivery and a much healthier starting point for iteration.",
		results: [
			{
				title: "Foundation",
				value: "Launch-ready",
			},
			{
				title: "Handoff",
				value: "Clean",
			},
			{
				title: "Next iteration",
				value: "Unblocked",
			},
		],
		featured: false,
		redirectToContact: false,
	},
	{
		id: "enterprise-greenfield-innovation",
		title:
			"How a global enterprise launched a greenfield initiative in 6 weeks instead of 6 months.",
		subtitle:
			"We acted as a dedicated strike team to bypass internal bureaucracy, rapidly prototyping and launching a zero-to-one product for a major corporate innovation lab.",
		slug: "enterprise-greenfield-rapid-prototype",
		categories: ["mvp-strategy", "enterprise-innovation", "rapid-prototyping", "enterprise"],
		industries: ["enterprise", "fintech"],
		copyright: {
			title: "Stuck in enterprise planning cycles?",
			subtitle:
				"We help corporate teams and innovation labs move at startup speed to ship greenfield projects.",
			ctaText: "Accelerate Your Initiative",
			ctaLink: "/contact",
		},
		tags: [
			"Enterprise Innovation",
			"Greenfield Project",
			"Rapid Prototyping",
			"Zero-to-One",
			"Corporate Strategy",
		],
		clientName: "Global Fintech Innovation Lab",
		clientDescription:
			"An enterprise innovation team that needed to bypass internal red tape to test a new market opportunity quickly.",
		featuredImage:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"Internal IT and compliance reviews were turning a 4-week prototype into a 6-month roadmap.",
			"The team needed external validation with real users before committing larger corporate resources.",
			"Existing internal engineering teams were fully booked with legacy system maintenance.",
		],
		lastModified: new Date("2026-02-15T00:00:00.000Z"),
		howItWorks: generalHowItWorks,
		businessOutcomes: [
			{
				title: "Shipped in 6 Weeks",
				subtitle:
					"Bypassed internal delays to get a working product in front of users",
			},
			{
				title: "Executive Buy-in",
				subtitle:
					"Real user data secured the budget for full internal integration",
			},
		],
		solutions: [
			"Operated as an independent strike team outside the legacy corporate infrastructure",
			"Focused strictly on core value delivery, aggressively cutting 'enterprise bloat' from the V1",
			"Delivered a clean codebase that internal teams could later inherit and scale",
		],
		description:
			"When a global fintech's innovation lab wanted to test a new product, their internal processes demanded months of planning. We stepped in as an external strike team. By ruthlessly scoping the MVP, we built and launched a functional prototype in just six weeks. This allowed the corporate strategy team to prove the concept's viability and secure funding without getting bogged down in initial bureaucracy.",
		results: [
			{
				title: "Time to Market",
				value: "6 Weeks",
			},
			{
				title: "User Validation",
				value: "Proven",
			},
			{
				title: "Next Phase",
				value: "Funded",
			},
		],
		featured: true,
		redirectToContact: true,
	},
	{
		id: "non-technical-founder-mvp-01",
		title:
			"How a non-technical founder launched a generative AI MVP replacing an entire data operation.",
		subtitle:
			"We acted as the technical engine for a domain expert, translating their industry knowledge into a fully functional product in 4 weeks.",
		slug: "non-technical-founder-ai-mvp-build",
		categories: ["founders", "mvp-build", "ai-integration", "startups"],
		industries: ["ai", "startups"],
		copyright: {
			title: "Have the vision but missing the code?",
			subtitle:
				"Pilot Spring partners with non-technical founders to build, launch, and scale their platforms smoothly.",
			ctaText: "Bring Your Idea to Life",
			ctaLink: "/contact",
		},
		tags: [
			"Non-Technical Founder",
			"AI MVP",
			"Rapid Build",
			"Zero-to-One",
			"Data Automation",
		],
		clientName: "Domain Expert & Solo Founder",
		clientDescription:
			"A solo founder with deep industry expertise who needed a technical team to build out their AI-powered service.",
		featuredImage:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"The founder understood the problem intimately but couldn't code the solution.",
			"Off-the-shelf no-code tools lacked the depth necessary for complex AI and data parsing.",
			"Finding a reliable technical co-founder was delaying the launch by months.",
		],
		lastModified: new Date("2026-03-01T00:00:00.000Z"),
		howItWorks: generalHowItWorks,
		businessOutcomes: [
			{
				title: "Launched in 4 Weeks",
				subtitle:
					"Turned a complex workflow into a living, breathing SaaS application",
			},
			{
				title: "Zero Technical Debt",
				subtitle:
					"Built on a scalable, modern stack ready for investor due diligence",
			},
		],
		solutions: [
			"Managed the entire technical scoping and build process",
			"Implemented an AI-first workflow to automate manual data analysis",
			"Shipped a clean, responsive UI optimized for initial early-adopter sales",
		],
		description:
			"This domain expert knew exactly what the market needed but didn't know how to build it. We stepped in to serve as their complete technical arm. Over four weeks, we took the product from wireframes to a live application featuring generative AI integrations and custom automated pipelines. The result was a successful MVP that secured their first 10 paying customers within days of launch.",
		results: [
			{
				title: "Time to Build",
				value: "4 Weeks",
			},
			{
				title: "Technical Handoff",
				value: "Turnkey",
			},
			{
				title: "Early Revenue",
				value: "Secured",
			},
		],
		featured: true,
		redirectToContact: false,
	},
	{
		id: "enterprise-data-pipeline-scale",
		title:
			"How an enterprise growth team automated 10,000 monthly lead reviews with a custom scraping engine.",
		subtitle:
			"We built a high-volume, compliant data ingestion pipeline that allowed a 50-person sales team to focus purely on closing deals.",
		slug: "enterprise-custom-scraping-and-enrichment",
		categories: ["enterprise", "technical-foundation", "automation"],
		industries: ["enterprise", "sales-ops"],
		copyright: {
			title: "Scaling beyond manual data tasks?",
			subtitle:
				"Pilot Spring helps enterprise teams build custom data pipelines and automation systems to unlock their growth potential.",
			ctaText: "Automate Your Pipeline",
			ctaLink: "/contact",
		},
		tags: [
			"Enterprise Scale",
			"Data Engineering",
			"Custom Scraping",
			"Sales Automation",
			"Pipeline Optimization",
		],
		clientName: "Enterprise RevOps Team",
		clientDescription:
			"A high-growth enterprise sales organization bogged down by manual prospecting and outdated lead enrichment.",
		featuredImage:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"SDRs were spending 40% of their day manually scraping and verifying lead data.",
			"Existing data enrichment platforms were too generic and didn't pull niche industry signals.",
			"The volume of required leads outpaced the team's ability to maintain data quality.",
		],
		lastModified: new Date("2026-03-05T00:00:00.000Z"),
		howItWorks: aiIntegrationHowItWorks,
		businessOutcomes: [
			{
				title: "10,000+ Profiles Processed",
				subtitle:
					"Monthly automatic enrichment volume scaled without adding headcount",
			},
			{
				title: "40% Time Saved",
				subtitle:
					"SDRs regained almost half their week for active, high-value selling",
			},
		],
		solutions: [
			"Developed a headless, proxy-rotated scraping layer tailored to specific target platforms",
			"Integrated dynamic AI qualification logic to automatically discard irrelevant accounts",
			"Piped cleaned, scored data directly into the enterprise CRM in real-time",
		],
		description:
			"An enterprise sales team was paralyzing its own growth by relying on manual data gathering. We engineered a bespoke scraping and enrichment engine that ingested specific market signals continuously. By routing only high-quality, deeply enriched leads to their CRM, we eliminated thousands of hours of manual labor and significantly boosted their conversion velocity.",
		results: [
			{
				title: "Weekly Hours Saved",
				value: "500+",
			},
			{
				title: "Pipeline Accuracy",
				value: "99%",
			},
			{
				title: "Implementation",
				value: "Seamless",
			},
		],
		featured: true,
		redirectToContact: true,
	}
];

export const caseStudyCategories: Category[] = [
	{ id: "all", name: "All" },
	...Array.from(new Set(caseStudies.flatMap((study) => study.categories))).map(
		(category) => ({
			id: category,
			name: category.charAt(0).toUpperCase() + category.slice(1),
		}),
	),
];
