import { gdprPolicyMarkdown } from "@/data/constants/legal/GDPR";
import { PIIMarkdown } from "@/data/constants/legal/PII";
import { cookiesPolicyMarkdown } from "@/data/constants/legal/cookies";
import { hipaaMarkdown } from "@/data/constants/legal/hippa";
import { privacyPolicyMarkdown } from "@/data/constants/legal/privacy";
import { tcpComplianceMarkdown } from "@/data/constants/legal/tcpCompliance";
import { termsOfServiceMarkdown } from "@/data/constants/legal/terms";

export type LegalDocumentSource = "live" | "fallback";

export interface LegalDocument {
	slug: string;
	title: string;
	description: string;
	lastUpdated: string;
	content: string;
	path?: string;
	source?: LegalDocumentSource;
	syncedAt?: string;
	liveTemplateUrl?: string;
}

export const legalDocuments: LegalDocument[] = [
	{
		slug: "privacy-policy",
		title: "Privacy Policy",
		description:
			"How Pilot Spring collects, uses, and protects your personal information.",
		lastUpdated: "2024-07-23",
		content: privacyPolicyMarkdown,
		source: "fallback",
		path: "/privacy",
	},
	{
		slug: "terms-of-service",
		title: "Terms of Service",
		description:
			"Your legal agreement for using Pilot Spring's website, workshops, services, and digital assets.",
		lastUpdated: "2024-07-23",
		content: termsOfServiceMarkdown,
		source: "fallback",
		path: "/tos",
	},
	{
		slug: "cookie-policy",
		title: "Cookie Policy",
		description:
			"How Pilot Spring uses cookies and similar technologies across the site and service experience.",
		lastUpdated: "2024-07-23",
		content: cookiesPolicyMarkdown,
		source: "fallback",
		path: "/cookies",
	},
	{
		slug: "tcpa-compliance",
		title: "TCPA Compliance",
		description: "Our compliance with the Telephone Consumer Protection Act.",
		lastUpdated: "2024-07-23",
		content: tcpComplianceMarkdown,
		source: "fallback",
		path: "/tcpCompliance",
	},
	{
		slug: "gdpr-policy",
		title: "GDPR Policy",
		description: "Our data practices for EU/EEA residents.",
		lastUpdated: "2024-07-23",
		content: gdprPolicyMarkdown,
		source: "fallback",
		path: "/GDPR",
	},
	{
		slug: "hipaa-policy",
		title: "HIPAA Policy",
		description: "How we safeguard protected health information (PHI).",
		lastUpdated: "2024-07-23",
		content: hipaaMarkdown,
		source: "fallback",
		path: "/hippa",
	},
	{
		slug: "pii-handling-policy",
		title: "PII Handling Policy",
		description: "How we handle personally identifiable information.",
		lastUpdated: "2024-07-23",
		content: PIIMarkdown,
		source: "fallback",
		path: "/PII",
	},
];
