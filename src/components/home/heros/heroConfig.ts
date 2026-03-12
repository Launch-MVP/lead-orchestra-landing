import type { PersonaKey } from "@/data/personas/catalog";
import type { Plan } from "@/types/service/plans";
import type {
	HeroCopy,
	HeroCopyRotations,
	ResolveHeroCopyOptions,
} from "@external/dynamic-hero";

export const HERO_ROTATIONS: HeroCopyRotations = {
	problems: [
		"overbuilding the wrong MVP",
		"guessing at the launch scope",
		"stalling before product validation",
	],
	solutions: [
		"3-day MVP workshops create real momentum",
		"scoped product builds ship faster",
		"launch systems keep the team aligned",
	],
	fears: [
		"your launch keeps slipping",
		"the product ships bloated and messy",
		"the team rebuilds version one twice",
	],
};

export const HERO_COPY_INPUT: HeroCopy = {
	values: {
		problem: "overbuilding the wrong MVP",
		solution: "launching a real product in 3 days",
		fear: "your launch keeps slipping",
		socialProof: "Join founders using Pilot Spring to ship faster.",
		benefit: "Launch a usable MVP",
		time: "3",
	},
	rotations: HERO_ROTATIONS,
};

export const QUICK_START_PERSONA_KEY: PersonaKey = "founder";
export const QUICK_START_PERSONA_GOAL = HERO_COPY_INPUT.values.benefit;

export const HERO_COPY_FALLBACK: ResolveHeroCopyOptions = {
	fallbackPrimaryChip: {
		label: "3-Day MVP Workshop",
		sublabel: "Scope, build, launch",
		variant: "secondary",
	},
	fallbackSecondaryChip: {
		label: "Founder Ready",
		variant: "outline",
	},
};

export const PRIMARY_CTA = {
	label: "Book Free MVP Consultation",
	description: "Pressure-test the idea and leave with a clearer launch path.",
	emphasis: "solid" as const,
	badge: "Free Scope Consult",
};

export const SECONDARY_CTA = {
	label: "View Services",
	description: "See the workshops, support offers, and specialist options.",
	emphasis: "outline" as const,
	badge: "Launch Offers",
};

export const CTA_MICROCOPY =
	'Founder-led builds, launch workshops, and specialist support. <link href="#dynamic-hero-details">Explore the delivery model</link>.';

export const HERO_TRIAL_PLAN = {
	id: "dynamic-hero-basic",
	name: "Pilot Spring",
};

export const createHeroTrialPlan = (): Plan => ({
	id: `${HERO_TRIAL_PLAN.id}-trial-monthly`,
	name: HERO_TRIAL_PLAN.name,
	price: {
		monthly: {
			amount: 0,
			description: "Free consultation - no charge today",
			features: [
				"Clarify the MVP scope, stack, and delivery path during the consultation.",
				"Leave with a sharper recommendation on what to build next.",
			],
		},
		annual: { amount: 0, description: "", features: [] },
		oneTime: { amount: 0, description: "", features: [] },
	},
	cta: { text: "Complete Checkout", type: "checkout" },
});
