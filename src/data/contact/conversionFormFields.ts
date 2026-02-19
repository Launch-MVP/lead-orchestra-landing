import type { FieldConfig } from "@/types/contact/formFields";
import { z } from "zod";
import { intakeFormFields, intakeFormSchema } from "./intakeFormFields";

// * Re-export the base schema for consistency
export { intakeFormSchema };
export type { IntakeFormValues as ConversionFormValues } from "./intakeFormFields";

// * B2B Only ICP Categories
const b2bIcpCategories = [
	"Real Estate Agencies",
	"Commercial Real Estate Agents",
	"Commercial Real Estate Brokers",
	"Commercial Real Estate Investors",
	"Commercial Real Estate Wholesalers",
	"SaaS Founders",
	"Tech Startups",
	"B2B Service Providers",
	"Marketing Agency",
	"Nonprofit / Community Org",
	"B2B",
	"Other",
];

// * Helper to filter options
const _filterOptions = (
	options: { value: string; label: string }[],
	allowedValues: string[],
) => {
	return options.filter((opt) => allowedValues.includes(opt.value));
};

// * Quick Apply Schema (Step 1 only)
export const quickApplySchema = z.object({
	name: z.string().min(2, "Name is required"),
	email: z.string().email("Invalid email address"),
	website: z.string().min(1, "Website is required"),
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
	businessType: z.array(z.string()).min(1, "Business type / niche is required"),
	monthlyBudget: z.string().min(1, "Monthly budget is required"),
	icpCategory: z.string().min(1, "ICP category is required"),
	speed: z.string().min(1, "Start date / urgency is required"),
});

export type QuickApplyValues = z.infer<typeof quickApplySchema>;

// * Internal field list for filtering
const step1FieldNames = [
	"name",
	"email",
	"website",
	"businessType",
	"monthlyBudget",
	"icpCategory",
	"speed", // Urgency
];

// * Fields for the conversion form (derived from intakeFormFields)
export const quickApplyFields: FieldConfig[] = intakeFormFields
	.filter((f) => step1FieldNames.includes(f.name))
	.map((field) => {
		if (
			field.name === "icpCategory" &&
			(field.type === "select" || field.type === "multiselect")
		) {
			return {
				...field,
				options: field.options.filter((opt) =>
					b2bIcpCategories.includes(opt.value),
				),
			};
		}
		if (field.name === "speed") {
			return {
				...field,
				label: "Start date / Urgency",
			};
		}
		return field;
	});
