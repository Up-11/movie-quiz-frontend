import { defineStore } from 'pinia'
import type { IUser } from '~/shared/types/common.types'

export const useUserStore = defineStore('UserStore', () => {
	const user = reactive<IUser>({
		id: '1233',
		name: 'Гена букин',
		email: 'sinBlyadi@gmail.com',
	})

	const isAuth = computed(() => user.id !== null)
	return { user, isAuth }
})
