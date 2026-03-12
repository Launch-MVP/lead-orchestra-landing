import type { ManifestoSectionSummary } from "@/data/about/timelineSummary";
import { companyData } from "@/data/company";
import { defaultSeo } from "@/utils/seo/staticSeo";

import { ORGANIZATION_ID, SCHEMA_CONTEXT, buildAbsoluteUrl } from "./helpers";

function slugifyAnchor(
	anchor: string,
	fallback: string,
	index: number,
): string {
	const base = anchor.trim() || fallback.trim().toLowerCase();
	return (
		base
			.normalize("NFKD")
			.replace(/\p{Diacritic}/gu, "")
			.replace(/[^a-z0-9]+/gi, "-")
			.replace(/^-+|-+$/g, "")
			.toLowerCase() || `section-${index + 1}`
	);
}

export interface BuildManifestoSchemaOptions {
	url?: string;
	name?: string;
	description?: string;
}

export function buildManifestoSchema(
	sections: ManifestoSectionSummary[],
	options: BuildManifestoSchemaOptions = {},
) {
	const baseUrl = buildAbsoluteUrl(options.url ?? "/about");
	const seriesId = `${baseUrl}#manifesto`;

	return {
		"@context": SCHEMA_CONTEXT,
		"@type": "CreativeWorkSeries",
		"@id": seriesId,
		name: options.name ?? "Pilot Spring Manifesto",
		headline:
			options.description ??
			"Ten-part manifesto outlining how Pilot Spring helps founders scope, build, and launch products with cleaner execution.",
		description:
			options.description ??
			"Discover how Pilot Spring turns product clarity, launch systems, and execution discipline into real shipped outcomes.",
		url: baseUrl,
		inLanguage: "en-US",
		author: {
			"@type": "Organization",
			"@id": ORGANIZATION_ID,
			name: companyData.companyName,
			url: defaultSeo.canonical,
		},
		dateModified: new Date().toISOString(),
		hasPart: sections.map((section, index) => {
			const anchor = slugifyAnchor(section.anchor, section.title, index);
			const partId = `${seriesId}-${anchor}`;
			return {
				"@type": "CreativeWork",
				"@id": partId,
				name: section.title,
				headline: section.subtitle || section.title,
				description: section.summary || section.subtitle || "",
				position: index + 1,
				url: `${baseUrl}#${anchor}`,
			};
		}),
		itemListElement: sections.map((section, index) => {
			const anchor = slugifyAnchor(section.anchor, section.title, index);
			return {
				"@type": "ListItem",
				position: index + 1,
				name: section.title,
				description: section.summary || section.subtitle || "",
				url: `${baseUrl}#${anchor}`,
			};
		}),
	};
}
