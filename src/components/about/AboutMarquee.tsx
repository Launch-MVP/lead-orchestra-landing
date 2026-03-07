import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Header from "../common/Header";

const reviews = [
	{
		name: "Nadia C.",
		username: "@peridotapp",
		body: "The biggest shift was finally cutting the MVP to the workflow users actually needed. We stopped stalling in planning and had something real to react to.",
		img: "https://avatar.vercel.sh/nadia",
	},
	{
		name: "Marcus H.",
		username: "@booktco",
		body: "We had too many ideas and not enough sequencing. Launch MVP helped us choose the right version one instead of the most ambitious one.",
		img: "https://avatar.vercel.sh/marcush",
	},
	{
		name: "Leah S.",
		username: "@seedfounder",
		body: "The workshop forced decisions we had been postponing for weeks. That alone saved us from building the wrong thing.",
		img: "https://avatar.vercel.sh/leah",
	},
	{
		name: "Devon K.",
		username: "@devfounder",
		body: "I expected a prototype. What we got was a clearer product path and a handoff I could actually keep working from.",
		img: "https://avatar.vercel.sh/devon",
	},
	{
		name: "Mina J.",
		username: "@buildwithmina",
		body: "The app and landing page finally told the same story. Before that, the product and the positioning felt disconnected.",
		img: "https://avatar.vercel.sh/mina",
	},
	{
		name: "Andre P.",
		username: "@startupops",
		body: "Post-launch support mattered more than I expected. Small cleanup decisions kept the MVP from turning into immediate technical debt.",
		img: "https://avatar.vercel.sh/andre",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-64 overflow-hidden rounded-xl border p-4",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="font-medium text-sm dark:text-white">
						{name}
					</figcaption>
					<p className="font-medium text-xs dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Header
				title="Founder Notes From Recent Launches"
				subtitle="A few reflections from teams that needed clearer scope, faster execution, and a cleaner version-one path."
			/>
			<Marquee pauseOnHover duration="20s" repeat={8}>
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover duration="20s" repeat={8}>
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
		</div>
	);
}
