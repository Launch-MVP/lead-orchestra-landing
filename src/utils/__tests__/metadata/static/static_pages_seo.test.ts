import { DEFAULT_SEO } from "@/data/constants/seo";
import { staticSeoMeta } from "@/utils/seo/staticSeo";

type StaticSeoExpectation = {
	title: string;
	descriptionIncludes: string;
	canonical: string;
	image: string;
	priority?: number;
	changeFrequency?: string;
};

const cases: Array<[string, StaticSeoExpectation]> = [
	[
		"/blogs",
		{
			title: "Insights | Pilot Spring",
			descriptionIncludes: "product strategy",
			canonical: "https://launchmvp.com/blogs",
			image: DEFAULT_SEO.image,
			priority: 0.8,
			changeFrequency: "weekly",
		},
	],
	[
		"/contact",
		{
			title: "Contact | Pilot Spring",
			descriptionIncludes: "in-person workshops",
			canonical: "https://launchmvp.com/contact",
			image: DEFAULT_SEO.image,
			priority: 0.7,
			changeFrequency: "monthly",
		},
	],
	[
		"/case-studies",
		{
			title: "Case Studies | Pilot Spring",
			descriptionIncludes: "scope, ship, and iterate",
			canonical: "https://launchmvp.com/case-studies",
			image: "/banners/CaseStudy2.png",
			priority: 0.8,
			changeFrequency: "weekly",
		},
	],
	[
		"/cookies",
		{
			title: "Cookie Policy | Pilot Spring",
			descriptionIncludes: "uses cookies and similar technologies",
			canonical: "https://launchmvp.com/cookies",
			image: DEFAULT_SEO.image,
			priority: 0.3,
			changeFrequency: "yearly",
		},
	],
	[
		"/events",
		{
			title: "Events | Pilot Spring",
			descriptionIncludes: "founder sessions",
			canonical: "https://launchmvp.com/events",
			image: DEFAULT_SEO.image,
		},
	],
	[
		"/faqs",
		{
			title: "Pilot Spring FAQ | Workshops, Build Support, and Launch Systems",
			descriptionIncludes: "strategy sessions",
			canonical: "https://launchmvp.com/faq",
			image: DEFAULT_SEO.image,
		},
	],
	[
		"/portfolio",
		{
			title: "Portfolio | Pilot Spring",
			descriptionIncludes: "MVP builds",
			canonical: "https://launchmvp.com/portfolio",
			image: DEFAULT_SEO.image,
		},
	],
	[
		"/privacy",
		{
			title: "Privacy Policy | Pilot Spring",
			descriptionIncludes: "protects your personal information",
			canonical: "https://launchmvp.com/privacy",
			image: DEFAULT_SEO.image,
			priority: 0.3,
			changeFrequency: "yearly",
		},
	],
	[
		"/tos",
		{
			title: "Terms of Service | Pilot Spring",
			descriptionIncludes: "workshops",
			canonical: "https://launchmvp.com/tos",
			image: DEFAULT_SEO.image,
		},
	],
	[
		"/features",
		{
			title: "Services | Pilot Spring",
			descriptionIncludes: "embedded engineering support",
			canonical: "https://launchmvp.com/features",
			image: "/banners/Feature.png",
		},
	],
];

describe("Static SEO metadata", () => {
	it("provides entries for every expected static path", () => {
		for (const [path] of cases) {
			expect(staticSeoMeta[path]).toBeDefined();
		}
	});

	it.each(cases)("matches configured metadata for %s", (path, expected) => {
		const seo = staticSeoMeta[path];
		expect(seo.title).toBe(expected.title);
		expect(seo.description).toContain(expected.descriptionIncludes);
		expect(seo.canonical).toBe(expected.canonical);
		expect(seo.image).toBe(expected.image);
		expect(Array.isArray(seo.keywords)).toBe(true);
		expect(seo.keywords.length).toBeGreaterThan(0);
		if (expected.priority !== undefined) {
			expect(seo.priority).toBe(expected.priority);
		}
		if (expected.changeFrequency !== undefined) {
			expect(seo.changeFrequency).toBe(expected.changeFrequency);
		}
	});
});
