import Link from "next/link";
import { ThankYouTrackingClient } from "./ThankYouTrackingClient";
import { ScheduleCountdown } from "./ScheduleCountdown";

export const metadata = {
	title: "Thank You | Deal Scale",
	description:
		"Thank you for submitting your application. We will review your details and contact you by email if accepted.",
};

const CONSULTATION_URL = "https://calendar.notion.so/meet/cyberoni/em2w42l93";

export default function ContactThankYouPage() {
	return (
		<main className="container mx-auto mt-16 max-w-3xl px-6 py-20 md:mt-24">
			<ThankYouTrackingClient />
			<section className="rounded-2xl border border-primary/30 bg-gradient-to-br from-white via-background to-primary-50 p-8 text-center shadow-xl ring-1 ring-primary/10 dark:from-background dark:via-background-dark dark:to-primary/10">
				<p className="mb-3 font-semibold text-primary text-sm uppercase tracking-wide">
					Submission Received
				</p>
				<h1 className="mb-4 font-bold text-3xl text-black dark:text-white">
					Thank you for applying
				</h1>
				<p className="mx-auto mb-8 max-w-xl text-muted-foreground">
					We have your submission. If you are accepted, we will email you next
					steps and onboarding details.
				</p>
				<div className="flex flex-col justify-center gap-3 sm:flex-row">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-medium text-white transition-opacity hover:opacity-90"
					>
						Back to Home
					</Link>
					<a
						href={CONSULTATION_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-5 py-3 font-medium text-foreground transition-colors hover:bg-primary/5 shadow-sm"
					>
						Schedule Consultation
					</a>
				</div>

				<ScheduleCountdown url={CONSULTATION_URL} />
			</section>
		</main>
	);
}
