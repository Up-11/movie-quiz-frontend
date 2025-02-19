<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import {
	registerAdminSchema,
	type RegisterAdminSchema,
} from '../schemas/register-admin.schema'

const state = reactive<Partial<RegisterAdminSchema>>({
	email: '',
	password: '',
	name: '',
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<RegisterAdminSchema>) {
	toast.add({
		title: 'Success',
		description: 'The form has been submitted.',
		color: 'success',
	})
	console.log(event.data)
}

const canSendData = computed(() => {
	return state.email && state.name && state.password
})
</script>

<template>
	<UModal title="Добавить администратора">
		<slot name="trigger" />

		<template #body>
			<UForm
				:schema="registerAdminSchema"
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

				<UButton :disabled="!canSendData" type="submit">
					Добавить администратора
				</UButton>
			</UForm>
		</template>
	</UModal>
</template>
