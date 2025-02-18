<script lang="ts" setup>
import { useUserProfileForm } from '../composables/useUserProfileForm'
import { editProfileSchema } from '../schemas/edit-profile.schema'

const { state, onSubmit, user } = useUserProfileForm()
</script>

<template>
	<div class="flex gap-3 justify-evenly">
		<div class="flex items-center flex-col gap-1">
			<h2 class="md:text-lg">Имя</h2>
			<USeparator />
			<h2 class="md:text-lg text-sm font-bold">{{ user.name }}</h2>
		</div>
		<div class="flex items-center flex-col gap-1">
			<h2 class="md:text-lg">Email</h2>
			<USeparator />
			<h2 class="md:text-lg text-sm font-bold">{{ user.email }}</h2>
		</div>
	</div>
	<UModal title="Редактирование профиля">
		<UButton size="sm" variant="soft">Изменить профиль</UButton>
		<template #body>
			<UForm
				:schema="editProfileSchema"
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
			</UForm></template
		>
	</UModal>
	<div class="flex flex-col gap-3">
		<UButton size="sm" variant="soft">Выйти</UButton>
	</div>
</template>

<style scoped></style>
