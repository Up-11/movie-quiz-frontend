import { defineStore } from 'pinia'
import { USER_ROLE, type IUser } from '~/shared/types/common.types'

export const useUserStore = defineStore('UserStore', () => {
	const user = reactive<IUser>({
		id: '123',
		name: 'Гена букин',
		email: 'sinBlyadi@gmail.com',
		role: USER_ROLE.USER,
	})

	const isAuth = computed(() => user.id !== null)

	const isAdmin = computed(() => user.role === USER_ROLE.ADMIN)
	return { user, isAuth, isAdmin }
})
