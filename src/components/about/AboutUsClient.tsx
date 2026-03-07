"use client";
// * AboutUsClient: Composes all About page sections using Magic UI and theme-compliant layout
// ! This file is the main About page client component

import { CTASection } from "../common/CTASection";
import AboutFunFacts from "./AboutFunFacts";
import AboutHero from "./AboutHero";
import { MarqueeDemo } from "./AboutMarquee";
import AboutTeam from "./AboutTeam";
import AboutTimeline from "./AboutTimeline";
import AboutValues from "./AboutValues";

export default function AboutUsClient() {
	return (
		<main className="flex flex-col gap-3 ">
			<AboutHero />
			<AboutFunFacts />

			<AboutValues />
			<AboutTeam />

			<AboutTimeline />
			<MarqueeDemo />

			<CTASection
				title="Need a clearer path to version one?"
				description="Launch MVP helps founders scope the right product, ship faster, and avoid turning early momentum into cleanup debt."
				buttonText="Book Free Consultation"
				href="/contact"
			/>
		</main>
	);
}
