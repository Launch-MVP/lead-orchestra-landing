import type { VoteResponse } from "../hooks/featureTypes";
// import { supabase } from "@/integrations/supabase/client";
import type { FeatureRequest } from "../types";

const withDefaults = (
	feature: Partial<FeatureRequest> &
		Pick<FeatureRequest, "id" | "title" | "description" | "status">,
): FeatureRequest => {
	const now = new Date().toISOString();
	return {
		category: feature.category ?? "Productivity",
		categoryId: feature.categoryId ?? "productivity",
		icpFocus: feature.icpFocus ?? "General",
		completeness: feature.completeness ?? 25,
		benefit: feature.benefit,
		priority: feature.priority ?? "Medium",
		toolUrl: feature.toolUrl,
		owner: feature.owner ?? "Product Team",
		lastUpdated: feature.lastUpdated ?? now,
		created_at: feature.created_at ?? now,
		updated_at: feature.updated_at ?? feature.lastUpdated ?? now,
		upvotes: feature.upvotes ?? 0,
		userVote: feature.userVote ?? null,
		iconIndex: feature.iconIndex ?? 0,
		...feature,
	};
};

const mockFeatures: FeatureRequest[] = [
	withDefaults({
		id: "1",
		title: "Founder Launch Debrief",
		description:
			"Post-launch review add-on for product, analytics, and next-step prioritization.",
		status: "discovery",
		category: "Support",
		categoryId: "support",
		icpFocus: "Founders",
		completeness: 45,
		priority: "High",
		upvotes: 12,
		iconIndex: 0,
	}),
	withDefaults({
		id: "2",
		title: "Landing Page Copy Sprint",
		description:
			"One-time launch copy service for tightening hero, offer, objection, and CTA messaging.",
		status: "planning",
		category: "Strategy",
		categoryId: "strategy",
		icpFocus: "Product Teams",
		completeness: 35,
		priority: "Medium",
		upvotes: 8,
		iconIndex: 1,
	}),
	withDefaults({
		id: "3",
		title: "Weekly Product Advisory",
		description:
			"Ongoing founder support for scope decisions, roadmap pressure-testing, and launch accountability.",
		status: "in_progress",
		category: "Support",
		categoryId: "support",
		icpFocus: "Startup Teams",
		completeness: 70,
		priority: "Medium",
		upvotes: 5,
		iconIndex: 2,
	}),
	withDefaults({
		id: "4",
		title: "Mobile Prototype Track",
		description:
			"Add a dedicated in-person workshop path for mobile-first MVPs.",
		status: "in_discovery",
		category: "In Person",
		categoryId: "in-person",
		icpFocus: "Founders & Product Teams",
		completeness: 30,
		priority: "Low",
		upvotes: 3,
		iconIndex: 3,
	}),
	withDefaults({
		id: "5",
		title: "AI Evaluation Layer",
		description:
			"A structured eval and QA add-on for teams shipping AI-assisted product flows.",
		status: "released",
		category: "Specialists",
		categoryId: "specialists",
		icpFocus: "AI Product Teams",
		completeness: 100,
		priority: "High",
		upvotes: 7,
		iconIndex: 4,
	}),
];

const mockVotes: { [featureId: string]: { [userId: string]: "up" | "down" } } =
	{};

export const fetchFeatureRequests = async (): Promise<FeatureRequest[]> => {
	return mockFeatures;
};

export const fetchUserVotes = async (
	userId: string,
): Promise<{ feature_id: string; vote_type: "up" | "down" }[]> => {
	return Object.entries(mockVotes)
		.filter(([_, users]) => users[userId])
		.map(([feature_id, users]) => ({
			feature_id,
			vote_type: users[userId],
		}));
};

export const voteOnFeature = async (
	featureId: string,
	userId: string,
	voteType: "up" | "down",
): Promise<VoteResponse> => {
	if (!mockVotes[featureId]) {
		mockVotes[featureId] = {};
	}
	mockVotes[featureId][userId] = voteType;

	// Tally upvotes for each feature
	let upvotes = 0;
	for (const feature of mockFeatures) {
		const users = mockVotes[feature.id] || {};
		const upCount = Object.values(users).filter((v) => v === "up").length;
		feature.upvotes = upCount;
		if (feature.id === featureId) upvotes = upCount;
	}

	return {
		success: true,
		upvotes,
		userVote: voteType,
	};
};
