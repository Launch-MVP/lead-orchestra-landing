import { NextRequest } from "next/server";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const mockedPagesCreate = vi.fn();
const mockedAddToSendGrid = vi.fn();

vi.mock("@notionhq/client", () => ({
	Client: vi.fn(() => ({
		pages: {
			create: mockedPagesCreate,
		},
	})),
}));

vi.mock("@/lib/externalRequests/sendgrid", () => ({
	addToSendGrid: mockedAddToSendGrid,
}));

vi.mock("@/lib/analytics/meta-conversions-api", () => ({
	buildMetaUserDataFromRequest: vi.fn(() => ({
		email: "deposit@example.com",
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
	process.env.NOTION_API_KEY = "notion_test_key";
	process.env.NOTION_LAUNCH_MVP_DEPOSIT_DATABASE_ID = "deposit_db_test_123";
	({ POST } = await import("../route"));
});

describe("POST /api/contact Launch MVP deposit Notion sync", () => {
	beforeEach(() => {
		mockedPagesCreate.mockReset();
		mockedPagesCreate.mockResolvedValue({ id: "page_1" });
		mockedAddToSendGrid.mockReset();
		mockedAddToSendGrid.mockResolvedValue(202);
	});

	it("syncs Denver workshop deposit submissions to the deposit database", async () => {
		const payload = {
			name: "Jane Doe",
			email: "deposit@example.com",
			phone: "555-222-1111",
			companyName: "Acme Inc",
			selectedService: "3-Day MVP Build Workshop Denver workshop deposit",
			website: "https://acme.example",
			projectSummary: "Build an MVP in Denver with onboarding and payments.",
			referralSource: "Google / Search Engine",
			workshopTier: "3-Day MVP Build Workshop",
			workshopTotal: 3000,
			depositAmount: 300,
			gclid: "gclid_deposit",
			utm_source: "google",
			utm_campaign: "deposit_flow",
			utm_term: "launch mvp",
			utm_content: "deposit_variant_a",
			utm_icp: "founders",
			message: [
				"Selected tier: 3-Day MVP Build Workshop",
				"Discounted total: $3,000",
				"Seat-hold deposit: $300",
				"Website: https://acme.example",
				"Project summary: Build an MVP in Denver with onboarding and payments.",
			].join("\n"),
		};

		const request = new NextRequest("http://localhost/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const response = await POST(request);
		expect(response.status).toBe(200);
		await expect(response.json()).resolves.toMatchObject({
			notionSynced: true,
		});

		expect(mockedAddToSendGrid).toHaveBeenCalledTimes(1);
		expect(mockedPagesCreate).toHaveBeenCalledTimes(1);

		const call = mockedPagesCreate.mock.calls[0]?.[0];
		const properties = call?.properties as Record<string, unknown>;
		const getSelect = (key: string) =>
			(properties[key] as { select?: { name?: string } } | undefined)?.select
				?.name;
		const getRichText = (key: string) =>
			(
				properties[key] as
					| {
							rich_text?: Array<{ text?: { content?: string } }>;
					  }
					| undefined
			)?.rich_text?.[0]?.text?.content;
		const getEmail = (key: string) =>
			(properties[key] as { email?: string } | undefined)?.email;
		const getPhone = (key: string) =>
			(properties[key] as { phone_number?: string } | undefined)?.phone_number;
		const getUrl = (key: string) =>
			(properties[key] as { url?: string } | undefined)?.url;
		const getNumber = (key: string) =>
			(properties[key] as { number?: number } | undefined)?.number;

		expect(getEmail("Email")).toBe("deposit@example.com");
		expect(getPhone("Phone")).toBe("555-222-1111");
		expect(getRichText("Company / Brand")).toBe("Acme Inc");
		expect(getUrl("Website / Product URL")).toBe("https://acme.example");
		expect(getSelect("Workshop Tier")).toBe("3-Day MVP Build Workshop");
		expect(getNumber("Workshop Total")).toBe(3000);
		expect(getNumber("Deposit Amount")).toBe(300);
		expect(getRichText("Project Summary")).toBe(
			"Build an MVP in Denver with onboarding and payments.",
		);
		expect(getSelect("Referral Source")).toBe("Google / Search Engine");
		expect(getSelect("Payment Status")).toBe("Pending");
		expect(getSelect("Free Slot Upsell Status")).toBe("Not Offered");
		expect(getRichText("gclid")).toBe("gclid_deposit");
		expect(getRichText("utm_campaign")).toBe("deposit_flow");
	});
});
