<script lang="ts" setup>
interface ITitleProps {
	title: string
}

defineProps<ITitleProps>()
</script>

<template>
	<h1 class="font-medium text-3xl">{{ title }}</h1>
</template>

<style scoped></style>
