<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { loginSchema, type LoginSchema } from '../schemas/login.schema'
import { AuthService } from '../service/auth.service'
import { ROUTES } from '~/shared/config/routes'
import { USER_ROLE } from '~/shared/types/common.types'

const state = reactive<Partial<LoginSchema>>({
	name: '',
	email: '',
	password: ''
})

const toast = useToast()

const router = useRouter()

const { mutate: login } = useMutation({
	mutationFn: (data: LoginSchema) => {
		return AuthService.login(
			data.email,
			data.password,
			data.name,
			USER_ROLE.USER
		)
	},
	onSuccess: () => {
		toast.add({
			title: 'Успех',
			description: 'Логин успешно выполнен.',
			color: 'success'
		})
		router.push(ROUTES.allQuizzes)
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})
async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
	login(event.data)
}

const canSendData = computed(() => {
	return state.email && state.password && state.name
})
</script>

<template>
	<UForm
		:schema="loginSchema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField label="Имя" name="name">
			<UInput class="w-full" v-model="state.name" />
		</UFormField>
		<UFormField
			label="Электронная почта"
			name="email"
			description="Убедитесь, что почта указана правильно."
		>
			<UInput class="w-full" v-model="state.email" />
		</UFormField>

		<UFormField
			label="Пароль"
			name="password"
			description="Пароль должен содержать не менее 6 символов."
		>
			<UInput class="w-full" v-model="state.password" type="password" />
		</UFormField>

		<UButton :disabled="!canSendData" type="submit"> Войти </UButton>
	</UForm>
</template>
