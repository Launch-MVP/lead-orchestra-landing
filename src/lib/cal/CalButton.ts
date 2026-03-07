import { getCalApi } from "@calcom/embed-react";

export type CalModalOptions = {
	/** Cal.com link slug, e.g. "cyber-oni-solutions-inc/mvp-consultation" */
	calLink: string;
	/** Optional URL query params to pass through (UTM, prefill, etc.) */
	params?: Record<string, string>;
	/** Theme override, defaults to "dark" */
	theme?: "dark" | "light";
};

/**
 * Opens a Cal.com booking modal with optional URL params (UTM, prefill fields, etc.).
 * Falls back to opening in a new tab if the embed fails.
 *
 * @example
 * handleCalButtonClick(default_cal_slug);
 * handleCalButtonClick(default_cal_slug, {
 *   params: { utm_source: "hero-cta", name: "John" },
 * });
 */
export const handleCalButtonClick = async (
	calLinkOrOptions: string | CalModalOptions,
) => {
	const opts: CalModalOptions =
		typeof calLinkOrOptions === "string"
			? { calLink: calLinkOrOptions }
			: calLinkOrOptions;

	const { calLink, params, theme = "dark" } = opts;

	try {
		const cal = await getCalApi();
		cal("ui", {
			theme,
			styles: { branding: { brandColor: "#2563EB" } },
		});
		cal("modal", {
			calLink,
			config: {
				theme,
				...(params && Object.keys(params).length > 0 ? params : {}),
			},
		});
	} catch (error) {
		console.error("Error handling Cal.com button click", error);
		// Fallback: build URL with query params and open in new tab
		const url = new URL(`https://cal.com/${calLink}`);
		if (params) {
			for (const [key, value] of Object.entries(params)) {
				url.searchParams.set(key, value);
			}
		}
		window.open(url.toString(), "_blank");
	}
};
