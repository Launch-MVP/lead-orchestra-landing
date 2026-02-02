import { mockProducts } from '@/data/products';
import { aeoProducts } from '@/data/products/aeo';
import { ProductCategory } from '@/types/products';

describe('AEO product catalog', () => {
	it('exports exactly three AEO products', () => {
		expect(aeoProducts.length).toBe(3);
	});

	it('includes the template product with download resource', () => {
		const template = aeoProducts.find((p) => p.id === 'aeo-landing-page-template');
		expect(template).toBeDefined();
		expect(template?.price).toBe(97);
		expect(template?.resource?.type).toBe('download');
		expect(template?.resource?.url).toContain('.zip');
	});

	it('includes the done-for-you service with external resource', () => {
		const dfy = aeoProducts.find((p) => p.id === 'aeo-landing-page-dfy-service');
		expect(dfy).toBeDefined();
		expect(dfy?.price).toBe(1497);
		expect(dfy?.resource?.type).toBe('external');
	});

	it('assigns both Products to Templates and SeoAeo categories', () => {
		for (const product of aeoProducts) {
			expect(product.categories).toContain(ProductCategory.Templates);
			expect(product.categories).toContain(ProductCategory.SeoAeo);
		}
	});

	it('provides FAQ content for both products', () => {
		for (const product of aeoProducts) {
			expect(product.faqs).toBeDefined();
			expect(product.faqs!.length).toBeGreaterThan(0);

			const faq = product.faqs![0];
			expect(faq.question).toBeTruthy();
			expect(faq.answer).toBeTruthy();
		}
	});

	it('should contain the Free AEO Content Calendar', () => {
		const calendar = aeoProducts.find(
			(p) => p.id === 'free-aeo-content-calendar'
		);
		expect(calendar).toBeDefined();
		expect(calendar?.price).toBe(0);
		expect(calendar?.categories).toContain(ProductCategory.FreeResources);
		expect(calendar?.resource?.type).toBe('download');
	});

	it('registers AEO products in the main catalog', () => {
		const catalogSkus = new Set(mockProducts.map((p) => p.sku));

		for (const product of aeoProducts) {
			expect(catalogSkus.has(product.sku)).toBe(true);
		}
	});

	it('defines the new product categories in the enum', () => {
		const values = Object.values(ProductCategory) as string[];
		expect(values).toContain('Templates');
		expect(values).toContain('SEO/AEO');
	});
});
