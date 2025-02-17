<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { registerSchema, type RegisterSchema } from '../schemas/register.schema'

const state = reactive<Partial<RegisterSchema>>({
	email: '',
	password: '',
	confirmPassword: '',
	name: '',
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<RegisterSchema>) {
	toast.add({
		title: 'Success',
		description: 'The form has been submitted.',
		color: 'success',
	})
	console.log(event.data)
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

		<UButton :disabled="!canSendData" type="submit">
			Зарегистрироваться
		</UButton>
	</UForm>
</template>
