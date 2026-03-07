import type { Event } from "@/types/event";

const currentDate = new Date();

export const events: Event[] = [
	{
		id: "1",
		slug: "denver-3-day-mvp-build-workshop-march-2026",
		title: "Denver 3-Day MVP Build Workshop",
		date: "2026-03-28",
		time: "09:00 - 17:00",
		description:
			"A hands-on in-person Launch MVP workshop in Denver for founders who need to scope, design, and ship a usable MVP in three focused days. We align on the product, lock the scope, and move into real build execution with landing page, analytics, and launch handoff.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		category: "workshop",
		location: "Denver, CO",
		isFeatured: true,
		accessType: "internal",
		attendanceType: "in-person",
		internalPath: "/contact?tab=conversion",
	},
	{
		id: "2",
		slug: "founder-scope-sprint-remote-january-2026",
		title: "Founder Scope Sprint",
		date: "2026-01-16",
		time: "11:00 - 12:30",
		description:
			"A live Launch MVP session for startup founders on cutting scope, defining the version-one user flow, and avoiding expensive overbuild before a product launch.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		category: "strategy session",
		location: "Remote",
		isFeatured: true,
		accessType: "internal",
		attendanceType: "webinar",
		internalPath: "/contact?tab=prequalification",
	},
	{
		id: "3",
		slug: "landing-page-conversion-lab-february-2026",
		title: "Landing Page Conversion Lab",
		date: "2026-02-06",
		time: "10:00 - 12:00",
		description:
			"A teardown session focused on launch pages, messaging hierarchy, conversion structure, proof, and CTA systems for teams preparing to validate demand fast.",
		thumbnailImage:
			"https://www.cretech.com/wp-content/uploads/2024/01/Cretech-NYC.png",
		category: "launch lab",
		location: "Hybrid",
		isFeatured: true,
		accessType: "internal",
		attendanceType: "hybrid",
		internalPath: "/pricing?view=monthly",
	},
	{
		id: "4",
		slug: "ai-mvp-architecture-review-december-2025",
		title: "AI MVP Architecture Review",
		date: "2025-12-12",
		time: "13:00 - 14:30",
		description:
			"A technical review session for founders and product teams evaluating the right stack, auth model, analytics plan, and AI workflow architecture before entering a fast build cycle.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		category: "technical review",
		location: "Remote",
		isFeatured: true,
		accessType: "internal",
		attendanceType: "webinar",
		internalPath: "/contact?tab=prequalification",
	},
	{
		id: "5",
		slug: "mobile-app-mvp-planning-day-november-2025",
		title: "Mobile App MVP Planning Day",
		date: "2025-11-14",
		time: "09:30 - 16:00",
		description:
			"An in-person planning intensive covering mobile MVP scoping, onboarding flow priorities, core feature selection, instrumentation, and release sequencing for early-stage app teams.",
		thumbnailImage:
			"https://www.cretech.com/wp-content/uploads/2024/01/Cretech-NYC.png",
		category: "planning day",
		location: "Austin, TX",
		isFeatured: false,
		accessType: "internal",
		attendanceType: "in-person",
		internalPath: "/pricing?view=inPerson",
	},
	{
		id: "6",
		slug: "startup-product-positioning-clinic-october-2025",
		title: "Startup Product Positioning Clinic",
		date: "2025-10-24",
		time: "12:00 - 13:30",
		description:
			"A workshop on refining ICP, offer clarity, landing page narrative, and founder-led sales positioning so new products launch with tighter message-market fit.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		category: "go-to-market",
		location: "New York, NY",
		isFeatured: false,
		accessType: "internal",
		attendanceType: "hybrid",
		internalPath: "/pricing?view=monthly",
	},
	{
		id: "7",
		slug: "founder-demo-day-september-2025",
		title: "Founder Demo Day",
		date: "2025-09-19",
		time: "15:00 - 17:00",
		description:
			"A showcase of recently shipped MVPs with walkthroughs on product decisions, launch tradeoffs, analytics setups, and lessons learned from getting real products in front of users quickly.",
		thumbnailImage:
			"https://www.cretech.com/wp-content/uploads/2024/01/Cretech-NYC.png",
		category: "demo day",
		location: "Denver, CO",
		isFeatured: false,
		accessType: "internal",
		attendanceType: "in-person",
		internalPath: "/events/founder-demo-day-september-2025",
	},
	{
		id: "8",
		slug: "launch-systems-qa-and-handoff-july-2025",
		title: "Launch Systems, QA, and Handoff",
		date: "2025-07-25",
		time: "10:00 - 11:30",
		description:
			"A post-build operations session focused on QA checklists, deployment readiness, analytics verification, and handing product systems back to founders without creating cleanup work.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		category: "operations",
		location: "Remote",
		isFeatured: false,
		accessType: "internal",
		attendanceType: "webinar",
		internalPath: "/contact?tab=prequalification",
	},
];

export const getUpcomingEvents = (): Event[] => {
	return events
		.filter((event) => new Date(event.date) >= currentDate)
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastEvents = (): Event[] => {
	return events
		.filter((event) => new Date(event.date) < currentDate)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const eventCategories = [
	{ id: "all", name: "All Events" },
	...Array.from(new Set(events.map((event) => event.category))).map(
		(category) => ({
			id: category,
			name: `${category.charAt(0).toUpperCase() + category.slice(1)}s`,
		}),
	),
];
