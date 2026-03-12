import StatusPageClient from "@/components/ui/StatusPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Success | Pilot Spring",
	description: "Your action was completed successfully.",
	openGraph: {
		title: "Success | Pilot Spring",
		description: "Your action was completed successfully.",
	},
};

export default function SuccessPage() {
	return <StatusPageClient type="success" />;
}
