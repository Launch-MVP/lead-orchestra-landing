"use client";

import { trackMetaServerEvent } from "@/lib/analytics/meta-events-client";
import {
	FB_PIXEL_ID,
	customEvent,
	event,
	generateMetaEventId,
	pageView,
} from "@/utils/seo/fbpixel";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ThankYouTrackingClient() {
	const searchParams = useSearchParams();
	const source = searchParams?.get("source");

	useEffect(() => {
		let pollId: number | null = null;
		const isIntakeCompletion = source === "intake";

		const isFbqReady = () =>
			typeof window !== "undefined" && typeof window.fbq === "function";
		const viewContentEventId = generateMetaEventId();
		const fullApplicationEventId = isIntakeCompletion
			? generateMetaEventId()
			: null;
		const trackBrowserEvents = () => {
			pageView();
			event(
				"ViewContent",
				{
					content_name: "Contact Thank You Page",
				},
				{ eventID: viewContentEventId },
			);
			if (isIntakeCompletion && fullApplicationEventId) {
				customEvent(
					"FullApplicationSubmitted",
					{
						form_type: "long_intake",
						completion_point: "thank_you_page",
					},
					{ eventID: fullApplicationEventId },
				);
			}
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

		if (isFbqReady()) {
			trackBrowserEvents();
		} else {
			let elapsedMs = 0;
			const intervalMs = 250;
			const timeoutMs = 5000;
			pollId = window.setInterval(() => {
				elapsedMs += intervalMs;
				if (isFbqReady()) {
					window.clearInterval(pollId);
					trackBrowserEvents();
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
			eventId: viewContentEventId,
			eventSourceUrl: window.location.href,
		});
		if (isIntakeCompletion && fullApplicationEventId) {
			void trackMetaServerEvent({
				eventName: "FullApplicationSubmitted",
				eventId: fullApplicationEventId,
				eventSourceUrl: window.location.href,
			});
		}

		return () => {
			if (pollId !== null) {
				window.clearInterval(pollId);
			}
		};
	}, [source]);

	return null;
}
