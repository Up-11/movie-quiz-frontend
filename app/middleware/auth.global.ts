import { ROUTES } from '~/shared/config/routes'
import Cookies from 'js-cookie'

export default defineNuxtRouteMiddleware((to, from) => {
	const store = useAuthStore()
	const { isAuth } = store
	const accessToken = Cookies.get('accessToken')

	if (!accessToken && !store.user) {
		store.handleLogout()
	}
	if (!isAuth && from.path === ROUTES.authorization) {
		store.initializeAuth()
	}

	if (isAuth && to.path === ROUTES.authorization) {
		return navigateTo(ROUTES.allQuizzes)
	}
})
