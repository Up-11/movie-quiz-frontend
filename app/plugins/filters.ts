export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.config.globalProperties.$formatUrl = (path: string) => {
		return `http://localhost:4000/${path}`
	}
})
