"use client";

import IntakeForm from "@/components/contact/form/IntakeForm";
import type { IntakeFormValues } from "@/data/contact/intakeFormFields";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import Header from "@/components/common/Header";
import {
	getAttributionFieldsFromUrl,
	resolveReferralFromUrlOrState,
	resolveUtmIcpFromUrlOrState,
} from "@/components/contact/form/attributionFields";
import {
	createFieldProps,
	renderFormField,
} from "@/components/contact/form/formFieldHelpers";
import PricingCheckoutDialog from "@/components/home/pricing/PricingCheckoutDialog";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	type QuickApplyValues,
	denverWorkshopTierMap,
	quickApplyFields,
	quickApplySchema,
} from "@/data/contact/conversionFormFields";
import { trackMetaServerEvent } from "@/lib/analytics/meta-events-client";
import type { FieldConfig } from "@/types/contact/formFields";
import type { Plan } from "@/types/service/plans";
import {
	generateMetaEventId,
	trackIntakeFormStart,
	trackIntakeFormSubmit,
} from "@/utils/seo/fbpixel";

export interface ConversionFormProps {
	/** Called when the free-slot upsell becomes visible/hidden so the parent can hide the standalone tab. */
	onUpsellActive?: (active: boolean) => void;
}

export default function ConversionForm({
	onUpsellActive,
}: ConversionFormProps = {}) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasStarted, setHasStarted] = useState(false);
	const [checkoutState, setCheckoutState] = useState<{
		clientSecret: string;
		plan: Plan;
	} | null>(null);
	// --- Free Slot upsell state ---
	const [showFreeSlotPrompt, setShowFreeSlotPrompt] = useState(false);
	const [showFreeSlotForm, setShowFreeSlotForm] = useState(false);
	const [depositFormData, setDepositFormData] =
		useState<QuickApplyValues | null>(null);

	// Notify parent when upsell is active so it can hide the free-slot tab
	useEffect(() => {
		onUpsellActive?.(showFreeSlotPrompt || showFreeSlotForm);
	}, [showFreeSlotPrompt, showFreeSlotForm, onUpsellActive]);

	// ── Test mode: ?testDeposit=true skips Stripe and jumps to upsell ──
	const isTestDeposit = searchParams?.get("testDeposit") === "true";

	const form = useForm<QuickApplyValues>({
		resolver: zodResolver(quickApplySchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			companyName: "",
			website: "",
			selectedTier: "in-person-mvp-build",
			projectSummary: "",
		},
		mode: "onBlur",
	});

	const { handleSubmit } = form;

	useEffect(() => {
		const referral = resolveReferralFromUrlOrState(window.location.href);
		if (referral) {
			form.setValue("referralSource" as keyof QuickApplyValues, referral);
		}
	}, [form]);

	/** Called when Stripe payment succeeds inline (no redirect). */
	const handlePaymentSuccess = useCallback(() => {
		const data = form.getValues();
		setDepositFormData(data);
		setCheckoutState(null);
		setShowFreeSlotPrompt(true);
	}, [form]);

	/** Map deposit answers → IntakeForm defaults to avoid duplicate questions. */
	const intakePrefill = useMemo<Partial<IntakeFormValues>>(() => {
		if (!depositFormData) return {};
		return {
			name: depositFormData.name,
			companyName: depositFormData.companyName,
			email: depositFormData.email,
			phone: depositFormData.phone,
			website: depositFormData.website,
			productSummary: depositFormData.projectSummary,
			referralSource: depositFormData.referralSource,
		} as Partial<IntakeFormValues>;
	}, [depositFormData]);

	const selectedTierValue = form.watch("selectedTier");
	const selectedTier =
		denverWorkshopTierMap[selectedTierValue] ??
		denverWorkshopTierMap["in-person-mvp-build"];
	const remainingBalance = selectedTier.totalPrice - selectedTier.depositAmount;
	const depositPlan = useMemo<Plan>(
		() => ({
			id: `${selectedTier.value}-deposit`,
			name: `${selectedTier.label} Deposit`,
			price: {
				monthly: { amount: 0, description: "", features: [] },
				annual: { amount: 0, description: "", features: [] },
				oneTime: {
					amount: selectedTier.depositAmount,
					description: "10% seat-hold deposit",
					features: [
						`Workshop tier: ${selectedTier.label}`,
						`Full workshop total: $${selectedTier.totalPrice.toLocaleString()}`,
						`Deposit due today: $${selectedTier.depositAmount.toLocaleString()}`,
						`Remaining balance before kickoff: $${remainingBalance.toLocaleString()}`,
						"Deposit reserves your Denver seat while final scheduling is confirmed.",
					],
				},
			},
			cta: { text: "Reserve Seat", type: "checkout" },
		}),
		[remainingBalance, selectedTier],
	);

	const handleFormInteraction = () => {
		if (!hasStarted) {
			setHasStarted(true);
			// Track "StartApplication" (CAPI + Pixel)
			// Client-side custom event
			trackIntakeFormStart();
			// Server-side CAPI event
			void trackMetaServerEvent({
				eventName: "StartApplication",
				eventId: generateMetaEventId(),
				eventSourceUrl: window.location.href,
			});
		}
	};

	const onSubmit = async (data: QuickApplyValues) => {
		setIsSubmitting(true);
		try {
			const metaEventId = generateMetaEventId();
			const attribution = getAttributionFieldsFromUrl(window.location.href);
			const utmIcp = resolveUtmIcpFromUrlOrState(
				window.location.href,
				data.selectedTier,
			);

			const tier = denverWorkshopTierMap[data.selectedTier];
			const captureResponse = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					phone: data.phone,
					companyName: data.companyName,
					landingPage: window.location.href,
					selectedService: `${tier.label} Denver workshop deposit`,
					message: [
						`Selected tier: ${tier.label}`,
						`Discounted total: $${tier.totalPrice.toLocaleString()}`,
						`Seat-hold deposit: $${tier.depositAmount.toLocaleString()}`,
						`Website: ${data.website}`,
						`Project summary: ${data.projectSummary}`,
					].join("\n"),
					metaEventId,
					eventSourceUrl: window.location.href,
					utm_icp: utmIcp,
					...attribution,
				}),
			});

			if (!captureResponse.ok) {
				const errorData = await captureResponse.json().catch(() => ({}));
				throw new Error(errorData.error || "Failed to capture reservation");
			}

			const intentResponse = await fetch("/api/stripe/intent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					price: tier.depositAmount * 100,
					description: `${tier.label} Denver workshop seat deposit`,
					metadata: {
						planId: `${tier.value}-deposit`,
						planName: `${tier.label} Deposit`,
						planType: "oneTime",
						workshopTier: tier.value,
						workshopTotal: String(tier.totalPrice),
						depositAmount: String(tier.depositAmount),
						customerEmail: data.email,
						customerName: data.name,
					},
				}),
			});

			if (!intentResponse.ok) {
				const errorData = await intentResponse.json().catch(() => ({}));
				throw new Error(errorData.error || "Failed to initialize checkout");
			}

			const { clientSecret } = (await intentResponse.json()) as {
				clientSecret?: string;
			};

			if (!clientSecret) {
				throw new Error("Checkout is unavailable right now.");
			}

			trackIntakeFormSubmit({
				businessType: [tier.label],
				monthlyBudget: `$${tier.totalPrice.toLocaleString()}`,
				eventId: metaEventId,
			});

			setCheckoutState({
				clientSecret,
				plan: {
					...depositPlan,
					name: `${tier.label} Deposit`,
					id: `${tier.value}-deposit`,
					price: {
						...depositPlan.price,
						oneTime: {
							...depositPlan.price.oneTime,
							amount: tier.depositAmount,
							features: [
								`Workshop tier: ${tier.label}`,
								`Full workshop total: $${tier.totalPrice.toLocaleString()}`,
								`Deposit due today: $${tier.depositAmount.toLocaleString()}`,
								`Remaining balance before kickoff: $${(
									tier.totalPrice - tier.depositAmount
								).toLocaleString()}`,
								"Deposit reserves your Denver seat while final scheduling is confirmed.",
							],
						},
					},
				},
			});
		} catch (err) {
			console.error("Submission failed:", err);
			toast.error("Submission failed. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	// ──────────────── FREE SLOT FORM (pre-filled) ────────────────
	if (showFreeSlotForm) {
		return <IntakeForm prefilledData={intakePrefill} fromDeposit />;
	}

	// ──────────────── DEPOSIT FORM (default) ────────────────
	return (
		<div className="relative mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-gradient-to-br from-white via-background to-primary-50 p-6 shadow-xl ring-1 ring-primary/10 transition-all sm:p-10 dark:bg-gradient-to-br dark:from-background dark:via-background-dark dark:to-primary/10">
			<div className="-z-10 absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-focus/10 opacity-60 blur-lg dark:from-primary/30 dark:to-focus/20" />

			<Header
				title="Denver Workshop Deposit"
				subtitle="Choose your in-person Denver workshop tier and place the 10% deposit to hold your seat."
				size="sm"
				className="mb-8 text-center"
			/>

			<FormProvider {...form}>
				<Form {...form}>
					<form
						id="lo-intake-form"
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6"
						onFocusCapture={handleFormInteraction}
					>
						<div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-left">
							<p className="font-semibold text-foreground text-sm">
								Selected tier
							</p>
							<p className="mt-1 font-semibold text-lg text-primary">
								{selectedTier.label}
							</p>
							<p className="mt-1 text-muted-foreground text-sm">
								{selectedTier.description}
							</p>
							<div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
								<div className="rounded-xl bg-background/80 p-3">
									<p className="text-muted-foreground text-xs uppercase tracking-wide">
										Workshop Total
									</p>
									<p className="font-semibold text-foreground">
										${selectedTier.totalPrice.toLocaleString()}
									</p>
								</div>
								<div className="rounded-xl bg-background/80 p-3">
									<p className="text-muted-foreground text-xs uppercase tracking-wide">
										Deposit Due
									</p>
									<p className="font-semibold text-foreground">
										${selectedTier.depositAmount.toLocaleString()}
									</p>
								</div>
								<div className="rounded-xl bg-background/80 p-3">
									<p className="text-muted-foreground text-xs uppercase tracking-wide">
										Remaining
									</p>
									<p className="font-semibold text-foreground">
										${remainingBalance.toLocaleString()}
									</p>
								</div>
							</div>
							<div className="mt-3">
								<Link
									href="/pricing?view=inPerson"
									className="font-medium text-primary text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
								>
									Get more details
								</Link>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							{quickApplyFields.map((field) => (
								<FormField
									key={field.name}
									control={form.control}
									name={field.name as keyof QuickApplyValues}
									render={({ field: formField }) => (
										<FormItem
											className={
												field.name === "name" || field.name === "email"
													? "md:col-span-1"
													: field.name === "selectedTier"
														? "rounded-2xl border-2 border-primary/40 bg-primary/5 p-5 shadow-sm md:col-span-2"
														: "md:col-span-2"
											}
										>
											<FormLabel
												className={
													field.name === "selectedTier"
														? "font-bold text-base text-primary dark:text-primary-400"
														: "font-medium text-black text-sm dark:text-white/80"
												}
											>
												{field.label}
												<span className="ml-1 text-destructive">*</span>
											</FormLabel>
											{field.description && (
												<FormDescription
													className={
														field.name === "selectedTier"
															? "line-clamp-1 pb-1 font-medium text-primary/80 transition-all hover:line-clamp-none"
															: "line-clamp-1 pb-1 text-muted-foreground text-xs leading-relaxed transition-all hover:line-clamp-none"
													}
												>
													{field.description}
												</FormDescription>
											)}
											<FormControl>
												{renderFormField(
													createFieldProps<FieldConfig>(field, formField),
												)}
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
						</div>

						<Button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-gradient-to-r from-primary to-focus py-6 font-semibold shadow-lg transition-transform hover:scale-[1.01]"
						>
							{isSubmitting ? (
								<span className="flex items-center justify-center gap-2">
									<Loader2 className="h-5 w-5 animate-spin" /> Submitting...
								</span>
							) : (
								<span className="flex items-center justify-center gap-2">
									Reserve Seat With $
									{selectedTier.depositAmount.toLocaleString()} Deposit{" "}
									<CheckCircle2 className="h-4 w-4" />
								</span>
							)}
						</Button>
						{isTestDeposit && (
							<Button
								type="button"
								onClick={() => {
									// Fill form with sample data then trigger upsell
									form.setValue("name", "Test User");
									form.setValue("email", "test@example.com");
									form.setValue("phone", "555-123-4567");
									form.setValue("companyName", "Test Co");
									form.setValue("website", "https://example.com");
									form.setValue(
										"projectSummary",
										"This is a test project summary for testing the deposit flow.",
									);
									handlePaymentSuccess();
								}}
								className="w-full border-2 border-yellow-500 bg-yellow-500/20 py-6 font-semibold text-yellow-700 shadow-lg transition-transform hover:scale-[1.01] dark:text-yellow-400"
							>
								⚡ TEST: Skip Stripe → Show Upsell
							</Button>
						)}
					</form>
				</Form>
			</FormProvider>
			{checkoutState ? (
				<PricingCheckoutDialog
					clientSecret={checkoutState.clientSecret}
					plan={checkoutState.plan}
					planType="oneTime"
					mode="payment"
					context="standard"
					redirectStrategy="if_required"
					onPaymentSuccess={handlePaymentSuccess}
					onClose={() => setCheckoutState(null)}
				/>
			) : null}

			{/* ── Free Slot Upsell Modal ── */}
			<Dialog
				open={showFreeSlotPrompt && !showFreeSlotForm}
				onOpenChange={(open) => {
					if (!open) {
						setShowFreeSlotPrompt(false);
						router.push("/contact/thank-you?source=deposit");
					}
				}}
			>
				<DialogContent className="border-primary/30 bg-gradient-to-b from-background via-background to-primary/5 sm:max-w-md dark:from-background-dark dark:via-background-dark dark:to-primary/10">
					<DialogHeader className="items-center text-center">
						<div className="mx-auto mb-2 text-6xl" aria-hidden>
							🎉
						</div>
						<DialogTitle className="font-extrabold text-3xl tracking-tight">
							Deposit Confirmed!
						</DialogTitle>
						<DialogDescription className="mt-2 text-base text-muted-foreground">
							Your seat is reserved. Would you also like to apply for a free
							workshop slot?
						</DialogDescription>
					</DialogHeader>

					<div className="mx-auto mt-4 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-600 text-sm ring-1 ring-emerald-500/20 dark:text-emerald-400">
						<CheckCircle2 className="h-4 w-4 shrink-0" />
						If approved, your deposit will be fully refunded
					</div>

					<div className="mt-4 flex flex-col gap-3">
						<Button
							type="button"
							onClick={() => {
								setShowFreeSlotPrompt(false);
								setShowFreeSlotForm(true);
							}}
							className="w-full bg-gradient-to-r from-primary to-focus py-6 font-bold text-lg shadow-lg transition-transform hover:scale-[1.02]"
						>
							Yes! Apply for a Free Slot 🎯
						</Button>
						<Button
							type="button"
							variant="ghost"
							onClick={() => {
								setShowFreeSlotPrompt(false);
								router.push("/contact/thank-you?source=deposit");
							}}
							className="w-full py-5 text-muted-foreground hover:text-foreground"
						>
							Skip for Now
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
