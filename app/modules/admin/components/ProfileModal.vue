<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import {
	editAdminProfileSchema,
	type EditAdminProfileSchema
} from '../schemas/edit-admin-profile.schema'

const { state, onSubmit, btnDisabled, deleteAccount, isLoading } =
	useUserProfileForm()
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

				<div class="flex justify-between">
					<UButton :disabled="btnDisabled" :loading="isLoading" type="submit">
						Обновить
					</UButton>
					<QuitModal
						@account-logout="deleteAccount"
						title="Удалить аккаунт?"
						button-text="Удалить"
					>
						<template #trigger>
							<UButton> Удалить аккаунт </UButton>
						</template>
					</QuitModal>
				</div>
			</UForm>
		</template>
	</UModal>
</template>

<style scoped></style>
