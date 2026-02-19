import { withUtm } from "@/utils/linktree-redis";

describe("withUtm", () => {
	const slug = "test-slug";

	beforeEach(() => {
		process.env.NEXT_PUBLIC_SITE_HOST = "dealscale.ai";
	});

	afterEach(() => {
		process.env.NEXT_PUBLIC_SITE_HOST = undefined;
	});

	test("returns internal path unchanged", () => {
		expect(withUtm("/internal/path", slug)).toBe("/internal/path");
	});

	test("skips signed URLs", () => {
		const url =
			"https://example.com/file?X-Amz-Signature=abc123&X-Amz-Algorithm=AWS4-HMAC-SHA256";
		expect(withUtm(url, slug)).toBe(url);
	});

	test("adds default utm_source and utm_campaign when missing", () => {
		const result = new URL(withUtm("https://example.com/target", slug));
		expect(result.searchParams.get("utm_source")).toBe("dealscale.ai");
		expect(result.searchParams.get("utm_campaign")).toBe(slug);
	});

	test("appends Notion params only when destination is missing them", () => {
		const result = new URL(
			withUtm("https://example.com/target", slug, {
				utm_source: "notion-source",
				utm_campaign: "notion-campaign",
				utm_medium: "cpc",
				utm_term: "lead orchestration",
				utm_content: "ad-a",
				utm_offer: "100freeleads",
				utm_icp: "b2b-smbs",
				utm_id: "cid-1",
				gclid: "gclid-1",
				wbraid: "wbraid-1",
				gbraid: "gbraid-1",
				msclkid: "msclkid-1",
				fbclid: "fbclid-1",
			}),
		);

		expect(result.searchParams.get("utm_source")).toBe("notion-source");
		expect(result.searchParams.get("utm_campaign")).toBe("notion-campaign");
		expect(result.searchParams.get("utm_medium")).toBe("cpc");
		expect(result.searchParams.get("utm_term")).toBe("lead orchestration");
		expect(result.searchParams.get("utm_content")).toBe("ad-a");
		expect(result.searchParams.get("utm_offer")).toBe("100freeleads");
		expect(result.searchParams.get("utm_icp")).toBe("b2b-smbs");
		expect(result.searchParams.get("utm_id")).toBe("cid-1");
		expect(result.searchParams.get("gclid")).toBe("gclid-1");
		expect(result.searchParams.get("wbraid")).toBe("wbraid-1");
		expect(result.searchParams.get("gbraid")).toBe("gbraid-1");
		expect(result.searchParams.get("msclkid")).toBe("msclkid-1");
		expect(result.searchParams.get("fbclid")).toBe("fbclid-1");
	});

	test("does not overwrite existing destination tracking params", () => {
		const result = new URL(
			withUtm(
				"https://example.com/target?utm_source=dest-source&utm_campaign=dest-campaign&gclid=dest-gclid&utm_term=dest-term",
				slug,
				{
					utm_source: "notion-source",
					utm_campaign: "notion-campaign",
					utm_term: "notion-term",
					gclid: "notion-gclid",
					utm_medium: "cpc",
				},
			),
		);

		expect(result.searchParams.get("utm_source")).toBe("dest-source");
		expect(result.searchParams.get("utm_campaign")).toBe("dest-campaign");
		expect(result.searchParams.get("utm_term")).toBe("dest-term");
		expect(result.searchParams.get("gclid")).toBe("dest-gclid");
		expect(result.searchParams.get("utm_medium")).toBe("cpc");
	});

	test("preserves non-tracking query parameters", () => {
		const result = new URL(
			withUtm("https://example.com/target?ref=partner&foo=bar", slug, {
				utm_source: "notion-source",
			}),
		);

		expect(result.searchParams.get("ref")).toBe("partner");
		expect(result.searchParams.get("foo")).toBe("bar");
		expect(result.searchParams.get("utm_source")).toBe("notion-source");
	});

	test("falls back to defaults if notion source/campaign are empty", () => {
		const result = new URL(
			withUtm("https://example.com/target", slug, {
				utm_source: "   ",
				utm_campaign: "",
			}),
		);

		expect(result.searchParams.get("utm_source")).toBe("dealscale.ai");
		expect(result.searchParams.get("utm_campaign")).toBe(slug);
	});
});
