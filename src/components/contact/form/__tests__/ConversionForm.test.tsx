import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ConversionForm from "../ConversionForm";

const useRouterMock = vi.hoisted(() => vi.fn());

vi.mock("next/navigation", () => ({
	useRouter: useRouterMock,
	useSearchParams: () => ({
		get: () => null,
	}),
}));

vi.mock("sonner", () => ({
	toast: {
		error: vi.fn(),
	},
}));

vi.mock("next/link", () => ({
	__esModule: true,
	default: ({
		children,
		...props
	}: {
		children?: ReactNode;
		href: string;
	}) => <a {...props}>{children}</a>,
}));

vi.mock("@/components/ui/dialog", () => ({
	Dialog: ({
		children,
		open,
	}: {
		children: ReactNode;
		open?: boolean;
	}) => (open ? <div>{children}</div> : null),
	DialogContent: ({ children }: { children: ReactNode }) => (
		<div>{children}</div>
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
	default: () => <div data-testid="intake-form" />,
}));

vi.mock("@/components/common/Header", () => ({
	__esModule: true,
	default: ({ title }: { title: string }) => <h2>{title}</h2>,
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
	getAttributionFieldsFromUrl: (url: string) => {
		const u = new URL(url, "http://localhost");
		const result: Record<string, string> = {};
		for (const key of ["gclid", "utm_source", "utm_campaign", "utm_term", "utm_content", "utm_icp"]) {
			const v = u.searchParams.get(key);
			if (v) result[key] = v;
		}
		return result;
	},
	resolveReferralFromUrlOrState: () => null,
	resolveUtmIcpFromUrlOrState: (_url: string, fallback?: string) => {
		const u = new URL(_url, "http://localhost");
		return u.searchParams.get("utm_icp") ?? fallback ?? null;
	},
}));

vi.mock("lucide-react", () => ({
	CheckCircle2: () => null,
	Loader2: () => null,
}));

vi.mock("@/components/ui/select", () => ({
	Select: ({
		onValueChange,
		defaultValue,
		value,
		children,
	}: {
		onValueChange: (v: string) => void;
		defaultValue?: string;
		value?: string;
		children: ReactNode;
	}) => (
		<select
			data-testid="mock-select"
			value={value || defaultValue || ""}
			onChange={(e) => onValueChange(e.target.value)}
		>
			{children}
		</select>
	),
	SelectTrigger: ({ children }: { children: ReactNode }) => <>{children}</>,
	SelectValue: () => null,
	SelectContent: ({ children }: { children: ReactNode }) => <>{children}</>,
	SelectItem: ({
		value,
		children,
	}: {
		value: string;
		children: ReactNode;
	}) => <option value={value}>{children}</option>,
}));

describe("ConversionForm", () => {
	const pushMock = vi.fn();

	beforeEach(() => {
		vi.clearAllMocks();
		window.localStorage.clear();
		useRouterMock.mockReturnValue({ push: pushMock });

		global.fetch = vi.fn().mockImplementation((url) => {
			if (url === "/api/stripe/intent") {
				return Promise.resolve({
					ok: true,
					json: async () => ({ clientSecret: "secret_123" }),
				});
			}
			return Promise.resolve({
				ok: true,
				json: async () => ({ success: true }),
			});
		});
	});

	it("renders all required fields", () => {
		render(<ConversionForm />);

		expect(screen.getByText(/Denver Workshop Deposit/i)).toBeInTheDocument();
		expect(screen.getByText(/Denver Workshop Tier/i)).toBeInTheDocument();
		expect(screen.getAllByText(/Name/i)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/Email/i)[0]).toBeInTheDocument();
		expect(screen.getByText(/Website \/ Product URL/i)).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /Reserve Seat/i })).toBeInTheDocument();
	});

	it("submits the form successfully and triggers Stripe intent", async () => {
		window.history.pushState(
			{},
			"",
			"/contact?gclid=test-gclid&utm_source=google&utm_campaign=spring&utm_term=lead-gen&utm_content=cta-a&utm_icp=b2b-saas",
		);

		render(<ConversionForm />);

		fireEvent.change(screen.getByPlaceholderText(/Your name/i), {
			target: { value: "John Doe" },
		});
		fireEvent.change(screen.getByPlaceholderText(/you@company\.com/i), {
			target: { value: "john@example.com" },
		});
		fireEvent.change(screen.getByPlaceholderText(/https:\/\/example\.com/i), {
			target: { value: "https://example.com" },
		});
		fireEvent.change(screen.getByPlaceholderText(/Best number/i), {
			target: { value: "555-123-4567" },
		});
		fireEvent.change(screen.getByPlaceholderText(/Company or project name/i), {
			target: { value: "Test Co" },
		});
		fireEvent.change(screen.getByPlaceholderText(/Describe the MVP/i), {
			target: { value: "A new saas product for testing" },
		});

		const selects = screen.getAllByTestId("mock-select");
		// First select: selectedTier
		fireEvent.change(selects[0], { target: { value: "in-person-app-launch" } });
		// Second select: referralSource
		fireEvent.change(selects[1], { target: { value: "google" } });

		// Submit
		fireEvent.click(screen.getByRole("button", { name: /Reserve Seat/i }));

		await waitFor(() => {
			// Check if /api/contact was called (lead capture)
			expect(global.fetch).toHaveBeenCalledWith(
				"/api/contact",
				expect.objectContaining({
					method: "POST",
				}),
			);
			// Check if /api/stripe/intent was called
			expect(global.fetch).toHaveBeenCalledWith(
				"/api/stripe/intent",
				expect.objectContaining({
					method: "POST",
				}),
			);
		});

		// Check if Stripe dialog appeared
		expect(screen.getByTestId("pricing-checkout-dialog")).toBeInTheDocument();
	});

	it("falls back utm_icp to selectedTier when URL has no icp param", async () => {
		window.history.pushState(
			{},
			"",
			"/contact?gclid=test-gclid&utm_source=google&utm_campaign=spring&utm_term=lead-gen&utm_content=cta-a",
		);

		render(<ConversionForm />);

		fireEvent.change(screen.getByPlaceholderText(/Your name/i), {
			target: { value: "John Doe" },
		});
		fireEvent.change(screen.getByPlaceholderText(/you@company\.com/i), {
			target: { value: "john@example.com" },
		});
		fireEvent.change(screen.getByPlaceholderText(/https:\/\/example\.com/i), {
			target: { value: "https://example.com" },
		});
		fireEvent.change(screen.getByPlaceholderText(/Best number/i), {
			target: { value: "555-123-4567" },
		});
		fireEvent.change(screen.getByPlaceholderText(/Company or project name/i), {
			target: { value: "Test Co" },
		});
		fireEvent.change(screen.getByPlaceholderText(/Describe the MVP/i), {
			target: { value: "A new saas product for testing" },
		});

		const selects = screen.getAllByTestId("mock-select");
		fireEvent.change(selects[0], { target: { value: "in-person-app-launch" } });
		fireEvent.change(selects[1], { target: { value: "google" } });

		fireEvent.click(screen.getByRole("button", { name: /Reserve Seat/i }));

		await waitFor(() => {
			expect(global.fetch).toHaveBeenCalledWith(
				"/api/contact",
				expect.any(Object),
			);
		});

		const calls = vi.mocked(global.fetch).mock.calls;
		const contactCall = calls.find(call => call[0] === "/api/contact");
		expect(contactCall).toBeDefined();
		const requestInit = contactCall![1] as RequestInit;
		const payload = JSON.parse(requestInit.body as string);
		expect(payload.utm_icp).toBe("in-person-app-launch");
	});
});
