import type { TeamMember } from "@/types/about/team";

export const teamMembers: TeamMember[] = [
	{
		name: "Ty D.",
		role: "Founder / Product Engineer",
		photoUrl: "/company/c-suite/Ty.jpg",
		joined: "Founder",
		expertise: ["Product Strategy", "AI Workflows", "Full-Stack Architecture"],
		bio: "Ty leads the product and delivery model behind Launch MVP, combining founder strategy, full-stack build decisions, and AI workflow implementation to help teams get to a usable version one faster.",
		linkedin: "https://www.linkedin.com/in/-techwithty/", // Placeholder
	},
	{
		name: "Jackie R.",
		role: "Brand & GTM Advisor",
		photoUrl: "/company/c-suite/ja_name_redacted.jpg",
		joined: "Founder",
		expertise: ["Positioning", "Go-To-Market Strategy", "Offer Clarity"],
		bio: "Jackie helps shape how the product is positioned, how the launch story gets told, and how founders communicate the MVP clearly enough for customers to understand it fast.",
		linkedin: "https://www.linkedin.com/in/jackierdaniel/", // Placeholder
	},
	{
		name: "Marco Wong",
		role: "Founding Backend & DevOps Engineer",
		photoUrl: "/company/c-suite/marco.jpg", // Placeholder, replace with actual photo
		joined: "Founder",
		expertise: [
			"Backend Systems",
			"DevOps & Reliability",
			"Production Infrastructure",
		],
		bio: "Marco owns the backend and release discipline that keeps Launch MVP builds stable. He focuses on APIs, environments, deployment reliability, and the handoff quality founders need after launch.",
		linkedin: "https://www.linkedin.com/in/marcowong/", // Placeholder
	},
];
