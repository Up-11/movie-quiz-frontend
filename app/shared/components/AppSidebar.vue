<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const userStore = useUserStore()
</script>

<template>
	<aside
		class="p-4 pb-14 fixed w-[300px] h-full border-r border-zinc-200 bg-black/50 backdrop-blur-2xl"
	>
		<NuxtLink :to="ROUTES.admin.index" class="flex flex-col gap-1">
			<h1 class="font-bold text-3xl uppercase select-none text-violet-50">
				Фильмонафт
			</h1>
			<h1 class="font-medium text-xl uppercase select-none text-violet-300">
				Администратор
			</h1>
		</NuxtLink>
		<nav class="flex flex-col justify-between gap-2 mt-5 h-full">
			<div class="flex flex-col gap-3">
				<UButton
					class="w-full"
					icon="uil:chart"
					size="lg"
					variant="ghost"
					:to="ROUTES.admin.quizzes"
					color="primary"
					>Мониторинг викторин</UButton
				>
				<UButton
					class="w-full"
					size="lg"
					variant="ghost"
					icon="uil:plus"
					:to="ROUTES.admin.createQuiz"
					color="primary"
					>Создание викторины</UButton
				>
				<UButton
					class="w-full"
					size="lg"
					variant="ghost"
					icon="uil:chart-line"
					:to="ROUTES.admin.users"
					color="primary"
					>Мониторинг игроков</UButton
				>

				<UButton
					class="w-full"
					size="lg"
					icon="uil:plus"
					variant="ghost"
					:to="ROUTES.admin.addAdmin"
					color="primary"
					>Администраторы</UButton
				>
			</div>

			<div class="mb-14 flex flex-col gap-2">
				<ProfileModal>
					<template #trigger>
						<UButton
							icon="uil:pen"
							class="w-full"
							size="lg"
							variant="ghost"
							color="primary"
							>Изменить данные</UButton
						>
					</template>
				</ProfileModal>
				<QuitModal>
					<template #trigger>
						<UButton
							class="w-full"
							size="lg"
							icon="uil:user"
							variant="ghost"
							color="primary"
							>Выйти из аккаунта</UButton
						>
					</template>
				</QuitModal>
			</div>
		</nav>
	</aside>
</template>

<style scoped></style>
