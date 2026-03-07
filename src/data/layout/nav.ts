export const offerImg =
	"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80";
import {
	BookIcon,
	BriefcaseIcon,
	BuildingIcon,
	Code2Icon,
	DollarSignIcon,
	FileTextIcon,
	GlobeIcon,
	HomeIcon,
	InfoIcon,
	LightbulbIcon,
	type LucideIcon,
	MailIcon,
	NewspaperIcon,
	PhoneIcon,
	RocketIcon,
	SearchIcon,
	UsersIcon,
} from "lucide-react";

import type { StaticImageData } from "next/image";

export type NavItemChild = {
	title: string;
	href: string;
	icon: LucideIcon;
	/**
	 * Optional image URL or import for CTA card
	 */
	image?: string | StaticImageData;
	/**
	 * Optional CTA title for menu card
	 */
	ctaTitle?: string;
	/**
	 * Optional CTA subtitle for menu card
	 */
	ctaSubtitle?: string;
	/**
	 * Optional CTA button config
	 */
	ctaButton?: {
		label: string;
		href: string;
	};
};

export type NavItem = {
	title: string;
	href: string;
	icon?: LucideIcon;
	children?: NavItemChild[];
};

export const navItems: NavItem[] = [
	{ title: "Home", href: "/", icon: HomeIcon },

	{ title: "Services", href: "/features", icon: DollarSignIcon },
	{ title: "Pricing", href: "/pricing", icon: NewspaperIcon },
	{ title: "Marketplace", href: "/products", icon: NewspaperIcon },

	{
		title: "Our Expertise",
		href: "#",
		icon: BookIcon,
		children: [
			{ title: "Blogs", href: "/blogs", icon: HomeIcon },
			{ title: "Case Studies", href: "/case-studies", icon: NewspaperIcon },
			{ title: "About Us", href: "/about", icon: BriefcaseIcon },
			{ title: "Events", href: "/events", icon: HomeIcon },

			{ title: "Partners", href: "/partners", icon: UsersIcon },
			{ title: "Careers", href: "/careers", icon: BriefcaseIcon },
			{
				title: "Free Resources",
				href: "/products#category=free-resources",
				icon: FileTextIcon,
			},
			{
				title: "For Founders",
				href: "/products#category=startups",
				icon: FileTextIcon,
			},
			{
				title: "For Enterprise / Greenfield",
				href: "/products#category=enterprise",
				icon: BuildingIcon,
			},

			{
				title: "Sign Up For Our Newsletter",
				href: "/newsletter",
				icon: FileTextIcon,
				image: offerImg,
				ctaTitle: "Launch MVP Newsletter",
				ctaSubtitle:
					"Get actionable tips, product scoping advice, and ready-to-use resources for launching your MVP faster.",
				ctaButton: {
					label: "Subscribe",
					href: "/newsletter",
				},
			},
		],
	},
	{
		title: "Industries",
		href: "#",
		icon: BuildingIcon,
		children: [
			{
				title: "Enterprise & Greenfield Teams",
				href: "/case-studies/enterprise-custom-scraping-and-enrichment",
				icon: BuildingIcon,
			},
			{
				title: "Startups",
				href: "/case-studies/peridot-competitor-lead-capture-instagram-activation",
				icon: RocketIcon,
			},
			{
				title: "Non-Technical Founders",
				href: "/case-studies/non-technical-founder-ai-mvp-build",
				icon: Code2Icon,
			},
		],
	},
	{ title: "Contact Us", href: "/contact", icon: PhoneIcon },
];
