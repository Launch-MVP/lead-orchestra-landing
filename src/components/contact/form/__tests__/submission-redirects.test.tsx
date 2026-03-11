import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const pushMock = vi.hoisted(() => vi.fn());
const useFormMock = vi.hoisted(() => vi.fn());
const trackIntakeFormSubmitMock = vi.hoisted(() => vi.fn());
const trackLeadMock = vi.hoisted(() => vi.fn());
const mapBetaTesterApplicationMock = vi.hoisted(() =>
	vi.fn(() => ({ id: "mapped-app" })),
);

vi.mock("next/navigation", () => ({
	useRouter: () => ({ push: pushMock }),
	useSearchParams: () => ({
		get: () => null,
	}),
}));

vi.mock("@hookform/resolvers/zod", () => ({
	zodResolver: () => vi.fn(),
}));

vi.mock("react-hook-form", () => ({
	useForm: (...args: unknown[]) => useFormMock(...args),
	FormProvider: ({ children }: { children: React.ReactNode }) => children,
}));

vi.mock("@/components/common/Header", () => ({
	__esModule: true,
	default: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

vi.mock("@/components/contact/form/formFieldHelpers", () => ({
	createFieldProps: (_field: unknown, formField: unknown) => formField,
	renderFormField: () => <input aria-label="mock-field" />,
}));

vi.mock("@/components/ui/button", () => ({
	Button: ({
		children,
		...props
	}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
		<button {...props}>{children}</button>
	),
}));

vi.mock("@/components/ui/form", () => ({
	Form: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	FormControl: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	FormDescription: ({ children }: { children: React.ReactNode }) => (
		<>{children}</>
	),
	FormField: ({
		render,
	}: {
		render: (props: { field: Record<string, unknown> }) => React.ReactNode;
	}) => (
		<>{render({ field: { onChange: vi.fn(), value: "", name: "mock" } })}</>
	),
	FormItem: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	FormLabel: ({ children }: { children: React.ReactNode }) => (
		<span>{children}</span>
	),
	FormMessage: () => null,
}));

vi.mock("@/components/ui/checkbox", () => ({
	Checkbox: (props: React.InputHTMLAttributes<HTMLInputElement>) => (
		<input type="checkbox" {...props} />
	),
}));

vi.mock("@/components/ui/input", () => ({
	Input: (props: React.InputHTMLAttributes<HTMLInputElement>) => (
		<input {...props} />
	),
}));

vi.mock("@/components/ui/textarea", () => ({
	Textarea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
		<textarea {...props} />
	),
}));

vi.mock("@/components/ui/select", () => ({
	Select: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	SelectContent: ({ children }: { children: React.ReactNode }) => (
		<>{children}</>
	),
	SelectItem: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	SelectTrigger: ({ children }: { children: React.ReactNode }) => (
		<>{children}</>
	),
	SelectValue: () => null,
}));

vi.mock("@/components/ui/MultiSelectDropdown", () => ({
	__esModule: true,
	default: () => <div />,
}));

vi.mock("next/image", () => ({
	__esModule: true,
	default: () => <div />,
}));

vi.mock("lucide-react", () => ({
	FileIcon: () => null,
	Loader2: () => null,
}));

vi.mock("sonner", () => ({
	toast: {
		error: vi.fn(),
		info: vi.fn(),
		success: vi.fn(),
		warning: vi.fn(),
	},
}));

vi.mock("@/utils/seo/fbpixel", () => ({
	generateMetaEventId: () => "evt_test_123",
	trackIntakeFormSubmit: trackIntakeFormSubmitMock,
	trackLead: trackLeadMock,
}));

vi.mock("@/components/contact/form/testerApplicationMappers", () => ({
	mapBetaTesterApplication: mapBetaTesterApplicationMock,
}));

const mockFormSubmission = (submittedData: Record<string, unknown>) => {
	useFormMock.mockReturnValue({
		control: {},
		register: () => ({ name: "mock" }),
		reset: vi.fn(),
		watch: (key: string) => submittedData[key],
		handleSubmit:
			(cb: (data: Record<string, unknown>) => Promise<void> | void) =>
			async (event?: { preventDefault?: () => void }) => {
				event?.preventDefault?.();
				await cb(submittedData);
			},
	});
};

const mockOkResponse = () => ({
	ok: true,
	json: async () => ({}),
});

describe("Launch MVP contact form redirects", () => {
	beforeEach(() => {
		window.localStorage.clear();
		pushMock.mockReset();
		trackIntakeFormSubmitMock.mockReset();
		trackLeadMock.mockReset();
		mapBetaTesterApplicationMock.mockClear();
		useFormMock.mockReset();
		vi.restoreAllMocks();
		vi.stubGlobal("fetch", vi.fn());
	});

	it("redirects Launch MVP free-slot submissions to /contact/thank-you?source=intake", async () => {
		window.history.pushState(
			{},
			"",
			"/contact?gclid=intake-gclid&utm_source=facebook&utm_campaign=intake-flow&utm_term=lead&utm_content=form&utm_icp=high-ticket",
		);

		mockFormSubmission({
			name: "Test Person",
			companyName: "Launch MVP Co",
			email: "test@example.com",
			phone: "5551239999",
			leadOwner: "Founder",
			speed: "7-10",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			icpCategory: "SaaS Founders",
			icpDescription: "Founders testing internal workflow products.",
			monthlyBudget: "$3k+",
			paidPilot: "✅ Yes — paid pilot is fine",
			leadVolumePerMonth: "500-2000",
			avgDealAmount: "10000+",
			dealsPerMonth: "16-50",
			conversionRate: "3-10",
			currentCrm: "HubSpot",
			crmConnection: "yes",
			validationExpectation: "Directional signal",
			sourceKnowledge: "known",
			painPoints: ["Need a clearer product strategy"],
			interestedFeatures: ["MVP scoping session"],
			referralSource: "google",
		});
		vi.mocked(fetch).mockResolvedValue(mockOkResponse() as Response);

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		fireEvent.click(screen.getByRole("button", { name: /apply for free slot/i }));

		await waitFor(() => {
			expect(pushMock).toHaveBeenCalledWith("/contact/thank-you?source=intake");
		});

		const requestInit = vi.mocked(fetch).mock.calls[0]?.[1];
		const payload = JSON.parse(String(requestInit?.body ?? "{}"));
		expect(payload.gclid).toBe("intake-gclid");
		expect(payload.utm_source).toBe("facebook");
		expect(payload.utm_campaign).toBe("intake-flow");
		expect(payload.utm_term).toBe("lead");
		expect(payload.utm_content).toBe("form");
		expect(payload.utm_icp).toBe("high-ticket");
	});

	it("redirects post-deposit qualification submissions to /contact/thank-you?source=deposit-and-intake", async () => {
		mockFormSubmission({
			name: "Test Person",
			companyName: "Launch MVP Co",
			email: "test@example.com",
			phone: "5551239999",
			leadOwner: "Founder",
			speed: "3-5",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			icpCategory: "SaaS Founders",
			icpDescription: "Founders testing internal workflow products.",
			monthlyBudget: "$5k - $10k",
			paidPilot: "✅ Yes — paid pilot is fine",
			leadVolumePerMonth: "500-2000",
			avgDealAmount: "10000+",
			dealsPerMonth: "16-50",
			conversionRate: "3-10",
			currentCrm: "HubSpot",
			crmConnection: "yes",
			validationExpectation: "Closed revenue",
			sourceKnowledge: "known",
			painPoints: ["Need full MVP build support"],
			interestedFeatures: ["3-day in-person MVP build workshop"],
			referralSource: "referral",
		});
		vi.mocked(fetch).mockResolvedValue(mockOkResponse() as Response);

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm fromDeposit />);

		fireEvent.click(screen.getByRole("button", { name: /apply for free slot/i }));

		await waitFor(() => {
			expect(pushMock).toHaveBeenCalledWith(
				"/contact/thank-you?source=deposit-and-intake",
			);
		});
	});

	it("uses ICP URL param for utm_icp when present", async () => {
		window.history.pushState(
			{},
			"",
			"/contact?gclid=intake-gclid&utm_source=facebook&utm_campaign=intake-flow&utm_term=lead&utm_content=form&icpCategory=URL-ICP",
		);

		mockFormSubmission({
			name: "Test Person",
			companyName: "Launch MVP Co",
			email: "test@example.com",
			phone: "5551239999",
			leadOwner: "Founder",
			speed: "7-10",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			monthlyBudget: "$3k+",
			paidPilot: "✅ Yes — paid pilot is fine",
			leadVolumePerMonth: "500-2000",
			avgDealAmount: "10000+",
			dealsPerMonth: "16-50",
			conversionRate: "3-10",
			currentCrm: "HubSpot",
			crmConnection: "yes",
			validationExpectation: "Directional signal",
			sourceKnowledge: "known",
			painPoints: ["Need a clearer product strategy"],
			interestedFeatures: ["MVP scoping session"],
			referralSource: "google",
			icpCategory: "State-ICP",
		});
		vi.mocked(fetch).mockResolvedValue(mockOkResponse() as Response);

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		fireEvent.click(screen.getByRole("button", { name: /apply for free slot/i }));

		await waitFor(() => {
			expect(pushMock).toHaveBeenCalledWith("/contact/thank-you?source=intake");
		});

		const requestInit = vi.mocked(fetch).mock.calls[0]?.[1];
		const payload = JSON.parse(String(requestInit?.body ?? "{}"));
		expect(payload.utm_icp).toBe("URL-ICP");
	});

	it("redirects beta application submissions to /contact/thank-you", async () => {
		mockFormSubmission({
			firstName: "Test",
			lastName: "Person",
			email: "test@example.com",
			phone: "5551239999",
			termsAccepted: true,
		});

		vi.mocked(fetch)
			.mockResolvedValueOnce(mockOkResponse() as Response)
			.mockResolvedValueOnce(mockOkResponse() as Response)
			.mockResolvedValueOnce(mockOkResponse() as Response);

		const ContactForm = (await import("../ContactForm")).default;
		render(<ContactForm />);

		fireEvent.click(
			screen.getByRole("button", { name: /send details/i }),
		);

		await waitFor(() => {
			expect(pushMock).toHaveBeenCalledWith(
				"/contact/thank-you?source=application",
			);
		});
	});
});
