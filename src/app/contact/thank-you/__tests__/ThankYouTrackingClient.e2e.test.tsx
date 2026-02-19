import { render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ThankYouTrackingClient } from "../ThankYouTrackingClient";

const {
	pageViewMock,
	eventMock,
	customEventMock,
	generateMetaEventIdMock,
	trackMetaServerEventMock,
	useSearchParamsMock,
} = vi.hoisted(() => ({
	pageViewMock: vi.fn(),
	eventMock: vi.fn(),
	customEventMock: vi.fn(),
	generateMetaEventIdMock: vi.fn(() => "evt_thank_you_1"),
	trackMetaServerEventMock: vi.fn().mockResolvedValue(undefined),
	useSearchParamsMock: vi.fn(() => new URLSearchParams()),
}));

vi.mock("next/navigation", () => ({
	useSearchParams: () => useSearchParamsMock(),
}));

vi.mock("@/utils/seo/fbpixel", () => ({
	FB_PIXEL_ID: "pixel_test_123",
	pageView: pageViewMock,
	event: eventMock,
	customEvent: customEventMock,
	generateMetaEventId: generateMetaEventIdMock,
}));

vi.mock("@/lib/analytics/meta-events-client", () => ({
	trackMetaServerEvent: trackMetaServerEventMock,
}));

describe("ThankYouTrackingClient (e2e)", () => {
	beforeEach(() => {
		window.fbq = vi.fn();
		pageViewMock.mockReset();
		eventMock.mockReset();
		customEventMock.mockReset();
		generateMetaEventIdMock.mockReset();
		generateMetaEventIdMock.mockReturnValue("evt_thank_you_1");
		trackMetaServerEventMock.mockReset();
		trackMetaServerEventMock.mockResolvedValue(undefined);
		useSearchParamsMock.mockReset();
		useSearchParamsMock.mockReturnValue(new URLSearchParams());
	});

	it("fires only ViewContent Pixel and CAPI when source is not intake", async () => {
		render(<ThankYouTrackingClient />);

		await waitFor(() => {
			expect(pageViewMock).toHaveBeenCalledTimes(1);
			expect(eventMock).toHaveBeenCalledTimes(1);
			expect(customEventMock).not.toHaveBeenCalled();
			expect(eventMock).toHaveBeenCalledWith(
				"ViewContent",
				{
					content_name: "Contact Thank You Page",
				},
				{ eventID: "evt_thank_you_1" },
			);
			expect(trackMetaServerEventMock).toHaveBeenCalledTimes(1);
			expect(trackMetaServerEventMock).toHaveBeenCalledWith(
				expect.objectContaining({
					eventName: "ViewContent",
					eventId: "evt_thank_you_1",
				}),
			);
		});
	});

	it("fires FullApplicationSubmitted Pixel and CAPI when source=intake", async () => {
		useSearchParamsMock.mockReturnValue(new URLSearchParams("source=intake"));
		generateMetaEventIdMock
			.mockReturnValueOnce("evt_view_content_1")
			.mockReturnValueOnce("evt_full_app_1");

		render(<ThankYouTrackingClient />);

		await waitFor(() => {
			expect(pageViewMock).toHaveBeenCalledTimes(1);
			expect(eventMock).toHaveBeenCalledWith(
				"ViewContent",
				{
					content_name: "Contact Thank You Page",
				},
				{ eventID: "evt_view_content_1" },
			);
			expect(customEventMock).toHaveBeenCalledTimes(1);
			expect(customEventMock).toHaveBeenCalledWith(
				"FullApplicationSubmitted",
				{
					form_type: "long_intake",
					completion_point: "thank_you_page",
				},
				{ eventID: "evt_full_app_1" },
			);
			expect(trackMetaServerEventMock).toHaveBeenCalledTimes(2);
			expect(trackMetaServerEventMock).toHaveBeenNthCalledWith(
				1,
				expect.objectContaining({
					eventName: "ViewContent",
					eventId: "evt_view_content_1",
				}),
			);
			expect(trackMetaServerEventMock).toHaveBeenNthCalledWith(
				2,
				expect.objectContaining({
					eventName: "FullApplicationSubmitted",
					eventId: "evt_full_app_1",
				}),
			);
		});
	});
});
