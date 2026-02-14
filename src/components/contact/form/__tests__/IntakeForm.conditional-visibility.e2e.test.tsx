import { render, screen } from "@testing-library/react";
import type React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const useFormMock = vi.hoisted(() => vi.fn());

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
	Button: ({ children }: { children: React.ReactNode }) => (
		<button type="button">{children}</button>
	),
}));

vi.mock("@/components/ui/form", () => ({
	Form: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	FormControl: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	FormDescription: ({ children }: { children: React.ReactNode }) => (
		<div>{children}</div>
	),
	FormField: ({
		render,
	}: {
		render: (props: { field: Record<string, unknown> }) => React.ReactNode;
	}) => (
		<>{render({ field: { onChange: vi.fn(), value: "", name: "mock" } })}</>
	),
	FormItem: ({ children }: { children: React.ReactNode }) => (
		<div>{children}</div>
	),
	FormLabel: ({ children }: { children: React.ReactNode }) => (
		<div>{children}</div>
	),
	FormMessage: () => null,
}));

vi.mock("lucide-react", () => ({
	Loader2: () => null,
}));

vi.mock("sonner", () => ({
	toast: {
		error: vi.fn(),
	},
}));

vi.mock("@/utils/seo/fbpixel", () => ({
	generateMetaEventId: () => "evt_test_123",
	trackIntakeFormSubmit: vi.fn(),
}));

vi.mock("next/navigation", () => ({
	useRouter: () => ({ push: vi.fn() }),
}));

const mockUseForm = (watchValues: Record<string, unknown>) => {
	useFormMock.mockReturnValue({
		control: {},
		register: () => ({ name: "mock" }),
		handleSubmit: () => (e?: { preventDefault?: () => void }) =>
			e?.preventDefault?.(),
		watch: (key: string) => watchValues[key],
	});
};

describe("IntakeForm conditional visibility (e2e)", () => {
	beforeEach(() => {
		useFormMock.mockReset();
	});

	it("hides website field when noWebsite=true", async () => {
		mockUseForm({
			noWebsite: true,
			sourceKnowledge: "known",
			currentCrm: "HubSpot",
			leadVolumePerMonth: "0-500",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			icpCategory: "B2B",
		});

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		expect(screen.queryByText("Website / primary URL")).not.toBeInTheDocument();
		expect(screen.getByText("We don't have a website")).toBeInTheDocument();
	});

	it("shows the correct source branch fields", async () => {
		mockUseForm({
			noWebsite: false,
			sourceKnowledge: "known",
			currentCrm: "HubSpot",
			leadVolumePerMonth: "0-500",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			icpCategory: "B2B",
		});

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		expect(screen.getByText("High-intent lead sources")).toBeInTheDocument();
		expect(
			screen.queryByText(
				"Where do you currently get leads (or what lists do you use)?",
			),
		).not.toBeInTheDocument();
	});

	it("shows leadDeliveryDestination only when currentCrm=None", async () => {
		mockUseForm({
			noWebsite: false,
			sourceKnowledge: "known",
			currentCrm: "None",
			leadVolumePerMonth: "0-500",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			icpCategory: "B2B",
		});

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		expect(screen.getByText("Where should leads go?")).toBeInTheDocument();
	});

	it("shows leadOpsReady only when leadVolumePerMonth=2000+", async () => {
		mockUseForm({
			noWebsite: false,
			sourceKnowledge: "known",
			currentCrm: "HubSpot",
			leadVolumePerMonth: "2000+",
			businessType: ["🧑‍💻 Tech & SaaS Niche"],
			icpCategory: "B2B",
		});

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		expect(
			screen.getByText(
				"Do you have an SDR/team or automation running already?",
			),
		).toBeInTheDocument();
	});

	it("shows acquisitionChannel only when B2C detected", async () => {
		mockUseForm({
			noWebsite: false,
			sourceKnowledge: "known",
			currentCrm: "HubSpot",
			leadVolumePerMonth: "0-500",
			businessType: ["♎ B2C High Virality"],
			icpCategory: "B2C",
		});

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		expect(
			screen.getByText("What acquisition channel will you use?"),
		).toBeInTheDocument();
	});
});
