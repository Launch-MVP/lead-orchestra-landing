import { Response as NodeFetchResponse } from "node-fetch";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/server", () => ({
	__esModule: true,
	NextResponse: {
		json: (body: unknown, init?: ResponseInit) =>
			new NodeFetchResponse(JSON.stringify(body), {
				status: init?.status ?? 200,
				statusText: init?.statusText,
				headers: {
					"content-type": "application/json",
					...(init?.headers as Record<string, string> | undefined),
				},
			}),
	},
}));

const originalEnv = { ...process.env };

const loadRoute = async () => {
	vi.resetModules();
	return import("../route");
};

describe("GET /api/init-providers", () => {
	beforeEach(() => {
		process.env = { ...originalEnv };
	});

	afterEach(() => {
		process.env = { ...originalEnv };
	});

	it("returns a 200 response with warnings when providers are not configured", async () => {
		process.env.CLARITY_PROJECT_ID = undefined;
		process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID = undefined;
		process.env.GOOGLE_ANALYTICS_ID = undefined;
		process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS = undefined;
		process.env.GOOGLE_TAG_MANAGER_ID = undefined;
		process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID = undefined;
		process.env.ZOHO_SALES_IQ_WIDGET_CODE = undefined;
		process.env.NEXT_PUBLIC_ZOHOSALESIQ_WIDGETCODE = undefined;
		process.env.FACEBOOK_PIXEL_ID = undefined;
		process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID = undefined;
		process.env.PLAUSIBLE_DOMAIN = undefined;
		process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN = undefined;
		process.env.PLAUSIBLE_ENDPOINT = undefined;
		process.env.NEXT_PUBLIC_PLAUSIBLE_ENDPOINT = undefined;
		process.env.PLAUSIBLE_SCRIPT_SRC = undefined;
		process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC = undefined;

		process.env.NODE_ENV = "production";

		const { GET } = await loadRoute();
		const response = await GET();

		expect(response.status).toBe(200);
		expect(response.headers.get("cache-control")).toBe("no-store");

		const payload = await response.json();

		expect(payload).toMatchObject({
			warnings: [
				{
					field: "clarityId",
					message: "Analytics provider clarityId is not configured.",
				},
				{
					field: "gaId",
					message: "Analytics provider gaId is not configured.",
				},
				{
					field: "gtmId",
					message: "Analytics provider gtmId is not configured.",
				},
				{
					field: "zohoCode",
					message: "Analytics provider zohoCode is not configured.",
				},
				{
					field: "facebookPixelId",
					message: "Analytics provider facebookPixelId is not configured.",
				},
				{
					field: "plausibleDomain",
					message: "Analytics provider plausibleDomain is not configured.",
				},
				{
					field: "plausibleEndpoint",
					message: "Analytics provider plausibleEndpoint is not configured.",
				},
				{
					field: "plausibleScriptSrc",
					message: "Analytics provider plausibleScriptSrc is not configured.",
				},
			],
			fallbacksUsed: {},
		});
	});
});
