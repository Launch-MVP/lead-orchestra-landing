/**
 * Notion Linktree Database Schema
 *
 * Auto-generated from Notion API
 * Database ID: 2b2e9c25-ecb0-81f0-94aa-e7cd9e714a85
 *
 * Last updated: 2025-11-01T13:46:45.528Z
 */

import type {
	NotionFilesProperty,
	NotionRichTextProperty,
	NotionSelectProperty,
	NotionTitleProperty,
	NotionUrlProperty,
} from "./notionTypes";

// Additional Notion property types not in notionTypes.ts
export type NotionStatusProperty = {
	type: "status";
	status: {
		id: string;
		name: string;
		color: string;
	} | null;
};

export type NotionDateProperty = {
	type: "date";
	date: {
		start: string;
		end: string | null;
		time_zone: string | null;
	} | null;
};

export type NotionNumberProperty = {
	type: "number";
	number: number | null;
};

export interface LinkTreeNotionDatabaseProperties {
	// Property: "Video" (files)
	Video: NotionFilesProperty;

	// Property: "Status" (status)
	Status: NotionStatusProperty;

	// Property: "utm_offer" (select)
	utm_offer: NotionSelectProperty; // Options: "ai5skipUnlimited" | "Get Free AI  Calling Credits" | "Early Access" | "trending-zip-codes";

	// Property: "utm_campaign" (select)
	utm_campaign: NotionSelectProperty; // Options: "brand2025" | "beta2025" | "bf2025" | "fall2025" | "co-startup-week" | "beta_signup" | "investor_deck" | "cosw2025" | "ty-linkedin" | "Cofounder-Test" | "alpha_0.1" | "investor_follow_up_0.1" | "newsletter-welcome" | "pre-recruit-q1-25";

	// Property: "Destination" (url)
	Destination: NotionUrlProperty;

	// Property: "Affiliate Code" (select)
	"Affiliate Code": NotionSelectProperty; // Options: ;

	// Property: "End Date" (date)
	"End Date": NotionDateProperty;

	// Property: "Redirect To Download First File" (select)
	"Redirect To Download First File": NotionSelectProperty; // Options: "Yes" | "No";

	// Property: "utm_source" (select)
	utm_source: NotionSelectProperty; // Options: "youtube" | "linkedin" | "facebook" | "email" | "cosw2025" | "business_card" | "csw_handout" | "linktree" | "landing-page" | "powerpoint-qr" | "Reddit" | "x-twitter" | "instagram" | "website" | "github" | "investor-application-general" | "beehiiv" | "tik-tok" | "blue-sky" | "wellfound" | "gumroad";

	// Property: "Details" (rich_text)
	Details: NotionRichTextProperty;

	// Property: "utm_medium" (select)
	utm_medium: NotionSelectProperty; // Options: "social" | "cpc" | "newsletter" | "linktree" | "qr_code" | "vCard" | "Post" | "link";

	// Property: "Thumbnail" (url)
	Thumbnail: NotionUrlProperty;

	// Property: "Highlighted" (select)
	Highlighted: NotionSelectProperty; // Options: "Yes" | "No";

	// Property: "Redirects (Clicks)" (number)
	"Redirects (Clicks)": NotionNumberProperty;

	// Property: "Image" (files)
	Image: NotionFilesProperty;

	// Property: "Title" (rich_text)
	Title: NotionRichTextProperty;

	// Property: "File" (files)
	File: NotionFilesProperty;

	// Property: "Redirect Type" (select)
	"Redirect Type": NotionSelectProperty; // Options: "External" | "Internal";

	// Property: "Discount Code" (select)
	"Discount Code": NotionSelectProperty; // Options: ;

	// Property: "Redirects (Calls)" (number)
	"Redirects (Calls)": NotionNumberProperty;

	// Property: "Category" (select)
	Category: NotionSelectProperty; // Options: "Test" | "Event-Kit" | "Product" | "Contact" | "Offerings" | "Investors" | "Physical" | "Social-Kit" | "Customer" | "Beehiiv" | "Reports" | "Recruiting";

	// Property: "Link Tree Enabled" (select)
	"Link Tree Enabled": NotionSelectProperty; // Options: "True" | "False";

	// Property: "Start Date" (date)
	"Start Date": NotionDateProperty;

	// Property: "Slug" (title)
	Slug: NotionTitleProperty;

	// Property: "gclid" (rich_text)
	gclid: NotionRichTextProperty;

	// Property: "utm_icp" (select)
	utm_icp: NotionSelectProperty;

	// Property: "utm_content" (select)
	utm_content: NotionSelectProperty;

	// Property: "utm_term" (select)
	utm_term: NotionSelectProperty;
}
