import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
// import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	site: 'https://hyphenxu.github.io',
	base: '/starlight',
	integrations: [
		starlight({
			title: 'Within Control',
			social: {
				github: 'https://github.com/HyphenXu/starlight',
			},
			sidebar: [
                { label: 'Hello World', link: '/hello-world/'},
                { label: 'Awesome-Orienteering', link: '/awesome/' },
                { label: 'Competition Formats', link: '/formats/' },
				{
                    label: 'Standards',
                    autogenerate: { directory: 'standards' },
                },
                {
					label: 'Mapping',
					items: [
                        { label: 'Introduction', link: '/mapping/intro/' },
						{ label: 'Mapping with OCAD11', link: '/mapping/ocad11/' },
					],
				},
                {
                    label: 'Potpourri',
                    autogenerate: { directory: 'potpourri' }
                },
				{
					label: 'Starlight Notes',
					autogenerate: { directory: 'starlight-notes' },
				},
			],
            components: {
                // Hero: './src/components/MyHero.astro',
            },
		}),
		// preact(),
	],
});
