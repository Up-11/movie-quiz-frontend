import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', () => {
	const userId = ref<string | null>(null)

	const isAuth = computed(() => userId.value !== null)
	return { userId, isAuth }
})
