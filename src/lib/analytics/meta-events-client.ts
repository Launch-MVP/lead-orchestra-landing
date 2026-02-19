"use client";

type MetaTrackableEvent =
	| "CompleteRegistration"
	| "Contact"
	| "FullApplicationSubmitted"
	| "Lead"
	| "Schedule"
	| "StartApplication"
	| "ViewContent";

interface TrackMetaServerEventInput {
	eventName: MetaTrackableEvent;
	eventId: string;
	eventSourceUrl?: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	phone?: string;
}

export const trackMetaServerEvent = async (
	input: TrackMetaServerEventInput,
): Promise<void> => {
	try {
		await fetch("/api/analytics/meta/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			keepalive: true,
			body: JSON.stringify(input),
		});
	} catch (error) {
		console.error("[meta-events-client] Failed to track server event", error);
	}
};
