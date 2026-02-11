"use client";

import { trackMetaServerEvent } from "@/lib/analytics/meta-events-client";
import { event, generateMetaEventId, pageView } from "@/utils/seo/fbpixel";
import { useEffect } from "react";

export function ThankYouTrackingClient() {
	useEffect(() => {
		const eventId = generateMetaEventId();
		pageView();
		event(
			"ViewContent",
			{
				content_name: "Contact Thank You Page",
			},
			{ eventID: eventId },
		);
		void trackMetaServerEvent({
			eventName: "ViewContent",
			eventId,
			eventSourceUrl: window.location.href,
		});
	}, []);

	return null;
}

