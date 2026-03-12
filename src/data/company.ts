import type { FooterProps } from "@/components/layout/Footer";

export const companyData: FooterProps = {
	companyName: "Pilot Spring",
	companyLegalName: "Deal Scale LLC",
	companyDescription:
		"Pilot Spring helps founders scope, build, and launch real products faster through strategy sessions, in-person workshops, specialist support, and launch-ready systems.",
	socialLinks: {
		linkedin: "https://www.linkedin.com/company/deal-scale/",
		facebook: "https://www.facebook.com/profile.php?id=61576707389189",
		instagram: "https://www.instagram.com/deal_scale/",
		youtube: "https://www.youtube.com/@DealScaleRealEstate",
		twitter: "https://twitter.com/dealscale",
		mediumUsername: "dealscale",
	},
	quickLinks: [
		{ href: "/", label: "Home" },
		{ href: "/features", label: "Services" },
		{ href: "/pricing", label: "Pricing" },
		{ href: "/blogs", label: "Blog" },
		{ href: "/about", label: "About Us" },
	],
	contactInfo: {
		email: "sam.scaler@dealscale.io",
		phone: "+1 (720) 258-6576",
		address: "3700 Quebec St\nDenver, CO 80207\nUSA",
	},
	supportLink: "https://dealscale.zohodesk.com/portal/en/home",
	careersLink: "https://dealscale.zohorecruit.com/jobs/Careers",
	privacyPolicyLink: "/privacy",
	termsOfServiceLink: "/tos",
	cookiePolicyLink: "/cookies",
};
