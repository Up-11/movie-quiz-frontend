export const ROUTES = {
	home: '/',

	allQuizzes: '/all-quizzes',

	quiz: (id: string) => {
		return `/quiz/${id}`
	},

	profile: '/profile',

	authorization: '/auth',

	admin: '/admin',
}

export type AppRoutes = typeof ROUTES
