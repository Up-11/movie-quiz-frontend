import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	plugins: ['~/plugins/filters.ts'],

	components: [
		{ path: '~/shared/components', prefix: '' },
		{
			path: '~/modules',
			pattern: '*/components/**/*.vue',
			pathPrefix: false
		}
	],
	imports: {
		dirs: [
			'composables',
			'modules/**/composables',
			'shared/composables',
			'shared/utils'
		]
	},
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()]
	},
	modules: [
		'@nuxt/ui',
		'@pinia/nuxt',
		'@nuxt/fonts',
		'@nuxt/image',
		'@vueuse/nuxt',
		'pinia-plugin-persistedstate/nuxt'
	],

	ssr: false,
	fonts: {
		defaults: {
			weights: [400, 500, 600, 700, 200, 300],
			styles: ['normal', 'italic'],
			subsets: [
				'cyrillic-ext',
				'cyrillic',
				'greek-ext',
				'greek',
				'vietnamese',
				'latin-ext',
				'latin'
			]
		},
		families: [{ name: 'Nunito', provider: 'google' }]
	},
	runtimeConfig: {
		public: {
			apiUrl: process.env.NUXT_PUBLIC_API_URL,
			apiNoPrefix: process.env.NUXT_PUBLIC_API_NO_PREFIX
		}
	},
	devServer: {
		cors: {
			origin: ['http://localhost:4000', '*'],
			credentials: true
		}
	}
})
