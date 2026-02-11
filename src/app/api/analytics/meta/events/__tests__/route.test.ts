import { NextRequest } from "next/server";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/analytics/meta-conversions-api", () => ({
	buildMetaUserDataFromRequest: vi.fn(() => ({
		clientUserAgent: "vitest",
	})),
	generateServerEventId: vi.fn(() => "evt_generated"),
	resolveEventSourceUrl: vi.fn((_: Request, explicit?: string) => explicit),
	sendMetaConversionEvent: vi.fn().mockResolvedValue({ ok: true }),
}));

let POST: typeof import("../route").POST;
let mockedSendMetaConversionEvent: ReturnType<typeof vi.fn>;

beforeAll(async () => {
	({ POST } = await import("../route"));
	const metaModule = await import("@/lib/analytics/meta-conversions-api");
	mockedSendMetaConversionEvent =
		metaModule.sendMetaConversionEvent as ReturnType<typeof vi.fn>;
});

describe("POST /api/analytics/meta/events", () => {
	beforeEach(() => {
		mockedSendMetaConversionEvent.mockReset();
		mockedSendMetaConversionEvent.mockResolvedValue({ ok: true });
	});

	it("sends allowed events", async () => {
		const request = new NextRequest("http://localhost/api/analytics/meta/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				eventName: "ViewContent",
				eventId: "evt_1",
				eventSourceUrl: "https://dealscale.io/contact",
			}),
		});

		const response = await POST(request);
		const payload = await response.json();

		expect(response.status).toBe(200);
		expect(payload.ok).toBe(true);
		expect(payload.eventName).toBe("ViewContent");
		expect(payload.eventId).toBe("evt_1");
		expect(mockedSendMetaConversionEvent).toHaveBeenCalledTimes(1);
		expect(mockedSendMetaConversionEvent).toHaveBeenCalledWith(
			expect.objectContaining({
				testEventCode: undefined,
			}),
		);
	});

	it("uses META_TEST_EVENT_CODE only when useTestEventCode=true", async () => {
		process.env.META_TEST_EVENT_CODE = "TEST123";
		const request = new NextRequest("http://localhost/api/analytics/meta/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				eventName: "Lead",
				useTestEventCode: true,
			}),
		});

		const response = await POST(request);
		expect(response.status).toBe(200);
		expect(mockedSendMetaConversionEvent).toHaveBeenCalledWith(
			expect.objectContaining({
				testEventCode: "TEST123",
			}),
		);
	});

	it("rejects unsupported events", async () => {
		const request = new NextRequest("http://localhost/api/analytics/meta/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				eventName: "Purchase",
			}),
		});

		const response = await POST(request);

		expect(response.status).toBe(400);
		expect(mockedSendMetaConversionEvent).not.toHaveBeenCalled();
	});
});
