import { ROUTES } from '~/shared/config/routes'

export default defineNuxtRouteMiddleware((to, from) => {
	const store = useUserStore()
	const { isAdmin } = store

	if (!isAdmin && to.path === ROUTES.admin) {
		return navigateTo(ROUTES.noAccess)
	}
	if (isAdmin && to.path !== ROUTES.admin) {
		return navigateTo(ROUTES.admin)
	}
})
