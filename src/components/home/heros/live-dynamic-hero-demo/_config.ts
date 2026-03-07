import {
	DEFAULT_HERO_SOCIAL_PROOF,
	type HeroVideoConfig,
	resolveHeroCopy,
} from "@external/dynamic-hero";

const HERO_COPY_V7 = {
	id: "hero-seo-v7",
	category: "landing_hero_dynamic_copy",
	version: 7,
	structure: "problem_solution_fear_hope_persona",
	personas: {
		developer: {
			problem: [
				"burning sprint cycles on auth, billing, infrastructure, and setup work",
				"trying to ship an MVP while also acting as your own CTO, PM, and designer",
				"rewriting rushed prototype code before you can even launch",
			],
			solution: [
				"shipping a production-ready MVP with clean architecture",
				"getting the critical flows built without bloated scope",
				"launching with code your team can actually extend",
			],
			fear: [
				"technical debt becomes the product",
				"the launch slips because core systems were never scoped correctly",
			],
			hope: [
				"you launch with a repo your engineers trust",
				"your MVP ships fast without a painful rebuild",
				"you focus on growth instead of cleanup work",
			],
		},
		agency: {
			problem: [
				"having a product idea but no technical cofounder to ship it",
				"getting vague proposals from dev shops that do not define scope",
				"paying for design and development separately without a launch plan",
			],
			solution: [
				"a founder-friendly MVP partner who scopes and ships the product",
				"one sprint that covers design, build, integrations, and launch",
				"a clear product plan before you overhire",
			],
			fear: [
				"you spend months and budget without getting something usable live",
				"you hire the wrong team before the product is validated",
			],
			hope: [
				"you launch a credible MVP without managing a full build team",
				"you finally have something real to show customers and investors",
				"you move from idea to product without guesswork",
			],
		},
		startup: {
			problem: [
				"trying to validate demand while the product is still stuck in planning",
				"losing momentum because engineering is spread across too much scope",
				"needing a real MVP fast without creating a brittle prototype",
			],
			solution: [
				"a 3-day MVP workshop built around the must-have user path",
				"tight scoping, fast execution, and a launch-ready handoff",
				"a product your team can test with real users immediately",
			],
			fear: [
				"runway disappears before the product reaches users",
				"a rushed build has to be rebuilt before traction starts",
			],
			hope: [
				"you launch in 3 days with the core workflow working end to end",
				"your team learns what users want from a real product, not a deck",
				"you keep momentum without sacrificing code quality",
			],
		},
		enterprise: {
			problem: [
				"waiting on internal roadmaps to test new product bets",
				"needing a fast pilot without pulling core engineering off roadmap work",
				"struggling to turn concept decks into usable internal or customer pilots",
			],
			solution: [
				"a focused MVP sprint that de-risks the product before a larger build",
				"clean implementation with integrations, analytics, and handoff",
				"a pilot your stakeholders can actually use and evaluate",
			],
			fear: [
				"internal teams lose confidence because the pilot never ships",
				"experiments stall in discovery without a working prototype",
			],
			hope: [
				"you validate new product bets without roadmap drag",
				"you get a usable pilot into stakeholder hands quickly",
				"you scale the right idea instead of debating the wrong one",
			],
		},
	},
	template: "Stop {problem}, start {solution} - before {fear}. Imagine {hope}.",
	ctas: {
		primary: [
			"Book Free MVP Consult",
			"See the 3-Day MVP Plan",
			"Get the Scope Checklist",
			"Start Your MVP Sprint",
			"Review Launch Options",
		],
		secondary: [
			"See What's Included",
			"Review the Process",
			"Explore Deliverables",
			"See Launch Examples",
			"Watch the Walkthrough",
		],
		social: [
			"Share with Your Team",
			"Forward to a Cofounder",
			"Review With Stakeholders",
			"Use It in Discovery",
			"Compare Delivery Options",
		],
	},
	demo_mode: {
		enabled: true,
		headline_variant: "3-Day MVP Workshop - See Launch MVP in Action",
		cta: "Start Launch Walkthrough",
	},
	metadata: {
		tone: "direct_founder_friendly_technical",
		vertical: [
			"mvp_development",
			"product_strategy",
			"startup_execution",
			"prototype_to_launch",
			"ai_workflows",
		],
		emotion_trigger: ["clarity", "speed", "ownership", "confidence"],
		updated_by: "Ty",
	},
} as const;

export type HeroPersonaKey = keyof typeof HERO_COPY_V7.personas;

export const DEFAULT_PERSONA: HeroPersonaKey = "startup";
export const DEFAULT_PERSONA_DISPLAY = "3-Day MVP Workshop";

const PERSONA_LABEL = "For Founders, Startups & Innovation Teams";
const PERSONA_GOAL = "launch a real MVP in 3 days";
const PERSONA_SOCIAL_PROOF =
	"Scope, design, build, integrations, analytics, and handoff in one focused 3-day workshop.";

const pickPersonaField = (field: "problem" | "solution" | "fear" | "hope") => {
	const persona = HERO_COPY_V7.personas[DEFAULT_PERSONA];
	const entries = persona[field];
	return entries[0] ?? "";
};

const TEMPLATE_PROBLEM = pickPersonaField("problem");
const TEMPLATE_SOLUTION = pickPersonaField("solution");
const TEMPLATE_FEAR = pickPersonaField("fear");
const TEMPLATE_HOPE = pickPersonaField("hope");

export const LIVE_VIDEO: HeroVideoConfig = {
	src: "https://app.supademo.com/embed/cmhjlwt7i0jk4u1hm0scmf39w?embed_v=2&utm_source=embed",
	poster: "/supademos/svgs/supademo-thumbnail.png",
	provider: "supademo",
};

export const LIVE_COPY = resolveHeroCopy(
	{
		values: {
			problem: TEMPLATE_PROBLEM,
			solution: TEMPLATE_SOLUTION,
			fear: TEMPLATE_FEAR,
			socialProof: PERSONA_SOCIAL_PROOF,
			benefit: PERSONA_GOAL,
			time: "3",
			hope: TEMPLATE_HOPE,
		},
		rotations: {
			problems: [...HERO_COPY_V7.personas[DEFAULT_PERSONA].problem],
			solutions: [...HERO_COPY_V7.personas[DEFAULT_PERSONA].solution],
			fears: [...HERO_COPY_V7.personas[DEFAULT_PERSONA].fear],
		},
	},
	{
		fallbackPrimaryChip: {
			label: DEFAULT_PERSONA_DISPLAY,
			sublabel: "Production-ready MVP delivery",
			variant: "secondary",
		},
		fallbackSecondaryChip: {
			label: "Launch in 3 days",
			variant: "outline",
		},
	},
);

export const LIVE_PRIMARY_CTA = {
	label: "Book Free MVP Consult",
	description:
		"Get a scoped launch recommendation, core feature cut, and stack direction in one call.",
	emphasis: "solid" as const,
	badge: "Free Consult",
};

export const LIVE_SECONDARY_CTA = {
	label: HERO_COPY_V7.ctas.secondary[0],
	description:
		"Review the 3-day workshop format, handoff structure, and what fits inside the launch engagement.",
	emphasis: "outline" as const,
	badge: "3-Day Plan",
};

export const LIVE_MICROCOPY =
	'Strategy, build, integrations, and launch support. <link href="#hero-video-section">See what is included</link>. Clean handoff, no black-box build.';

export const LIVE_SOCIAL_PROOF = {
	...DEFAULT_HERO_SOCIAL_PROOF,
};

export { PERSONA_GOAL, PERSONA_LABEL, HERO_COPY_V7, PERSONA_SOCIAL_PROOF };
