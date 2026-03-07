import {
	DEFAULT_PERSONA_KEY,
	PERSONA_GOALS,
	PERSONA_LABELS,
	type PersonaKey,
} from "@/data/personas/catalog";
import { getStaticSeo } from "@/utils/seo/staticSeo";

export type FeatureHighlight = {
	title: string;
	description: string;
};

export const AI_OUTREACH_STUDIO_ANCHOR = "launch-mvp-system";
export const AI_OUTREACH_STUDIO_HEADING = "3-Day MVP Workshop";
export const AI_OUTREACH_STUDIO_TAGLINE =
	"Scope, build, and launch your MVP in 3 days.";
export const AI_OUTREACH_STUDIO_DESCRIPTION =
	"Launch MVP combines product strategy, UX direction, production-ready engineering, integrations, analytics, and launch support so founders can ship a real MVP fast without bloated scope or avoidable technical debt.";

export const AI_OUTREACH_STUDIO_FEATURES: FeatureHighlight[] = [
	{
		title: "Product Blueprint",
		description:
			"We cut the scope to the must-have user flow, define the launch version, and turn ambiguity into a sprint-ready build plan.",
	},
	{
		title: "Production-Ready Stack",
		description:
			"Auth, payments, data models, deployment, and architecture are set up for launch, not just for demo day.",
	},
	{
		title: "Integrations & AI Workflows",
		description:
			"We wire the systems that matter: Stripe, analytics, CRM, email, dashboards, and AI-assisted workflows where they create leverage.",
	},
	{
		title: "Launch Assets & Handoff",
		description:
			"You leave with the repo, design direction, documentation, QA pass, and a post-launch roadmap your team can extend.",
	},
] as const;

export const AI_OUTREACH_STUDIO_KEYWORDS = [
	"Launch MVP",
	"3 day MVP",
	"MVP workshop",
	"MVP development",
	"startup product development",
	"founder product partner",
	"product strategy sprint",
	"AI workflow integration",
	"launch-ready product build",
	"production-ready MVP",
] as const;

type AiOutreachStudioSeo = {
	name: string;
	headline: string;
	description: string;
	keywords: string[];
	anchor: string;
	features: FeatureHighlight[];
};

const dedupeKeywords = (keywords: Iterable<string>) =>
	Array.from(new Set(Array.from(keywords)));

export const buildAiOutreachStudioSeo = (
	overrides: Partial<AiOutreachStudioSeo> = {},
): AiOutreachStudioSeo => {
	const homeSeo = getStaticSeo("/");
	const baseKeywords = homeSeo.keywords ?? [];
	const mergedKeywords =
		overrides.keywords ??
		dedupeKeywords([...AI_OUTREACH_STUDIO_KEYWORDS, ...baseKeywords]);

	const seo: AiOutreachStudioSeo = {
		name: overrides.name ?? AI_OUTREACH_STUDIO_HEADING,
		headline: overrides.headline ?? AI_OUTREACH_STUDIO_TAGLINE,
		description: overrides.description ?? AI_OUTREACH_STUDIO_DESCRIPTION,
		keywords: dedupeKeywords(mergedKeywords),
		anchor: overrides.anchor ?? AI_OUTREACH_STUDIO_ANCHOR,
		features: overrides.features ?? [...AI_OUTREACH_STUDIO_FEATURES],
	};

	return seo;
};

export const AI_OUTREACH_STUDIO_SEO = buildAiOutreachStudioSeo();

const toLowerFragment = (value: string | undefined): string => {
	if (!value) return "";
	return value.toLowerCase();
};

type PersonaSeoInput = {
	persona?: PersonaKey;
	goal?: string;
};

const resolvePersonaLabel = (persona?: PersonaKey): string => {
	const key = persona ?? DEFAULT_PERSONA_KEY;
	return PERSONA_LABELS[key] ?? PERSONA_LABELS[DEFAULT_PERSONA_KEY] ?? "";
};

const resolvePersonaGoal = (persona?: PersonaKey, goal?: string): string => {
	if (goal?.trim()) {
		return goal.trim();
	}
	const key = persona ?? DEFAULT_PERSONA_KEY;
	return PERSONA_GOALS[key] ?? PERSONA_GOALS[DEFAULT_PERSONA_KEY] ?? "";
};

export const buildPersonaAiOutreachStudioSeo = ({
	persona,
	goal,
}: PersonaSeoInput = {}): AiOutreachStudioSeo => {
	const personaLabel = resolvePersonaLabel(persona);
	const personaGoal = resolvePersonaGoal(persona, goal);
	const personaHeadline = `${AI_OUTREACH_STUDIO_TAGLINE} for ${personaLabel}`;
	const personaDescription = `Launch MVP helps ${toLowerFragment(
		personaLabel,
	)} teams ${toLowerFragment(personaGoal)}. ${AI_OUTREACH_STUDIO_DESCRIPTION}`;

	return buildAiOutreachStudioSeo({
		headline: personaHeadline,
		description: personaDescription,
		keywords: dedupeKeywords([
			...AI_OUTREACH_STUDIO_KEYWORDS,
			personaLabel,
			personaGoal,
		]),
	});
};
