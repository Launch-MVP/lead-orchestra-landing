"use client";

import Header from "@/components/common/Header";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import { useState } from "react";

const INSTAGRAM_PROFILE_URL =
	"https://www.instagram.com/deal_scale/?utm_source=ig_embed&utm_campaign=loading";
const INSTAGRAM_EMBED_URL =
	"https://www.instagram.com/deal_scale/embed/?utm_source=ig_embed&utm_campaign=loading&include_footer=false";

type InstagramEmbedProps = {
	className?: string;
};

const InstagramEmbed = ({ className }: InstagramEmbedProps) => {
	const { resolvedTheme, theme } = useTheme();
	const isDark = (resolvedTheme || theme) === "dark";
	const [isLoading, setIsLoading] = useState(true);

	return (
		<section className={cn("px-4 py-12 sm:px-6 lg:px-8", className)}>
			<div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
				<Header
					title="Launch MVP in real life"
					subtitle="Watch raw build moments, founder breakthroughs, workshop clips, and behind-the-scenes product sprints from the Launch MVP community. Every post shows how founders and product teams cut scope, ship faster, and turn ideas into real launch-ready products."
					size="lg"
					className="text-center"
				/>
				<div
					className={cn(
						"relative w-full overflow-hidden rounded-3xl border p-4 shadow-2xl backdrop-blur-sm transition",
						isDark
							? "border-white/10 bg-[linear-gradient(145deg,rgba(16,20,24,0.98),rgba(24,30,38,0.94))] shadow-[0_24px_80px_rgba(16,20,24,0.4)]"
							: "border-[hsl(var(--border))] bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(247,247,242,0.94))] shadow-[0_20px_60px_rgba(16,20,24,0.08)]",
					)}
					aria-busy={isLoading}
				>
					<div
						className={cn(
							"pointer-events-none absolute inset-x-0 top-0 h-40",
							isDark
								? "bg-[radial-gradient(circle_at_top_left,rgba(36,144,255,0.2),transparent_55%),radial-gradient(circle_at_top_right,rgba(244,184,70,0.16),transparent_45%)]"
								: "bg-[radial-gradient(circle_at_top_left,rgba(36,144,255,0.12),transparent_55%),radial-gradient(circle_at_top_right,rgba(244,184,70,0.12),transparent_45%)]",
						)}
					/>
					<div
						data-testid="instagram-embed-loading"
						aria-hidden={isLoading ? "false" : "true"}
						className={cn(
							"relative flex w-full items-center justify-center rounded-2xl border border-dashed p-10 transition-all duration-300",
							isDark
								? "border-white/10 bg-white/5"
								: "border-[hsl(var(--border))] bg-white/70",
							isLoading ? "opacity-100" : "pointer-events-none opacity-0",
						)}
					>
						<div
							className={cn(
								"flex flex-col items-center gap-3 text-center text-sm",
								isDark
									? "text-slate-200"
									: "text-[hsl(var(--muted-foreground))]",
							)}
						>
							<div
								className={cn(
									"h-10 w-10 animate-spin rounded-full border-2 border-t-transparent",
									isDark ? "border-white/30" : "border-[hsl(var(--border))]",
								)}
							/>
							<span>Loading the latest Launch MVP posts…</span>
						</div>
					</div>
					<iframe
						title="Launch MVP Instagram feed"
						src={INSTAGRAM_EMBED_URL}
						className="relative mx-auto min-h-[420px] w-full max-w-3xl rounded-2xl border-0"
						style={{
							border: 0,
							margin: "0 auto",
							maxWidth: "540px",
							minWidth: "280px",
							padding: 0,
							overflow: "hidden",
							borderRadius: "1.25rem",
							backgroundColor: isDark ? "transparent" : "transparent",
							colorScheme: isDark ? "dark" : "light",
						}}
						loading="lazy"
						onLoad={() => setIsLoading(false)}
						referrerPolicy="no-referrer-when-downgrade"
						allow="encrypted-media"
					/>
					<div
						className={cn(
							"mt-4 text-center font-medium text-sm",
							isDark ? "text-white" : "text-[hsl(var(--foreground))]",
						)}
					>
						If Instagram fails to load,{" "}
						<a
							className={cn(
								"underline transition",
								isDark
									? "hover:text-[hsl(var(--accent))]"
									: "hover:text-[hsl(var(--primary))]",
							)}
							href={INSTAGRAM_PROFILE_URL}
							target="_blank"
							rel="noreferrer noopener"
						>
							open our Instagram feed
						</a>
						.
					</div>
				</div>
			</div>
		</section>
	);
};

export default InstagramEmbed;
