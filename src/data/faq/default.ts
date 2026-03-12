import type { FAQItem } from "@/types/faq";

export const faqItems: FAQItem[] = [
	{
		question: "What is Pilot Spring?",
		answer:
			"Pilot Spring is a productized MVP build service for founders and innovation teams. The core offer is the 3-Day MVP Workshop: we scope the product, define the critical user flow, build the launch version, wire the key integrations, and hand over a production-ready foundation your team can extend.",
	},
	{
		question: "Who is this built for?",
		answer:
			"It is designed for early-stage B2B founders, startup teams, and internal innovation groups that need a real MVP quickly. It is especially useful when you have a clear problem, limited bandwidth, and need help turning rough requirements into a launchable product without overbuilding.",
	},
	{
		question: "What do you actually deliver in 3 days?",
		answer:
			"Typical deliverables include product scoping, core user flows, UI direction, application build, deployment setup, key integrations, analytics instrumentation, QA, and a clean handoff. The exact scope depends on the product, but the focus is always the smallest credible MVP that can be shown, tested, and learned from immediately.",
	},
	{
		question: "Is this no-code, low-code, or custom code?",
		answer:
			"The build approach is pragmatic. If a managed service or low-code tool is the fastest stable choice, we use it. If custom code is the right call for ownership, flexibility, or performance, we build it. The goal is a reliable MVP you can keep, not technology purity for its own sake.",
	},
	{
		question: "Do I own the code and assets?",
		answer:
			"Yes. The engagement is built around clean handoff and ownership. You keep the repo, product decisions, implementation details, and launch documentation so you are not trapped in a black-box relationship after the MVP ships.",
	},
	{
		question:
			"Can you wire integrations like auth, Stripe, analytics, CRM, or AI workflows?",
		answer:
			"Yes. Those are exactly the systems we scope for the MVP. Common integrations include authentication, payments, analytics, email, CRM sync, internal dashboards, and targeted AI workflows that reduce manual steps without overcomplicating the product.",
	},
	{
		question: "What if I only need strategy or scoping first?",
		answer:
			"That is what the MVP Strategy Sprint is for. It is a smaller engagement focused on clarifying the offer, ICP, core workflow, stack recommendation, scope cut, and launch roadmap before you commit to the full build.",
	},
	{
		question: "What if I am non-technical?",
		answer:
			"That is a common fit. We translate the idea into product decisions, make tradeoffs explicit, and keep the delivery focused on the launch version. You do not need to manage engineers or write specs at startup-studio depth for the process to work.",
	},
	{
		question: "How much does it cost?",
		answer:
			"The current core offers are a $500 MVP Strategy Sprint, a $12,500 3-Day MVP Workshop, and optional post-launch support starting at $2,500 per month. The actual recommendation depends on how much definition already exists and how much launch support you need after handoff.",
	},
	{
		question: "What happens if the requested scope is too large for 3 days?",
		answer:
			"We cut the scope aggressively to the launch-critical workflow. If the idea is too large, we define the version that should ship first, identify what gets deferred, and turn the rest into a sequenced roadmap. The discipline is part of the service.",
	},
	{
		question: "Do you help after launch?",
		answer:
			"Yes. Managed Launch Support covers iteration, bug fixes, small enhancements, launch feedback loops, and prioritization support after the initial MVP ships. It is designed for teams that need momentum after release without hiring immediately.",
	},
	{
		question:
			"Can you work with an existing design, codebase, or internal team?",
		answer:
			"Yes, if the existing work is solid enough to build on responsibly. We assess what should be reused, what should be tightened, and what should be excluded from the sprint so delivery stays clean and realistic.",
	},
	{
		question:
			"Do you support investor demos, discovery calls, or launch materials?",
		answer:
			"Yes. We can shape the MVP and supporting materials around customer conversations, investor demos, pilot rollouts, or internal stakeholder review. The point is not just to ship software, but to give you a product you can use to move the business forward.",
	},
	{
		question: "How do we start?",
		answer:
			"Start with a consult or the Strategy Sprint. We review the product idea, target user, business goal, timeline, and technical constraints, then recommend the smallest launchable version and whether the full Workshop is the right next step.",
	},
];
