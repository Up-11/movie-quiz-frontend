import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	components: [
		{ path: '~/shared/components', prefix: '' },
		{
			path: '~/modules',
			pattern: '*/components/**/*.vue',
			pathPrefix: false,
		},
	],
	imports: {
		dirs: ['composables', 'modules/**/composables', 'shared/composables'],
	},
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
	},
	modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/fonts'],
	ui: {
		colorMode: false,
	},
})
