import type { ProductType } from "@/types/products";
import { LicenseType, ProductCategory } from "@/types/products";
import {
	jobBoardScraperPluginABTests,
	mlsScraperPluginABTests,
	realtorMcpPluginABTests,
} from "./agents-copy";

const BASE_AGENT_IMAGE = "/products/workflows.png";

export const agentProducts: ProductType[] = [
	{
		id: "scope-agent",
		name: "Scope Agent",
		description:
			"AI planning assistant for requirements gathering, MVP scoping, feature reduction, and cleaner version-one product definition.",
		price: 149,
		sku: "LMVP-AGENT-SCOPE",
		slug: "scope-agent",
		licenseName: LicenseType.Proprietary,
		categories: [
			ProductCategory.Agents,
			ProductCategory.Automation,
			ProductCategory.Workflows,
		],
		images: [BASE_AGENT_IMAGE],
		types: [
			{ name: "Single License", value: "single", price: 149 },
			{ name: "Team License", value: "team", price: 399 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What does the Scope Agent help with?",
				answer:
					"It helps teams collect requirements, identify scope creep, reduce version-one complexity, and generate clearer planning artifacts before the build starts.",
			},
			{
				question: "Who is this best for?",
				answer:
					"It is best for founders and product teams that need sharper product definition before design and engineering work accelerates.",
			},
		],
		abTest: realtorMcpPluginABTests[0],
		agent: {
			name: "Scope Agent",
			type: "social",
			description:
				"AI assistant focused on product scoping and requirements clarification.",
			image: BASE_AGENT_IMAGE,
			isPublic: true,
			isFree: false,
			priceMultiplier: 2,
			billingCycle: "one-time",
			avatar: "scope-agent",
			campaignGoal: "Clarify MVP scope",
			persona: "Sharp, pragmatic product strategist.",
			salesScript:
				"Interview the idea, expose ambiguity, and produce a tighter MVP plan.",
		},
	},
	{
		id: "feedback-agent",
		name: "Feedback Agent",
		description:
			"AI assistant for organizing beta feedback, grouping signals, summarizing issues, and helping teams prioritize post-launch iteration.",
		price: 199,
		sku: "LMVP-AGENT-FEEDBACK",
		slug: "feedback-agent",
		licenseName: LicenseType.Proprietary,
		categories: [
			ProductCategory.Agents,
			ProductCategory.Automation,
			ProductCategory.Workflows,
		],
		images: [BASE_AGENT_IMAGE],
		types: [
			{ name: "Single License", value: "single", price: 199 },
			{ name: "Team License", value: "team", price: 449 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What does the Feedback Agent do?",
				answer:
					"It helps summarize user notes, organize feedback themes, surface repeated pain points, and support clearer roadmap decisions after launch.",
			},
			{
				question: "When should I use it?",
				answer:
					"Use it after beta launch or early rollout when feedback volume is increasing and the team needs more structure around what to act on next.",
			},
		],
		abTest: mlsScraperPluginABTests[0],
		agent: {
			name: "Feedback Agent",
			type: "social",
			description:
				"AI assistant focused on product feedback synthesis and post-launch prioritization.",
			image: BASE_AGENT_IMAGE,
			isPublic: true,
			isFree: false,
			priceMultiplier: 3,
			billingCycle: "monthly",
			avatar: "feedback-agent",
			campaignGoal: "Organize feedback and next steps",
			persona: "Methodical product operator with strong synthesis habits.",
			salesScript:
				"Turn raw user feedback into grouped themes, issue summaries, and next-step recommendations.",
		},
	},
	{
		id: "launch-ops-agent",
		name: "Launch Ops Agent",
		description:
			"AI assistant for launch coordination, checklist management, blocker summaries, and keeping release details visible across the team.",
		price: 179,
		sku: "LMVP-AGENT-LAUNCH-OPS",
		slug: "launch-ops-agent",
		licenseName: LicenseType.Proprietary,
		categories: [
			ProductCategory.Agents,
			ProductCategory.Automation,
			ProductCategory.Workflows,
		],
		images: [BASE_AGENT_IMAGE],
		types: [
			{ name: "Single License", value: "single", price: 179 },
			{ name: "Team License", value: "team", price: 429 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What kind of work does the Launch Ops Agent support?",
				answer:
					"It supports daily release coordination, checklist visibility, issue summaries, handoff notes, and the operational layer around launch week.",
			},
			{
				question: "Is this a replacement for a human operator?",
				answer:
					"No. It is a coordination helper that reduces status reconstruction and keeps more launch information visible under pressure.",
			},
		],
		abTest: jobBoardScraperPluginABTests[0],
		agent: {
			name: "Launch Ops Agent",
			type: "phone",
			description:
				"AI assistant focused on launch coordination, blocker tracking, and release-week operating support.",
			image: BASE_AGENT_IMAGE,
			isPublic: true,
			isFree: false,
			priceMultiplier: 2,
			billingCycle: "monthly",
			voice: "alloy",
			backgroundNoise: "office",
			campaignGoal: "Keep launch coordination visible",
			persona: "Calm launch operator who summarizes and escalates clearly.",
			salesScript:
				"Track launch tasks, surface blockers, and keep the team aligned on what still needs to happen.",
		},
	},
];
