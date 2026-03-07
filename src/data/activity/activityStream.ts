export type ActivityEvent = {
	id: string;
	label: string;
	actor: string;
	action: string;
	timeAgo: string;
	impact: string;
	tags?: string[];
};

/**
 * Curated activity feed for the FeatureSectionActivity component.
 *
 * The copy mirrors the Launch MVP workshop storyline used across the
 * homepage so the visuals remain consistent.
 */
export const activityStream: ActivityEvent[] = [
	{
		id: "scope-lock",
		label: "Scope Lock",
		actor: "Launch MVP Workshop",
		action:
			"Locked the version-one flow around signup, onboarding, billing, and dashboard handoff.",
		timeAgo: "3m ago",
		impact: "Launch scope approved",
		tags: ["scope", "mvp"],
	},
	{
		id: "ux-review",
		label: "UX Review",
		actor: "Product Design Sprint",
		action:
			"Reviewed the must-have screens, simplified the onboarding path, and queued UI direction for handoff.",
		timeAgo: "8m ago",
		impact: "Core screens aligned",
		tags: ["ux", "handoff"],
	},
	{
		id: "integration-plan",
		label: "Integration Plan",
		actor: "Systems Map",
		action:
			"Confirmed auth, payments, analytics, and AI workflow integrations required for the launch sprint.",
		timeAgo: "14m ago",
		impact: "Stack decisions made",
		tags: ["integrations", "architecture"],
	},
	{
		id: "build-status",
		label: "Build Status",
		actor: "Engineering Sprint",
		action:
			"Shipped the critical path, connected the launch systems, and staged QA for deployment review.",
		timeAgo: "22m ago",
		impact: "Core build in progress",
		tags: ["build", "launch"],
	},
	{
		id: "qa-review",
		label: "QA Review",
		actor: "Launch Checklist",
		action:
			"Ran the release checklist covering analytics, deployment, edge cases, and launch-day fallback handling.",
		timeAgo: "31m ago",
		impact: "Launch risk reduced",
		tags: ["qa", "deployment"],
	},
	{
		id: "handoff-pack",
		label: "Handoff Pack",
		actor: "Founder Delivery",
		action:
			"Packaged repo notes, setup steps, roadmap priorities, and next decisions for the post-launch build phase.",
		timeAgo: "44m ago",
		impact: "Team ready to extend",
		tags: ["handoff", "roadmap"],
	},
];
