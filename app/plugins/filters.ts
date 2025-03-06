export default defineNuxtPlugin(nuxtApp => {
	const config = useRuntimeConfig()

	nuxtApp.vueApp.config.globalProperties.$formatUrl = (path: string) => {
		return `${config.public.baseUrl}/${path}`
	}
})
