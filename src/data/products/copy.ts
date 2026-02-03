import type {
	ABTest,
	ABTestCopy,
	AbTestAnalysis,
	AbTestVariant,
	AbTestWarning,
} from "@/types/testing";

export type AbTestCopyInput = Omit<ABTestCopy, "hope" | "fear"> &
	Partial<Pick<ABTestCopy, "hope" | "fear">>;

export type AbTestVariantInput = Omit<AbTestVariant, "copy"> & {
	copy?: AbTestCopyInput;
};

export type AbTestInput = Omit<ABTest, "variants"> & {
	variants: AbTestVariantInput[];
};

const sanitizeCopy = (copy: AbTestCopyInput): ABTestCopy => {
	const trimmed = Object.entries(copy).reduce<
		Partial<ABTestCopy> & Record<string, unknown>
	>((acc, [key, value]) => {
		if (typeof value === "string") {
			acc[key] = value.trim();
			return acc;
		}
		if (Array.isArray(value)) {
			acc[key] = value.map((item) =>
				typeof item === "string" ? item.trim() : item,
			);
			return acc;
		}
		acc[key] = value;
		return acc;
	}, {});

	const hopeSource =
		(trimmed.hope && trimmed.hope.length > 0 ? trimmed.hope : undefined) ??
		(typeof trimmed.whatsInItForMe === "string"
			? trimmed.whatsInItForMe
			: undefined) ??
		(trimmed.solution && trimmed.solution.length > 0
			? trimmed.solution
			: undefined) ??
		"";

	const fearSource =
		(trimmed.fear && trimmed.fear.length > 0 ? trimmed.fear : undefined) ??
		(trimmed.pain_point && trimmed.pain_point.length > 0
			? trimmed.pain_point
			: undefined) ??
		"";

	return {
		...trimmed,
		hope: hopeSource,
		fear: fearSource,
	} as ABTestCopy;
};

const validateTagline = (
	tagline: string,
	testId: string,
	variantName: string,
): AbTestWarning[] => {
	const warnings: AbTestWarning[] = [];
	if (!tagline) {
		warnings.push({
			code: "missing_tagline",
			severity: "warning",
			testId,
			variantName: variantName,
			field: "tagline",
			message: "Missing tagline",
			suggestion: "Add a punchy, 3-5 word tagline.",
		});
	} else if (tagline.length > 50) {
		warnings.push({
			code: "tagline_too_long",
			severity: "warning",
			testId,
			variantName: variantName,
			field: "tagline",
			message: "Tagline is too long",
			suggestion: "Shorten to under 50 characters for better impact.",
		});
	}
	return warnings;
};

const analyzeVariant = (
	variant: AbTestVariant,
	testId: string,
): AbTestAnalysis => {
	const warnings: AbTestWarning[] = [];
	const copy = variant.copy;

	if (copy) {
		// Check for missing critical fields
		if (!copy.cta)
			warnings.push({
				code: "missing_cta",
				severity: "error",
				testId,
				variantName: variant.name,
				field: "cta",
				message: "Missing CTA",
				suggestion: "Add a strong Call to Action.",
			});
		if (!copy.whatsInItForMe)
			warnings.push({
				code: "missing_benefit",
				severity: "warning",
				testId,
				variantName: variant.name,
				field: "whatsInItForMe",
				message: "Missing benefit statement",
				suggestion: "Explain clearly what the user gets.",
			});

		// Check lengths
		if (copy.tagline) {
			warnings.push(...validateTagline(copy.tagline, testId, variant.name));
		}
	}

	const completenessScore = Math.max(
		0,
		100 - warnings.length * 15, // Deduct 15 points per warning
	);

	return {
		variantName: variant.name,
		completenessScore,
		warnings,
	};
};

export const defineAbTests = (tests: AbTestInput[]): ABTest[] => {
	return tests.map((test) => {
		// 1. Sanitize and fill defaults for each variant
		const processedVariants = test.variants.map((v) => {
			const sanitizedCopy = v.copy ? sanitizeCopy(v.copy) : ({} as ABTestCopy);
			return {
				...v,
				copy: sanitizedCopy,
			} as AbTestVariant;
		});

		// 2. Run analysis (optional, but good for logs/debugging)
		const analysis = processedVariants.map((v) =>
			analyzeVariant(v, test.id as string),
		);
		const lowScoreVariants = analysis.filter(
			(a) => (a.completenessScore ?? 0) < 70,
		);

		if (lowScoreVariants.length > 0) {
			console.warn(
				`[AB Testing] Low quality variants detected in test "${test.name}":`,
				lowScoreVariants,
			);
		}

		return {
			...test,
			variants: processedVariants,
		} as ABTest;
	});
};
