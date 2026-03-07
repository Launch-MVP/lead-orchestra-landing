// Keep build-time typography local. next/font/google triggers network fetches during
// `next build`, which makes local production builds brittle in restricted environments.
export const sansFont = {
	variable: "",
} as const;

export const monoFont = {
	variable: "",
} as const;
