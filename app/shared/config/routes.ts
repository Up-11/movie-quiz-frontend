export const ROUTES = {
	home: '/',

	allQuizzes: '/all-quizzes',

	quiz: (id: string) => {
		return `/quiz/${id}`
	},

	authorization: '/auth',

	admin: {
		index: '/admin',
		quizzes: '/admin/quizzes',
		users: '/admin/users',
		addAdmin: '/admin/add-admin',
		createQuiz: '/admin/create-quiz',
	},

	noAccess: '/no-access',
}

export type AppRoutes = typeof ROUTES
