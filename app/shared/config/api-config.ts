export const apiConfig = {
	host: 'http://localhost:4000/',
	baseUrl: 'http://localhost:4000/api',
	auth: {
		login: '/auth/login',
		register: '/auth/register'
	},
	users: {
		getUsers: '/user',
		getStatistic: '/user/statistic',
		deleteSelfAccount: '/user/delete',
		deleteUserById: (id: string) => `/user/delete/${id}`,
		updateProfile: '/user/profile'
	}
}
export type ApiConfig = typeof apiConfig
