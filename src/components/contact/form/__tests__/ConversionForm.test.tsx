import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import ConversionForm from "../ConversionForm";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

vi.mock("@/components/ui/select", () => ({
  Select: ({ children, onValueChange, value, placeholder }: any) => (
    <div 
      data-testid="mock-select-container"
    >
      <input 
        data-testid="mock-select" 
        value={value} 
        onChange={(e) => onValueChange?.(e.target.value)}
        aria-label={placeholder}
      />
      {children}
    </div>
  ),
  SelectTrigger: ({ children }: any) => <>{children}</>,
  SelectValue: ({ placeholder }: any) => <span>{placeholder}</span>,
  SelectContent: ({ children }: any) => <>{children}</>,
  SelectItem: ({ children, value }: any) => <div data-testid="mock-select-item" data-value={value}>{children}</div>,
}));

vi.mock("@/components/ui/MultiSelectDropdown", () => ({
  default: ({ options, value, onChange }: any) => (
    <div data-testid="mock-multiselect">
      {options.map((opt: any) => (
        <label key={opt.value}>
          <input 
            type="checkbox" 
            checked={value.includes(opt.value)} 
            onChange={() => {
              const newValue = value.includes(opt.value)
                ? value.filter((v: any) => v !== opt.value)
                : [...value, opt.value];
              onChange(newValue);
            }} 
          />
          {opt.label}
        </label>
      ))}
    </div>
  ),
}));

describe("ConversionForm", () => {
  const pushMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue({ push: pushMock });
    
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  it("renders all required fields", () => {
    render(<ConversionForm />);
    
    // Use getAllByText for labels that might have multiple occurrences (label + description)
    expect(screen.getAllByText(/Name/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Email/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Website \/ primary URL/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Monthly Budget/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Submit Application/i)).toBeInTheDocument();
  });

  it("submits the form successfully and redirects", async () => {
    window.history.pushState(
      {},
      "",
      "/contact?gclid=test-gclid&utm_source=google&utm_campaign=spring&utm_term=lead-gen&utm_content=cta-a",
    );

    render(<ConversionForm />);
    
    // Fill text fields - use placeholder or display value if label is ambiguous
    fireEvent.change(screen.getByPlaceholderText(/Your name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText(/Email\.\.\./i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText(/https:\/\/example\.com/i), { target: { value: "https://example.com" } });
    
    // Fill multiselect (Business Type)
    const businessCheck = screen.getByLabelText(/🏘️Real Estate/i);
    fireEvent.click(businessCheck);
    
    // Fill selects
    const selects = screen.getAllByTestId("mock-select");
    // monthlyBudget, icpCategory, speed
    fireEvent.change(selects[0], { target: { value: "$3k+" } });
    fireEvent.change(selects[1], { target: { value: "SaaS Founders" } });
    fireEvent.change(selects[2], { target: { value: "Immediately" } });

    // Submit
    fireEvent.click(screen.getByText(/Submit Application/i));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("/api/contact/intake", expect.objectContaining({
        method: "POST",
      }));
      expect(pushMock).toHaveBeenCalledWith("/contact/thank-you?source=conversion");
    });

    const requestInit = (global.fetch as any).mock.calls[0]?.[1];
    const payload = JSON.parse(requestInit.body);
    expect(payload.gclid).toBe("test-gclid");
    expect(payload.utm_source).toBe("google");
    expect(payload.utm_campaign).toBe("spring");
    expect(payload.utm_term).toBe("lead-gen");
    expect(payload.utm_content).toBe("cta-a");
  });
});
