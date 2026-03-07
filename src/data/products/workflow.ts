import type { ProductType } from "@/types/products";
import { LicenseType, ProductCategory } from "@/types/products";
import type { ABTest } from "../../types/testing/index";
import {
	linkedinScrapingWorkflowABTests,
	multiSourceScrapingWorkflowABTests,
	zillowScrapingWorkflowABTests,
} from "./workflow-copy";

export interface WorkflowProductType extends ProductType {
	workflowId: string;
	userId: string;
}

export const workflowProducts: WorkflowProductType[] = [
	{
		id: "mvp-scope-system",
		name: "MVP Scope System",
		abTest: zillowScrapingWorkflowABTests[0] as ABTest,
		price: 249,
		sku: "LMVP-WF-SCOPE-249",
		slug: "mvp-scope-system",
		licenseName: LicenseType.Proprietary,
		description:
			"A reusable scoping workflow that helps founders cut features, map the core user journey, and reach a cleaner version-one plan.",
		categories: [ProductCategory.Workflows, ProductCategory.Strategy],
		images: ["/products/workflows.png"],
		types: [
			{ name: "Standard", value: "standard", price: 249 },
			{ name: "Team", value: "team", price: 449 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What does this workflow include?",
				answer:
					"It includes a repeatable process for scope cutting, feature prioritization, and identifying the smallest launchable version of the product.",
			},
		],
		workflowId: "wf-launch-scope-001",
		userId: "user-assign-on-purchase",
	},
	{
		id: "beta-feedback-system",
		name: "Beta Feedback System",
		abTest: linkedinScrapingWorkflowABTests[0] as ABTest,
		price: 199,
		sku: "LMVP-WF-BETA-199",
		slug: "beta-feedback-system",
		licenseName: LicenseType.Proprietary,
		description:
			"A reusable workflow for recruiting beta testers, collecting structured feedback, and keeping early validation organized.",
		categories: [ProductCategory.Workflows, ProductCategory.Support],
		images: ["/products/workflows.png"],
		types: [
			{ name: "Standard", value: "standard", price: 199 },
			{ name: "Team", value: "team", price: 349 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What does this help with?",
				answer:
					"It helps founders run a tighter loop between outreach, user intake, product feedback, and roadmap follow-up.",
			},
		],
		workflowId: "wf-beta-feedback-002",
		userId: "user-assign-on-purchase",
	},
	{
		id: "launch-analytics-dashboard-workflow",
		name: "Launch Analytics Dashboard Workflow",
		price: 299,
		sku: "LMVP-WF-ANALYTICS-299",
		slug: "launch-analytics-dashboard-workflow",
		abTest: multiSourceScrapingWorkflowABTests[0] as ABTest,
		licenseName: LicenseType.Proprietary,
		description:
			"A reusable reporting workflow for post-launch visibility across activation, product usage, and early traction signals.",
		categories: [ProductCategory.Workflows, ProductCategory.Data],
		images: ["/products/workflows.png"],
		types: [{ name: "Standard", value: "standard", price: 299 }],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What does this workflow track?",
				answer:
					"It is built to centralize early launch metrics so teams can monitor adoption, usage patterns, and next-step priorities in one cleaner view.",
			},
		],
		workflowId: "wf-launch-analytics-003",
		userId: "user-assign-on-purchase",
	},
];
