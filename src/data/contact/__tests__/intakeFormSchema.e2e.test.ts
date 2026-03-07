import { describe, expect, it } from "vitest";

import { intakeFormSchema } from "../intakeFormFields";

const baseValid = () => ({
	name: "Jane Doe",
	companyName: "Acme Inc",
	email: "jane@example.com",
	phone: "+15555550123",
	noWebsite: false,
	website: "https://example.com",
	productStage: "idea",
	productType: "web_app",
	teamSize: "2-5",
	productSummary:
		"We are building a launch-ready MVP for startup operators who need to validate demand quickly.",
	mustHaveFeatures:
		"Auth, onboarding, payments, analytics, and the core user workflow.",
	painPoints: ["Need help cutting MVP scope"],
	interestedFeatures: ["MVP scoping session"],

	leadOwner: "Founder",
	speed: "7-10",

	monthlyBudget: "$1k–$3k",
	paidPilot: "✅ Yes — paid pilot is fine",

	businessType: ["🧑‍💻 Tech & SaaS Niche"],
	icpCategory: "B2B",
	icpDescription: "We sell to operators who need better leadflow and speed.",

	leadVolumePerMonth: "500-2000",
	avgDealAmount: "1000-5000",
	dealsPerMonth: "6-15",
	conversionRate: "1-3",

	validationExpectation: "30-60",

	sourceKnowledge: "known",
	highIntentSources: ["google_maps"],
	currentLeadSources: "",

	currentCrm: "HubSpot",
	crmConnection: "yes",
	leadDeliveryDestination: "",

	leadOpsReady: "",
	acquisitionChannel: "",
});

describe("intakeFormSchema (e2e)", () => {
	it("requires website unless noWebsite is checked", () => {
		const ok1 = intakeFormSchema.safeParse(baseValid());
		expect(ok1.success).toBe(true);

		const missingWebsite = baseValid();
		missingWebsite.website = "";
		const bad1 = intakeFormSchema.safeParse(missingWebsite);
		expect(bad1.success).toBe(false);

		const noWebsite = baseValid();
		noWebsite.noWebsite = true;
		noWebsite.website = "";
		const ok2 = intakeFormSchema.safeParse(noWebsite);
		expect(ok2.success).toBe(true);
	});

	it("requires highIntentSources when sourceKnowledge=known", () => {
		const payload = baseValid();
		payload.sourceKnowledge = "known";
		payload.highIntentSources = [];
		const bad = intakeFormSchema.safeParse(payload);
		expect(bad.success).toBe(false);
	});

	it("requires currentLeadSources when sourceKnowledge=unknown", () => {
		const payload = baseValid();
		payload.sourceKnowledge = "unknown";
		payload.highIntentSources = [];
		payload.currentLeadSources = "";
		const bad = intakeFormSchema.safeParse(payload);
		expect(bad.success).toBe(false);

		payload.currentLeadSources =
			"We buy lists and scrape directories sometimes.";
		const ok = intakeFormSchema.safeParse(payload);
		expect(ok.success).toBe(true);
	});

	it("requires leadDeliveryDestination when currentCrm=None", () => {
		const payload = baseValid();
		payload.currentCrm = "None";
		payload.leadDeliveryDestination = "";
		const bad = intakeFormSchema.safeParse(payload);
		expect(bad.success).toBe(false);

		payload.leadDeliveryDestination = "google_sheet";
		const ok = intakeFormSchema.safeParse(payload);
		expect(ok.success).toBe(true);
	});

	it("requires leadOpsReady when leadVolumePerMonth=2000+", () => {
		const payload = baseValid();
		payload.leadVolumePerMonth = "2000+";
		payload.leadOpsReady = "";
		const bad = intakeFormSchema.safeParse(payload);
		expect(bad.success).toBe(false);

		payload.leadOpsReady = "yes";
		const ok = intakeFormSchema.safeParse(payload);
		expect(ok.success).toBe(true);
	});

	it("requires acquisitionChannel for B2C signals", () => {
		const payload = baseValid();
		payload.businessType = ["♎ B2C High Virality"];
		payload.acquisitionChannel = "";
		const bad = intakeFormSchema.safeParse(payload);
		expect(bad.success).toBe(false);

		payload.acquisitionChannel = "ads";
		const ok = intakeFormSchema.safeParse(payload);
		expect(ok.success).toBe(true);
	});

	it("allows optional attribution fields", () => {
		const payload = baseValid();
		const withAttribution = intakeFormSchema.safeParse({
			...payload,
			gclid: "test-gclid-123",
			utm_source: "google",
			utm_campaign: "brand",
			utm_term: "lead orchestration",
			utm_content: "hero_cta",
			utm_icp: "agency-owner",
		});

		expect(withAttribution.success).toBe(true);
	});
});
