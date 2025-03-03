import { ROUTES } from '~/shared/config/routes'

const adminRoutes = [
	ROUTES.admin.index,
	ROUTES.admin.quizzes,
	ROUTES.admin.users,
	ROUTES.admin.addAdmin,
	ROUTES.admin.createQuiz
]

export default defineNuxtRouteMiddleware((to, from) => {
	const store = useAuthStore()
	if (store.isLoading) return

	if (store.isAdmin && to.path === ROUTES.home) return navigateTo(ROUTES.home)

	if (!store.isAdmin && adminRoutes.includes(to.path))
		return navigateTo(ROUTES.noAccess)

	if (store.isAdmin && !adminRoutes.includes(to.path))
		return navigateTo(ROUTES.admin.index)
})
