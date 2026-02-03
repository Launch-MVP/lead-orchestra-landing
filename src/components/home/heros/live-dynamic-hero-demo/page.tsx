"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { useDeferredLoad } from "@/components/providers/useDeferredLoad";

import { DEFAULT_PERSONA_KEY, PERSONA_LABELS } from "@/data/personas/catalog";
import { usePersonaStore } from "@/stores/usePersonaStore";

import {
	DEFAULT_PERSONA,
	HERO_COPY_V7,
	LIVE_PRIMARY_CTA,
	LIVE_SECONDARY_CTA,
} from "./_config";

// Keep for potential future use
// const LiveDynamicHeroClient = dynamic(
// 	() => import("./LiveDynamicHeroClient"),
// 	{
// 		ssr: false,
// 		loading: () => <HeroStaticFallback variant="loading" />,
// 	},
// );

const HeroSideBySide = dynamic(() => import("./HeroSideBySide"), {
	ssr: false,
	loading: () => <HeroStaticFallback />,
});

function HeroStaticFallback() {
	const { persona } = usePersonaStore();
	const personaLabel =
		PERSONA_LABELS[persona] ?? PERSONA_LABELS[DEFAULT_PERSONA_KEY];
	const heroPersona =
		persona in HERO_COPY_V7.personas ? persona : DEFAULT_PERSONA;
	const heroPersonaConfig = HERO_COPY_V7.personas[heroPersona];
	const problemPhrase =
		heroPersonaConfig?.problem?.[0] ??
		"buying stale lead lists from Apollo and ZoomInfo";
	const solutionPhrase =
		heroPersonaConfig?.solution?.[0] ??
		"scraping your own fresh leads from any website";
	const subtitleByPersona: Partial<Record<string, string>> = {
		agency:
			"Stop burning budget on ads and rented databases like ZoomInfo. Build an owned lead engine that delivers unique sources weekly, often cutting acquisition costs up to 80%.",
		startup:
			"Ads stop when spend stops. Lead Orchestra helps you build an owned acquisition loop. Get fresh leads from places competitors aren’t looking and reduce paid dependence as the system scales.",
		developer:
			"Replace brittle one-off scrapers with a standardized ingestion pipeline: scrape, normalize (LSF), dedupe/tag, export anywhere. Auditable, repeatable, production-friendly.",
		enterprise:
			"Own your lead sourcing with audit-ready pipelines: controlled ingestion, clean schemas, segmentation, and exports into your CRM built for scale and governance.",
	};
	const description =
		subtitleByPersona[heroPersona] ??
		`Stop ${problemPhrase}. Start ${solutionPhrase}. Fresh leads, not rented lists.`;

	return (
		<section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background text-foreground">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22)_0%,rgba(15,23,42,0)_62%)] opacity-80" />
				<div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(99,102,241,0.15),rgba(59,130,246,0.08),rgba(34,197,94,0.08))]" />
			</div>

			<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center sm:px-10">
				<span className="inline-flex items-center justify-center rounded-full border border-border/40 bg-background/70 px-5 py-1.5 font-semibold text-foreground/80 text-xs uppercase tracking-[0.4em]">
					{personaLabel}
				</span>
				<h1 className="font-bold text-4xl text-foreground leading-tight sm:text-5xl md:text-6xl">
					{(() => {
						const heroTitleByPersona: Partial<Record<string, string>> = {
							agency: "Stop buying leads. Build a lead engine you own.",
							startup: "Own your pipeline. Stop renting growth.",
							developer: "Standardize lead ingestion. Export anywhere.",
							enterprise: "Enterprise-grade lead ingestion you can audit.",
						};
						return (
							heroTitleByPersona[heroPersona] ??
							"Stop buying leads. Build a lead engine you own."
						);
					})()}
				</h1>
				<p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
					{description}
				</p>
				<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
					<Link
						href="/contact"
						className="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-base text-primary-foreground shadow-lg shadow-primary/30 transition hover:translate-y-0.5 hover:bg-primary/90"
					>
						{LIVE_PRIMARY_CTA.label}
					</Link>
					<Link
						href="#live-hero-details"
						className="inline-flex min-w-[12rem] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 font-semibold text-base text-foreground transition hover:border-foreground/40 hover:text-foreground/80"
					>
						{LIVE_SECONDARY_CTA.label}
					</Link>
				</div>
				<div id="live-hero-details" aria-hidden="true" className="sr-only" />
			</div>
		</section>
	);
}

export default function LiveDynamicHeroDemoPage(): JSX.Element {
	const shouldHydrate = useDeferredLoad({
		timeout: 1000,
		idleTimeout: 300,
	});

	// Always render static fallback immediately for above-the-fold LCP
	// Upgrade to interactive version when browser is ready (fast timeout for better UX)
	return shouldHydrate ? <HeroSideBySide /> : <HeroStaticFallback />;
}
