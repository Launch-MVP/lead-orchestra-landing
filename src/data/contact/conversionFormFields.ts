import type { FieldConfig } from "@/types/contact/formFields";
import { z } from "zod";

export const denverWorkshopTiers = [
	{
		value: "in-person-mvp-build",
		label: "3-Day MVP Build Workshop",
		totalPrice: 3000,
		depositAmount: 300,
		description: "Full MVP build in Denver over 3 focused days.",
	},
	{
		value: "in-person-app-launch",
		label: "App + Landing Page Workshop",
		totalPrice: 5000,
		depositAmount: 500,
		description: "Web app or mobile app plus a launch landing page.",
	},
	{
		value: "in-person-ai-prototype",
		label: "Enterprise Prototyping Workshop",
		totalPrice: 7500,
		depositAmount: 750,
		description: "Enterprise-grade in-person product or AI prototype sprint.",
	},
] as const;

export type DenverWorkshopTierValue =
	(typeof denverWorkshopTiers)[number]["value"];

export const denverWorkshopTierMap = Object.fromEntries(
	denverWorkshopTiers.map((tier) => [tier.value, tier]),
) as Record<DenverWorkshopTierValue, (typeof denverWorkshopTiers)[number]>;

export const quickApplySchema = z.object({
	name: z.string().min(2, "Name is required"),
	email: z.string().email("Invalid email address"),
	phone: z.string().min(7, "Phone number is required"),
	companyName: z.string().min(2, "Company name is required"),
	website: z.string().url("Valid website is required"),
	selectedTier: z.enum([
		"in-person-mvp-build",
		"in-person-app-launch",
		"in-person-ai-prototype",
	]),
	projectSummary: z.string().min(12, "Project summary is required"),
	gclid: z.string().optional(),
	wbraid: z.string().optional(),
	gbraid: z.string().optional(),
	msclkid: z.string().optional(),
	fbclid: z.string().optional(),
	utm_source: z.string().optional(),
	utm_medium: z.string().optional(),
	utm_campaign: z.string().optional(),
	utm_term: z.string().optional(),
	utm_content: z.string().optional(),
	utm_icp: z.string().optional(),
	referralSource: z.string().min(1, "Please tell us how you heard about us"),
});

export type QuickApplyValues = z.infer<typeof quickApplySchema>;

export const quickApplyFields: FieldConfig[] = [
	{
		name: "selectedTier",
		label: "🔥 Denver Workshop Tier",
		type: "select",
		placeholder: "Select workshop tier",
		value: "",
		description: "Deposit is 10% of the selected discounted workshop price.",
		onChange: () => {},
		options: denverWorkshopTiers.map((tier) => ({
			value: tier.value,
			label: `${tier.label} · $${tier.totalPrice.toLocaleString()} total · $${tier.depositAmount.toLocaleString()} deposit`,
		})),
	},
	{
		name: "name",
		label: "Name",
		type: "text",
		placeholder: "Your name",
		value: "",
		description: "Used for the workshop reservation and checkout.",
		onChange: () => {},
	},
	{
		name: "email",
		label: "Email",
		type: "text",
		placeholder: "you@company.com",
		value: "",
		description: "Used for payment confirmation and event follow-up.",
		onChange: () => {},
	},
	{
		name: "phone",
		label: "Phone",
		type: "text",
		placeholder: "Best number",
		value: "",
		description: "Used if we need to confirm scheduling details quickly.",
		onChange: () => {},
	},
	{
		name: "companyName",
		label: "Company / Brand",
		type: "text",
		placeholder: "Company or project name",
		value: "",
		description: "Helps us prepare the right workshop context.",
		onChange: () => {},
	},
	{
		name: "website",
		label: "Website / Product URL",
		type: "url",
		placeholder: "https://example.com",
		value: "",
		description: "Share the current site, prototype, or product URL.",
		onChange: () => {},
	},
	{
		name: "projectSummary",
		label: "What do you want to build in Denver?",
		type: "textarea",
		placeholder:
			"Describe the MVP, app, or prototype you want to work through in person...",
		value: "",
		minLength: 12,
		description:
			"Give us enough context to prepare before your seat is confirmed.",
		onChange: () => {},
	},
	{
		name: "referralSource",
		label: "How did you hear about us?",
		type: "select",
		placeholder: "Select...",
		value: "",
		description: "Please let us know where you found us.",
		onChange: () => {},
		options: [
			{ value: "genius_networking", label: "🌟 Genius Networking" },
			{ value: "google", label: "Google / Search Engine" },
			{ value: "social", label: "Social Media (LinkedIn, X, Facebook, etc.)" },
			{ value: "referral", label: "Friend or Colleague" },
			{ value: "newsletter", label: "Newsletter" },
			{ value: "podcast", label: "Podcast / Interview" },
			{ value: "other", label: "Other" },
		],
	},
];
