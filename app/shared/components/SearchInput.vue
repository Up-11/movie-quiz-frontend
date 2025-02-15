<script setup lang="ts">
const value = ref('')
</script>

<template>
	<UInput
		v-model="value"
		placeholder="Найдите интересующую вас викторину"
		variant="soft"
		size="xl"
		icon="uil:search"
	>
		<template #trailing v-if="value.length">
			<UButton
				color="neutral"
				variant="link"
				size="sm"
				icon="uil:times"
				aria-label="Clear input"
				@click="value = ''"
			/>
		</template>
	</UInput>
</template>
<style scoped></style>
