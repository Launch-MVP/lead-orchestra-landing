import { defineAbTests } from "./copy";

export const documentTemplatePackABTests = defineAbTests([
	{
		id: "ab-test-doc-pack-v1",
		name: "Document Template Pack Copy Test",
		description:
			"Testing copy variants (Speed vs. Security) for the Document Template Pack to optimize for downloads.",
		variants: [
			{
				name: "V1 - Speed & Efficiency",
				percentage: 50,
				copy: {
					cta: "Get Your Templates Now",
					buttonCta: "Instant Download",
					tagline: "Stop Drafting. Start Closing.",
					subtitle:
						"Get instant access to all the real estate contracts and letters you need to close deals faster.",
					whatsInItForMe:
						"This saves you hours of frustrating guesswork and expensive legal fees. Use professional-grade documents immediately.",
					target_audience:
						"Investors and agents who need to create legally-sound documents without delays.",
					pain_point:
						"Creating contracts from scratch is slow, risky, and a major bottleneck to closing a deal.",
					fear: "Every day you wait for a lawyer-drafted contract is a day a motivated seller signs with someone else.",
					hope: "You can pull the exact document you need in seconds and stay in control of every negotiation.",
					solution:
						"Our template pack provides instant access to a complete set of customizable documents, letting you secure deals in minutes, not days.",
					highlights: [
						"Close deals faster",
						"Save on legal fees",
						"Fully customizable templates",
					],
				},
			},
			{
				name: "V2 - Professional & Secure",
				percentage: 50,
				copy: {
					cta: "Secure Your Deals Today",
					buttonCta: "Get Protected",
					tagline: "Close Deals with Confidence.",
					subtitle:
						"Use our complete set of real estate contracts to look professional and protect your interests in every transaction.",
					whatsInItForMe:
						"This ensures you look credible and are legally protected, giving you peace of mind in every deal you make.",
					target_audience:
						"Investors who want to ensure they are legally protected and look professional to sellers and partners.",
					pain_point:
						"Using unprofessional or incomplete documents undermines your credibility and exposes you to unnecessary legal risks.",
					fear: "One missing clause can tank a deal or spark a lawsuit that erases your profit.",
					hope: "You walk into every signing with airtight paperwork that earns instant trust.",
					solution:
						"Our comprehensive template pack ensures you have the right, professional document for every situation, safeguarding your business.",
					highlights: [
						"Protect your business",
						"Look credible & professional",
						"Includes all essential contracts",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Essentials", "Digital Product", "Copywriting", "Contracts"],
	},
]);

export const investorPlaybookABTests = defineAbTests([
	{
		id: "ab-test-investor-book-v1",
		name: "Investor's Playbook Copy Test",
		description:
			"Testing copy variants (Actionable Strategy vs. Expert Knowledge) for the Investor's Playbook to optimize sales.",
		variants: [
			{
				name: "V1 - Actionable Strategy",
				percentage: 50,
				copy: {
					cta: "Get the Playbook",
					buttonCta: "Get My Copy",
					tagline: "Your Roadmap to More Deals.",
					subtitle:
						"Actionable strategies, checklists, and scripts to guide your next investment from start to finish.",
					whatsInItForMe:
						"This isn't just theory. It's a hands-on guide with checklists and scripts you can use today to find and close deals.",
					target_audience:
						"Investors looking for a practical, step-by-step guide to execute their deals.",
					pain_point:
						"It's easy to get stuck or make a costly mistake without a clear, repeatable process to follow.",
					solution:
						"This playbook provides a proven framework with actionable steps, helping you navigate every stage of a deal with confidence.",
					highlights: [
						"Step-by-step checklists",
						"Ready-to-use scripts",
						"Avoid costly mistakes",
					],
				},
			},
			{
				name: "V2 - Expert Knowledge",
				percentage: 50,
				copy: {
					cta: "Gain a Professional Edge",
					buttonCta: "Order Now",
					tagline: "Invest Like an Expert.",
					subtitle:
						"The essential hardcover guide to mastering the strategies that successful real estate investors use every day.",
					whatsInItForMe:
						"You get the condensed knowledge of expert investors in one place, giving you an unfair advantage in the market.",
					target_audience:
						"Investors who want to deepen their knowledge and adopt proven strategies from top performers.",
					pain_point:
						"Learning through trial and error in real estate is incredibly expensive and slow.",
					solution:
						"This book fast-tracks your learning curve by providing proven strategies and insights, saving you from common pitfalls.",
					highlights: [
						"Master proven strategies",
						"Gain a competitive edge",
						"Shorten your learning curve",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Essentials", "Physical Product", "Education", "Copywriting"],
	},
]);

export const escrowServiceKitABTests = defineAbTests([
	{
		id: "ab-test-escrow-kit-v1",
		name: "Escrow Service Kit Copy Test",
		description:
			"Testing copy variants (Control vs. Security) for the Escrow Service Kit to optimize for downloads.",
		variants: [
			{
				name: "V1 - Control & Clarity",
				percentage: 50,
				copy: {
					cta: "Get the Kit",
					buttonCta: "Download Now",
					tagline: "Master Your Closings.",
					subtitle:
						"A complete digital kit with checklists and timelines to manage your escrow process with clarity and control.",
					whatsInItForMe:
						"This kit demystifies the escrow process, giving you a clear path to follow so you never miss a critical deadline or step.",
					target_audience:
						"Investors who manage their own closings and want a clear, repeatable process.",
					pain_point:
						"The escrow process is complex and confusing, and one missed step can delay or even kill a deal.",
					solution:
						"Our kit provides a step-by-step checklist and timeline, ensuring you stay organized and in control of the entire transaction.",
					highlights: [
						"Step-by-step checklists",
						"Never miss a deadline",
						"Manage closings with ease",
					],
				},
			},
			{
				name: "V2 - Security & Peace of Mind",
				percentage: 50,
				copy: {
					cta: "Secure Your Transactions",
					buttonCta: "Get the Kit",
					tagline: "Close Every Deal Securely.",
					subtitle:
						"Use our escrow toolkit to ensure every transaction is managed securely and efficiently, protecting your investment.",
					whatsInItForMe:
						"You get peace of mind knowing your transaction is being managed with professional-grade processes.",
					target_audience:
						"Investors who prioritize the security and integrity of their real estate transactions.",
					pain_point:
						"A poorly managed escrow process creates risk and anxiety, jeopardizing your hard-earned investment.",
					solution:
						"This kit provides best practices and clear guidelines to ensure your transaction is handled securely and professionally from start to finish.",
					highlights: [
						"Protect your investment",
						"Ensure smooth closings",
						"Best-practice guidelines",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Essentials", "Digital Product", "Copywriting", "Closing"],
	},
]);

export const brandedDeskMatABTests = defineAbTests([
	{
		id: "ab-test-desk-mat-v1",
		name: "Branded Desk Mat Copy Test",
		description:
			"Testing copy variants (Workspace Upgrade vs. Professional Identity) for the Branded Desk Mat to optimize sales.",
		variants: [
			{
				name: "V1 - Workspace Upgrade",
				percentage: 50,
				copy: {
					cta: "Upgrade Your Desk",
					buttonCta: "Add to Cart",
					tagline: "Your Professional Workspace.",
					subtitle:
						"A premium, non-slip desk mat to protect your workspace and keep you organized.",
					whatsInItForMe:
						"It creates a defined, protected space for your work essentials, reducing clutter and protecting your desk surface.",
					target_audience:
						"Professionals who want a cleaner, more organized, and protected desk.",
					pain_point:
						"A cluttered, scratched desk looks unprofessional and feels chaotic.",
					solution:
						"This large desk mat instantly organizes your workspace and protects it from spills and scratches.",
					highlights: [
						"Protects from scratches",
						"Non-slip surface",
						"Defines your workspace",
					],
				},
			},
			{
				name: "V2 - Professional Identity",
				percentage: 50,
				copy: {
					cta: "Brand Your Office",
					buttonCta: "Get Mine Now",
					tagline: "Look the Part.",
					subtitle:
						"Add a touch of professional Deal Scale branding to your home or office desk.",
					whatsInItForMe:
						"It instantly elevates the look of your office, signaling that you're a serious professional.",
					target_audience:
						"Deal Scale users who want to create a branded, professional office environment.",
					pain_point:
						"Your home office setup doesn't look or feel like a serious place of business.",
					solution:
						"Our branded desk mat provides a simple, stylish way to make your workspace look and feel more professional.",
					highlights: [
						"Elevate your office look",
						"Professional branding",
						"Premium feel",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Essentials", "Physical Product", "Merch", "Copywriting"],
	},
]);

export const ergonomicChairABTests = defineAbTests([
	{
		id: "ab-test-chair-v1",
		name: "Ergonomic Chair Copy Test",
		description:
			"Testing copy variants (Comfort/Productivity vs. Health/Investment) for the Ergonomic Chair to optimize sales.",
		variants: [
			{
				name: "V1 - Comfort & Productivity",
				percentage: 50,
				copy: {
					cta: "Upgrade Your Comfort",
					buttonCta: "Get My Chair",
					tagline: "Work Longer, Feel Better.",
					subtitle:
						"A comfortable, adjustable ergonomic chair designed for hours of productive work without discomfort.",
					whatsInItForMe:
						"This chair's ergonomic support allows you to stay focused on your work for longer periods without the distraction of back pain.",
					target_audience:
						"Professionals who spend long hours at a desk and experience discomfort or fatigue.",
					pain_point:
						"Back pain and discomfort from a bad chair kill your focus and limit how long you can work effectively.",
					solution:
						"Our ergonomic chair provides adjustable support for your body, eliminating pain and enabling longer, more productive work sessions.",
					highlights: [
						"Eliminate back pain",
						"Increase your focus",
						"Work comfortably for hours",
					],
				},
			},
			{
				name: "V2 - Health & Investment",
				percentage: 50,
				copy: {
					cta: "Invest in Your Well-being",
					buttonCta: "Order Now",
					tagline: "Your Foundation for Success.",
					subtitle:
						"Invest in a high-quality ergonomic chair designed for long-term health and productivity.",
					whatsInItForMe:
						"This is an investment in your physical health and ability to perform at your best, day after day.",
					target_audience:
						"Health-conscious professionals who see quality equipment as an investment in their performance.",
					pain_point:
						"A cheap office chair is a short-term fix that leads to long-term health problems and reduced productivity.",
					solution:
						"This chair is a long-term investment in your well-being, providing the physical support needed for a sustainable and successful career.",
					highlights: [
						"A smart investment in health",
						"Designed for career longevity",
						"Maintain peak performance",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Essentials", "Physical Product", "Office", "Copywriting"],
	},
]);

export const smartLampABTests = defineAbTests([
	{
		id: "ab-test-lamp-v1",
		name: "Smart LED Lamp Copy Test",
		description:
			"Testing copy variants (Performance/Focus vs. Modern Workspace) for the Smart LED Lamp to optimize sales.",
		variants: [
			{
				name: "V1 - Performance & Focus",
				percentage: 50,
				copy: {
					cta: "Improve Your Focus",
					buttonCta: "Get the Lamp",
					tagline: "See Clearly. Work Smarter.",
					subtitle:
						"A modern LED desk lamp with adjustable brightness to reduce eye strain during long work sessions.",
					whatsInItForMe:
						"You get perfect, flicker-free lighting that reduces eye fatigue, helping you stay focused and productive for longer.",
					target_audience:
						"People who work late nights or in low-light conditions and suffer from eye strain.",
					pain_point:
						"Poor desk lighting causes eye strain and headaches, cutting your productive hours short.",
					solution:
						"This smart lamp delivers fully adjustable, flicker-free light, creating the optimal environment to protect your eyes and maintain focus.",
					highlights: [
						"Reduce eye strain",
						"Improve late-night focus",
						"Fully adjustable light",
					],
				},
			},
			{
				name: "V2 - Modern Workspace",
				percentage: 50,
				copy: {
					cta: "Modernize Your Desk",
					buttonCta: "Add to Cart",
					tagline: "The Modern Investor's Lamp.",
					subtitle:
						"Upgrade your desk with a sleek, smart LED lamp featuring adjustable color and brightness.",
					whatsInItForMe:
						"It adds a modern, sophisticated touch to your workspace while providing superior, customizable lighting.",
					target_audience:
						"Professionals who want to create a modern, stylish, and functional home office.",
					pain_point:
						"Your old, clunky desk lamp is an eyesore and doesn't provide the right kind of light for different tasks.",
					solution:
						"This sleek, modern lamp not only looks great but offers total control over your lighting, perfecting your workspace ambiance.",
					highlights: [
						"Sleek, modern design",
						"Customizable ambiance",
						"Upgrade your desk's look",
					],
				},
			},
		],
		startDate: new Date("2023-11-01T09:00:00.000Z"),
		isActive: true,
		tags: ["Essentials", "Physical Product", "Office", "Copywriting"],
	},
]);
