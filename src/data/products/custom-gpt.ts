import {
	ProductCategory,
	type ProductResource,
	type ProductType,
} from '@/types/products';

const defaultTypes: ProductType['types'] = [{ name: 'Standard', value: 'standard', price: 0 }];
const defaultColors: ProductType['colors'] = [];
const defaultSizes: ProductType['sizes'] = [];

const templateResource: ProductResource = {
	type: 'download',
	url: '#', // Placeholder, user will provide
	fileName: 'custom-blog-gpt-template.zip',
	fileSize: '2.5 MB',
};

const serviceResource: ProductResource = {
	type: 'external',
	url: 'https://leadorchestra.com/contact-pilot?offer=custom-blog-gpt',
};

const engineResource: ProductResource = {
	type: 'external',
	url: 'https://leadorchestra.com/contact-pilot?offer=custom-blog-gpt-engine',
};

export const customGptProducts: ProductType[] = [
	{
		id: 'custom-blog-gpt-template',
		name: 'Self-Serve Blog GPT Template',
		description:
			'A deterministic content workflow that ships answer-ready posts. Includes importable GPT config file, Prompt Playbook, Output Spec Cheat Sheet, and specific rules for Internal Link Slotting and CTA/Offer placement. Not just a prompt—a complete product.',
		price: 199,
		sku: 'GPT-BLOG-TEMPLATE-001',
		slug: 'custom-blog-gpt-template',
		categories: [
			ProductCategory.Templates,
			ProductCategory.SeoAeo,
			ProductCategory.Agents,
		],
		images: [
			'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80', // AI/Robot writing concept
		],
		types: [
            { name: 'Standard License', value: 'standard', price: 199 }
        ],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		resource: templateResource,
		faqs: [
			{
				question: 'Is this just prompts?',
				answer: 'No, it’s a structured output system with scoring + templates + CTA/link rules. It is designed to be a repeatable workflow with built-in QA.',
			},
			{
				question: 'Will it match my voice?',
				answer: 'It includes a voice guide you fill in so you can configure it yourself. For true, deep alignment done-for-you, check out the Standard Build.',
			},
            {
                question: 'Will it add internal links?',
                answer: 'It gives slots and recommendations based on the rules we provide; you paste in your URL list to guide it.',
            },
            {
                question: 'Does it include analytics?',
                answer: 'It includes an event naming plan you can implement. Full implementation is available in the Standard/Engine tiers.',
            }
		],
	},
	{
		id: 'custom-blog-gpt-build-standard',
		name: 'Custom Blog GPT - Standard Build',
		description:
			'We ingest your brand doc, sitemap, and offers to build a custom GPT that is on-brand, on-offer, and on-site-structure. Includes internal link mapping, intent-based CTA routing, and two cycles of revision and QA.',
		price: 4500,
		sku: 'GPT-BLOG-SERVICE-STD',
		slug: 'custom-blog-gpt-standard',
		categories: [
			ProductCategory.SeoAeo,
			ProductCategory.Agents,
		],
		images: [
			'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80', // Team working/consulting
		],
		types: [
            { name: 'Standard Build', value: 'standard', price: 4500 }
        ],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		resource: serviceResource,
		salesIncentive: {
			type: 'onSale',
			description: 'Includes 10-day turnaround & training',
		},
        faqs: [
            {
                question: 'Why not just buy the template?',
                answer: 'The template gives you the framework. The Standard Build makes it YOURS—your voice, your specific offers, and your actual internal links, all configured and QA’d by us.',
            },
            {
                question: 'Can you use our brand bible?',
                answer: 'Yes. Ingestion of your brand documents, positioning, and tone rules is the core differentiator of this tier.',
            },
            {
                question: 'Do you set up tracking?',
                answer: 'We provide a comprehensive event plan and can help wire it to Google Analytics, Plausible, or Microsoft Clarity.',
            },
            {
                question: 'How many posts does it support?',
                answer: 'As many as you want. The Standard Build is about setting up a quality, repeatable engine you can run forever.',
            }
        ]
	},
	{
		id: 'custom-blog-gpt-build-engine',
		name: 'Custom Blog GPT - Engine Infrastructure',
		description:
			'A controlled content pipeline from Trend Signal to Indexing Ping. We automate topic sourcing (Trends/Search Console), calendar generation, and publish packs. Designed for consistent publishing at scale (4-20 posts/mo) with approval loops.',
		price: 12000,
		sku: 'GPT-BLOG-SERVICE-ENGINE',
		slug: 'custom-blog-gpt-engine',
		categories: [
			ProductCategory.SeoAeo,
			ProductCategory.Agents,
			ProductCategory.Automation,
		],
		images: [
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80', // Technology/Server/Engine concept
		],
		types: [
            { name: 'Engine Infrastructure', value: 'engine', price: 12000 }
        ],
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		resource: engineResource,
        faqs: [
            {
                question: 'Do we need engineering resources?',
                answer: 'Not necessarily. Most setups are low-code/no-code. If deeper custom integrations are needed, we scope that specifically.',
            },
            {
                question: 'What’s included that Standard doesn’t have?',
                answer: 'Automated topic sourcing, dynamic content calendar generation, "publish packs" for distribution, and a full tracking/indexing workflow.',
            },
            {
                question: 'Do we need to pay for extra tools?',
                answer: 'Only if you choose to use your own subscriptions (recommended). Bring-your-own-keys is the standard model.',
            },
            {
                question: 'How do we keep it on-brand at scale?',
                answer: 'Through rigorous guardrails, automated scoring, and a mandatory human approval queue. We value trust over raw volume.',
            },
        ],
	},
];
