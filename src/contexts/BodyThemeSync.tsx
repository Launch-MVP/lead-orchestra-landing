"use client";
import { useEffect } from "react";

import { useTheme } from "@/contexts/theme-context";

/**
 * Syncs the body class between Pilot Spring dark and light theme variants.
 * Old theme classes are still removed for compatibility with legacy markup.
 */
export default function BodyThemeSync() {
	const { resolvedTheme } = useTheme();
	useEffect(() => {
		// Remove all theme classes, including legacy brand classes.
		document.body.classList.remove(
			"theme-cyberoni",
			"theme-cyberoni-light",
			"theme-lead-orchestra",
			"theme-lead-orchestra-light",
			"theme-dealscale",
			"theme-dealscale-light",
			"theme-pilot-spring",
			"theme-pilot-spring-light",
		);

		if (resolvedTheme === "dark") {
			document.body.classList.add("theme-pilot-spring");
		} else {
			document.body.classList.add("theme-pilot-spring-light");
		}

		const html = document.documentElement;
		if (resolvedTheme === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
	}, [resolvedTheme]);
	return null;
}
