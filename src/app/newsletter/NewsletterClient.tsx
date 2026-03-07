"use client";
import { NewsletterEmailInput } from "@/components/contact/newsletter/NewsletterEmailInput";
import TrustedByScroller from "@/components/contact/utils/TrustedByScroller";
import { BlogPreview } from "@/components/home/BlogPreview";
import ClientBento from "@/components/home/ClientBento";
import Testimonials from "@/components/home/Testimonials";
import Hero from "@/components/home/heros/Hero";
import { Separator } from "@/components/ui/separator";
import { useDataModule } from "@/stores/useDataModuleStore";
import { usePersonaStore } from "@/stores/usePersonaStore";
import type { BeehiivPost } from "@/types/behiiv";
import { useMemo } from "react";

export const offerImg =
	"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&q=80";

// ! Newsletter landing page for user signup, incentives, and confirmation
// * Uses reusable components and follows Clean Code, DRY, and UX best practices

// Persona-specific newsletter hero content
const PERSONA_NEWSLETTER_HERO: Record<
	string,
	{
		headline: string;
		subheadline: string;
	}
> = {
	developer: {
		headline: "Build Faster With Better Systems",
		subheadline:
			"Join the Launch MVP newsletter for workflow templates, architecture notes, integration patterns, and launch checklists that help developers ship MVPs without overbuilding.",
	},
	agency: {
		headline: "Sharpen Client Delivery",
		subheadline:
			"Get Launch MVP delivery systems, client handoff templates, launch checklists, and productized-service ideas that help agencies move from vague scope to shipped outcomes.",
	},
	startup: {
		headline: "Build Your MVP Faster",
		subheadline:
			"Join our newsletter for ready-to-use n8n lead gen workflows that help you automate lead scraping, data normalization, and export without building infrastructure from scratch. Get quick-start templates and integration guides for popular tools.",
	},
	enterprise: {
		headline: "Systemize Product Delivery",
		subheadline:
			"Get Launch MVP operating systems for product teams, including implementation frameworks, integration planning, handoff standards, and AI workflow patterns for internal delivery.",
	},
};

export default function NewsletterClient({ posts }: { posts: BeehiivPost[] }) {
	const { persona } = usePersonaStore();
	const {
		status: testimonialsStatus,
		testimonials,
		error: testimonialsError,
	} = useDataModule(
		"service/slug_data/testimonials",
		({ status, data, error }) => ({
			status,
			testimonials: data?.generalDealScaleTestimonials ?? [],
			error,
		}),
	);

	// Get persona-specific hero content
	const heroContent = useMemo(() => {
		return (
			PERSONA_NEWSLETTER_HERO[persona] || PERSONA_NEWSLETTER_HERO.developer
		);
	}, [persona]);
	const {
		status: logosStatus,
		companyLogos,
		error: logosError,
	} = useDataModule(
		"service/slug_data/trustedCompanies",
		({ status, data, error }) => ({
			status,
			companyLogos: data?.companyLogos ?? {},
			error,
		}),
	);

	const hasTestimonials = testimonials.length > 0;
	const showTestimonialsLoading =
		(testimonialsStatus === "idle" || testimonialsStatus === "loading") &&
		!hasTestimonials;
	const showTestimonialsError =
		testimonialsStatus === "error" && !hasTestimonials;
	const showTestimonialsReady =
		testimonialsStatus === "ready" && hasTestimonials;
	const showTestimonialsEmptyReady =
		testimonialsStatus === "ready" && !hasTestimonials;
	const hasLogos = Object.keys(companyLogos).length > 0;
	const showLogosLoading =
		(logosStatus === "idle" || logosStatus === "loading") && !hasLogos;
	const showLogosError = logosStatus === "error" && !hasLogos;
	const showLogosEmptyReady = logosStatus === "ready" && !hasLogos;

	if (showTestimonialsError) {
		console.error(
			"[NewsletterClient] Failed to load testimonials",
			testimonialsError,
		);
	}

	if (showLogosError) {
		console.error(
			"[NewsletterClient] Failed to load trusted companies",
			logosError,
		);
	}

	return (
		<main className="flex min-h-screen flex-col bg-background">
			{/* ! Hero section for strong visual impact with embedded newsletter email input */}
			<Hero
				badgeLeft="Launch Systems"
				badgeRight="Build Notes"
				headline={heroContent.headline}
				subheadline={heroContent.subheadline}
				highlight="with Launch MVP"
				ctaVariant="form"
				ctaForm={<NewsletterEmailInput />}
				image={offerImg}
				imageAlt="Launch MVP build systems and product delivery notes"
			/>
			{showLogosError ? (
				<div className="mx-auto my-12 max-w-5xl text-center text-destructive">
					Unable to load partner logos.
				</div>
			) : showLogosLoading ? (
				<div className="mx-auto my-12 max-w-5xl text-center text-muted-foreground">
					Loading trusted partners…
				</div>
			) : hasLogos ? (
				<TrustedByScroller variant="secondary" items={companyLogos} />
			) : showLogosEmptyReady ? (
				<div className="mx-auto my-12 max-w-5xl text-center text-muted-foreground">
					Trusted partners coming soon.
				</div>
			) : null}
			{showTestimonialsError ? (
				<div className="mx-auto my-12 max-w-5xl text-center text-destructive">
					Unable to load testimonials.
				</div>
			) : showTestimonialsLoading ? (
				<div className="mx-auto my-12 max-w-5xl text-center text-muted-foreground">
					Loading testimonials…
				</div>
			) : showTestimonialsReady ? (
				<Testimonials
					testimonials={testimonials}
					title={"What Our Clients Say"}
					subtitle={
						"Hear how founders and product teams moved faster with Launch MVP."
					}
				/>
			) : showTestimonialsEmptyReady ? (
				<div className="mx-auto my-12 max-w-5xl text-center text-muted-foreground">
					Testimonials coming soon.
				</div>
			) : null}
			{/* Fetch and show latest 3 Beehiiv posts */}
			{/* todo: move to a custom hook or SWR for better client caching if needed */}
			<BlogPreview title="Latest Blogs" posts={posts} />
			<Separator className="mx-auto my-16 max-w-7xl border-white/10" />

			<ClientBento />
		</main>
	);
}
