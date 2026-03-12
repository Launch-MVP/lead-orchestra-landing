import Header from "../common/Header";

const values = [
	{
		title: "Cut To The Core",
		description:
			"We reduce version one to the smallest product that can actually teach the team something useful.",
	},
	{
		title: "Ship With Structure",
		description:
			"Speed matters, but only if the code, handoff, and launch path are still usable after the sprint ends.",
	},
	{
		title: "Prefer Signal Over Theater",
		description:
			"We do not optimize for flashy prototypes. We optimize for real launches, clean decisions, and usable customer feedback.",
	},
	{
		title: "Leave Teams With Leverage",
		description:
			"Every engagement should end with more clarity, cleaner systems, and a next step the founder can actually execute.",
	},
];

export default function AboutValues() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<Header
					title="Our Values"
					subtitle="The operating principles behind how Pilot Spring scopes, builds, and hands off product work."
					className="mb-12 md:mb-16"
				/>
				<div className="grid gap-6 md:grid-cols-2">
					{values.map((value) => (
						<div
							key={value.title}
							className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur"
						>
							<h3 className="font-semibold text-foreground text-xl">
								{value.title}
							</h3>
							<p className="mt-3 text-muted-foreground leading-relaxed">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
