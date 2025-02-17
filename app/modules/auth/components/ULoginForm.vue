<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { loginSchema, type LoginSchema } from '../schemas/login.schema'

const state = reactive<Partial<LoginSchema>>({
	email: '',
	password: '',
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
	toast.add({
		title: 'Success',
		description: 'The form has been submitted.',
		color: 'success',
	})
	console.log(event.data)
}

const canSendData = computed(() => {
	return state.email && state.password
})
</script>

<template>
	<UForm
		:schema="loginSchema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
	>
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
