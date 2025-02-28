<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const userStore = useAuthStore()
</script>

<template>
	<header
		class="fixed inset-x-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-black/50 p-2 backdrop-blur-2xl"
	>
		<NuxtLink :to="ROUTES.allQuizzes">
			<h1 class="text-3xl font-bold uppercase select-none max-md:text-xl">
				Фильмонафт
			</h1>
		</NuxtLink>

		<SearchModal class="max-md:hidden">
			<UButton
				variant="soft"
				icon="uil:search"
				size="sm"
				class="cursor-pointer"
				title="Найти интересующую викторину"
			>
				<span class="hidden md:inline"> Найти интересующую викторину </span>
			</UButton>
		</SearchModal>

		<SearchModal class="md:hidden">
			<UButton
				variant="soft"
				icon="uil:search"
				size="sm"
				class="cursor-pointer"
				title="Найти"
			/>
		</SearchModal>

		<nav class="flex max-md:hidden">
			<div>
				<USlideover v-if="userStore.isAuth" title="Профиль">
					<UButton size="lg" icon="uil:user" variant="ghost" color="primary">
						Профиль
					</UButton>
					<template #body>
						<UserProfile />
					</template>
				</USlideover>
				<UButton
					v-else
					size="lg"
					icon="uil:signin"
					variant="ghost"
					color="primary"
					:to="ROUTES.authorization"
				>
					Вход в аккаунт
				</UButton>
			</div>
		</nav>
		<nav class="md:hidden">
			<USlideover v-if="userStore.isAuth" title="Профиль">
				<UButton size="lg" icon="uil:user" variant="ghost" color="primary" />
				<template #body>
					<UserProfile />
				</template>
			</USlideover>

			<UButton
				v-else
				size="lg"
				icon="uil:signin"
				variant="ghost"
				color="primary"
				:to="ROUTES.authorization"
			/>
		</nav>
	</header>
</template>
