import { mapSeoMetaToMetadata } from "@/utils/seo/mapSeoMetaToMetadata";
import { getStaticSeo } from "@/utils/seo/staticSeo";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

const CAREERS_PORTAL_URL = "https://dealscale.zohorecruit.com/jobs/Careers";

export async function generateMetadata(): Promise<Metadata> {
	const seo = getStaticSeo("/careers");
	const metadata = mapSeoMetaToMetadata(seo);

	return {
		...metadata,
		title: "Careers at Launch MVP",
		description:
			"Explore open roles at Launch MVP and help founders ship better products, launch systems, and AI-powered experiences.",
		alternates: {
			canonical: CAREERS_PORTAL_URL,
		},
		robots: {
			index: true, // ✅ Enable indexing for SEO
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph: {
			title: "Careers at Launch MVP",
			description:
				"Join the team building founder-focused product strategy, launch systems, and AI-powered MVP delivery.",
			url: CAREERS_PORTAL_URL,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: "Careers at Launch MVP",
			description: "Explore open roles at Launch MVP.",
		},
	};
}

export default function CareersRedirectPage() {
	redirect(CAREERS_PORTAL_URL);
}
