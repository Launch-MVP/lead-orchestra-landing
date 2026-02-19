import { beforeEach, describe, expect, it } from "vitest";

import {
	getAttributionFieldsFromUrl,
	resolveUtmIcpFromUrlOrState,
} from "../attributionFields";

describe("attributionFields", () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	it("reads tracking fields including utm_icp from URL", () => {
		const result = getAttributionFieldsFromUrl(
			"https://example.com/contact?gclid=abc&wbraid=w1&gbraid=g1&msclkid=m1&fbclid=f1&utm_source=google&utm_medium=cpc&utm_campaign=spring&utm_term=lead&utm_content=hero&utm_icp=b2b",
		);

		expect(result).toEqual({
			gclid: "abc",
			wbraid: "w1",
			gbraid: "g1",
			msclkid: "m1",
			fbclid: "f1",
			utm_source: "google",
			utm_medium: "cpc",
			utm_campaign: "spring",
			utm_term: "lead",
			utm_content: "hero",
			utm_icp: "b2b",
		});
	});

	it("persists and reuses attribution fields when URL has none", () => {
		getAttributionFieldsFromUrl(
			"https://example.com/contact?gclid=abc&utm_source=google&utm_campaign=spring&utm_term=lead",
		);

		const result = getAttributionFieldsFromUrl("https://example.com/contact");
		expect(result).toEqual({
			gclid: "abc",
			utm_source: "google",
			utm_campaign: "spring",
			utm_term: "lead",
		});
	});

	it("prefers URL values over stored attribution", () => {
		getAttributionFieldsFromUrl(
			"https://example.com/contact?gclid=old&utm_source=google&utm_campaign=old-campaign",
		);

		const result = getAttributionFieldsFromUrl(
			"https://example.com/contact?gclid=new&utm_campaign=new-campaign",
		);

		expect(result).toEqual({
			gclid: "new",
			utm_source: "google",
			utm_campaign: "new-campaign",
		});
	});

	it("prefers utm_icp from URL over selected ICP state", () => {
		const result = resolveUtmIcpFromUrlOrState(
			"https://example.com/contact?utm_icp=url-icp",
			"state-icp",
		);

		expect(result).toBe("url-icp");
	});

	it("uses existing ICP URL params when utm_icp is missing", () => {
		const result = resolveUtmIcpFromUrlOrState(
			"https://example.com/contact?icpCategory=Real%20Estate%20Agencies",
			"state-icp",
		);

		expect(result).toBe("Real Estate Agencies");
	});

	it("falls back to selected ICP state when URL has no ICP params", () => {
		const result = resolveUtmIcpFromUrlOrState(
			"https://example.com/contact?utm_source=google",
			"SaaS Founders",
		);

		expect(result).toBe("SaaS Founders");
	});
});
