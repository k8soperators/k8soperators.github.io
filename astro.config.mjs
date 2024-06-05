import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kubernetes operator',
			social: {
				github: 'https://github.com/k8soperators',
			},
			sidebar: [
				{
					label: 'Chapters',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducing Kubernetes operators', link: '/chapters/ch1/' },
						{ label: 'Getting to know operators', link: '/chapters/ch2/' },
						{ label: 'Spinning up your operator', link: '/chapters/ch3/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
