import {
	removeTokenFromStorage,
	saveToStorage,
	type IAuthData
} from './auth.helpers'
import { apiConfig } from '~/shared/config/api-config'
import { USER_ROLE } from '~/shared/types/common.types'

export const AuthService = {
	async login(email: string, name: string, password: string) {
		const { $publicApi } = useNuxtApp()
		const response = await $publicApi.post<IAuthData>(apiConfig.auth.login, {
			email,
			password,
			name
		})
		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async register(
		email: string,
		name: string,
		password: string,
		role: USER_ROLE
	) {
		const { $publicApi } = useNuxtApp()
		const response = await $publicApi.post<IAuthData>(apiConfig.auth.register, {
			email,
			role,
			name,
			password
		})
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},

	logout() {
		removeTokenFromStorage()
		localStorage.removeItem('user')
	},

	async addNewAdmin(email: string, name: string, password: string) {
		const { $publicApi } = useNuxtApp()
		return await $publicApi.post(apiConfig.auth.createAdmin, {
			email,
			name,
			password,
			role: USER_ROLE.ADMIN
		})
	}
}
