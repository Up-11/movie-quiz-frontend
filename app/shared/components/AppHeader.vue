<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const userStore = useUserStore()
</script>

<template>
	<header
		class="flex fixed inset-x-0 z-50 justify-between items-center border-zinc-200 border-b bg-black/50 backdrop-blur-2xl p-2"
	>
		<NuxtLink :to="ROUTES.allQuizzes">
			<h1 class="font-bold text-3xl max-md:text-xl uppercase select-none">
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
				<span class="hidden md:inline">Найти интересующую викторину</span>
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
				<USlideover title="Профиль" v-if="userStore.isAuth">
					<UButton size="lg" icon="uil:user" variant="ghost" color="primary"
						>Профиль</UButton
					>
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
					>Вход в аккаунт</UButton
				>
			</div>
		</nav>
		<nav class="md:hidden">
			<USlideover title="Профиль" v-if="userStore.isAuth">
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
