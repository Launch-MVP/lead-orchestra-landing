"use client";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { CTASection } from "@/components/common/CTASection";
import { NewsletterEmailInput } from "@/components/contact/newsletter/NewsletterEmailInput";
import { HeroOffering } from "@/components/home/HeroOffering";
import { HeroCta } from "@/components/home/heros/HeroCta";
import Hero from "@/components/home/heros/Hero";
import { toast } from "@/components/ui/use-toast";
import { useBlogSearch } from "@/hooks/beehiiv/use-blog-search";
import { useCategoryFilter } from "@/hooks/use-category-filter";
import type { BeehiivPost } from "@/types/behiiv";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { offerImg } from "@/data/layout/nav";

const DEFAULT_PAGE_SIZE = 12;

// Wrapper component to handle search params with Suspense
function BlogContent() {
	const searchParams = useSearchParams();
	const [articles, setArticles] = useState<BeehiivPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchPosts() {
			setLoading(true);
			setError(null);
			try {
				const { getLatestBeehiivPosts } = await import(
					"@/lib/beehiiv/getPosts"
				);
				// Read pagination flags from URL
				const per_page = searchParams?.get("per_page");
				const page = searchParams?.get("page");
				const limit = searchParams?.get("limit");

				// Default per_page when missing or invalid
				const parsedPerPage = per_page ? Number(per_page) : Number.NaN;
				const inferredPerPage =
					Number.isFinite(parsedPerPage) && parsedPerPage > 0
						? parsedPerPage
						: DEFAULT_PAGE_SIZE;
				const parsedPage = page ? Number(page) : Number.NaN;

				const posts = await getLatestBeehiivPosts({
					perPage: inferredPerPage,
					page: Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1,
					limit: limit ? Number(limit) : undefined,
				});
				setArticles(posts.slice(0, inferredPerPage));
			} catch (err: unknown) {
				console.error("Failed to load posts:", err);
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		}
		void fetchPosts();
	}, [searchParams?.toString()]);

	const categories = useMemo(() => {
		return [
			{ id: "all", name: "All Posts" },
			...Array.from(
				new Set(
					articles.flatMap((article) =>
						Array.isArray(article.content_tags)
							? article.content_tags.filter(
									(tag): tag is string => typeof tag === "string",
								)
							: [],
					),
				),
			).map((category) => ({
				id: category,
				name: category,
			})),
		];
	}, [articles]);

	const { activeCategory, CategoryFilter } = useCategoryFilter(categories);

	// Add searchParams to dependencies to trigger re-filter when URL changes
	const searchParamKey = useMemo(
		() => searchParams?.toString() ?? "",
		[searchParams],
	);

	const { searchQuery, setSearchQuery, filteredPosts } = useBlogSearch(
		articles,
		activeCategory,
		searchParamKey,
	);

	if (loading) {
		return (
			<div className="flex justify-center p-8">
				<Loader2 className="h-12 w-12 animate-spin text-primary" />
			</div>
		);
	}

	if (error) {
		toast({
			title: "Failed to load blog posts",
			description: "An error occurred while fetching articles",
			variant: "destructive",
		});
		return (
			<div className="p-4 text-red-500">
				Error loading posts. Please try again later.
			</div>
		);
	}

// Local Hero for the Blog Page without the background gradients
function BlogHero(props: React.ComponentProps<typeof Hero>) {
	return (
		<div className="relative flex flex-col px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16 xl:px-12">
			<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
				<HeroOffering
					image={props.image}
					imageAlt={props.imageAlt}
					className="order-1 lg:order-2"
				/>
				<HeroCta
					badgeLeft={props.badgeLeft}
					badgeRight={props.badgeRight}
					headline={props.headline}
					subheadline={props.subheadline}
					highlight={props.highlight}
					ctaVariant={props.ctaVariant}
					ctaForm={props.ctaForm}
					className="order-2 lg:order-1"
				/>
			</div>
		</div>
	);
}

	return (
		<>
			<div className="py-12 sm:py-16 md:py-20 lg:py-24">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<BlogHero
						badgeLeft="Launch Systems"
						badgeRight="Build Notes"
						headline="Build Your MVP"
						subheadline="Join the Pilot Spring newsletter for exclusive build notes on automating lead capture, product delivery frameworks, and getting a first look at the templates we use to build pipelines faster."
						highlight="Without Overbuilding"
						ctaVariant="form"
						ctaForm={<NewsletterEmailInput />}
						image={offerImg}
						imageAlt="Pilot Spring build systems and product delivery notes"
					/>
				</div>
			</div>
			<div className="px-6 py-12 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<CategoryFilter />
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
						<div className="lg:col-span-8">
							<BlogGrid
								posts={filteredPosts.length > 0 ? filteredPosts : articles}
							/>
						</div>
						<div className="lg:col-span-4">
							<BlogSidebar posts={articles} />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-12">
				<CTASection
					title="Ready to scale your deal pipeline?"
					description="Request Founders Circle access to try Deal Scale free before launch and shape the future of our AI deal pipeline tools."
					buttonText="Contact Us"
					href="/contact"
					secondaryButton={{
						label: "Join Community",
						href: "https://discord.gg/BNrsYRPtFN",
						target: "_blank",
					}}
				/>
			</div>
		</>
	);
}

// Main Blog component with Suspense boundary
export default function Blog() {
	return (
		<Suspense
			fallback={
				<div className="flex justify-center p-8">
					<Loader2 className="h-12 w-12 animate-spin text-primary" />
				</div>
			}
		>
			<BlogContent />
		</Suspense>
	);
}
