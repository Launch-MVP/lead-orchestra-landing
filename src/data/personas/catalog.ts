import {
	HERO_COPY_V7,
	PERSONA_GOAL as HERO_INVESTOR_GOAL,
	type HeroPersonaKey,
} from "@/components/home/heros/live-dynamic-hero-demo/_config";

// Extended persona type to include legacy real estate personas
export type PersonaKey =
	| HeroPersonaKey
	| "agent"
	| "investor"
	| "founder"
	| "wholesaler"
	| "loan_officer";

const HERO_PERSONA_LABELS: Record<PersonaKey, string> = {
	developer: "Technical Founders",
	agency: "Non-Technical Founders",
	startup: "Seed-Stage Startup Teams",
	enterprise: "Innovation Teams",
	// Legacy real estate personas (kept for backward compatibility)
	agent: "Real Estate Agents",
	investor: "Real Estate Investors",
	founder: "Proptech Founders",
	wholesaler: "Real Estate Wholesalers",
	loan_officer: "Mortgage Loan Officers",
};

const GOAL_OVERRIDES: Partial<Record<PersonaKey, string>> = {
	developer: "launch cleanly without inheriting technical debt",
	agency: "get from idea to shipped MVP without hiring a full product team",
	startup: "launch a usable MVP in 3 days",
	enterprise: "pilot new products without slowing core engineering",
	// Legacy real estate personas
	investor: HERO_INVESTOR_GOAL,
	agent: "Scrape fresh leads from Zillow, Realtor, and MLS",
	wholesaler: "Extract off-market property data automatically",
	founder: "Build scraping pipelines without infrastructure overhead",
	loan_officer: "Scrape borrower leads from multiple sources",
};

const deriveGoal = (persona: PersonaKey): string => {
	const override = GOAL_OVERRIDES[persona];
	if (override) {
		return override;
	}

	if (persona in HERO_COPY_V7.personas) {
		const personaConfig = HERO_COPY_V7.personas[persona as HeroPersonaKey];
		return (
			personaConfig.solution[0] ?? personaConfig.hope[0] ?? HERO_INVESTOR_GOAL
		);
	}

	return HERO_INVESTOR_GOAL;
};

export const PERSONA_GOALS: Record<PersonaKey, string> = (
	Object.keys(HERO_COPY_V7.personas) as PersonaKey[]
).reduce(
	(accumulator, key) => {
		accumulator[key] = deriveGoal(key);
		return accumulator;
	},
	{} as Record<PersonaKey, string>,
);

export const PERSONA_LABELS: Record<PersonaKey, string> = HERO_PERSONA_LABELS;

export const PERSONA_DISPLAY_ORDER: PersonaKey[] = [
	"developer",
	"agency",
	"startup",
	"enterprise",
];

export const ALL_PERSONA_KEYS = Object.keys(
	HERO_COPY_V7.personas,
) as PersonaKey[];

export const DEFAULT_PERSONA_KEY: PersonaKey = "startup";
