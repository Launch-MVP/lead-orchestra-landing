import type { ProductType } from "@/types/products";
import { aeoProducts } from "./aeo";
import { agentProducts } from "./agents";
import { closerProducts } from "./closers";
import { creditProducts } from "./credits";
import { customGptProducts } from "./custom-gpt";
import { freeResourceProducts } from "./free-resources";
import { launchMvpProducts } from "./launch-mvp";
import { monetizeProducts } from "./monetize";
import { notionProducts } from "./notion";
import { workflowProducts } from "./workflow";

export const mockProducts: ProductType[] = [
	...launchMvpProducts,
	...notionProducts,
	...freeResourceProducts,
	...creditProducts,
	...workflowProducts,
	...agentProducts,
	...closerProducts,
	...monetizeProducts,
	...aeoProducts,
	...customGptProducts,
];

export function getAllProducts(): ProductType[] {
	return mockProducts;
}
