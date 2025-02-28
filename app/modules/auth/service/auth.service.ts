import { publicApi } from '~/shared/api/interceptors'
import {
	removeTokenFromStorage,
	saveToStorage,
	type IAuthData
} from './auth.helpers'
import { apiConfig } from '~/shared/config/api-config'
import type { USER_ROLE } from '~/shared/types/common.types'

export const AuthService = {
	async login(email: string, password: string, name: string, role: USER_ROLE) {
		const response = await publicApi.post<IAuthData>(apiConfig.auth.login, {
			email,
			password,
			name,
			role
		})
		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async register(
		email: string,
		password: string,
		name: string,
		role: USER_ROLE
	) {
		const response = await publicApi.post<IAuthData>(apiConfig.auth.register, {
			email,
			password,
			name,
			role
		})
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},

	logout() {
		removeTokenFromStorage()
		localStorage.removeItem('user')
	}
}
