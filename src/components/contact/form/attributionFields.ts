export interface IntakeAttributionFields {
	gclid?: string;
	utm_source?: string;
	utm_campaign?: string;
	utm_term?: string;
	utm_content?: string;
}

const TRACKING_KEYS = [
	"gclid",
	"utm_source",
	"utm_campaign",
	"utm_term",
	"utm_content",
] as const;

const toNonEmptyString = (value: string | null): string | undefined => {
	if (typeof value !== "string") return undefined;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : undefined;
};

export const getAttributionFieldsFromUrl = (
	url: string,
): IntakeAttributionFields => {
	try {
		const parsed = new URL(url);
		const result: IntakeAttributionFields = {};

		for (const key of TRACKING_KEYS) {
			const value = toNonEmptyString(parsed.searchParams.get(key));
			if (value) {
				result[key] = value;
			}
		}

		return result;
	} catch {
		return {};
	}
};

