import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/utils/seo/staticSeo", async (importOriginal) => {
	const actual = await importOriginal<typeof import("@/utils/seo/staticSeo")>();
	const getStaticSeo = vi.fn();
	return {
		__esModule: true,
		...actual,
		getStaticSeo,
		defaultSeo: {
			canonical: "https://launchmvp.com",
			title: "Launch MVP",
			description: "Default description",
		},
	};
});

vi.mock("@/utils/seo/mapSeoMetaToMetadata", () => ({
	__esModule: true,
	mapSeoMetaToMetadata: vi.fn((seo) => ({
		title: seo.title || "Launch MVP",
		description: seo.description || "Default description",
		alternates: {
			canonical: seo.canonical || "https://launchmvp.com",
		},
	})),
}));

import { generateMetadata } from "@/app/linktree/page";
import { getStaticSeo } from "@/utils/seo/staticSeo";

const mockedGetStaticSeo = vi.mocked(getStaticSeo);

describe("LinkTree Page Metadata", () => {
	const mockSeo = {
		title: "Link Tree | Launch MVP",
		description:
			"Quick access to Launch MVP's most important links, resources, and pages.",
		canonical: "https://launchmvp.com/linktree",
		keywords: ["links", "resources"],
		image: "/banners/main.png",
		siteName: "Launch MVP",
		type: "website" as const,
	};

	beforeEach(() => {
		vi.clearAllMocks();
		mockedGetStaticSeo.mockReturnValue(mockSeo);
	});

	it("generates metadata with correct title", async () => {
		const metadata = await generateMetadata();

		expect(metadata.title).toBe("Link Tree | Launch MVP");
	});

	it("generates metadata with correct description", async () => {
		const metadata = await generateMetadata();

		expect(metadata.description).toContain(
			"Explore Launch MVP's curated collection of links",
		);
		expect(metadata.description).toContain(
			"services, products, case studies, events, and founder resources",
		);
	});

	it("includes OpenGraph metadata", async () => {
		const metadata = await generateMetadata();

		expect(metadata.openGraph).toEqual({
			title: "Launch MVP Link Tree",
			description:
				"Quick access to Launch MVP's most important links, resources, and pages.",
			url: "https://launchmvp.com/linktree",
			type: "website",
		});
	});

	it("includes Twitter Card metadata", async () => {
		const metadata = await generateMetadata();

		expect(metadata.twitter).toEqual({
			card: "summary_large_image",
			title: "Launch MVP Link Tree",
			description: "Quick access to Launch MVP's resources and pages.",
		});
	});

	it("uses canonical URL from static SEO", async () => {
		const metadata = await generateMetadata();

		expect(mockedGetStaticSeo).toHaveBeenCalledWith("/linktree");
		expect(metadata.openGraph?.url).toBe("https://launchmvp.com/linktree");
	});

	it("falls back to default URL if SEO not found", async () => {
		mockedGetStaticSeo.mockReturnValue({
			canonical: undefined,
		} as Partial<typeof mockSeo>);

		const metadata = await generateMetadata();

		expect(metadata.openGraph?.url).toBe("https://launchmvp.com/linktree");
	});
});
