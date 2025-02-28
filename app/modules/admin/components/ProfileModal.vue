<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import {
	editAdminProfileSchema,
	type EditAdminProfileSchema
} from '../schemas/edit-admin-profile.schema'

const store = useAuthStore()

const { user } = store

const state = reactive<Partial<EditAdminProfileSchema>>({
	email: user.email || '',
	password: '',
	name: user.name || ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<EditAdminProfileSchema>) {
	if (state.email === user.email && state.name === user.name) return
	toast.add({
		title: 'Success',
		description: 'The form has been submitted.',
		color: 'success'
	})
	console.log(event.data)
}
</script>

<template>
	<UModal title="Админ | Личные данные">
		<slot name="trigger" />

		<template #body>
			<UForm
				:schema="editAdminProfileSchema"
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

				<UFormField label="Пароль" name="password">
					<UInput class="w-full" v-model="state.password" type="password" />
				</UFormField>

				<UFormField label="Повторите пароль" name="confirmPassword">
					<UInput
						class="w-full"
						v-model="state.confirmPassword"
						type="password"
					/>
				</UFormField>

				<UButton type="submit"> Обновить </UButton>
			</UForm>
		</template>
	</UModal>
</template>

<style scoped></style>
