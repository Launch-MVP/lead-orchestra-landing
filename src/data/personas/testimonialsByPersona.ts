import { DEFAULT_PERSONA_KEY } from "@/data/personas/catalog";
import type { PersonaKey } from "@/data/personas/catalog";
import type { Testimonial } from "@/types/testimonial";

export interface PersonaTestimonial extends Testimonial {
	persona: PersonaKey;
}

export const personaTestimonials: Record<PersonaKey, PersonaTestimonial[]> = {
	developer: [
		{
			persona: "developer",
			id: 10,
			name: "Noah Kim",
			role: "CTO, B2B Workflow Startup",
			content:
				"Pilot Spring gave us speed without the usual prototype debt. They scoped the core flows, shipped the product, and handed over a codebase my team was comfortable extending immediately.",
			problem:
				"We had product clarity but kept losing time to setup work, architecture decisions, and a bloated feature list. Shipping fast without creating a rewrite was the hard part.",
			solution:
				"Pilot Spring cut the scope to the real user path, wired the core systems, and delivered a clean implementation with documentation and handoff. We launched faster and kept engineering standards intact.",
			rating: 5,
			company: "B2B Workflow Startup",
		},
		{
			persona: "developer",
			id: 11,
			name: "Eli Navarro",
			role: "Founding Engineer, Vertical SaaS",
			content:
				"Most shops say they move fast, but they usually hand you cleanup work. Pilot Spring shipped something we could actually build on. The architecture, auth flow, billing, and analytics were all thought through.",
			problem:
				"Our backlog was full of foundational work that was blocking user testing. We needed help shipping the MVP without inheriting a fragile codebase.",
			solution:
				"They handled the scoping, priority decisions, and initial build so our team could focus on iteration instead of setup. That removed weeks of drift.",
			rating: 5,
			company: "Vertical SaaS",
		},
	],
	agency: [
		{
			persona: "agency",
			id: 12,
			name: "Ariana Brooks",
			role: "Founder, Operations Software Startup",
			content:
				"I came in with loose notes, a few screenshots, and a strong opinion about the problem. Three days later we had a usable MVP, Stripe connected, analytics live, and a much clearer roadmap.",
			problem:
				"I did not have a technical cofounder or the bandwidth to manage a full freelance team. Every proposal I got was vague about what would actually be delivered.",
			solution:
				"Pilot Spring turned the idea into a defined build, kept the sprint focused, and shipped the parts that mattered for launch instead of burying us in optional features.",
			rating: 5,
			company: "Operations Software Startup",
		},
		{
			persona: "agency",
			id: 13,
			name: "Maya Torres",
			role: "Founder, Niche B2B Platform",
			content:
				"The biggest win was clarity. They forced the right product decisions early, showed me what fit into the first launch, and avoided the usual endless revision loop.",
			problem:
				"I kept expanding the feature list because I did not know what the first version should really include. That was killing momentum.",
			solution:
				"The Workshop narrowed the product to one strong workflow, got it into users' hands quickly, and left me with a roadmap I could actually prioritize.",
			rating: 5,
			company: "Niche B2B Platform",
		},
	],
	startup: [
		{
			persona: "startup",
			id: 14,
			name: "Riley Davis",
			role: "CEO, Seed-Stage SaaS Startup",
			content:
				"We moved from concept deck to working product in 3 days. It was the first time our team could put the idea in front of users without caveating every screen.",
			problem:
				"We were stuck between discovery and delivery. The concept was solid, but we were losing time debating features, flows, and what counted as version one.",
			solution:
				"Pilot Spring handled the scope cut, build plan, and implementation so we could get real product feedback instead of continuing to speculate.",
			rating: 5,
			company: "Seed-Stage SaaS Startup",
		},
		{
			persona: "startup",
			id: 15,
			name: "Casey Martinez",
			role: "COO, Workflow Automation Startup",
			content:
				"The best part was that it felt like a launch partner, not a dev vendor. They cared about what the product needed to prove, not just what could be built.",
			problem:
				"Our MVP kept slipping because every conversation turned into a bigger roadmap. We needed discipline and execution at the same time.",
			solution:
				"The Workshop forced the right tradeoffs, shipped the core workflow, and gave us something credible to demo, sell, and learn from immediately.",
			rating: 5,
			company: "Workflow Automation Startup",
		},
	],
	enterprise: [
		{
			persona: "enterprise",
			id: 16,
			name: "Morgan Lee",
			role: "Director of Innovation, Enterprise SaaS",
			content:
				"We needed a fast pilot without dragging the core product team into another side project. Pilot Spring gave us a usable prototype, analytics, and a clear decision point for what should be funded next.",
			problem:
				"New product bets were dying in planning because internal teams were fully allocated. We needed a focused pilot that could be evaluated quickly.",
			solution:
				"They scoped the pilot correctly, integrated with the systems that mattered, and delivered something stakeholders could actually use instead of another concept deck.",
			rating: 5,
			company: "Enterprise SaaS",
		},
		{
			persona: "enterprise",
			id: 17,
			name: "Drew Anderson",
			role: "Product Strategy Lead, Internal Venture Studio",
			content:
				"The engagement was tight, executive-friendly, and unusually practical. We got a working MVP, a cleaner roadmap, and enough evidence to decide whether the concept deserved full internal investment.",
			problem:
				"We had strong internal interest but no appetite for a six-month discovery process. The risk was spending too long debating a product nobody had used.",
			solution:
				"Pilot Spring turned the concept into a pilot fast enough for stakeholder review and structured the next steps so internal teams could take over intelligently.",
			rating: 5,
			company: "Internal Venture Studio",
		},
	],
	investor: [],
	wholesaler: [],
	agent: [],
	founder: [],
	loan_officer: [],
};

export const getTestimonialsForPersona = (
	persona: PersonaKey,
): PersonaTestimonial[] =>
	personaTestimonials[persona]?.length
		? personaTestimonials[persona]
		: personaTestimonials[DEFAULT_PERSONA_KEY];

export const findFirstPersonaTestimonial = (): PersonaTestimonial =>
	personaTestimonials[DEFAULT_PERSONA_KEY][0];
