import { defineAbTests } from "./copy";

export const ossScraperStarterPackABTest = defineAbTests([
	{
		id: "ab-test-mvp-scope-starter",
		name: "MVP Scope Starter Pack Messaging",
		description: "Messaging for the MVP scope starter resource.",
		variants: [
			{
				name: "V1 - Foundational Clarity",
				percentage: 100,
				copy: {
					cta: "Start Scoping the Right MVP",
					buttonCta: "Get the Starter Pack",
					tagline: "Clarity Before Code.",
					subtitle:
						"A founder-ready starter pack for turning rough ideas into a usable MVP scope.",
					description:
						"Use the exact checklists, prompt frames, and scoping structure we use to cut noise and define a real version-one product.",
					whatsInItForMe:
						"You stop guessing what to build first and get a clearer path to a launchable MVP.",
					target_audience: "Founders and early product teams.",
					pain_point:
						"Most MVPs stall because the first version is too fuzzy, too big, or too technical too early.",
					solution:
						"A practical starter pack that sharpens scope, priorities, and launch decisions.",
					highlights: [
						"Scope checklist",
						"Prioritization prompts",
						"Launch framing",
						"Founder memo",
					],
					highlighted_words: ["Clarity", "Scope", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Strategy", "MVP"],
	},
])[0];

export const mcpScraperTemplatesABTest = defineAbTests([
	{
		id: "ab-test-launch-workshop-templates",
		name: "Launch Workshop Templates Messaging",
		description: "Messaging for reusable launch workshop templates.",
		variants: [
			{
				name: "V1 - Reusable Systems",
				percentage: 100,
				copy: {
					cta: "Reuse the Launch Templates",
					buttonCta: "Get the Templates",
					tagline: "Templates That Remove Thrash.",
					subtitle:
						"Workshop templates for MVP planning, launch messaging, user stories, and delivery handoff.",
					description:
						"Start from a cleaner system instead of rebuilding the same docs every time a new product idea shows up.",
					whatsInItForMe:
						"You save hours on setup and move faster from idea to an organized build plan.",
					target_audience: "Founders, operators, and product consultants.",
					pain_point:
						"Every new product starts with blank docs, scattered notes, and inconsistent decisions.",
					solution:
						"A reusable template bundle built for fast MVP planning and delivery.",
					highlights: [
						"Workshop docs",
						"User-story frames",
						"Launch docs",
						"Handoff notes",
					],
					highlighted_words: ["Templates", "Faster", "Delivery"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Templates", "Operations"],
	},
])[0];

export const lsfSpecABTest = defineAbTests([
	{
		id: "ab-test-launch-spec",
		name: "Launch Spec Messaging",
		description: "Messaging for the MVP brief specification.",
		variants: [
			{
				name: "V1 - Shared Language",
				percentage: 100,
				copy: {
					cta: "Standardize the MVP Brief",
					buttonCta: "Download the Spec",
					tagline: "A Better Product Brief.",
					subtitle:
						"A concise spec format for product scope, technical decisions, and launch readiness.",
					description:
						"Use one structure for feature intent, constraints, integrations, and launch goals so product, design, and engineering stop drifting.",
					whatsInItForMe:
						"You get a cleaner handoff format that reduces rebuilds and confused implementation.",
					target_audience: "Founders, PMs, and engineering leads.",
					pain_point:
						"Product briefs are often incomplete, inconsistent, and hard to implement without guesswork.",
					solution:
						"A shared specification format that keeps delivery decisions explicit and aligned.",
					highlights: [
						"Feature intent",
						"Constraints",
						"Integration notes",
						"Launch criteria",
					],
					highlighted_words: ["Brief", "Spec", "Aligned"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Specification", "Build"],
	},
])[0];

export const scrapingUniversityABTest = defineAbTests([
	{
		id: "ab-test-mvp-mini-lessons",
		name: "MVP Mini Lessons Messaging",
		description: "Messaging for the short lesson library.",
		variants: [
			{
				name: "V1 - Practical Lessons",
				percentage: 100,
				copy: {
					cta: "Learn the MVP Fundamentals",
					buttonCta: "Start the Lessons",
					tagline: "Short Lessons. Better Decisions.",
					subtitle:
						"Fast lessons on scope cutting, MVP tradeoffs, analytics, UX planning, and launch sequencing.",
					description:
						"These lessons condense the real mistakes founders make before launch and show how to avoid them.",
					whatsInItForMe:
						"You learn how to make faster product decisions without burning weeks on research loops.",
					target_audience: "Founders and first-time product builders.",
					pain_point:
						"Most product advice is either too abstract or too bloated to use in a real MVP sprint.",
					solution:
						"A compact lesson library focused on practical launch decisions.",
					highlights: [
						"Scope cutting",
						"Launch sequencing",
						"Analytics basics",
						"UX tradeoffs",
					],
					highlighted_words: ["Lessons", "Practical", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Education", "MVP"],
	},
])[0];

export const nicheLeadSourcesABTest = defineAbTests([
	{
		id: "ab-test-customer-interview-sources",
		name: "Customer Interview Sources Messaging",
		description: "Messaging for the user-research source list.",
		variants: [
			{
				name: "V1 - Better Inputs",
				percentage: 100,
				copy: {
					cta: "Find Better User Inputs",
					buttonCta: "Get the Source List",
					tagline: "Start With Real Signals.",
					subtitle:
						"A curated list of places to find customers, communities, and demand signals before building.",
					description:
						"Use these sources to validate pain, language, and buying behavior before you commit to the wrong MVP.",
					whatsInItForMe:
						"You get better evidence for what users actually need, not just what your team assumes.",
					target_audience: "Founders, strategists, and growth teams.",
					pain_point:
						"Teams build from intuition alone and miss the customer language that should shape the product.",
					solution:
						"A practical list of research sources for sharper problem validation.",
					highlights: [
						"Communities",
						"Review sites",
						"Buyer language",
						"Demand clues",
					],
					highlighted_words: ["Signals", "Users", "Validation"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Research", "ICP"],
	},
])[0];

export const listBuildingChallengeABTest = defineAbTests([
	{
		id: "ab-test-launch-challenge",
		name: "Launch Challenge Messaging",
		description: "Messaging for the launch challenge.",
		variants: [
			{
				name: "V1 - Action Plan",
				percentage: 100,
				copy: {
					cta: "Launch Momentum in 7 Days",
					buttonCta: "Join the Challenge",
					tagline: "A Week of Real Progress.",
					subtitle:
						"A guided seven-day challenge to clarify the MVP, tighten the launch message, and prepare for launch.",
					description:
						"Each day gives you one focused task so you leave the week with a more usable plan and fewer loose ends.",
					whatsInItForMe:
						"You stop circling the same ideas and build momentum through concrete daily progress.",
					target_audience: "Founders who need structure to move.",
					pain_point:
						"Without a sequence, important launch work gets postponed until the MVP is already late.",
					solution:
						"A day-by-day challenge that forces useful decisions and visible forward motion.",
					highlights: [
						"Daily tasks",
						"Launch prompts",
						"Scope checks",
						"Momentum",
					],
					highlighted_words: ["7 Days", "Progress", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Challenge", "Execution"],
	},
])[0];

export const agencyLeadMachineABTest = defineAbTests([
	{
		id: "ab-test-founder-funnel-kit",
		name: "Founder Funnel Kit Messaging",
		description: "Messaging for the founder launch funnel kit.",
		variants: [
			{
				name: "V1 - Offer System",
				percentage: 100,
				copy: {
					cta: "Build a Cleaner Offer Funnel",
					buttonCta: "Download Funnel Kit",
					tagline: "Launch With a Real Offer.",
					subtitle:
						"A simple funnel kit for packaging your MVP offer, landing page, and consultation path.",
					description:
						"Use the same structure to explain the offer, route demand, and keep your launch messaging coherent across the site.",
					whatsInItForMe:
						"You get a faster path from product idea to a credible market-facing offer.",
					target_audience: "Founders and solo operators.",
					pain_point:
						"Strong products still underperform when the offer and landing flow are vague.",
					solution:
						"A founder funnel kit that simplifies positioning, CTA flow, and launch setup.",
					highlights: [
						"Offer framing",
						"Landing structure",
						"Consult CTA",
						"Messaging prompts",
					],
					highlighted_words: ["Offer", "Funnel", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Go-To-Market", "Offer"],
	},
])[0];

export const appointmentSetterPlaybookABTest = defineAbTests([
	{
		id: "ab-test-founder-call-playbook",
		name: "Founder Call Playbook Messaging",
		description: "Messaging for the consultation playbook.",
		variants: [
			{
				name: "V1 - Better Calls",
				percentage: 100,
				copy: {
					cta: "Run Better Founder Calls",
					buttonCta: "Get the Playbook",
					tagline: "Calls That Clarify the Build.",
					subtitle:
						"A call structure for discovery, scope clarification, objections, and next-step decisions.",
					description:
						"Use this playbook to turn vague intro calls into sharper product direction and a better-qualified next step.",
					whatsInItForMe:
						"You leave more calls with usable clarity instead of loose notes and unclear follow-up.",
					target_audience: "Founders, consultants, and product operators.",
					pain_point:
						"Discovery calls often create more ambiguity instead of narrowing the right build path.",
					solution:
						"A founder call playbook that keeps conversation focused on product and launch decisions.",
					highlights: [
						"Discovery prompts",
						"Objection handling",
						"Scope cues",
						"Next steps",
					],
					highlighted_words: ["Calls", "Clarity", "Decisions"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Consulting", "Calls"],
	},
])[0];

export const sdrProspectingPackABTest = defineAbTests([
	{
		id: "ab-test-founder-outreach-pack",
		name: "Founder Outreach Pack Messaging",
		description: "Messaging for the beta outreach pack.",
		variants: [
			{
				name: "V1 - Beta Recruitment",
				percentage: 100,
				copy: {
					cta: "Recruit Better Beta Users",
					buttonCta: "Download Outreach Pack",
					tagline: "Outreach for Early Validation.",
					subtitle:
						"Templates for beta invites, user interviews, follow-up notes, and launch feedback requests.",
					description:
						"Use cleaner outreach and follow-up language so validation does not collapse into awkward founder DMs.",
					whatsInItForMe:
						"You get a faster path to credible user feedback before and after launch.",
					target_audience: "Founders and product marketers.",
					pain_point:
						"Teams know they need user feedback, but the outreach process is messy and inconsistent.",
					solution:
						"A beta outreach pack that gives you usable messages and follow-up structure.",
					highlights: [
						"Invite templates",
						"Interview asks",
						"Follow-up notes",
						"Feedback loops",
					],
					highlighted_words: ["Beta", "Outreach", "Feedback"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Validation", "Messaging"],
	},
])[0];

export const gtmPlaybooksABTest = defineAbTests([
	{
		id: "ab-test-launch-playbooks",
		name: "Launch Playbooks Messaging",
		description: "Messaging for the launch playbook bundle.",
		variants: [
			{
				name: "V1 - Practical Plays",
				percentage: 100,
				copy: {
					cta: "Get the Launch Playbooks",
					buttonCta: "Download Playbooks",
					tagline: "Weekly Plays for Shipping Faster.",
					subtitle:
						"A set of practical launch playbooks covering messaging, validation, content, and follow-through.",
					description:
						"Use the same playbook structure to reduce thrash across launch planning, content, and user activation.",
					whatsInItForMe:
						"You get repeatable launch plays instead of rebuilding the go-to-market plan from scratch every week.",
					target_audience: "Founders and GTM operators.",
					pain_point:
						"Launch planning gets fragmented when every channel and task uses a different structure.",
					solution:
						"A consistent library of launch plays for the weeks around release.",
					highlights: [
						"Weekly plays",
						"Messaging angles",
						"Activation ideas",
						"Post-launch follow-up",
					],
					highlighted_words: ["Playbooks", "Weekly", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "GTM", "Playbooks"],
	},
])[0];

export const hubspotKitABTest = defineAbTests([
	{
		id: "ab-test-launch-ops-kit",
		name: "Launch Ops Kit Messaging",
		description: "Messaging for the operations kit.",
		variants: [
			{
				name: "V1 - Operational Hygiene",
				percentage: 100,
				copy: {
					cta: "Clean Up Launch Operations",
					buttonCta: "Get the Ops Kit",
					tagline: "A Cleaner Launch Back Office.",
					subtitle:
						"Templates for launch checklists, issue logging, analytics review, and handoff follow-through.",
					description:
						"Keep launch operations legible so the product team is not improvising every checklist and reporting step.",
					whatsInItForMe:
						"You reduce post-launch confusion and build a more repeatable launch process.",
					target_audience: "Operators, PMs, and founders.",
					pain_point:
						"Launch ops usually lives across random docs, messages, and memory.",
					solution:
						"A lean operations kit for launch hygiene, reporting, and handoff discipline.",
					highlights: [
						"Launch checklist",
						"Issue log",
						"Analytics review",
						"Handoff notes",
					],
					highlighted_words: ["Operations", "Cleaner", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Operations", "Handoff"],
	},
])[0];

export const fsboScrapingKitABTest = defineAbTests([
	{
		id: "ab-test-user-story-kit",
		name: "User Story Kit Messaging",
		description: "Messaging for the user-story kit.",
		variants: [
			{
				name: "V1 - Product Clarity",
				percentage: 100,
				copy: {
					cta: "Write Better User Stories",
					buttonCta: "Download Story Kit",
					tagline: "Stories That Build Cleanly.",
					subtitle:
						"A guided kit for turning founder ideas into usable user stories, acceptance criteria, and launch-ready tickets.",
					description:
						"Stop handing engineering vague feature ideas and start with a format that translates directly into build work.",
					whatsInItForMe:
						"You reduce ambiguity and make the first build cycle faster to execute.",
					target_audience: "Founders and product owners.",
					pain_point:
						"Feature ideas often arrive as loose notes that engineering has to reinterpret from scratch.",
					solution:
						"A story kit that makes product intent explicit and implementable.",
					highlights: [
						"User stories",
						"Acceptance criteria",
						"Edge cases",
						"Launch tickets",
					],
					highlighted_words: ["Stories", "Clear", "Build"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Product", "Stories"],
	},
])[0];

export const offMarketSourcesABTest = defineAbTests([
	{
		id: "ab-test-landing-outline",
		name: "Landing Outline Messaging",
		description: "Messaging for the landing-page outline.",
		variants: [
			{
				name: "V1 - Better Messaging",
				percentage: 100,
				copy: {
					cta: "Build the Landing Page Faster",
					buttonCta: "Get the Outline",
					tagline: "A Better First Draft.",
					subtitle:
						"A launch landing-page outline with sections for problem, proof, offer, objections, and CTA flow.",
					description:
						"Use the same proven structure to tighten launch messaging before design or code turns it into a mess.",
					whatsInItForMe:
						"You move from a blank page to a credible landing structure much faster.",
					target_audience: "Founders, marketers, and builders.",
					pain_point:
						"Landing pages often fail because the structure is weak long before the design work starts.",
					solution:
						"A launch-ready outline that keeps the page focused on proof, offer, and action.",
					highlights: [
						"Hero structure",
						"Proof sections",
						"Offer blocks",
						"CTA flow",
					],
					highlighted_words: ["Landing", "Outline", "Offer"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Landing Page", "Copy"],
	},
])[0];

export const wholesalerPipelineABTest = defineAbTests([
	{
		id: "ab-test-launch-workflow-template",
		name: "Launch Workflow Template Messaging",
		description: "Messaging for the launch workflow template.",
		variants: [
			{
				name: "V1 - End-to-End Flow",
				percentage: 100,
				copy: {
					cta: "Map the Launch Workflow",
					buttonCta: "Get the Workflow Template",
					tagline: "A Cleaner Path to Launch.",
					subtitle:
						"A visual workflow template for scope, build, QA, launch, and handoff decisions.",
					description:
						"Keep the team on one delivery path instead of juggling scattered tasks and undocumented changes.",
					whatsInItForMe:
						"You get a clearer end-to-end launch flow with fewer missed handoffs and last-minute surprises.",
					target_audience: "Founders, PMs, and small product teams.",
					pain_point:
						"Launch work breaks down when no one can see the full delivery flow from scope to handoff.",
					solution:
						"A workflow template that turns launch operations into one visible system.",
					highlights: [
						"Scope to QA",
						"Launch handoff",
						"Ownership cues",
						"Risk checks",
					],
					highlighted_words: ["Workflow", "Launch", "Handoff"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Workflow", "Delivery"],
	},
])[0];

export const openLeadPlaybookABTest = defineAbTests([
	{
		id: "ab-test-open-mvp-playbook",
		name: "Open MVP Playbook Messaging",
		description: "Messaging for the flagship MVP playbook.",
		variants: [
			{
				name: "V1 - Flagship Guide",
				percentage: 100,
				copy: {
					cta: "Read the MVP Playbook",
					buttonCta: "Download the Playbook",
					tagline: "A Better Way to Launch.",
					subtitle:
						"A flagship guide to scoping, building, validating, and shipping an MVP without bloated process.",
					description:
						"This is the core playbook for founders who want a real product in market faster and with less wasted motion.",
					whatsInItForMe:
						"You get a more opinionated launch approach that reduces thrash, rebuilds, and endless planning loops.",
					target_audience: "Founders and early product teams.",
					pain_point:
						"Most teams either overbuild the MVP or stay stuck in planning far too long.",
					solution:
						"A single playbook that helps you cut scope, ship faster, and learn from a real launch.",
					highlights: [
						"Scope cuts",
						"Launch framing",
						"Validation loops",
						"Handoff logic",
					],
					highlighted_words: ["Playbook", "MVP", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Flagship", "MVP"],
	},
])[0];

export const sitesToScrapeABTest = defineAbTests([
	{
		id: "ab-test-50-launch-hooks",
		name: "50 Launch Hooks Messaging",
		description: "Messaging for the hook library.",
		variants: [
			{
				name: "V1 - Messaging Bank",
				percentage: 100,
				copy: {
					cta: "Steal 50 Launch Hooks",
					buttonCta: "Get the Hook Library",
					tagline: "Hooks for Product Launches.",
					subtitle:
						"A swipe file of launch hooks for landing pages, short-form content, and founder-led GTM posts.",
					description:
						"Use these hooks to sharpen demand-generation copy without recycling the same tired founder language.",
					whatsInItForMe:
						"You get faster access to usable launch messaging across content and promotion.",
					target_audience: "Founders and marketers.",
					pain_point:
						"Writing fresh launch copy repeatedly is slow, especially when the offer is still evolving.",
					solution:
						"A hook library built for launch messaging, demos, and founder-led content.",
					highlights: [
						"Landing hooks",
						"Content angles",
						"Founder posts",
						"CTA starters",
					],
					highlighted_words: ["Hooks", "Messaging", "Launch"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "Copy", "Hooks"],
	},
])[0];

export const mcpBuilderKitABTest = defineAbTests([
	{
		id: "ab-test-ai-feature-kit",
		name: "AI Feature Kit Messaging",
		description: "Messaging for the AI feature kit.",
		variants: [
			{
				name: "V1 - Productized AI",
				percentage: 100,
				copy: {
					cta: "Plan the AI Feature Properly",
					buttonCta: "Get the AI Feature Kit",
					tagline: "From AI Idea to Product.",
					subtitle:
						"A planning kit for scoping AI features, evaluation loops, prompt behavior, and launch constraints.",
					description:
						"Use this kit when an AI idea needs to become a usable product behavior instead of a vague demo promise.",
					whatsInItForMe:
						"You get a stronger path for turning AI concepts into launchable product work.",
					target_audience: "Founders and product teams building AI features.",
					pain_point:
						"AI ideas often stay too abstract and skip the hard work of behavior design, evaluation, and launch constraints.",
					solution:
						"A practical planning kit for productizing AI features with clearer implementation logic.",
					highlights: [
						"Prompt behavior",
						"Eval loops",
						"UX constraints",
						"Launch criteria",
					],
					highlighted_words: ["AI", "Feature", "Product"],
				},
			},
		],
		isActive: true,
		tags: ["Free Resource", "AI", "Product"],
	},
])[0];
