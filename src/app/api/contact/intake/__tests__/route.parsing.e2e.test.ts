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
	process.env.NOTION_LAUNCH_MVP_QUALIFICATION_DATABASE_ID = "db_test_123";
	({ POST } = await import("../route"));
});

describe("POST /api/contact/intake parsing (e2e)", () => {
	beforeEach(() => {
		mockedPagesCreate.mockReset();
		mockedPagesCreate.mockResolvedValue({ id: "page_1" });
	});

	it("maps Launch MVP intake fields into the qualification Notion schema", async () => {
		const payload = {
			name: "Jane Doe",
			companyName: "Acme Inc",
			email: "intake@example.com",
			phone: "555-123-4567",
			website: "https://acme.example",
			metaEventId: "evt_intake_parse_1",
			eventSourceUrl: "https://www.leadorchestra.com/contact",
			gclid: "EAIaIQobChMI_mock",
			utm_source: "google",
			utm_campaign: "brand_search",
			utm_term: "deal scale",
			utm_content: "headline_a",
			utm_icp: "enterprise_buyers",
			productStage: "wireframes",
			productType: "web_app",
			teamSize: "2-5",
			productSummary: "We are building a vertical SaaS MVP for underwriting.",
			mustHaveFeatures: "Login, dashboard, approval workflow",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			monthlyBudget: "$3k+",
			paidPilot: "✅ Yes — paid pilot is fine",
			leadOwner: "Founder",
			speed: "7-10",
			icpCategory: "SaaS Founders",
			icpDescription: "Seed-stage SaaS founders validating new internal tools.",
			leadVolumePerMonth: "500-2000",
			dealsPerMonth: "16-50",
			avgDealAmount: "10000+",
			conversionRate: "3-10",
			sourceKnowledge: "known",
			highIntentSources: ["linkedin"],
			currentCrm: "HubSpot",
			crmConnection: "yes",
			existingLeadLists: ["Yes — Clean"],
			painPoints: ["Need a clearer product strategy"],
			interestedFeatures: ["MVP scoping session"],
			kickoffDate: "2026-04-01",
			referralSource: "google",
		};

		const request = new NextRequest("http://localhost/api/contact/intake", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		const response = await POST(request);
		expect(response.status).toBe(200);
		await expect(response.json()).resolves.toMatchObject({
			success: true,
			notionSynced: true,
		});

		expect(mockedPagesCreate).toHaveBeenCalledTimes(1);
		const call = mockedPagesCreate.mock.calls[0]?.[0];
		const properties = call?.properties as Record<string, unknown>;
		const getSelect = (key: string) =>
			(properties[key] as { select?: { name?: string } } | undefined)?.select
				?.name;
		const getMultiSelect = (key: string) =>
			(
				properties[key] as
					| { multi_select?: Array<{ name?: string }> }
					| undefined
			)?.multi_select?.map((entry) => entry.name);
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
		const getDate = (key: string) =>
			(properties[key] as { date?: { start?: string } } | undefined)?.date
				?.start;

		expect(getEmail("Email")).toBe("intake@example.com");
		expect(getPhone("Phone")).toBe("555-123-4567");
		expect(getUrl("Website / Primary URL")).toBe("https://acme.example");
		expect(getSelect("Current Product Stage")).toBe("Wireframes or prototype");
		expect(getSelect("Product Type")).toBe("Web app");
		expect(getSelect("Team Size")).toBe("2-5 people");
		expect(getSelect("Budget Range")).toBe("$3k+");
		expect(getSelect("Open To Paid Engagement")).toBe(
			"✅ Yes — paid pilot is fine",
		);
		expect(getSelect("Internal Owner")).toBe("Founder");
		expect(getSelect("Start Speed")).toBe("7-10 days");
		expect(getSelect("Primary Customer Type")).toBe("SaaS Founders");
		expect(getSelect("Target users / leads / signups in first 90 days")).toBe(
			"500-2000 / month",
		);
		expect(getSelect("Expected customer value or contract size")).toBe("$10k+");
		expect(getSelect("Expected new customers or conversions per month")).toBe(
			"16-50",
		);
		expect(getSelect("Current or expected conversion rate")).toBe("3-10%");
		expect(getSelect("Do you know your launch or acquisition channels?")).toBe(
			"I know the sources",
		);
		expect(getSelect("Current stack / CRM")).toBe("HubSpot");
		expect(getSelect("Connect into current systems?")).toBe("Yes");
		expect(getSelect("How did you hear about us?")).toBe(
			"Google / Search Engine",
		);
		expect(getDate("Preferred kickoff date")).toBe("2026-04-01");
		expect(getMultiSelect("Business Model / Industry")).toEqual([
			"🧑‍💻 Tech & SaaS Niche",
		]);
		expect(getMultiSelect("Primary launch channels or demand sources")).toEqual([
			"LinkedIn searches",
		]);
		expect(getMultiSelect("Existing assets / inherited work")).toEqual([
			"Yes — Clean",
		]);
		expect(getMultiSelect("Main launch blockers")).toEqual([
			"Need a clearer product strategy",
		]);
		expect(getMultiSelect("Interested services / offers")).toEqual([
			"MVP scoping session",
		]);
		expect(getRichText("What are you building and why now?")).toBe(
			"We are building a vertical SaaS MVP for underwriting.",
		);
		expect(getRichText("Must-have version-one features")).toBe(
			"Login, dashboard, approval workflow",
		);
		expect(getRichText("Describe the ideal customer or user")).toBe(
			"Seed-stage SaaS founders validating new internal tools.",
		);
		expect(getRichText("gclid")).toBe("EAIaIQobChMI_mock");
		expect(getRichText("utm_source")).toBe("google");
		expect(getRichText("utm_campaign")).toBe("brand_search");
		expect(getRichText("utm_term")).toBe("deal scale");
		expect(getRichText("utm_content")).toBe("headline_a");
		expect(getRichText("utm_icp")).toBe("enterprise_buyers");
	});
});
