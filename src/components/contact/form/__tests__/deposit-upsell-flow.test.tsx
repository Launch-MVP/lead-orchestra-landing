import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

/* ─── hoisted mocks ─── */
const pushMock = vi.hoisted(() => vi.fn());
const useSearchParamsMock = vi.hoisted(() => vi.fn());
const onUpsellActiveMock = vi.hoisted(() => vi.fn());

vi.mock("next/navigation", () => ({
	useRouter: () => ({ push: pushMock }),
	useSearchParams: () => useSearchParamsMock(),
}));

vi.mock("next/link", () => ({
	__esModule: true,
	default: ({ children, ...props }: { children: ReactNode; href: string }) => (
		<a {...props}>{children}</a>
	),
}));

vi.mock("sonner", () => ({
	toast: { error: vi.fn(), success: vi.fn(), info: vi.fn(), warning: vi.fn() },
}));

vi.mock("@/components/common/Header", () => ({
	__esModule: true,
	default: ({ title, subtitle }: { title: string; subtitle?: string }) => (
		<div>
			<h2>{title}</h2>
			{subtitle && <p>{subtitle}</p>}
		</div>
	),
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
	Form: ({ children }: { children: ReactNode }) => <>{children}</>,
	FormControl: ({ children }: { children: ReactNode }) => <>{children}</>,
	FormDescription: ({ children }: { children: ReactNode }) => (
		<>{children}</>
	),
	FormField: ({
		render,
	}: {
		render: (props: { field: Record<string, unknown> }) => ReactNode;
	}) => <>{render({ field: { onChange: vi.fn(), value: "", name: "mock" } })}</>,
	FormItem: ({ children }: { children: ReactNode }) => <>{children}</>,
	FormLabel: ({ children }: { children: ReactNode }) => <span>{children}</span>,
	FormMessage: () => null,
}));

vi.mock("@/components/ui/select", () => ({
	Select: ({ children }: { children?: ReactNode }) => <>{children}</>,
	SelectTrigger: ({ children }: { children?: ReactNode }) => <>{children}</>,
	SelectValue: () => null,
	SelectContent: ({ children }: { children?: ReactNode }) => <>{children}</>,
	SelectItem: ({ children }: { children?: ReactNode }) => <>{children}</>,
}));

vi.mock("@/components/ui/dialog", () => ({
	Dialog: ({
		children,
		open,
		onOpenChange,
	}: {
		children: ReactNode;
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	}) =>
		open ? (
			<div data-testid="dialog-root" data-open={open}>
				{children}
				<button
					type="button"
					data-testid="dialog-close-trigger"
					onClick={() => onOpenChange?.(false)}
				>
					Close
				</button>
			</div>
		) : null,
	DialogContent: ({ children }: { children: ReactNode }) => (
		<div data-testid="dialog-content">{children}</div>
	),
	DialogHeader: ({ children }: { children: ReactNode }) => <>{children}</>,
	DialogTitle: ({ children }: { children: ReactNode }) => (
		<h2>{children}</h2>
	),
	DialogDescription: ({ children }: { children: ReactNode }) => (
		<p>{children}</p>
	),
}));

vi.mock("@/components/home/pricing/PricingCheckoutDialog", () => ({
	__esModule: true,
	default: () => <div data-testid="pricing-checkout-dialog" />,
}));

vi.mock("@/components/contact/form/IntakeForm", () => ({
	__esModule: true,
	default: ({
		prefilledData,
		fromDeposit,
	}: {
		prefilledData?: Record<string, unknown>;
		fromDeposit?: boolean;
	}) => (
		<div
			data-testid="intake-form"
			data-prefilled={JSON.stringify(prefilledData ?? {})}
			data-from-deposit={fromDeposit}
		/>
	),
}));

vi.mock("lucide-react", () => ({
	CheckCircle2: () => <span data-testid="check-icon" />,
	Loader2: () => null,
}));

vi.mock("@/utils/seo/fbpixel", () => ({
	generateMetaEventId: () => "evt_test_123",
	trackIntakeFormStart: vi.fn(),
	trackIntakeFormSubmit: vi.fn(),
}));

vi.mock("@/lib/analytics/meta-events-client", () => ({
	trackMetaServerEvent: vi.fn(),
}));

vi.mock("@/components/contact/form/attributionFields", () => ({
	getAttributionFieldsFromUrl: () => ({}),
	resolveReferralFromUrlOrState: () => null,
	resolveUtmIcpFromUrlOrState: () => null,
}));

describe("deposit-upsell flow", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		window.localStorage.clear();
		// Default: no testDeposit param
		useSearchParamsMock.mockReturnValue({
			get: (key: string) => (key === "testDeposit" ? null : null),
		});
		global.fetch = vi.fn().mockResolvedValue({
			ok: true,
			json: async () => ({ success: true }),
		});
	});

	// ───────── Helper: render with testDeposit=true ─────────
	const renderWithTestMode = async () => {
		useSearchParamsMock.mockReturnValue({
			get: (key: string) => (key === "testDeposit" ? "true" : null),
		});
		const ConversionForm = (await import("../ConversionForm")).default;
		return render(
			<ConversionForm onUpsellActive={onUpsellActiveMock} />,
		);
	};

	it("renders test bypass button when ?testDeposit=true", async () => {
		await renderWithTestMode();
		const testBtn = screen.getByText(/TEST: Skip Stripe/i);
		expect(testBtn).toBeInTheDocument();
	});

	it("does NOT render test button by default", async () => {
		const ConversionForm = (await import("../ConversionForm")).default;
		render(<ConversionForm />);
		expect(screen.queryByText(/TEST: Skip Stripe/i)).not.toBeInTheDocument();
	});

	it("test button triggers upsell modal with 'Deposit Confirmed!'", async () => {
		await renderWithTestMode();

		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(screen.getByText(/Deposit Confirmed!/i)).toBeInTheDocument();
		});
	});

	it("upsell modal shows refund notice", async () => {
		await renderWithTestMode();
		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(
				screen.getByText(/deposit will be fully refunded/i),
			).toBeInTheDocument();
		});
	});

	it("'Yes' button in modal shows IntakeForm", async () => {
		await renderWithTestMode();
		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(
				screen.getByText(/Yes! Apply for a Free Slot/i),
			).toBeInTheDocument();
		});

		fireEvent.click(screen.getByText(/Yes! Apply for a Free Slot/i));

		await waitFor(() => {
			expect(screen.getByTestId("intake-form")).toBeInTheDocument();
		});
	});

	it("'Yes' button passes pre-filled data to IntakeForm", async () => {
		await renderWithTestMode();
		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(
				screen.getByText(/Yes! Apply for a Free Slot/i),
			).toBeInTheDocument();
		});

		fireEvent.click(screen.getByText(/Yes! Apply for a Free Slot/i));

		await waitFor(() => {
			const intakeForm = screen.getByTestId("intake-form");
			expect(intakeForm).toBeInTheDocument();
			const prefilled = JSON.parse(
				intakeForm.getAttribute("data-prefilled") ?? "{}",
			);
			expect(prefilled.name).toBe("Test User");
			expect(prefilled.email).toBe("test@example.com");
		});
	});

	it("IntakeForm receives fromDeposit=true", async () => {
		await renderWithTestMode();
		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(
				screen.getByText(/Yes! Apply for a Free Slot/i),
			).toBeInTheDocument();
		});

		fireEvent.click(screen.getByText(/Yes! Apply for a Free Slot/i));

		await waitFor(() => {
			const intakeForm = screen.getByTestId("intake-form");
			expect(intakeForm.getAttribute("data-from-deposit")).toBe("true");
		});
	});

	it("'Skip for Now' redirects to thank-you", async () => {
		await renderWithTestMode();
		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(screen.getByText(/Skip for Now/i)).toBeInTheDocument();
		});

		fireEvent.click(screen.getByText(/Skip for Now/i));

		expect(pushMock).toHaveBeenCalledWith(
			"/contact/thank-you?source=deposit",
		);
	});

	it("closing dialog redirects to thank-you", async () => {
		await renderWithTestMode();
		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(screen.getByTestId("dialog-close-trigger")).toBeInTheDocument();
		});

		fireEvent.click(screen.getByTestId("dialog-close-trigger"));

		expect(pushMock).toHaveBeenCalledWith(
			"/contact/thank-you?source=deposit",
		);
	});

	it("fires onUpsellActive(true) when modal opens", async () => {
		await renderWithTestMode();
		fireEvent.click(screen.getByText(/TEST: Skip Stripe/i));

		await waitFor(() => {
			expect(onUpsellActiveMock).toHaveBeenCalledWith(true);
		});
	});
});
