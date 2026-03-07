import appointmentSetting from "@/assets/animations/appointment_setting.json";
import dealScaleOutcome from "@/assets/animations/deal_scale_outcome.json";
import launchLoading from "@/assets/animations/launchLoading.json";
import marketAnalysis from "@/assets/animations/market_analysis.json";
import voiceWave from "@/assets/animations/voice_wave_lottie.json";
import { Badge } from "@/components/ui/badge";
import type { BentoFeature } from "@/types/bento/features";
import Lottie from "lottie-react";
import {
	CalendarCheck,
	Clock,
	Code,
	DatabaseZap,
	Download,
	Globe,
	PlaneTakeoff,
} from "lucide-react";

const chipClassName =
	"mt-6 w-fit rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground backdrop-blur-sm";

const layout = {
	startOne: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	startTwo: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
	startThree: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	startFour: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	startFive: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
} as const;

export const MainBentoFeatures: BentoFeature[] = [
	{
		title: "Get clarity in one focused workshop",
		description: "Align scope, stack, and launch plan fast.",
		icon: <PlaneTakeoff className="h-6 w-6 text-accent" />,
		className: layout.startOne,
		background: (
			<Lottie
				animationData={launchLoading}
				className="h-36 w-36 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Define the real version one
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Cut the scope before the build drifts
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					We turn a rough product idea into a launchable MVP plan by defining
					the must-have workflow, edge cases worth ignoring, and the stack
					needed to ship credibly.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					Scope locked before build starts
				</Badge>
			</div>
		),
	},
	{
		title: "Build without planning drag",
		description: "Ship the core workflow, not a bloated backlog.",
		icon: <Clock className="h-6 w-6 text-accent" />,
		className: layout.startTwo,
		background: (
			<Lottie
				animationData={dealScaleOutcome}
				className="h-44 w-44 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						3-day execution with real momentum
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Keep engineering focused on the launch path
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					We move from design direction into implementation quickly, handling
					core systems, UI flow, launch blockers, and delivery sequencing inside
					one tight workshop and build sprint.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					Fast build, less thrash
				</Badge>
			</div>
		),
	},
	{
		title: "Launch-ready integrations",
		description: "Wire the systems that matter from day one.",
		icon: <Download className="h-6 w-6 text-accent" />,
		className: layout.startThree,
		background: (
			<Lottie
				animationData={appointmentSetting}
				className="h-36 w-36 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Integrations included where they create leverage
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Auth, billing, analytics, CRM, and AI workflows
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					We connect the launch-critical systems so the MVP behaves like a real
					product from the start, not a demo that needs to be rebuilt once users
					show up.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					Launch stack wired
				</Badge>
			</div>
		),
	},
	{
		title: "Stay lean on version one",
		description: "Keep complexity out until the product earns it.",
		icon: <DatabaseZap className="h-6 w-6 text-accent" />,
		className: layout.startFive,
		background: (
			<Lottie
				animationData={marketAnalysis}
				className="h-36 w-36 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Build only what launch requires
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Avoid feature debt before users respond
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					We prioritize the one workflow that proves the product, push
					everything else to the roadmap, and keep the first release small
					enough to launch and learn from quickly.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					Less scope, better odds of launch
				</Badge>
			</div>
		),
	},
	{
		title: "From idea to usable MVP",
		description: "One workshop covering product, design, build, and handoff.",
		icon: <Globe className="h-6 w-6 text-accent" />,
		className: layout.startFour,
		background: (
			<Lottie
				animationData={voiceWave}
				className="h-40 w-40 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 p-4 text-left text-foreground shadow-[0_24px_60px_-38px_rgba(99,102,241,0.45)] backdrop-blur-md sm:p-6">
				<div className="space-y-1">
					<p className="font-semibold text-accent text-xs uppercase tracking-wide [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Launch MVP System
					</p>
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Three days to something real
					</h3>
				</div>
				<div className="space-y-3 text-sm text-white/90">
					<p className="font-medium text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Scope, UX direction, production-ready engineering, integrations,
						analytics, QA, and handoff stay connected so founders can keep
						momentum without losing clarity.
					</p>
					<p className="[text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						The outcome is not just a demo. It is a usable MVP, a cleaner repo,
						clear delivery notes, and a post-launch roadmap the team can extend.
					</p>
				</div>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-primary/20 px-3 py-1 font-semibold text-primary-foreground text-xs backdrop-blur-sm"
				>
					Strategy, build, and handoff in one flow
				</Badge>
			</div>
		),
	},
];
