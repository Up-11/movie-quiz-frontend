export const apiConfig = {
	host: 'http://localhost:4000/',
	baseUrl: 'http://localhost:4000/api',
	auth: {
		login: '/auth/login',
		register: '/auth/register',
		createAdmin: '/auth/create-admin'
	},
	users: {
		getUsers: '/user',
		getStatistic: '/user/statistic',
		deleteSelfAccount: '/user/delete',
		deleteUserById: (id: string) => `/user/delete/${id}`,
		updateProfile: '/user/profile'
	},
	quizzes: {
		getAll: '/quiz/all',
		getAllAuth: '/quiz/all-auth',
		completeQuiz: '/quiz/complete',
		getUserCompletions: `/quiz/completions`,
		getQuizById: (id: string) => `/quiz/${id}`,
		searchQuizzes: '/quiz/search',
		rateQuiz: (id: string) => `/quiz/rate/${id}`,
		createQuiz: '/quiz/create',
		deleteQuiz: (id: string) => `/quiz/delete/${id}`
	},
	films: {
		getAllFilms: '/film',
		deleteFilm: (id: string) => `/film/delete/${id}`,
		addFilm: '/film/add'
	}
}
export type ApiConfig = typeof apiConfig
