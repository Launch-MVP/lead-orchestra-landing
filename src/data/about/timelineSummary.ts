export interface ManifestoSectionSummary {
	title: string;
	subtitle: string;
	summary: string;
	anchor: string;
}

export const timelineSummary: ManifestoSectionSummary[] = [
	{
		title: "1. Why We Exist",
		subtitle: "Too many founders spend months circling version one",
		summary:
			"Launch MVP exists to help founders escape endless planning and move toward a real product faster.",
		anchor: "why-we-exist",
	},
	{
		title: "2. What We Actually Do",
		subtitle: "Scope, build, launch, and handoff in one delivery model",
		summary:
			"We combine strategy, workshops, focused build work, and launch support so product work does not fragment across disconnected vendors.",
		anchor: "what-we-actually-do",
	},
	{
		title: "3. How We Work",
		subtitle: "The smallest useful version one beats a bloated roadmap",
		summary:
			"We prefer live decisions, tight scope, and version-one clarity over impressive but expensive prototype theater.",
		anchor: "how-we-work",
	},
	{
		title: "4. What We Deliver",
		subtitle: "A usable product, not just a sprint artifact",
		summary:
			"Every engagement is meant to end with working product progress, cleaner structure, and a handoff the next builder can use.",
		anchor: "what-we-deliver",
	},
	{
		title: "5. What We Refuse",
		subtitle: "No fake velocity, no handoff chaos, no unnecessary scope",
		summary:
			"We actively avoid cleanup debt, fuzzy ownership, and roadmap sprawl that makes early product work more expensive than it needs to be.",
		anchor: "what-we-refuse",
	},
	{
		title: "6. Where This Is Going",
		subtitle:
			"More workshop paths, stronger launch support, sharper specialist help",
		summary:
			"Launch MVP is expanding into a broader founder delivery system built around fast scope, focused execution, and cleaner post-launch support.",
		anchor: "where-this-is-going",
	},
];
