import StatusPageClient from "@/components/ui/StatusPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Error | Launch MVP",
	description: "There was a problem completing your request.",
	openGraph: {
		title: "Error | Launch MVP",
		description: "There was a problem completing your request.",
	},
};

export default function FailedPage() {
	return <StatusPageClient type="error" />;
}
