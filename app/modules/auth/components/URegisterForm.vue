<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { registerSchema, type RegisterSchema } from '../schemas/register.schema'
import { AuthService } from '../service/auth.service'
import { USER_ROLE } from '~/shared/types/common.types'
import { ROUTES } from '~/shared/config/routes'

const state = reactive<Partial<RegisterSchema>>({
	email: '',
	password: '',
	confirmPassword: '',
	name: ''
})

const toast = useToast()

const router = useRouter()

const { mutate: register, isLoading } = useMutation({
	mutationFn: (data: RegisterSchema) => {
		return AuthService.register(
			data.email,
			data.password,
			data.name,
			USER_ROLE.USER
		)
	},
	onSuccess: () => {
		toast.add({
			title: 'Успех',
			description: 'Регистрация успешно выполнена.',
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
async function onSubmit(event: FormSubmitEvent<RegisterSchema>) {
	register(event.data)
}

const canSendData = computed(() => {
	return (
		state.email &&
		state.name &&
		state.password &&
		state.confirmPassword &&
		state.confirmPassword === state.password
	)
})
</script>

<template>
	<UForm
		:schema="registerSchema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
		<UFormField label="Имя" name="name">
			<UInput class="w-full" v-model="state.name" />
		</UFormField>
		<UFormField label="Электронная почта" name="email">
			<UInput class="w-full" v-model="state.email" />
		</UFormField>

		<UFormField
			label="Пароль"
			name="password"
			description="Пароль должен содержать не менее 4 символов."
		>
			<UInput class="w-full" v-model="state.password" type="password" />
		</UFormField>

		<UFormField
			label="Повторите пароль"
			name="confirmPassword"
			description="Убедитесь, что оба пароля совпадают."
		>
			<UInput class="w-full" v-model="state.confirmPassword" type="password" />
		</UFormField>

		<UButton :disabled="!canSendData" :loading="isLoading" type="submit">
			Зарегистрироваться
		</UButton>
	</UForm>
</template>
