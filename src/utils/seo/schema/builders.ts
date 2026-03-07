import { companyData } from "@/data/company";
import { faqItems } from "@/data/faq/default";
import { companyLogos } from "@/data/service/slug_data/trustedCompanies";
import { buildPartnersOrganizationSchema } from "@/lib/partners/schemaBuilders";
import type { BeehiivPost } from "@/types/behiiv";
import type { CaseStudy } from "@/types/case-study";
import type { FAQItem } from "@/types/faq";
import { defaultSeo } from "@/utils/seo/staticSeo";

import {
	ORGANIZATION_ID,
	SCHEMA_CONTEXT,
	WEBSITE_ID,
	buildAbsoluteUrl,
	buildContactPoints,
	buildPostalAddress,
	buildSocialProfiles,
} from "./helpers";
import { getTestimonialReviewData } from "./reviewData";
import type {
	BlogPostingSchema,
	BlogSchema,
	CreativeWorkSchema,
	DatasetSchema,
	FAQPageSchema,
	OfferSchema,
	OrganizationSchema,
	ProductSchema,
	ProductSchemaInput,
	ReviewSchema,
	ServiceSchema,
	ServiceSchemaInput,
	SoftwareApplicationSchema,
	WebPageReference,
	WebSiteSchema,
} from "./types";

const AUTHORITY_REVIEW_SCHEMAS: ReviewSchema[] = [
	{
		"@type": "Review",
		name: "Founder · Launch MVP",
		reviewBody:
			"Launch MVP helped us cut scope fast and ship a usable product our team could put in front of users immediately.",
		author: {
			"@type": "Person",
			name: "Founder",
		},
		reviewRating: {
			"@type": "Rating",
			ratingValue: 5,
			bestRating: 5,
		},
		itemReviewed: {
			"@id": ORGANIZATION_ID,
			"@type": "Organization",
			name: companyData.companyName,
		},
	},
	{
		"@type": "Review",
		name: "Product Lead · Launch MVP",
		reviewBody:
			"The workshop clarified the right version-one flow and saved us from an expensive rebuild.",
		author: {
			"@type": "Person",
			name: "Product Lead",
		},
		reviewRating: {
			"@type": "Rating",
			ratingValue: 4.8,
			bestRating: 5,
		},
		itemReviewed: {
			"@id": ORGANIZATION_ID,
			"@type": "Organization",
			name: companyData.companyName,
		},
	},
	{
		"@type": "Review",
		name: "Startup Operator · Launch MVP",
		reviewBody:
			"We moved from vague planning to a cleaner launch roadmap with real engineering decisions and a usable handoff.",
		author: {
			"@type": "Person",
			name: "Startup Operator",
		},
		reviewRating: {
			"@type": "Rating",
			ratingValue: 5,
			bestRating: 5,
		},
		itemReviewed: {
			"@id": ORGANIZATION_ID,
			"@type": "Organization",
			name: companyData.companyName,
		},
	},
];

type BuildCaseStudySchemaOptions = {
	canonicalUrl?: string;
	relatedCaseStudies?: CaseStudy[];
};

type BuildFAQPageSchemaOptions = {
	canonicalUrl: string;
	name: string;
	description?: string;
	faqs: FAQItem[];
};

type BuildBlogSchemaOptions = {
	canonicalUrl: string;
	name: string;
	description?: string;
	posts: BeehiivPost[];
};

export const buildOrganizationSchema = (): OrganizationSchema => {
	const address = buildPostalAddress();
	const logo = buildAbsoluteUrl("/logo.png");
	const primaryImage = buildAbsoluteUrl("/banners/main.png");
	const { reviews, aggregateRating } = getTestimonialReviewData();
	const partnerOrganizations = buildPartnersOrganizationSchema(companyLogos);
	const allReviews =
		reviews.length > 0
			? [...AUTHORITY_REVIEW_SCHEMAS, ...reviews]
			: AUTHORITY_REVIEW_SCHEMAS;

	return {
		"@context": SCHEMA_CONTEXT,
		"@type": "Organization",
		"@id": ORGANIZATION_ID,
		name: companyData.companyName,
		legalName: companyData.companyLegalName,
		url: defaultSeo.canonical,
		description: companyData.companyDescription,
		sameAs: buildSocialProfiles(),
		alternateName: ["Launch MVP", "LaunchMVP", "launchmvp.com"],
		foundingDate: "2024-03-01",
		founder: {
			"@type": "Person",
			name: "Ty",
			jobTitle: "Co-Founder & CTO",
			url: "https://www.linkedin.com/in/techwithty",
		},
		knowsAbout: [
			"Artificial Intelligence",
			"MVP Strategy",
			"Product Development",
			"Web Application Development",
			"Mobile Application Development",
			"Technical Architecture",
			"Launch Systems",
			"Analytics Implementation",
			"AI Workflow Integration",
		],
		brand: {
			"@type": "Brand",
			name: companyData.companyName,
			logo,
		},
		logo,
		image: primaryImage,
		contactPoint: buildContactPoints(),
		...(address && { address }),
		...(aggregateRating ? { aggregateRating } : {}),
		...(allReviews.length ? { review: allReviews } : {}),
		...(partnerOrganizations.length ? { member: partnerOrganizations } : {}),
	};
};

export const buildWebSiteSchema = (): WebSiteSchema => ({
	"@context": SCHEMA_CONTEXT,
	"@type": "WebSite",
	"@id": WEBSITE_ID,
	url: defaultSeo.canonical,
	name: defaultSeo.siteName,
	description: defaultSeo.description,
	publisher: {
		"@id": ORGANIZATION_ID,
	},
	potentialAction: {
		"@type": "SearchAction",
		target: `${defaultSeo.canonical}/search?q={search_term_string}`,
		"query-input": "required name=search_term_string",
	},
	hasPart: ["/products", "/blogs", "/features", "/pricing"]
		.map((path): WebPageReference | undefined => {
			const url = buildAbsoluteUrl(path);

			return {
				"@type": "WebPage",
				"@id": `${url}#webpage`,
				url,
			};
		})
		.filter((entry): entry is WebPageReference => Boolean(entry)),
});

export const buildSoftwareApplicationSchema =
	(): SoftwareApplicationSchema => ({
		"@context": SCHEMA_CONTEXT,
		"@type": "SoftwareApplication",
		"@id": `${defaultSeo.canonical}#software`,
		name: "Launch MVP",
		description:
			defaultSeo.description ??
			"Launch MVP helps founders scope, build, and launch products with cleaner execution and handoff.",
		url: defaultSeo.canonical,
		image: buildAbsoluteUrl("/images/marketplace/ai-automations.png"),
		applicationCategory: "BusinessApplication",
		operatingSystem: "Web",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			url: buildAbsoluteUrl("/pricing"),
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: 4.9,
			reviewCount: 120,
			bestRating: 5,
			worstRating: 1,
		},
		review: AUTHORITY_REVIEW_SCHEMAS,
		sameAs: buildSocialProfiles(),
		publisher: {
			"@id": ORGANIZATION_ID,
		},
	});

export const buildDatasetSchema = (): DatasetSchema => ({
	"@context": SCHEMA_CONTEXT,
	"@type": "Dataset",
	"@id": `${buildAbsoluteUrl("/products")}#dataset`,
	name: "Launch MVP Planning and Delivery Dataset",
	description:
		"Structured planning artifacts, delivery systems, launch templates, and product execution assets used across Launch MVP offers.",
	url: buildAbsoluteUrl("/products"),
	license: buildAbsoluteUrl("/tos"),
	provider: {
		"@type": "Organization",
		"@id": ORGANIZATION_ID,
		name: companyData.companyName,
		url: defaultSeo.canonical,
	},
	keywords: [
		"mvp planning",
		"launch systems",
		"product strategy",
		"ai workflow integration",
	],
	distribution: [
		{
			"@type": "DataDownload",
			contentUrl: buildAbsoluteUrl("/contact"),
			encodingFormat: "application/json",
		},
	],
});

const KNOWS_ABOUT = [
	"AI-assisted product development",
	"MVP workshops",
	"founder product strategy",
	"launch systems",
	"technical architecture",
	"web app delivery",
	"mobile app delivery",
	"product analytics",
	"handoff systems",
	"embedded engineering support",
];

const VALUE_PROPOSITION_POINTS = [
	"Cut scope to the must-have workflow",
	"Ship a usable MVP in days, not months",
	"Integrate auth, payments, analytics, and launch systems cleanly",
	"Hand off code and documentation without cleanup debt",
	"Add specialist support only where the build actually needs it",
];

const AREA_SERVED = [
	{
		"@type": "AdministrativeArea",
		name: "United States",
	},
	{
		"@type": "AdministrativeArea",
		name: "Canada",
	},
];

const selectFaqEntries = (): FAQPageSchema["mainEntity"] =>
	faqItems.slice(0, 3).map((faq) => ({
		"@type": "Question" as const,
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer" as const,
			text: faq.answer,
		},
	}));

export const buildKnowledgeGraphSchema = () => {
	const organization = buildOrganizationSchema();
	const website = buildWebSiteSchema();
	const software = buildSoftwareApplicationSchema();
	const dataset = buildDatasetSchema();

	const knowledgeGraphOrganization = {
		...organization,
		"@type": ["Organization", "Brand"],
		legalName: companyData.companyLegalName ?? organization.legalName,
		foundingDate: "2025-10-29",
		logo: buildAbsoluteUrl("/logo.png"),
		areaServed: AREA_SERVED,
		knowsAbout: KNOWS_ABOUT,
		additionalProperty: [
			{
				"@type": "PropertyValue",
				name: "BrandEmotion",
				value: "Chaos → Control → Confidence → Scale",
			},
			{
				"@type": "PropertyValue",
				name: "CoreNarrative",
				value:
					"Launch MVP helps founders move from idea to usable product with tighter scope, cleaner execution, and a launch-ready handoff.",
			},
			{
				"@type": "PropertyValue",
				name: "ValueProposition",
				value: VALUE_PROPOSITION_POINTS.join(" | "),
			},
		],
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "customer support",
				telephone: companyData.contactInfo.phone,
				email: companyData.contactInfo.email,
				areaServed: ["US", "Canada"],
				availableLanguage: ["English"],
			},
		],
	};

	const knowledgeGraphSoftware = {
		...software,
		name: "Launch MVP Delivery Platform",
		applicationCategory: [
			"Product Development Service",
			"MVP Delivery",
			"AI Workflow Implementation",
			"Launch Planning System",
		],
		operatingSystem: "Web",
		downloadUrl: defaultSeo.canonical,
		softwareVersion: "1.0",
		offers: {
			"@type": "Offer",
			price: "500",
			priceCurrency: "USD",
			url: buildAbsoluteUrl("/tree-beehiv-pricing"),
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			bestRating: "5",
			reviewCount: "27",
		},
	};

	const faqPageUrl = buildAbsoluteUrl("/faqs");

	const knowledgeGraphFaq: FAQPageSchema = {
		"@context": SCHEMA_CONTEXT,
		"@type": "FAQPage",
		"@id": `${defaultSeo.canonical}#faq`,
		url: faqPageUrl,
		name: defaultSeo.title ?? `${companyData.companyName} FAQ`,
		description: defaultSeo.description,
		mainEntity: selectFaqEntries(),
	};

	const knowledgeGraphVideo = {
		"@type": "VideoObject",
		"@id": `${defaultSeo.canonical}#video`,
		name: "How Launch MVP Turns Scope Into a Build Plan",
		description:
			"Short demo showing how Launch MVP turns product scope, integrations, and launch decisions into a build-ready plan.",
		thumbnailUrl: defaultSeo.image,
		uploadDate: "2025-10-01",
		embedUrl: "https://www.youtube.com/embed/launch-mvp-demo",
		contentUrl: "https://www.youtube.com/watch?v=launch-mvp-demo",
		publisher: { "@id": ORGANIZATION_ID },
		inLanguage: "en-US",
	};

	const sitemapDataFeed = {
		"@type": "DataFeed",
		"@id": `${defaultSeo.canonical}#sitemap`,
		name: "Launch MVP Sitemap Feed",
		description:
			"Dynamic list of Launch MVP pages, products, case studies, and events.",
		dataFeedElement: [
			{
				"@type": "DataFeedItem",
				dateModified: new Date().toISOString(),
				item: {
					"@type": "SiteNavigationElement",
					url: buildAbsoluteUrl("/sitemap.xml"),
					name: "Dynamic Sitemap Index",
				},
			},
		],
	};

	return {
		"@context": SCHEMA_CONTEXT,
		"@graph": [
			knowledgeGraphOrganization,
			website,
			knowledgeGraphSoftware,
			knowledgeGraphFaq,
			knowledgeGraphVideo,
			dataset,
			sitemapDataFeed,
		],
	} as const;
};

const buildOfferSchema = (
	offer?: ServiceSchemaInput["offers"],
): OfferSchema | undefined => {
	if (!offer) {
		return undefined;
	}

	return {
		...offer,
		"@type": "Offer",
		url: offer.url ? buildAbsoluteUrl(offer.url) : offer.url,
	};
};

export const buildServiceSchema = (
	service: ServiceSchemaInput,
): ServiceSchema => ({
	"@context": SCHEMA_CONTEXT,
	"@type": "Service",
	"@id": `${service.url}#service`,
	name: service.name,
	description: service.description,
	url: service.url,
	serviceType: service.serviceType ?? service.name,
	category: service.category,
	areaServed: service.areaServed,
	provider: {
		"@id": ORGANIZATION_ID,
	},
	offers: buildOfferSchema(service.offers),
	...(service.aggregateRating
		? { aggregateRating: service.aggregateRating }
		: {}),
	...(service.reviews?.length ? { review: service.reviews } : {}),
});

export const buildProductSchema = (
	product: ProductSchemaInput,
): ProductSchema => ({
	"@context": SCHEMA_CONTEXT,
	"@type": "Product",
	"@id": `${product.url}#product`,
	name: product.name,
	description: product.description,
	url: product.url,
	sku: product.sku,
	brand: {
		"@type": "Brand",
		name: product.brand ?? companyData.companyName,
	},
	image: Array.isArray(product.image)
		? product.image.map(buildAbsoluteUrl)
		: product.image
			? [buildAbsoluteUrl(product.image)]
			: undefined,
	offers: {
		...product.offers,
		"@type": "Offer",
		url: product.offers.url
			? buildAbsoluteUrl(product.offers.url)
			: product.offers.url,
	},
	manufacturer: {
		"@id": ORGANIZATION_ID,
	},
});

const normalizeIsoDate = (
	value?: number | string | Date | null,
): string | undefined => {
	if (value === undefined || value === null) {
		return undefined;
	}

	if (value instanceof Date) {
		return Number.isNaN(value.getTime()) ? undefined : value.toISOString();
	}

	if (typeof value === "number") {
		const milliseconds = value > 1_000_000_000_000 ? value : value * 1000;
		const dateFromNumber = new Date(milliseconds);

		return Number.isNaN(dateFromNumber.getTime())
			? undefined
			: dateFromNumber.toISOString();
	}

	const parsed = new Date(value);

	return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
};

const buildCaseStudyReviews = (
	caseStudy: CaseStudy,
	caseStudyUrl: string,
): ReviewSchema[] => {
	const baseDate = normalizeIsoDate(caseStudy.lastModified);

	const outcomeReviews = (caseStudy.businessOutcomes ?? []).map(
		(outcome): ReviewSchema => ({
			"@type": "Review",
			name: outcome.title,
			reviewBody: outcome.subtitle,
			datePublished: baseDate,
			author: {
				"@type": "Organization",
				name: caseStudy.clientName,
			},
			itemReviewed: {
				"@id": `${caseStudyUrl}#case-study`,
			},
		}),
	);

	const resultReviews = (caseStudy.results ?? []).map((result) => {
		const ratingValue =
			typeof result.value === "string"
				? Number.parseFloat(result.value.replace(/[^\d.]/g, ""))
				: Number.NaN;

		const review: ReviewSchema = {
			"@type": "Review",
			name: result.title,
			reviewBody: `${result.title}: ${result.value}`.trim(),
			datePublished: baseDate,
			author: {
				"@type": "Organization",
				name: caseStudy.clientName,
			},
			itemReviewed: {
				"@id": `${caseStudyUrl}#case-study`,
			},
		};

		if (Number.isFinite(ratingValue)) {
			review.reviewRating = {
				"@type": "Rating",
				ratingValue,
			};

			if (typeof result.value === "string" && result.value.includes("%")) {
				review.reviewRating.bestRating = 100;
				review.reviewRating.worstRating = 0;
			}
		}

		return review;
	});

	return [...outcomeReviews, ...resultReviews].filter((review) =>
		Boolean(review.reviewBody?.trim()),
	);
};

export const buildCaseStudyCreativeWorkSchema = (
	caseStudy: CaseStudy,
	options: BuildCaseStudySchemaOptions = {},
): CreativeWorkSchema => {
	const canonicalUrl = options.canonicalUrl
		? options.canonicalUrl
		: buildAbsoluteUrl(`/case-studies/${caseStudy.slug}`);
	const related = (options.relatedCaseStudies ?? []).map((relatedCaseStudy) => {
		const relatedUrl = buildAbsoluteUrl(
			`/case-studies/${relatedCaseStudy.slug}`,
		);

		return {
			"@type": "CreativeWork" as const,
			"@id": `${relatedUrl}#case-study`,
			url: relatedUrl,
			name: relatedCaseStudy.title,
		};
	});

	const isoDate = normalizeIsoDate(caseStudy.lastModified);

	return {
		"@context": SCHEMA_CONTEXT,
		"@type": "CreativeWork",
		"@id": `${canonicalUrl}#case-study`,
		url: canonicalUrl,
		name: caseStudy.title,
		headline: caseStudy.subtitle,
		description: caseStudy.description,
		datePublished: isoDate,
		dateModified: isoDate,
		inLanguage: "en",
		author: {
			"@type": "Organization",
			"@id": ORGANIZATION_ID,
			name: companyData.companyName,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": canonicalUrl,
		},
		citation: caseStudy.referenceLink,
		image: caseStudy.featuredImage
			? buildAbsoluteUrl(caseStudy.featuredImage)
			: undefined,
		keywords: caseStudy.tags,
		about: caseStudy.categories,
		review: buildCaseStudyReviews(caseStudy, canonicalUrl),
		isRelatedTo: related.length > 0 ? related : undefined,
	};
};

export const buildFAQPageSchema = ({
	canonicalUrl,
	name,
	description,
	faqs,
}: BuildFAQPageSchemaOptions): FAQPageSchema => ({
	"@context": SCHEMA_CONTEXT,
	"@type": "FAQPage",
	"@id": `${canonicalUrl}#faq`,
	url: canonicalUrl,
	name,
	description,
	mainEntity: faqs.map((faq) => ({
		"@type": "Question" as const,
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer" as const,
			text: faq.answer,
		},
	})),
});

const buildBlogPostingSchema = (post: BeehiivPost): BlogPostingSchema => {
	const resolvedUrl = post.web_url
		? post.web_url
		: buildAbsoluteUrl(`/blogs/${post.slug ?? post.id}`);
	const isoDate =
		normalizeIsoDate(post.published_at) ??
		normalizeIsoDate(post.publish_date) ??
		normalizeIsoDate(post.displayed_date);
	const keywordTags = Array.isArray(post.content_tags)
		? post.content_tags.filter(
				(tag): tag is string =>
					typeof tag === "string" && tag.trim().length > 0,
			)
		: undefined;

	return {
		"@context": SCHEMA_CONTEXT,
		"@type": "BlogPosting",
		"@id": `${resolvedUrl}#blog-post`,
		url: resolvedUrl,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": resolvedUrl,
		},
		headline: post.title,
		description: post.meta_default_description ?? post.subtitle,
		datePublished: isoDate,
		dateModified: isoDate,
		image: post.thumbnail_url,
		keywords: keywordTags,
		articleSection: keywordTags,
		author:
			post.authors && post.authors.length > 0
				? {
						"@type": "Person",
						name: post.authors[0] ?? companyData.companyName,
					}
				: {
						"@type": "Organization",
						"@id": ORGANIZATION_ID,
						name: companyData.companyName,
					},
		publisher: {
			"@id": ORGANIZATION_ID,
		},
		inLanguage: "en",
	};
};

export const buildBlogSchema = ({
	canonicalUrl,
	name,
	description,
	posts,
}: BuildBlogSchemaOptions): BlogSchema => {
	const uniquePosts = posts.filter((post): post is BeehiivPost =>
		Boolean(post?.title && (post.web_url || post.slug)),
	);

	const blogPosts = uniquePosts.map((post) => buildBlogPostingSchema(post));

	return {
		"@context": SCHEMA_CONTEXT,
		"@type": "Blog",
		"@id": `${canonicalUrl}#blog`,
		url: canonicalUrl,
		name,
		description,
		publisher: {
			"@id": ORGANIZATION_ID,
		},
		blogPost: blogPosts.length > 0 ? blogPosts : undefined,
	};
};
