import { NuxtApp } from 'nuxt/app'

declare module '#app' {
	interface NuxtApp {
		$formatImageUrl: (path: string) => string
	}
}
