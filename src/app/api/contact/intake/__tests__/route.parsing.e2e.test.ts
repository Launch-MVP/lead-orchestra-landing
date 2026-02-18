import { NextRequest } from "next/server";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const mockedPagesCreate = vi.fn();

vi.mock("@notionhq/client", () => ({
	Client: vi.fn(() => ({
		pages: {
			create: mockedPagesCreate,
		},
	})),
}));

vi.mock("@/lib/analytics/meta-conversions-api", () => ({
	buildMetaUserDataFromRequest: vi.fn(() => ({
		email: "intake@example.com",
		clientIpAddress: "127.0.0.1",
		clientUserAgent: "vitest",
	})),
	generateServerEventId: vi.fn(() => "evt_generated_mock"),
	resolveEventSourceUrl: vi.fn((_: Request, explicit?: string) => explicit),
	splitFullName: vi.fn(() => ({ firstName: "Jane", lastName: "Doe" })),
	sendMetaConversionEvent: vi.fn().mockResolvedValue({ ok: true }),
}));

let POST: typeof import("../route").POST;

beforeAll(async () => {
	process.env.NOTION_DATABASE_ID = "db_test_123";
	({ POST } = await import("../route"));
});

describe("POST /api/contact/intake parsing (e2e)", () => {
	beforeEach(() => {
		mockedPagesCreate.mockReset();
		mockedPagesCreate.mockResolvedValue({ id: "page_1" });
	});

	it("maps range/plus/unknown values into Notion numeric properties", async () => {
		const payload = {
			name: "Jane Doe",
			companyName: "Acme Inc",
			email: "intake@example.com",
			metaEventId: "evt_intake_parse_1",
			eventSourceUrl: "https://www.leadorchestra.com/contact",
			gclid: "EAIaIQobChMI_mock",
			utm_source: "google",
			utm_campaign: "brand_search",
			utm_term: "deal scale",
			utm_content: "headline_a",

			leadVolumePerMonth: "500-2000",
			dealsPerMonth: "50+",
			avgDealAmount: "unknown",
			conversionRate: "3-10",
		};

		const request = new NextRequest("http://localhost/api/contact/intake", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const response = await POST(request);
		expect(response.status).toBe(200);

		expect(mockedPagesCreate).toHaveBeenCalledTimes(1);
		const call = mockedPagesCreate.mock.calls[0]?.[0];
		const properties = call?.properties as Record<string, unknown>;
		const getNumber = (key: string) =>
			(properties[key] as { number?: number } | undefined)?.number;
		const getRichText = (key: string) =>
			(
				properties[key] as
					| {
							rich_text?: Array<{ text?: { content?: string } }>;
					  }
					| undefined
			)?.rich_text?.[0]?.text?.content;

		expect(getNumber("Lead Volume / Month")).toBe(1250);
		expect(getNumber("Deals / Month")).toBe(50);
		expect(getNumber("Avg Deal Amount ($)")).toBe(0);
		expect(getNumber("Conversion Rate %")).toBe(7);
		expect(getRichText("gclid")).toBe("EAIaIQobChMI_mock");
		expect(getRichText("utm_source")).toBe("google");
		expect(getRichText("utm_campaign")).toBe("brand_search");
		expect(getRichText("utm_term")).toBe("deal scale");
		expect(getRichText("utm_content")).toBe("headline_a");
	});
});
