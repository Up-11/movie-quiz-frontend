import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { defineNuxtPlugin } from 'nuxt/app'
import { useRouter } from 'vue-router'

export default defineNuxtPlugin(() => {
	const router = useRouter()
	NProgress.configure({
		showSpinner: false,
		speed: 500,
		trickleSpeed: 200
	})

	router.beforeEach((to, from, next) => {
		NProgress.start()
		next()
	})

	router.afterEach(() => {
		NProgress.done()
	})
})
