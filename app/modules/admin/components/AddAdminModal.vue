<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import {
	registerAdminSchema,
	type RegisterAdminSchema
} from '../schemas/register-admin.schema'
import { AuthService } from '~/modules/auth/service/auth.service'

const toast = useToast()

const emit = defineEmits(['refetch-admins'])

const isOpen = ref<boolean>(false)

const state = reactive<Partial<RegisterAdminSchema>>({
	email: '',
	password: '',
	name: ''
})

const { mutate } = useMutation({
	mutationFn: (data: RegisterAdminSchema) =>
		AuthService.addNewAdmin(data.email, data.name, data.password),
	onSuccess: () => {
		toast.add({
			title: 'Успех',
			description: 'Новый аккаунт администратора создан.',
			color: 'success'
		})
		isOpen.value = false
		emit('refetch-admins')
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})

async function onSubmit(event: FormSubmitEvent<RegisterAdminSchema>) {
	mutate(event.data)
	console.log(event.data)
}

const canSendData = computed(() => {
	return state.email && state.name && state.password
})
</script>

<template>
	<UModal v-model:open="isOpen" title="Добавить администратора">
		<div @click="isOpen = true">
			<slot name="trigger" />
		</div>

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
