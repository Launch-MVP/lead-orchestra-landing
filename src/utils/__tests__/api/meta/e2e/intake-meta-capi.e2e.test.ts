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

let POST: typeof import("@/app/api/contact/intake/route").POST;
let mockedSendMetaConversionEvent: ReturnType<typeof vi.fn>;

beforeAll(async () => {
	process.env.NOTION_DATABASE_ID = "db_test_123";
	({ POST } = await import("@/app/api/contact/intake/route"));
	const metaModule = await import("@/lib/analytics/meta-conversions-api");
	mockedSendMetaConversionEvent =
		metaModule.sendMetaConversionEvent as ReturnType<typeof vi.fn>;
});

describe("POST /api/contact/intake Meta CAPI integration (E2E)", () => {
	beforeEach(() => {
		mockedPagesCreate.mockReset();
		mockedPagesCreate.mockResolvedValue({ id: "page_1" });
		mockedSendMetaConversionEvent.mockReset();
		mockedSendMetaConversionEvent.mockResolvedValue({ ok: true });
	});

	it("fires Lead CAPI event on successful intake submission", async () => {
		const payload = {
			name: "Jane Doe",
			email: "intake@example.com",
			phone: "+15555550123",
			avgDealAmount: 1500,
			metaEventId: "evt_intake_1",
			eventSourceUrl: "https://dealscale.io/contact",
		};

		const request = new NextRequest("http://localhost/api/contact/intake", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const response = await POST(request);
		const responseBody = await response.json();

		expect(response.status).toBe(200);
		expect(responseBody.success).toBe(true);
		expect(mockedPagesCreate).toHaveBeenCalledTimes(1);
		expect(mockedSendMetaConversionEvent).toHaveBeenCalledTimes(1);
		expect(mockedSendMetaConversionEvent).toHaveBeenCalledWith(
			expect.objectContaining({
				eventName: "Lead",
				eventId: "evt_intake_1",
				eventSourceUrl: "https://dealscale.io/contact",
				actionSource: "website",
				customData: expect.objectContaining({
					currency: "USD",
					value: 1500,
					contentName: "Lead Orchestra Intake",
					contentCategory: "Lead Form",
				}),
			}),
		);
	});

	it("still fires CAPI and returns success when intake persistence fails", async () => {
		mockedPagesCreate.mockRejectedValue(new Error("Notion unavailable"));

		const payload = {
			name: "Jane Doe",
			email: "intake@example.com",
			metaEventId: "evt_intake_2",
		};

		const request = new NextRequest("http://localhost/api/contact/intake", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const response = await POST(request);
		const responseBody = await response.json();

		expect(response.status).toBe(200);
		expect(responseBody.success).toBe(true);
		expect(responseBody.notionSynced).toBe(false);
		expect(mockedSendMetaConversionEvent).toHaveBeenCalledTimes(1);
		expect(mockedSendMetaConversionEvent).toHaveBeenCalledWith(
			expect.objectContaining({
				eventName: "Lead",
				eventId: "evt_intake_2",
				actionSource: "website",
			}),
		);
	});
});
