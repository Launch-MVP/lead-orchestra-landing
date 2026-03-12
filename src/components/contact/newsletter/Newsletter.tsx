"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useDataModule } from "@/stores/useDataModuleStore";
import { usePersonaStore } from "@/stores/usePersonaStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Bell, Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

// Persona-specific n8n workflow content
const PERSONA_N8N_CONTENT: Record<
	string,
	{
		title: string;
		description: string;
		features: string[];
	}
> = {
	developer: {
		title: "Pilot Spring Build Systems",
		description:
			"Workflow templates, architecture notes, integration patterns, and launch checklists for developers shipping MVPs with less drag.",
		features: [
			"Launch workflow templates for scoped MVP delivery",
			"Architecture notes for cleaner version-one builds",
			"Integration patterns for auth, payments, and analytics",
			"Handoff checklists for product and engineering teams",
		],
	},
	agency: {
		title: "Pilot Spring Delivery Systems",
		description:
			"Client delivery systems, service packaging ideas, and launch checklists for agencies turning messy scope into shipped outcomes.",
		features: [
			"Client scoping and kickoff templates",
			"Launch checklists and delivery playbooks",
			"Handoff docs for productized services",
			"Reusable ops systems for repeatable client delivery",
		],
	},
	startup: {
		title: "Pilot Spring Build Notes",
		description:
			"Build notes, scope-cut frameworks, launch systems, and founder templates for startups trying to ship a real MVP fast without overbuilding.",
		features: [
			"Scope-cut frameworks for version one",
			"Launch planning and execution templates",
			"Founder operating systems and checklists",
			"Examples for moving from idea to usable product",
		],
	},
	enterprise: {
		title: "Pilot Spring Operating Systems",
		description:
			"Operating frameworks for product teams standardizing launch execution, implementation quality, and AI workflow delivery across the stack.",
		features: [
			"Team-wide implementation frameworks",
			"Security and integration planning patterns",
			"Handoff standards across product and engineering",
			"AI workflow delivery systems for internal teams",
		],
	},
};

export const Newsletter = () => {
	const hasMounted = useHasMounted();
	const { persona } = usePersonaStore();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const {
		status: companyStatus,
		company,
		error: companyError,
	} = useDataModule("company", ({ status, data, error: companyLoadError }) => ({
		status,
		company: data?.companyData,
		error: companyLoadError,
	}));

	// Get persona-specific content
	const n8nContent = useMemo(() => {
		return PERSONA_N8N_CONTENT[persona] || PERSONA_N8N_CONTENT.developer;
	}, [persona]);

	useEffect(() => {
		if (!hasMounted) return;
		// Check for the subscription cookie
		const match = document.cookie.match(/userSubscribedNewsletter=([^;]+)/);
		if (match && match[1] === "true") {
			setIsSubscribed(true);
		}
	}, [hasMounted]);

	const isCompanyLoading =
		companyStatus === "idle" || companyStatus === "loading";
	const isCompanyError = companyStatus === "error";
	const hasPolicyLinks = Boolean(
		company?.privacyPolicyLink && company?.termsOfServiceLink,
	);

	if (isCompanyError) {
		console.error(
			"[Newsletter] Failed to load company policy links",
			companyError,
		);
	}

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data: FormValues) => {
		setIsSubmitting(true);
		setError(null);
		try {
			const response = await fetch("/api/beehiiv/subscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: data.email }),
			});
			const result = await response.json();
			if (!response.ok) {
				setError(result.message || "Subscription failed");
				toast.error(result.message || "Subscription failed");
				return;
			}
			toast.success("Thank you for subscribing to our newsletter!");
			reset();
			setIsSubscribed(true);
			if (hasMounted) {
				document.cookie =
					"userSubscribedNewsletter=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
			}
		} catch (err) {
			setError("An unexpected error occurred");
			toast.error("An unexpected error occurred");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-gradient-to-br from-background-darker to-background-dark/80 px-6 py-16 backdrop-blur-sm md:px-12">
			<div className="mb-10 text-center">
				<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
					<Bell className="h-6 w-6 text-primary" />
				</div>
				<h2 className="mb-4 font-bold text-3xl text-black dark:text-white">
					{n8nContent.title}
				</h2>
				<p className="mx-auto max-w-2xl text-black dark:text-white/70">
					{n8nContent.description} Join the Pilot Spring newsletter for practical
					systems, sharper execution patterns, and founder-ready insights. No
					fluff, just what helps teams ship.
				</p>
			</div>
			{isSubscribed ? (
				<div className="flex flex-col items-center justify-center">
					<Alert className="mt-4 w-full max-w-lg">
						<AlertTitle>Thank you for subscribing!</AlertTitle>
						<AlertDescription>
							You are already subscribed to our newsletter.
						</AlertDescription>
						<div className="mt-4 text-center">
							<button
								className="text-primary text-sm underline transition-colors hover:text-focus"
								onClick={() => {
									setIsSubscribed(false);
									if (hasMounted) {
										document.cookie =
											"userSubscribedNewsletter=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
									}
								}}
								type="button"
							>
								Resubscribe
							</button>
						</div>
					</Alert>
				</div>
			) : (
				<form
					id="lo-intake-form"
					onSubmit={handleSubmit(onSubmit)}
					className="mx-auto max-w-md"
				>
					<div className="flex flex-col gap-3 sm:flex-row">
						<div className="relative flex-grow">
							<Input
								type="email"
								placeholder="Your email address"
								className="h-12 border-white/10 bg-white/5 pr-10 text-black placeholder:text-gray-400 focus:border-primary dark:text-white dark:placeholder:text-white"
								{...register("email")}
							/>
							<Mail className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 transform text-black dark:text-white/70" />
							{errors.email && (
								<p className="mt-1 text-red-500 text-sm dark:text-red-400">
									{errors.email.message}
								</p>
							)}
						</div>
						<Button
							type="submit"
							className="h-12 whitespace-nowrap bg-gradient-to-r from-primary to-focus px-6 text-white transition-opacity hover:opacity-90"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Subscribing..." : "Subscribe"}{" "}
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
					{error && (
						<p className="mt-4 text-center text-red-500 text-sm dark:text-red-400">
							{error}
						</p>
					)}
					<p className="mt-4 text-center text-sm">
						{isCompanyLoading ? (
							<span className="text-muted-foreground">
								Loading policy details…
							</span>
						) : hasPolicyLinks ? (
							<>
								By subscribing, you agree to our{" "}
								<a
									href={company?.privacyPolicyLink}
									className="underline hover:text-primary"
								>
									Privacy Policy
								</a>{" "}
								and{" "}
								<a
									href={company?.termsOfServiceLink}
									className="underline hover:text-primary"
								>
									Terms of Service
								</a>
								.
							</>
						) : (
							<span className="text-muted-foreground">
								Policy links will be available soon.
							</span>
						)}
					</p>
				</form>
			)}
			<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
				{n8nContent.features.slice(0, 3).map((feature, index) => (
					<div
						key={feature}
						className="rounded-xl border-2 border-primary/30 bg-background-dark/20 p-6 text-center shadow-lg shadow-primary/10/10 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
					>
						<h3 className="mb-2 font-medium text-black text-lg text-primary dark:text-primary dark:text-white">
							{feature}
						</h3>
						<p className="text-black text-sm dark:text-white/80">
							{index === 0 &&
								"Reusable systems for launch planning, delivery structure, and getting the MVP into users' hands faster."}
							{index === 1 &&
								"Implementation notes on architecture, integrations, and reducing expensive rebuilds before they happen."}
							{index === 2 &&
								"Step-by-step guidance for scoping, handoff, and running launch systems across the tools your team already uses."}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
