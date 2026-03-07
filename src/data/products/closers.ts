import {
	LicenseType,
	ProductCategory,
	type ProductType,
} from "@/types/products";
import { virtualAssistantsABTests } from "./closers-copy";

export const closerProducts: ProductType[] = [
	{
		id: "virtual-assistants-marketplace",
		name: "Operator Support Marketplace",
		price: 0,
		sku: "LMVP-OPS-MARKETPLACE",
		slug: "virtual-assistants",
		licenseName: LicenseType.Proprietary,
		abTest: virtualAssistantsABTests[0],
		description:
			"Browse vetted remote operators who can support launch admin, research, QA coordination, follow-up, and other execution tasks that keep MVP projects moving.",
		categories: [
			ProductCategory.RemoteClosers,
			ProductCategory.Monetize,
			ProductCategory.AddOn,
		],
		images: [
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What kind of support do these operators provide?",
				answer:
					"They can help with launch prep, documentation cleanup, QA coordination, research, customer follow-up, and other operational work that still needs a human owner.",
			},
			{
				question: "How do I join as an operator?",
				answer:
					"Apply through the marketplace and share your experience with launch support, operations, research, or other high-follow-through execution work.",
			},
			{
				question: "Who is this useful for?",
				answer:
					"It is useful for founders and small teams that need flexible support capacity without committing to a full-time hire immediately.",
			},
			{
				question: "How does booking work?",
				answer:
					"Approved operators can be matched to support tasks or booked based on fit, availability, and the type of operational work a team needs covered.",
			},
		],
	},
];
