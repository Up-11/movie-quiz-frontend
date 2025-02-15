<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const userStore = useUserStore()
</script>

<template>
	<header
		class="flex justify-between rounded-lg items-center border-zinc-200 border bg-zinc-100/75 backdrop-blur-sm p-2"
	>
		<div>
			<h1 class="font-bold text-3xl uppercase select-none">Фильмонафт</h1>
		</div>
		<div class="flex">
			<UButton size="lg" variant="ghost" :to="ROUTES.allQuizzes" color="primary"
				>Все викторины</UButton
			>
			<UButton
				v-if="userStore.isAuth"
				size="lg"
				icon="uil:user"
				variant="ghost"
				color="primary"
				>Профиль</UButton
			>
			<UButton
				v-else
				size="lg"
				icon="uil:signin"
				variant="ghost"
				color="primary"
				:to="ROUTES.authorization"
				>Вход в аккаунт</UButton
			>
		</div>
	</header>
</template>
