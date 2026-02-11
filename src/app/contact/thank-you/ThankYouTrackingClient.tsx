"use client";

import { trackMetaServerEvent } from "@/lib/analytics/meta-events-client";
import { FB_PIXEL_ID, event, generateMetaEventId, pageView } from "@/utils/seo/fbpixel";
import { useEffect } from "react";

export function ThankYouTrackingClient() {
	useEffect(() => {
		let pollId: number | null = null;

		const isFbqReady = () =>
			typeof window !== "undefined" && typeof window.fbq === "function";
		const trackBrowserEvents = (eventId: string) => {
			pageView();
			event(
				"ViewContent",
				{
					content_name: "Contact Thank You Page",
				},
				{ eventID: eventId },
			);
		};
		const sendNoScriptPageViewFallback = () => {
			if (!FB_PIXEL_ID || typeof window === "undefined") {
				return;
			}
			const params = new URLSearchParams({
				id: FB_PIXEL_ID,
				ev: "PageView",
				dl: window.location.href,
				noscript: "1",
			});
			const img = new Image();
			img.src = `https://www.facebook.com/tr?${params.toString()}`;
		};

		const eventId = generateMetaEventId();

		if (isFbqReady()) {
			trackBrowserEvents(eventId);
		} else {
			let elapsedMs = 0;
			const intervalMs = 250;
			const timeoutMs = 5000;
			pollId = window.setInterval(() => {
				elapsedMs += intervalMs;
				if (isFbqReady()) {
					window.clearInterval(pollId);
					trackBrowserEvents(eventId);
					return;
				}
				if (elapsedMs >= timeoutMs) {
					window.clearInterval(pollId);
					sendNoScriptPageViewFallback();
				}
			}, intervalMs);
		}

		void trackMetaServerEvent({
			eventName: "ViewContent",
			eventId,
			eventSourceUrl: window.location.href,
		});

		return () => {
			if (pollId !== null) {
				window.clearInterval(pollId);
			}
		};
	}, []);

	return null;
}
