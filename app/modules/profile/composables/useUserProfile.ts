import type { FormSubmitEvent } from '@nuxt/ui'
import { type EditProfileSchema } from '../schemas/edit-profile.schema'

export const useUserProfile = () => {
	const store = useUserStore()

	const { user } = store

	const state = reactive<Partial<EditProfileSchema>>({
		email: user.email || '',
		password: '',
		confirmPassword: '',
		name: user.name || '',
	})

	const toast = useToast()
	async function onSubmit(event: FormSubmitEvent<EditProfileSchema>) {
		if (state.email === user.email && state.name === user.name) return
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		})
		console.log(event.data)
	}

	return { state, onSubmit, user }
}
