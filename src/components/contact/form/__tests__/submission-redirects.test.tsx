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

describe("contact form redirects", () => {
	beforeEach(() => {
		pushMock.mockReset();
		trackIntakeFormSubmitMock.mockReset();
		trackLeadMock.mockReset();
		mapBetaTesterApplicationMock.mockClear();
		useFormMock.mockReset();
		vi.restoreAllMocks();
		vi.stubGlobal("fetch", vi.fn());
	});

	it("redirects intake submissions to /contact/thank-you", async () => {
		mockFormSubmission({
			name: "Test Person",
			email: "test@example.com",
			phone: "5551239999",
			businessType: ["Real Estate"],
			monthlyBudget: "$250-$1k",
			priorityLevel: ["High"],
		});
		vi.mocked(fetch).mockResolvedValue(mockOkResponse() as Response);

		const IntakeForm = (await import("../IntakeForm")).default;
		render(<IntakeForm />);

		fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

		await waitFor(() => {
			expect(pushMock).toHaveBeenCalledWith("/contact/thank-you?source=intake");
		});
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
			screen.getByRole("button", { name: /submit application/i }),
		);

		await waitFor(() => {
			expect(pushMock).toHaveBeenCalledWith(
				"/contact/thank-you?source=application",
			);
		});
	});
});
