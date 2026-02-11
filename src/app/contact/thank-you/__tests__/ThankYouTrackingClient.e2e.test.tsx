import { render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ThankYouTrackingClient } from "../ThankYouTrackingClient";

const {
	pageViewMock,
	eventMock,
	generateMetaEventIdMock,
	trackMetaServerEventMock,
} = vi.hoisted(() => ({
	pageViewMock: vi.fn(),
	eventMock: vi.fn(),
	generateMetaEventIdMock: vi.fn(() => "evt_thank_you_1"),
	trackMetaServerEventMock: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("@/utils/seo/fbpixel", () => ({
	pageView: pageViewMock,
	event: eventMock,
	generateMetaEventId: generateMetaEventIdMock,
}));

vi.mock("@/lib/analytics/meta-events-client", () => ({
	trackMetaServerEvent: trackMetaServerEventMock,
}));

describe("ThankYouTrackingClient (e2e)", () => {
	beforeEach(() => {
		pageViewMock.mockReset();
		eventMock.mockReset();
		generateMetaEventIdMock.mockReset();
		generateMetaEventIdMock.mockReturnValue("evt_thank_you_1");
		trackMetaServerEventMock.mockReset();
		trackMetaServerEventMock.mockResolvedValue(undefined);
	});

	it("fires Pixel and CAPI ViewContent on mount with shared event_id", async () => {
		render(<ThankYouTrackingClient />);

		await waitFor(() => {
			expect(pageViewMock).toHaveBeenCalledTimes(1);
			expect(eventMock).toHaveBeenCalledTimes(1);
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
});
