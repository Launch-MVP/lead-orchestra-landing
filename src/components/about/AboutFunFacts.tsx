// * Magic UI: NumberTicker, AnimatedCircularProgressBar
// ! Fun facts or stats section
import { NumberTicker } from "@/components/magicui/number-ticker";
import React from "react";
import { v4 as uuid } from "uuid";
export type FunFact = { value: number; label: string; unit?: string };

interface AboutFunFactsProps {
	facts?: FunFact[];
}

export default function AboutFunFacts({
	facts = [
		{
			value: 3,
			label: "Days to a focused MVP workshop",
		},
		{
			value: 12,
			label: "Launch-critical requirements prioritized",
			unit: "+",
		},
		{
			value: 15,
			label: "Founder hours reclaimed before build starts",
			unit: "+",
		},
		{
			value: 25,
			label: "Potential rebuild cost avoided through tighter scope",
			unit: "k",
		},
	],
}: AboutFunFactsProps) {
	return (
		<section className="py-8">
			<div className="mx-auto max-w-4xl px-4 text-center md:max-w-6xl">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{facts.map((fact) => (
						<div
							className="flex flex-col items-center"
							key={fact.label + uuid()}
						>
							<div className="font-bold text-4xl tracking-tighter sm:text-5xl md:text-6xl">
								<NumberTicker value={fact.value} />
								{fact.unit && <span>{fact.unit}</span>}
							</div>
							<span className="mt-2 max-w-[150px] text-muted-foreground text-sm sm:text-base">
								{fact.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
