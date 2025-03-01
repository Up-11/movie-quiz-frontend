<script lang="ts" setup>
import { useUserProfileForm } from '../composables/useUserProfileForm'
import { editProfileSchema } from '../schemas/edit-profile.schema'

const {
	state,
	onSubmit,
	store,
	handleLogout,
	deleteAccount,
	btnDisabled,
	isModalOpen,
	isLoading
} = useUserProfileForm()
</script>

<template>
	<div class="flex justify-evenly gap-3">
		<div class="flex flex-col items-center gap-1">
			<h2 class="md:text-lg">Имя</h2>
			<USeparator />
			<h2 class="text-sm font-bold md:text-lg">
				{{ store.user.name }}
			</h2>
		</div>
		<div class="flex flex-col items-center gap-1">
			<h2 class="md:text-lg">Email</h2>
			<USeparator />
			<h2 class="text-sm font-bold md:text-lg">
				{{ store.user.email }}
			</h2>
		</div>
	</div>
	<UModal v-model:open="isModalOpen" title="Редактирование профиля">
		<UButton @click="isModalOpen = true" size="sm" variant="soft">
			Изменить профиль
		</UButton>
		<template #body>
			<UForm
				:schema="editProfileSchema"
				:state="state"
				class="space-y-4"
				@submit="onSubmit"
			>
				<UFormField label="Имя" name="name">
					<UInput v-model="state.name" class="w-full" />
				</UFormField>
				<UFormField label="Электронная почта" name="email">
					<UInput v-model="state.email" class="w-full" />
				</UFormField>

				<UFormField label="Пароль" name="password">
					<UInput v-model="state.password" class="w-full" type="password" />
				</UFormField>

				<UFormField label="Повторите пароль" name="confirmPassword">
					<UInput
						v-model="state.confirmPassword"
						class="w-full"
						type="password"
					/>
				</UFormField>
				<div class="flex justify-between">
					<UButton :isLoading="isLoading" :disabled="btnDisabled" type="submit">
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
	<div class="flex flex-col gap-3">
		<QuitModal @account-logout="handleLogout">
			<template #trigger>
				<UButton size="sm" variant="soft"> Выйти </UButton>
			</template>
		</QuitModal>
	</div>
</template>

<style scoped></style>
