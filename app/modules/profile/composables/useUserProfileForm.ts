import type { FormSubmitEvent } from '@nuxt/ui'
import { type EditProfileSchema } from '../schemas/edit-profile.schema'
import { userService } from '../service/user.service'

export const useUserProfileForm = () => {
	const store = useAuthStore()

	const { handleLogout, mutateAuthData } = store
	const isModalOpen = ref<boolean>(false)

	const initialState = {
		email: store.user.email || '',
		password: '',
		confirmPassword: '',
		name: store.user.name || ''
	}

	const state = reactive<Partial<EditProfileSchema>>(initialState)

	const btnDisabled = computed(
		() =>
			state.email === store.user.email &&
			state.name === store.user.name &&
			!state.password &&
			!state.confirmPassword
	)

	const toast = useToast()

	const { mutate, isLoading } = useMutation({
		mutationFn: (data: EditProfileSchema) => userService.updateProfile(data),
		onSuccess: data => {
			toast.add({
				title: 'Успех',
				description: 'Данные профиля успешно изменены.',
				color: 'success'
			})
			mutateAuthData(data.data)
			Object.assign(state, initialState)
		}
	})
	async function onSubmit(event: FormSubmitEvent<EditProfileSchema>) {
		const data: Partial<EditProfileSchema> = {}

		if (event.data.email && event.data.email !== store.user.email) {
			data.email = event.data.email
		}

		if (event.data.name && event.data.name !== store.user.name) {
			data.name = event.data.name
		}

		if (
			event.data.password &&
			event.data.confirmPassword &&
			event.data.password === event.data.confirmPassword
		) {
			data.password = event.data.password
		}

		await mutate(data)
		Object.assign(state, initialState)

		isModalOpen.value = false
	}

	const { fetch: deleteAccount } = useQuery({
		queryFn: () => userService.deleteSelfAccount(),
		onSuccess: () => {
			toast.add({
				title: 'Success',
				description: 'Аккаунт был успешно удален.',
				color: 'neutral'
			})
			handleLogout()
		},
		onError: err => {
			toast.add({
				title: 'Error',
				description: err.message,
				color: 'error'
			})
		}
	})

	return {
		state,
		onSubmit,
		store,
		handleLogout,
		deleteAccount,
		btnDisabled,
		isModalOpen,
		isLoading
	}
}
