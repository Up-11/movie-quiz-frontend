<script lang="ts" setup>
definePageMeta({
	title: 'Создать викторину',
	layout: 'admin'
})
</script>

<template>
	<section class="flex flex-col gap-5 p-4">
		<header class="flex justify-between p-4">
			<h1 class="text-bold text-2xl">Создать новую викторину</h1>
		</header>
		<BaseCreation />
	</section>
</template>

<style scoped></style>
