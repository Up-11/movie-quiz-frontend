<script lang="ts" setup></script>

<template>
	<UModal title="Админ | Личные данные">
		<slot name="trigger" />

		<template #body>
			<Placeholder class="h-48" />
		</template>
	</UModal>
</template>

<style scoped></style>
