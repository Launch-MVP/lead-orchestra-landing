const CLICK_ID_KEYS = [
	"gclid",
	"wbraid",
	"gbraid",
	"msclkid",
	"fbclid",
] as const;

const INVALID_LITERAL_VALUES = new Set(["undefined", "null"]);

export const isTrackingQueryKey = (key: string): boolean => {
	const normalized = key.trim().toLowerCase();
	if (!normalized) return false;
	if (normalized.startsWith("utm_")) return true;
	return CLICK_ID_KEYS.includes(normalized as (typeof CLICK_ID_KEYS)[number]);
};

const normalizeValue = (
	value: string | undefined | null,
): string | undefined => {
	if (typeof value !== "string") return undefined;
	const trimmed = value.trim();
	if (!trimmed) return undefined;
	if (INVALID_LITERAL_VALUES.has(trimmed.toLowerCase())) return undefined;
	return trimmed;
};

type MergeRedirectQueryParamsInput = {
	destinationUrl: URL;
	incomingSearchParams: URLSearchParams;
	storedParams?: Record<string, string | undefined>;
	skipIncomingKeys?: string[];
};

/**
 * Merge redirect query params with this precedence:
 * 1. Incoming tracking params (utm_*, gclid, wbraid, gbraid, msclkid, fbclid)
 * 2. Existing destination params
 * 3. Stored params (fill-only; never overwrite existing destination/incoming)
 *
 * Non-tracking incoming params are preserved only if destination does not already have the key.
 */
export const mergeRedirectQueryParams = ({
	destinationUrl,
	incomingSearchParams,
	storedParams,
	skipIncomingKeys = [],
}: MergeRedirectQueryParamsInput): URL => {
	const skipSet = new Set(skipIncomingKeys.map((key) => key.toLowerCase()));

	if (storedParams) {
		for (const [key, rawValue] of Object.entries(storedParams)) {
			const normalizedKey = key.trim();
			if (!normalizedKey) continue;
			const value = normalizeValue(rawValue);
			if (!value) continue;
			if (!destinationUrl.searchParams.has(normalizedKey)) {
				destinationUrl.searchParams.set(normalizedKey, value);
			}
		}
	}

	for (const [key, rawValue] of incomingSearchParams.entries()) {
		if (skipSet.has(key.toLowerCase())) continue;
		const value = normalizeValue(rawValue);
		if (!value) continue;

		if (isTrackingQueryKey(key)) {
			destinationUrl.searchParams.set(key, value);
			continue;
		}

		if (!destinationUrl.searchParams.has(key)) {
			destinationUrl.searchParams.set(key, value);
		}
	}

	return destinationUrl;
};
