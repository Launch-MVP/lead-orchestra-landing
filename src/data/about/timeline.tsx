import type { TimelineEntry } from "@/components/ui/timeline";
import { timelineSummary } from "./timelineSummary";

const cardClass =
	"space-y-4 rounded-xl border border-border/40 bg-background/70 p-6 text-sm leading-relaxed text-muted-foreground shadow-sm backdrop-blur";

export const timeline: TimelineEntry[] = [
	{
		title: timelineSummary[0].title,
		subtitle: timelineSummary[0].subtitle,
		content: (
			<div className={cardClass}>
				<p>
					Founders do not usually fail because they cannot imagine the product.
					They fail because version one stays too broad, too delayed, and too
					detached from a real customer outcome.
				</p>
				<p>
					Launch MVP was built for the stage where the idea is alive, but the
					product still needs pressure-tested scope, cleaner decisions, and a
					faster path to something real.
				</p>
			</div>
		),
	},
	{
		title: timelineSummary[1].title,
		subtitle: timelineSummary[1].subtitle,
		content: (
			<div className={cardClass}>
				<p>
					We help founders choose the right version one, not the loudest one.
					That can mean a free consultation, a paid scoping session, a 3-day
					workshop, a cleanup sprint, or embedded support after launch.
				</p>
				<p>
					The point is not to sell a single fixed package. The point is to
					sequence the right kind of help at the right moment so the product
					keeps moving.
				</p>
			</div>
		),
	},
	{
		title: timelineSummary[2].title,
		subtitle: timelineSummary[2].subtitle,
		content: (
			<div className={cardClass}>
				<p>
					We believe the smallest useful version one is almost always more
					valuable than an ambitious version one that ships late and creates
					immediate cleanup debt.
				</p>
				<div className="grid gap-4 lg:grid-cols-2">
					<div className="rounded-lg bg-muted/20 p-4">
						<h4 className="font-semibold text-foreground text-sm">
							How we prefer to work
						</h4>
						<ul className="mt-2 list-disc space-y-2 pl-4">
							<li>Make product decisions live when possible</li>
							<li>Protect the core user journey first</li>
							<li>Favor clarity over feature count</li>
						</ul>
					</div>
					<div className="rounded-lg bg-primary/5 p-4">
						<h4 className="font-semibold text-foreground text-sm">
							What we try to avoid
						</h4>
						<ul className="mt-2 list-disc space-y-2 pl-4">
							<li>Roadmaps that pretend everything is priority one</li>
							<li>Prototype theater with no launch discipline</li>
							<li>Handing off code nobody wants to maintain</li>
						</ul>
					</div>
				</div>
			</div>
		),
	},
	{
		title: timelineSummary[3].title,
		subtitle: timelineSummary[3].subtitle,
		content: (
			<div className={cardClass}>
				<p>
					A Launch MVP engagement should end with more than a pitch deck or a
					pretty mockup. The work should reduce ambiguity and move the product
					closer to an actual launch.
				</p>
				<ul className="list-disc space-y-2 pl-4">
					<li>Core workflow defined and cut to the right size</li>
					<li>App, landing page, or AI prototype moved into usable form</li>
					<li>Integrations, analytics, and deployment decisions documented</li>
					<li>Code, notes, and roadmap handed off with context</li>
				</ul>
			</div>
		),
	},
	{
		title: timelineSummary[4].title,
		subtitle: timelineSummary[4].subtitle,
		content: (
			<div className={cardClass}>
				<p>
					We do not want founders paying for avoidable confusion. That means we
					push back on unnecessary scope, vague ownership, and product work that
					only looks fast from the outside.
				</p>
				<div className="rounded-lg bg-muted/20 p-4 font-medium text-foreground text-sm">
					<p>No fake velocity.</p>
					<p>No bloated first release.</p>
					<p>No handoff that becomes someone else&apos;s cleanup project.</p>
				</div>
			</div>
		),
	},
	{
		title: timelineSummary[5].title,
		subtitle: timelineSummary[5].subtitle,
		content: (
			<div className={cardClass}>
				<p>
					Launch MVP is evolving into a tighter founder delivery system with
					more workshop paths, better launch assets, and clearer specialist
					support after the initial build.
				</p>
				<p>
					The direction is straightforward: help founders move from product
					uncertainty to usable momentum with less waste between the idea and
					the launch.
				</p>
			</div>
		),
	},
];
