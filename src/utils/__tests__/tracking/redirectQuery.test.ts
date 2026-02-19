import {
	isTrackingQueryKey,
	mergeRedirectQueryParams,
} from "@/utils/tracking/redirectQuery";

describe("redirectQuery", () => {
	test("identifies tracking query keys", () => {
		expect(isTrackingQueryKey("utm_source")).toBe(true);
		expect(isTrackingQueryKey("gclid")).toBe(true);
		expect(isTrackingQueryKey("wbraid")).toBe(true);
		expect(isTrackingQueryKey("foo")).toBe(false);
	});

	test("incoming tracking params override destination and stored params", () => {
		const destination = new URL(
			"https://example.com/contact?utm_source=dest&utm_campaign=dest&gclid=dest",
		);
		const incoming = new URLSearchParams(
			"utm_source=incoming&utm_campaign=incoming&gclid=incoming",
		);

		const result = mergeRedirectQueryParams({
			destinationUrl: destination,
			incomingSearchParams: incoming,
			storedParams: {
				utm_source: "stored",
				utm_campaign: "stored",
				gclid: "stored",
			},
		});

		expect(result.searchParams.get("utm_source")).toBe("incoming");
		expect(result.searchParams.get("utm_campaign")).toBe("incoming");
		expect(result.searchParams.get("gclid")).toBe("incoming");
	});

	test("stored params only append when destination is missing", () => {
		const destination = new URL("https://example.com/contact?utm_source=dest");
		const incoming = new URLSearchParams();
		const result = mergeRedirectQueryParams({
			destinationUrl: destination,
			incomingSearchParams: incoming,
			storedParams: {
				utm_source: "stored-source",
				utm_campaign: "stored-campaign",
			},
		});

		expect(result.searchParams.get("utm_source")).toBe("dest");
		expect(result.searchParams.get("utm_campaign")).toBe("stored-campaign");
	});

	test("non-tracking incoming params are preserved only when destination lacks the key", () => {
		const destination = new URL(
			"https://example.com/contact?ref=dest-ref&foo=dest-foo",
		);
		const incoming = new URLSearchParams("ref=incoming-ref&bar=incoming-bar");
		const result = mergeRedirectQueryParams({
			destinationUrl: destination,
			incomingSearchParams: incoming,
		});

		expect(result.searchParams.get("ref")).toBe("dest-ref");
		expect(result.searchParams.get("foo")).toBe("dest-foo");
		expect(result.searchParams.get("bar")).toBe("incoming-bar");
	});

	test("skips reserved incoming keys", () => {
		const destination = new URL("https://example.com/contact");
		const incoming = new URLSearchParams(
			"to=https://x.com&pageId=123&slug=abc&isFile=1&utm_source=google",
		);
		const result = mergeRedirectQueryParams({
			destinationUrl: destination,
			incomingSearchParams: incoming,
			skipIncomingKeys: ["to", "pageId", "slug", "isFile"],
		});

		expect(result.searchParams.get("utm_source")).toBe("google");
		expect(result.searchParams.get("to")).toBeNull();
		expect(result.searchParams.get("pageId")).toBeNull();
		expect(result.searchParams.get("slug")).toBeNull();
		expect(result.searchParams.get("isFile")).toBeNull();
	});
});
