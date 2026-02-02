import type { ProductType } from "@/types/products";
import { agentProducts } from "./agents";
import { aeoProducts } from "./aeo";
import { customGptProducts } from "./custom-gpt"; // Import new products
import { closerProducts } from "./closers";
import { creditProducts, leadProducts } from "./credits";
import { freeResourceProducts } from "./free-resources";
import { leadMagnetProducts } from "./lead-magnets";
import { monetizeProducts } from "./monetize";
import { notionProducts } from "./notion";
import { workflowProducts } from "./workflow";

export const mockProducts: ProductType[] = [
	...freeResourceProducts,
	...creditProducts,
	...leadProducts,
	...leadMagnetProducts, // Replaced essentialsProducts with lead magnets
	...notionProducts,
	...workflowProducts,
	...agentProducts,
	...closerProducts,
	...monetizeProducts, // Marketplace entry points for monetization
	...aeoProducts, // AEO landing page templates and services
    ...customGptProducts, // Custom Blog GPT products
];

export function getAllProducts(): ProductType[] {
	return mockProducts;
}
