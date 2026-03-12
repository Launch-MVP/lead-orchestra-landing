import { timelineSummary } from "@/data/about/timelineSummary";
import { mapSeoMetaToMetadata } from "@/utils/seo/mapSeoMetaToMetadata";

describe("mapSeoMetaToMetadata manifesto integration", () => {
	it("generates seeAlso links for manifesto sections", () => {
		const metadata = mapSeoMetaToMetadata({
			title: "About Pilot Spring",
			description:
				"Discover the Pilot Spring manifesto and founder delivery model.",
			canonical: "https://launchmvp.com/about",
			keywords: ["Pilot Spring", "about"],
			image: "/og-image.png",
			manifestoSections: timelineSummary,
		});

		expect(metadata.openGraph?.seeAlso).toEqual(
			timelineSummary.map(
				(section) => `https://launchmvp.com/about#${section.anchor}`,
			),
		);
	});
});
