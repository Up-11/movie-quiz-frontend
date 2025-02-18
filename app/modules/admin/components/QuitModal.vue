<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
	<UModal v-model:open="isOpen" title="Выйти из учетной записи?">
		<slot name="trigger" />

		<template #body>
			<div class="flex justify-between">
				<UButton variant="soft" size="xl">Выйти</UButton>
				<UButton @click="isOpen = false" variant="soft" size="xl"
					>Отмена</UButton
				>
			</div>
		</template>
	</UModal>
</template>

<style scoped></style>
