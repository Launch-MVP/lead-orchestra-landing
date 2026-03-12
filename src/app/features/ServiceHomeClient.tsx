"use client";
import BentoPage from "@/components/bento/page";
import { CTASection } from "@/components/common/CTASection";
import Header from "@/components/common/Header";
import { TechStackSection } from "@/components/common/TechStackSection";
import { FeatureTimelineTable } from "@/components/features/FeatureTimelineTable";
import UpcomingFeatures from "@/components/home/FeatureVote";
import ServicesSection from "@/components/home/Services";
import { Separator } from "@/components/ui/separator";
import { featureTimeline } from "@/data/features/feature_timeline";
import { leadGenIntegrations } from "@/data/service/slug_data/integrations";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useDataModule } from "@/stores/useDataModuleStore";
import {
	SERVICE_CATEGORIES,
	type ServiceCategoryValue,
} from "@/types/service/services";
import { useEffect, useMemo, useState } from "react";

const SectionFallback = ({
	label,
	error,
}: { label: string; error?: unknown }) => (
	<div className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-10 text-white/70">
		<span className="text-sm">
			{error ? `Unable to load ${label}.` : `Loading ${label}…`}
		</span>
	</div>
);

export default function ServiceHomeClient() {
	const [activeTab, setActiveTab] = useState<ServiceCategoryValue>(
		SERVICE_CATEGORIES.STRATEGY,
	);
	const hasMounted = useHasMounted();
	const {
		status: bentoStatus,
		features: bentoFeatures,
		error: bentoError,
	} = useDataModule("bento/main", ({ status, data, error }) => ({
		status,
		features: data?.MainBentoFeatures ?? [],
		error,
	}));
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const industry = urlParams.get("industry");
		if (
			industry &&
			(Object.values(SERVICE_CATEGORIES) as string[]).includes(industry)
		) {
			setActiveTab(industry as ServiceCategoryValue);
		}
	}, []);

	const resolvedStacks = useMemo(() => leadGenIntegrations, []);
	const resolvedBentoFeatures = useMemo(
		() => (bentoStatus === "ready" ? bentoFeatures : []),
		[bentoStatus, bentoFeatures],
	);
	const resolvedTimeline = useMemo(() => featureTimeline, []);

	const handleIndustryChange = (value: ServiceCategoryValue) => {
		setActiveTab(value);
		window.history.replaceState(
			null,
			"",
			`${window.location.pathname}?industry=${value}`,
		);
	};

	if (!hasMounted) return null;

	return (
		<>
			{/* <HeroSessionMonitorClientWithModal /> */}

			<section className="px-6 md:py-20 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<ServicesSection
						title="Pilot Spring Services"
						subtitle="Strategy, workshops, build support, and specialist execution for founders who need to ship fast without accumulating cleanup debt."
						showTabs={[
							SERVICE_CATEGORIES.STRATEGY,
							SERVICE_CATEGORIES.BUILD,
							SERVICE_CATEGORIES.IN_PERSON,
							SERVICE_CATEGORIES.SPECIALISTS,
							SERVICE_CATEGORIES.SUPPORT,
							SERVICE_CATEGORIES.RESOURCES,
						]}
						showSearch={false}
						showCategories={false}
						activeTab={activeTab}
						onTabChange={handleIndustryChange}
					/>
				</div>
			</section>
			<Separator className="mx-auto my-16 max-w-7xl border-white/10" />
			<section className="px-6 md:py-20 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<UpcomingFeatures />
				</div>
			</section>
			<Separator className="mx-auto my-16 max-w-7xl border-white/10" />
			<TechStackSection
				title="Delivery Stack"
				description="See the tools, systems, and product infrastructure Pilot Spring uses to scope, build, launch, measure, and support MVPs across web, mobile, AI, analytics, and handoff."
				stacks={resolvedStacks}
			/>
			<Separator className="mx-auto my-16 max-w-7xl border-white/10" />
			{bentoStatus === "ready" && resolvedBentoFeatures.length > 0 ? (
				<BentoPage
					features={resolvedBentoFeatures}
					title={"Why Founders Choose Pilot Spring"}
					subtitle={
						"Pilot Spring combines product strategy, build execution, launch support, and specialist engineering help so you can move from idea to shipped product with less drag."
					}
				/>
			) : (
				<SectionFallback
					label="feature highlights"
					error={bentoStatus === "error" ? bentoError : undefined}
				/>
			)}
			<div className="my-12">
				<Header
					title="How Pilot Spring Delivers"
					subtitle="A transparent view of current services, delivery focus, and what is being expanded next."
				/>
				<FeatureTimelineTable rows={resolvedTimeline} />
				<Separator className="my-8" />
			</div>
			<CTASection
				title="Ready to Launch Your MVP?"
				description="Pilot Spring helps founders scope the right version one, ship faster, and bring in the right specialist support when the product needs deeper execution."
				buttonText="Book a Service"
				href="/contact"
			/>
		</>
	);
}
