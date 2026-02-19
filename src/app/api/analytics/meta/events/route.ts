import { NextResponse } from "next/server";

import {
	buildMetaUserDataFromRequest,
	generateServerEventId,
	resolveEventSourceUrl,
	sendMetaConversionEvent,
} from "@/lib/analytics/meta-conversions-api";

const ALLOWED_EVENT_NAMES = new Set([
	"CompleteRegistration",
	"Contact",
	"FullApplicationSubmitted",
	"Lead",
	"Schedule",
	"StartApplication",
	"ViewContent",
]);

interface MetaClientEventBody {
	eventName?: string;
	eventId?: string;
	eventSourceUrl?: string;
	testEventCode?: string;
	useTestEventCode?: boolean;
	email?: string;
	firstName?: string;
	lastName?: string;
	phone?: string;
}

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as MetaClientEventBody;
		const eventName = typeof body.eventName === "string" ? body.eventName : "";

		if (!ALLOWED_EVENT_NAMES.has(eventName)) {
			return NextResponse.json(
				{ error: "Unsupported Meta event name." },
				{ status: 400 },
			);
		}

		const eventId =
			typeof body.eventId === "string" && body.eventId.trim()
				? body.eventId.trim()
				: generateServerEventId();
		const eventSourceUrl = resolveEventSourceUrl(request, body.eventSourceUrl);
		const testEventCode =
			typeof body.testEventCode === "string" ? body.testEventCode : undefined;
		const useTestEventCode = body.useTestEventCode === true;
		const resolvedTestEventCode =
			testEventCode ||
			(useTestEventCode ? process.env.META_TEST_EVENT_CODE : undefined);

		const userData = buildMetaUserDataFromRequest(request, {
			email: body.email,
			firstName: body.firstName,
			lastName: body.lastName,
			phone: body.phone,
		});

		const metaResult = await sendMetaConversionEvent({
			eventName,
			eventId,
			eventSourceUrl,
			actionSource: "website",
			testEventCode: resolvedTestEventCode,
			userData,
		});

		return NextResponse.json(
			{
				ok: true,
				eventName,
				eventId,
				metaResult,
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error("[meta-events] API error", error);
		return NextResponse.json(
			{ error: "Failed to process Meta event." },
			{ status: 500 },
		);
	}
}
