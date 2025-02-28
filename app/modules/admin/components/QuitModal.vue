<script lang="ts" setup>
import { ROUTES } from '~/shared/config/routes'

const isOpen = ref(false)
const emit = defineEmits(['account-logout'])
const router = useRouter()

const handleAdminLogout = () => {
	emit('account-logout')
	router.replace(ROUTES.allQuizzes)
}
</script>

<template>
	<UModal v-model:open="isOpen" title="Выйти из учетной записи?">
		<slot name="trigger" />

		<template #body>
			<div class="flex justify-between">
				<UButton @click="handleAdminLogout" variant="soft" size="xl">
					Выйти
				</UButton>
				<UButton variant="soft" size="xl" @click="isOpen = false">
					Отмена
				</UButton>
			</div>
		</template>
	</UModal>
</template>

<style scoped></style>
