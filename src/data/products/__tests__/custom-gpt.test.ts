import { describe, expect, it } from "vitest";
import { ProductCategory } from "../../../types/products";
import { customGptProducts } from "../custom-gpt";

describe("Custom Blog GPT Products", () => {
	it("should have exactly 3 products", () => {
		expect(customGptProducts).toHaveLength(3);
	});

	it("should have the Self-Serve Template priced at $199", () => {
		const template = customGptProducts.find(
			(p) => p.id === "custom-blog-gpt-template",
		);
		expect(template).toBeDefined();
		expect(template?.price).toBe(199);
		expect(template?.types[0].price).toBe(199); // Verify type pricing
		expect(template?.categories).toContain(ProductCategory.Templates);
		expect(template?.name).toContain("Self-Serve");
	});

	it("should have the Standard Build service priced at $4,500", () => {
		const standard = customGptProducts.find(
			(p) => p.id === "custom-blog-gpt-build-standard",
		);
		expect(standard).toBeDefined();
		expect(standard?.price).toBe(4500);
		expect(standard?.types[0].price).toBe(4500); // Verify type pricing
		expect(standard?.categories).toContain(ProductCategory.SeoAeo);
		// Only checking start of name to be robust
		expect(standard?.name).toContain("Standard Build");
	});

	it("should have the Engine Build service priced at $12,000", () => {
		const engine = customGptProducts.find(
			(p) => p.id === "custom-blog-gpt-build-engine",
		);
		expect(engine).toBeDefined();
		expect(engine?.price).toBe(12000);
		expect(engine?.types[0].price).toBe(12000); // Verify type pricing
		expect(engine?.categories).toContain(ProductCategory.Automation);
		expect(engine?.categories).toContain(ProductCategory.SeoAeo);

		// Verify FAQs
		expect(engine?.faqs).toBeDefined();
		expect(engine?.faqs).toHaveLength(4);
		expect(engine?.faqs?.[1].answer).toContain("calendar");
	});

	it("should have valid image URLs for all products", () => {
		customGptProducts.forEach((product) => {
			expect(product.images.length).toBeGreaterThan(0);
			expect(product.images[0]).toMatch(/^https?:\/\//);
		});
	});
});
