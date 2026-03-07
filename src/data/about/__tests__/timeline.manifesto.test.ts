import { timeline } from "../timeline";
import { timelineSummary } from "../timelineSummary";

describe("Launch MVP manifesto timeline", () => {
	const expectedSections = [
		"1. Why We Exist",
		"2. What We Actually Do",
		"3. How We Work",
		"4. What We Deliver",
		"5. What We Refuse",
		"6. Where This Is Going",
	];

	it("lists the manifesto sections in order", () => {
		const titles = timeline.map((entry) => entry.title);
		expect(titles).toEqual(expectedSections);
	});

	it("keeps timeline summary aligned with full timeline order", () => {
		const summaryTitles = timelineSummary.map((entry) => entry.title);
		expect(summaryTitles).toEqual(expectedSections);
	});

	it("includes concise subtitles for manifesto storytelling beats", () => {
		const subtitles = timeline.map((entry) => entry.subtitle);
		expect(subtitles).toEqual([
			"Too many founders spend months circling version one",
			"Scope, build, launch, and handoff in one delivery model",
			"The smallest useful version one beats a bloated roadmap",
			"A usable product, not just a sprint artifact",
			"No fake velocity, no handoff chaos, no unnecessary scope",
			"More workshop paths, stronger launch support, sharper specialist help",
		]);
	});

	it("provides rich narrative content for each section", () => {
		expect(
			timeline.every(
				(entry) => entry.content !== null && entry.content !== undefined,
			),
		).toBe(true);
		expect(
			timelineSummary.every(
				(entry) => entry.summary.length > 0 && entry.subtitle.length > 0,
			),
		).toBe(true);
	});
});
