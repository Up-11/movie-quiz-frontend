import { ROUTES } from '~/shared/config/routes'

export default defineNuxtRouteMiddleware((to, from) => {
	const store = useUserStore()
	const { isAuth } = store

	if (isAuth && to.path === ROUTES.authorization) {
		return navigateTo(ROUTES.allQuizzes)
	}
})
