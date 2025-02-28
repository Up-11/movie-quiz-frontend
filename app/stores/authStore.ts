import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import Cookies from 'js-cookie'
import { USER_ROLE, type IUser } from '~/shared/types/common.types'
import { AuthService } from '~/modules/auth/service/auth.service'

export const initialUser: IUser = {
	id: null,
	name: null,
	email: '',
	role: null
}

export const useAuthStore = defineStore('auth', () => {
	const accessToken = ref<string>('')
	const user = ref<IUser>(initialUser)

	const isLoading = ref<boolean>(true)

	const isAuth = computed(() => user.value.id !== null)

	const isAdmin = computed(() => user.value.role === USER_ROLE.ADMIN)

	const initializeAuth = () => {
		const token = Cookies.get('accessToken')
		const storedUser = localStorage.getItem('user')

		if (token && storedUser) {
			user.value = JSON.parse(storedUser)
			accessToken.value = token
		}

		isLoading.value = false
	}

	initializeAuth()

	const setAuthData = (newUser: IUser | null, token: string) => {
		user.value = newUser === null ? initialUser : newUser
		accessToken.value = token

		if (newUser && token) {
			Cookies.set('accessToken', token)
			localStorage.setItem('user', JSON.stringify(newUser))
		} else {
			Cookies.remove('accessToken')
			localStorage.removeItem('user')
		}
	}

	const handleLogout = () => {
		AuthService.logout()
		setAuthData(initialUser, '')
	}

	return {
		user,
		accessToken,
		isLoading,
		setAuthData,
		handleLogout,
		initializeAuth,
		isAuth,
		isAdmin
	}
})
