import Script from "next/script";
import "../index.css";
import type { ReactNode } from "react";

import { AppProviders } from "@/components/providers/AppProviders";
import type { AnalyticsConfig } from "@/lib/analytics/config";
import { getAnalyticsConfig } from "@/lib/analytics/config";
import { monoFont, sansFont } from "@/styles/fonts";
import { SchemaInjector, buildKnowledgeGraphSchema } from "@/utils/seo/schema";

const KNOWLEDGE_GRAPH_SCHEMA = buildKnowledgeGraphSchema();

const analyticsResult = getAnalyticsConfig();

if (analyticsResult.warnings.length > 0) {
	// * Surface configuration issues early in the server logs.
	console.warn(
		"[layout] Analytics configuration warnings",
		analyticsResult.warnings,
	);
}

const initialAnalyticsConfig: AnalyticsConfig = analyticsResult.config;
const {
	clarityId: clarityProjectId,
	zohoCode: zohoWidgetCode,
	facebookPixelId,
	plausibleDomain,
	plausibleEndpoint,
	plausibleScriptSrc,
} = initialAnalyticsConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${sansFont.variable} ${monoFont.variable}`}
			suppressHydrationWarning
		>
			<head>
				<link
					rel="preload"
					as="image"
					href="/logos/DealScale%20Transparent%20Logo/Deal%20Scale%20No%20Text.png"
					// type omitted; browsers infer from extension
				/>
				<Script id="whatconverts-init" strategy="afterInteractive">
					{
						"var $wc_load=function(a){return JSON.parse(JSON.stringify(a))}; var $wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL), ref:$wc_load(document.referrer), search:$wc_load(location.search), hash:$wc_load(location.hash)}};"
					}
				</Script>
				<Script
					src="//s.ksrndkehqnwntyxlhgto.com/162476.js"
					strategy="afterInteractive"
				/>
			</head>
			<body className="theme-lead-orchestra theme-dealscale min-h-screen bg-background font-sans antialiased">
				<SchemaInjector schema={KNOWLEDGE_GRAPH_SCHEMA} />
				<AppProviders
					clarityProjectId={clarityProjectId}
					zohoWidgetCode={zohoWidgetCode}
					facebookPixelId={facebookPixelId}
					plausibleDomain={plausibleDomain}
					plausibleEndpoint={plausibleEndpoint}
					plausibleScriptSrc={plausibleScriptSrc}
					initialAnalyticsConfig={initialAnalyticsConfig}
				>
					{children}
				</AppProviders>
			</body>
		</html>
	);
}
