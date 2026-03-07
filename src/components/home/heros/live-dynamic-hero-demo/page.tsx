"use client";

import dynamic from "next/dynamic";

import { useDeferredLoad } from "@/components/providers/useDeferredLoad";

import { default_cal_slug } from "@/data/constants/booking";
import { DEFAULT_PERSONA_KEY, PERSONA_LABELS } from "@/data/personas/catalog";
import { useCal } from "@/hooks/use-calendly";
import { usePersonaStore } from "@/stores/usePersonaStore";

import {
	DEFAULT_PERSONA,
	HERO_COPY_V7,
	LIVE_PRIMARY_CTA,
	LIVE_SECONDARY_CTA,
} from "./_config";

const HeroSideBySide = dynamic(() => import("./HeroSideBySide"), {
	ssr: false,
	loading: () => <HeroStaticFallback />,
});

function HeroStaticFallback() {
	useCal();
	const { persona } = usePersonaStore();
	const personaLabel =
		PERSONA_LABELS[persona] ?? PERSONA_LABELS[DEFAULT_PERSONA_KEY];
	const heroPersona =
		persona in HERO_COPY_V7.personas ? persona : DEFAULT_PERSONA;
	const heroPersonaConfig = HERO_COPY_V7.personas[heroPersona];
	const problemPhrase =
		heroPersonaConfig?.problem?.[0] ??
		"trying to validate demand while the product is still stuck in planning";
	const solutionPhrase =
		heroPersonaConfig?.solution?.[0] ??
		"a 3-day MVP workshop built around the must-have user path";
	const subtitleByPersona: Partial<Record<string, string>> = {
		agency:
			"Move from idea to shipped MVP without managing a full build team. We define the scope, handle the hard tradeoffs, and launch the version that actually matters first.",
		startup:
			"Launch a real product in 3 days, not another polished concept. We cut the scope to the must-have flow, wire the critical systems, and hand you a product you can test immediately.",
		developer:
			"Ship the MVP without burying your future team in cleanup work. We focus on clean architecture, key integrations, and a handoff your engineers can build on confidently.",
		enterprise:
			"Turn internal concepts into usable pilots fast. We scope the right version, build the critical workflow, and create a decision-ready product without derailing the core roadmap.",
	};
	const description =
		subtitleByPersona[heroPersona] ??
		`Stop ${problemPhrase}. Start ${solutionPhrase}. Launch fast without creating debt you have to undo later.`;

	return (
		<section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background text-foreground">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(36,124,255,0.22)_0%,rgba(16,20,24,0)_62%)] opacity-80" />
				<div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(36,124,255,0.14),rgba(244,185,66,0.10),rgba(16,20,24,0.04))]" />
			</div>

			<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center sm:px-10">
				<span className="inline-flex items-center justify-center rounded-full border border-border/40 bg-background/70 px-5 py-1.5 font-semibold text-foreground/80 text-xs uppercase tracking-[0.4em]">
					{personaLabel}
				</span>
				<h1 className="font-bold text-4xl text-foreground leading-tight sm:text-5xl md:text-6xl">
					{(() => {
						const heroTitleByPersona: Partial<Record<string, string>> = {
							agency: "Launch your MVP without hiring the whole team first.",
							startup: "Launch a real MVP in 3 days.",
							developer: "Ship fast without shipping technical debt.",
							enterprise: "Turn product ideas into usable pilots fast.",
						};
						return (
							heroTitleByPersona[heroPersona] ?? "Launch a real MVP in 3 days."
						);
					})()}
				</h1>
				<p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
					{description}
				</p>
				<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
					<a
						href="/contact?utm_source=hero-cta-denver-3-day-mvp-build"
						className="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-base text-primary-foreground shadow-lg shadow-primary/30 transition hover:translate-y-0.5 hover:bg-primary/90"
					>
						{LIVE_PRIMARY_CTA.label}
					</a>
					<button
						type="button"
						data-cal-link={default_cal_slug}
						data-cal-config='{"theme":"dark"}'
						className="inline-flex min-w-[12rem] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 font-semibold text-base text-foreground transition hover:border-foreground/40 hover:text-foreground/80"
					>
						{LIVE_SECONDARY_CTA.label}
					</button>
				</div>
				<div id="hero-video-section" aria-hidden="true" className="sr-only" />
			</div>
		</section>
	);
}

export default function LiveDynamicHeroDemoPage(): JSX.Element {
	const shouldHydrate = useDeferredLoad({
		timeout: 1000,
		idleTimeout: 300,
	});

	return shouldHydrate ? <HeroSideBySide /> : <HeroStaticFallback />;
}
