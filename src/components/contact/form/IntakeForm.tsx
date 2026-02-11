"use client";

import {
	createFieldProps,
	renderFormField,
} from "@/components/contact/form/formFieldHelpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

import Header from "@/components/common/Header";
import {
	type IntakeFormValues,
	intakeFormFields,
	intakeFormSchema,
} from "@/data/contact/intakeFormFields";
import type { FieldConfig } from "@/types/contact/formFields";
import { generateMetaEventId, trackIntakeFormSubmit } from "@/utils/seo/fbpixel";
import { useRouter } from "next/navigation";

export default function IntakeForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();

	const form = useForm<IntakeFormValues>({
		resolver: zodResolver(intakeFormSchema),
		defaultValues: {},
	});

	const onSubmit = async (data: IntakeFormValues) => {
		setIsSubmitting(true);
		try {
			const metaEventId = generateMetaEventId();
			// * Submit to Notion API
			const response = await fetch("/api/contact/intake", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...data,
					metaEventId,
					eventSourceUrl: window.location.href,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || "Failed to submit form");
			}

			// * Fire Facebook Pixel Lead Event with form data
			trackIntakeFormSubmit({
				businessType: data.businessType,
				monthlyBudget: data.monthlyBudget,
				priority: Array.isArray(data.priorityLevel)
					? data.priorityLevel[0]
					: undefined,
				eventId: metaEventId,
			});
			router.push("/contact/thank-you?source=intake");
		} catch (err) {
			console.error("Submission failed:", err);
			toast.error("Submission failed. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="relative mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-gradient-to-br from-white via-background to-primary-50 p-6 shadow-xl ring-1 ring-primary/10 transition-all sm:p-10 dark:bg-gradient-to-br dark:from-background dark:via-background-dark dark:to-primary/10">
			<div className="-z-10 absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-focus/10 opacity-60 blur-lg dark:from-primary/30 dark:to-focus/20" />
			<Header
				title="Lead Orchestra Intake"
				subtitle="Tell us about your business and the leads you need. We'll build your scraping and enrichment workflow."
				size="md"
				className="mb-10 text-center"
			/>

			<FormProvider {...form}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						{/* Render Fields */}
						{intakeFormFields.map((field) => (
							<FormField
								key={field.name}
								control={form.control}
								name={field.name as keyof IntakeFormValues}
								render={({ field: formField }) => (
									<FormItem className="space-y-1">
										<FormLabel className="text-sm font-medium text-black dark:text-white/80">
											{field.label}{" "}
											{/* Very basic 'required' check for UI if needed, but Zod valid handles it */}
										</FormLabel>
										{field.description && (
											<FormDescription className="text-sm text-muted-foreground pb-2">
												{(() => {
													const urlRegex = /(https?:\/\/[^\s]+)/g;
													const parts = field.description.split(urlRegex);
													return parts.map((part, index) => {
														if (part.match(urlRegex)) {
															return (
																<a
																	key={index}
																	href={part}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-primary underline hover:opacity-80 break-all"
																>
																	{part}
																</a>
															);
														}
														return part;
													});
												})()}
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

						<Button
							type="submit"
							disabled={isSubmitting}
							className="mt-6 w-full bg-gradient-to-r from-primary to-focus py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-[1.01]"
						>
							{isSubmitting ? (
								<span className="flex items-center justify-center gap-2">
									<Loader2 className="h-5 w-5 animate-spin" /> Sending...
								</span>
							) : (
								"Submit Request"
							)}
						</Button>
					</form>
				</Form>
			</FormProvider>
		</div>
	);
}
