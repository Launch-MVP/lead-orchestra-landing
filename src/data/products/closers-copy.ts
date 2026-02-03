import { defineAbTests } from "./copy";

export const virtualAssistantsABTests = defineAbTests([
	{
		id: "ab-test-va-marketplace-v1",
		name: "Virtual Assistants Marketplace Copy Test",
		description:
			"Testing copy variants (Scale vs. Freedom) for the Virtual Assistants Marketplace.",
		variants: [
			{
				name: "V1 - Scale Operations",
				percentage: 50,
				copy: {
					cta: "Hire Vetted VAs",
					buttonCta: "Browse Marketplace",
					tagline: "Scale Your Data Operations Instantly.",
					subtitle:
						"Connect with skilled virtual assistants who specialize in lead processing, CRM management, and scraping workflows.",
					description:
						"Stop doing low-leverage work. Hire vetted VAs who are already trained on Lead Orchestra workflows to handle data entry, list cleaning, and outreach management.",
					whatsInItForMe:
						"You can instantly scale your capacity without the headache of training or managing full-time employees.",
					target_audience:
						"Agencies and investors who need to process more leads than they can handle.",
					pain_point:
						"You are bottlenecked by manual tasks like data cleaning and CRM updates, preventing you from closing deals.",
					fear: "Your pipeline is full of leads that are going cold because you physically can't process them fast enough.",
					hope: "You have a dedicated team handling all the tedious backend work, so you can focus 100% on revenue-generating activities.",
					solution:
						"Our marketplace connects you with VAs who are already experts in our tools, ready to plug into your business immediately.",
					highlights: [
						"Pre-vetted professionals",
						"Specialized in scraping data",
						"No training required",
						"Flexible, on-demand hiring",
					],
					highlighted_words: ["Scale", "Instantly", "Vetted"],
				},
			},
			{
				name: "V2 - Founder Freedom",
				percentage: 50,
				copy: {
					cta: "Reclaim Your Time",
					buttonCta: "Find Help Now",
					tagline: "Stop Being the Bottleneck.",
					subtitle:
						"Delegate your manual data tasks to pros so you can get back to being the CEO.",
					description:
						"Your time is too valuable for data entry. Our marketplace lets you offload the grunt work to skilled assistants who actually enjoy it.",
					whatsInItForMe:
						"You get your life back and can finally focus on strategy and growth instead of being buried in spreadsheets.",
					target_audience: "Overworked founders and solo operators.",
					pain_point:
						"You started a business to have freedom, but now you're working 14-hour days doing repetitive tasks.",
					fear: "You will burn out and resent your business before you ever reach your revenue goals.",
					hope: "You wake up knowing your leads are being processed, emails are being sent, and your business is running without you.",
					solution:
						"We provide the trusted human infrastructure to automate your operations, giving you the freedom to step back.",
					highlights: [
						"Delegate manual tasks",
						"Prevent founder burnout",
						"Focus on strategy",
						"Reliable remote support",
					],
					highlighted_words: ["Delegate", "Freedom", "CEO"],
				},
			},
		],
		startDate: new Date("2024-01-01T00:00:00Z"),
		isActive: true,
		tags: ["Marketplace", "Services", "Virtual Assistants", "Scale"],
	},
]);
