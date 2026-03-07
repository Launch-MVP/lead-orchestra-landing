import { defineAbTests } from "./copy";

export const virtualAssistantsABTests = defineAbTests([
	{
		id: "ab-test-va-marketplace-v1",
		name: "Operator Support Marketplace Copy Test",
		description:
			"Testing copy variants for virtual assistants and launch support operators.",
		variants: [
			{
				name: "V1 - Offload the Repetitive Work",
				percentage: 50,
				copy: {
					cta: "Hire Support Operators",
					buttonCta: "Browse Marketplace",
					tagline: "Get the Busywork Off the Founder Desk.",
					subtitle:
						"Connect with vetted remote assistants who can handle launch admin, research, QA coordination, and operating support.",
					description:
						"Founders should not spend their best hours on repetitive setup, cleanup, and coordination tasks. This marketplace helps teams add flexible operator support without hiring a full in-house team.",
					whatsInItForMe:
						"You buy back focus time while keeping the launch moving across all the tasks that still need human follow-through.",
					target_audience:
						"Founders, agencies, and small teams that need hands-on support without full-time hiring.",
					pain_point:
						"The launch stalls when no one owns the operational details that sit between product decisions and execution.",
					fear: "You stay trapped doing support work that slows your ability to ship, sell, and make better product calls.",
					hope: "The repetitive work gets handled consistently so your time returns to strategy, delivery, and customers.",
					solution:
						"The marketplace connects you with operators who can plug into launch workflows quickly and support the team where it needs relief.",
					highlights: [
						"Flexible remote support",
						"Launch admin coverage",
						"Research and QA help",
						"Less founder overhead",
					],
					highlighted_words: ["Support", "Focus", "Launch"],
				},
			},
			{
				name: "V2 - Build Capacity Without Hiring Fast",
				percentage: 50,
				copy: {
					cta: "Add Launch Capacity",
					buttonCta: "Find Help Now",
					tagline: "Expand the Team Without Expanding Payroll Yet.",
					subtitle:
						"Bring in vetted operator support for launch prep, customer follow-up, and internal execution tasks.",
					description:
						"Not every growing team needs another full-time hire immediately. Sometimes the real need is steady operator support that closes gaps around launch and delivery.",
					whatsInItForMe:
						"You add capacity where the business is currently straining without committing to a larger team structure too early.",
					target_audience:
						"Startup teams and service businesses balancing growth with hiring discipline.",
					pain_point:
						"Important operational work slips because the core team is overloaded and no one has enough time for the details.",
					fear: "Growth creates more drag instead of momentum because the work expands faster than the team can absorb it.",
					hope: "You can increase execution capacity immediately while keeping hiring decisions more deliberate.",
					solution:
						"Remote support operators give you a flexible layer of execution help for launch and day-to-day follow-through.",
					highlights: [
						"Flexible support capacity",
						"Cover operational gaps",
						"Reduce early hiring pressure",
						"Keep delivery moving",
					],
					highlighted_words: ["Capacity", "Execution", "Support"],
				},
			},
		],
		startDate: new Date("2026-03-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Services", "Operator Support"],
	},
]);
