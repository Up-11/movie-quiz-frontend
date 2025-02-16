<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const userStore = useUserStore()
</script>

<template>
	<aside
		class="p-4 fixed w-[300px] h-full border-r border-zinc-200 bg-black/50 backdrop-blur-2xl"
	>
		<div>
			<h1 class="font-bold text-3xl uppercase select-none text-violet-50">
				Фильмонафт
			</h1>
		</div>
		<nav class="flex flex-col justify-between gap-1 mt-5 h-full">
			<div>
				<UButton
					class="w-full"
					size="lg"
					variant="ghost"
					:to="ROUTES.allQuizzes"
					color="primary"
					>Все викторины</UButton
				>
			</div>

			<div class="mb-14">
				<UButton
					class="w-full"
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
					class="w-full"
					icon="uil:signin"
					variant="ghost"
					color="primary"
					:to="ROUTES.authorization"
					>Вход в аккаунт</UButton
				>
			</div>
		</nav>
	</aside>
</template>

<style scoped></style>
