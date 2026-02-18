"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface ScheduleCountdownProps {
	url: string;
	seconds?: number;
}

export function ScheduleCountdown({
	url,
	seconds = 10,
}: ScheduleCountdownProps) {
	const [timeLeft, setTimeLeft] = useState(seconds);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused) return;

		if (timeLeft <= 0) {
			window.open(url, "_blank", "noopener,noreferrer");
			return;
		}

		const timer = setTimeout(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeLeft, url, isPaused]);

	const progress = ((seconds - timeLeft) / seconds) * 100;

	return (
		<div className="mt-6 flex flex-col items-center gap-3">
			<div className="flex items-center gap-2 text-muted-foreground text-sm">
				<p>
					Opening consultation scheduler in{" "}
					<span className="font-bold text-primary">{timeLeft}</span>s...
				</p>
				<button
					type="button"
					onClick={() => setIsPaused(!isPaused)}
					className="text-primary hover:underline"
				>
					{isPaused ? "Resume" : "Pause"}
				</button>
			</div>
			<Progress value={progress} className="h-1.5 w-full max-w-[200px]" />
		</div>
	);
}
