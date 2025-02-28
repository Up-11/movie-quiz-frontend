import Cookies from 'js-cookie'
import type { IUser } from '~/shared/types/common.types'

export interface IAuthData {
	user: IUser | null
	accessToken: string
}

export const saveTokenToStorage = (accessToken: string) => {
	Cookies.set('accessToken', accessToken)
}

export const removeTokenFromStorage = () => {
	Cookies.remove('accessToken')
	localStorage.removeItem('like-storage')
}

export const saveToStorage = (data: IAuthData) => {
	saveTokenToStorage(data.accessToken)
	localStorage.setItem('user', JSON.stringify(data.user))
}
