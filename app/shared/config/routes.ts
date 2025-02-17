export const ROUTES = {
	home: '/',

	allQuizzes: '/all-quizzes',

	quiz: (id: string) => {
		return `/quiz/${id}`
	},

	authorization: '/auth',

	admin: '/admin',

	noAccess: '/no-access',
}

export type AppRoutes = typeof ROUTES
