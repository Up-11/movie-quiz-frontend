<script lang="ts" setup>
const store = useUserStore()

const { user } = store
</script>

<template>
	<aside class="flex flex-col gap-5">
		<h1 class="text-2xl">Личные данные</h1>
		<section class="flex justify-between gap-10">
			<div class="flex flex-col gap-3">
				<h2 class="text-lg font-bold">{{ user.name }}</h2>
				<h2 class="text-lg font-medium">{{ user.email }}</h2>
			</div>
			<div class="flex flex-col gap-3">
				<UButton size="sm" variant="soft">Изменить профиль</UButton>
				<UButton size="sm" variant="soft">Выйти</UButton>
			</div>
		</section>
	</aside>
</template>

<style scoped></style>
