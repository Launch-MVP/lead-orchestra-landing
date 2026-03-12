// * Default props for demo/dev use

import type { ProductHeroProps } from "@/components/products/product/ProductHero";

export type HeroGridItem = {
	src: string;
	alt: string;
	label: string;
	categoryId: string; // * Used for robust category lookup
	description?: string;
	link: string;
	ariaLabel?: string;
	colSpan?: number;
	rowSpan?: number;
};

export const DEFAULT_GRID: HeroGridItem[] = [
	{
		src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
		alt: "MVP strategy session planning board",
		label: "Strategy Sessions",
		categoryId: "strategy",
		description:
			"Clarify the problem, cut scope, and leave with a tighter plan before build starts.",
		link: "/products#category=strategy",
		ariaLabel: "Explore MVP strategy sessions",
		colSpan: 2,
		rowSpan: 2,
	},
	{
		src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
		alt: "Launch systems and reusable product operations assets",
		label: "Launch Systems",
		categoryId: "automation",
		description:
			"Reusable systems for delivery, launch operations, content workflows, and founder execution.",
		link: "/products#category=automation",
		ariaLabel: "Explore launch systems",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&q=80",
		alt: "Notion operating system for founders and product launches",
		label: "Notion Systems",
		categoryId: "notion",
		description:
			"Founder-ready Notion templates for CRM, launch tracking, fundraising, and operating context.",
		link: "/products#category=notion",
		ariaLabel: "Explore Notion systems",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
		alt: "SEO and AEO assets for MVP launch visibility",
		label: "SEO & AEO",
		categoryId: "SEO/AEO",
		description:
			"Templates and services for launch pages, AI-search visibility, founder authority, and answer-first content.",
		link: "/products#category=SEO/AEO",
		ariaLabel: "Explore SEO and AEO offers",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&q=80",
		alt: "Founder and builder collaborating in person",
		label: "In-Person Workshops",
		categoryId: "in-person",
		description:
			"Compress product decisions and ship faster with focused in-person build days.",
		link: "/products#category=in-person",
		ariaLabel: "Explore in-person workshops",
		colSpan: 2,
		rowSpan: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
		alt: "Specialist engineering support for product teams",
		label: "Specialist Support",
		categoryId: "specialists",
		description:
			"Bring in backend, frontend, DevOps, or AI engineering help without hiring a full in-house team first.",
		link: "/products#category=specialists",
		ariaLabel: "Explore specialist support offers",
		colSpan: 2,
		rowSpan: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
		alt: "Service packages for founders launching products",
		label: "Service Packages",
		categoryId: "services",
		description:
			"Browse the current Pilot Spring offers, from scoping sessions to build workshops and support.",
		link: "/products#category=services",
		ariaLabel: "Explore Pilot Spring service packages",
		colSpan: 1,
		rowSpan: 1,
	},
];
export const defaultHeroProps: ProductHeroProps = {
	headline: "Pilot Spring ",
	highlight: "Offers",
	subheadline:
		"Browse Pilot Spring offers across strategy, in-person workshops, specialist support, Notion systems, and SEO/AEO launch assets. Each lane is built to help founders move from idea to launch with less drag and cleaner execution.",
	grid: DEFAULT_GRID,
	testimonial: {
		quote:
			'"The best launch system is the one that helps you ship, explain, and improve the product without rebuilding the whole operation every month."',
		author: "Pilot Spring workshop principle",
	},
};
