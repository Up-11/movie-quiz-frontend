<script lang="ts" setup>
defineProps<{ number: number }>()
</script>

<template>
	<div class="flex items-center select-none">
		<Icon name="uil:star" size="20" />
		<span class="text-sm font-bold">{{ number }}</span>
	</div>
</template>

<style scoped></style>
