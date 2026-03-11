import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ContactThankYouPage from "../page";

vi.mock("../ThankYouTrackingClient", () => ({
	ThankYouTrackingClient: () => <div data-testid="thank-you-tracking-client" />,
}));

vi.mock("../ScheduleCountdown", () => ({
	ScheduleCountdown: () => <div data-testid="schedule-countdown" />,
}));

describe("Contact thank-you page (smoke)", () => {
	it("renders success messaging and CTA links", () => {
		render(<ContactThankYouPage />);

		expect(
			screen.getByRole("heading", { name: "Thank you for applying" }),
		).toBeInTheDocument();
		expect(
			screen.getByText(/we have your submission/i),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Back to Home" })).toHaveAttribute(
			"href",
			"/",
		);
	});

	it("links to Cal.com for consultation (not Notion)", () => {
		render(<ContactThankYouPage />);

		const consultLink = screen.getByRole("link", {
			name: "Schedule Consultation",
		});
		expect(consultLink).toBeInTheDocument();
		expect(consultLink).toHaveAttribute(
			"href",
			expect.stringContaining("cal.com"),
		);
		expect(consultLink).toHaveAttribute("target", "_blank");
	});
});
