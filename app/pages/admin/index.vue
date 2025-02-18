<script lang="ts" setup>
import { ROUTES } from '~/shared/config/routes'

definePageMeta({
	layout: 'admin',
})
</script>

<template>
	<section class="lg:p-10 p-2">
		<h1 class="text-2xl font-bold text-violet-50">Меню администратора</h1>

		<div class="grid grid-cols-1 lg:grid-cols-4 gap-10 p-10">
			<div
				class="bg-black/90 backdrop-blur-2xl col-span-2 gap-5 border justify-between border-zinc-200 p-4 rounded-lg flex flex-col"
			>
				<h2 class="text-xl font-bold text-white">Панель с пользователями</h2>
				<p class="text-zinc-300">Управление пользователями платформы</p>
				<UButton variant="soft" class="self-end" :to="ROUTES.admin.users"
					>Открыть</UButton
				>
			</div>

			<div
				class="bg-black/90 backdrop-blur-2xl col-span-2 justify-between gap-5 border border-zinc-200 p-4 rounded-lg flex flex-col"
			>
				<h2 class="text-xl font-bold text-white">Панель с викторинами</h2>
				<p class="text-zinc-300">
					Создание, редактирование и управление викторинами по фильмам
				</p>
				<UButton variant="soft" class="self-end" :to="ROUTES.admin.quizzes"
					>Открыть</UButton
				>
			</div>

			<div
				class="bg-black/90 justify-between backdrop-blur-2xl col-span-2 gap-5 border border-zinc-200 p-4 rounded-lg flex flex-col"
			>
				<h2 class="text-xl font-bold text-white">Панель создания викторины</h2>
				<p class="text-zinc-300">Создать новую викторину</p>
				<UButton variant="soft" class="self-end" :to="ROUTES.admin.createQuiz"
					>Открыть</UButton
				>
			</div>

			<div
				class="bg-black/90 justify-between backdrop-blur-2xl col-span-2 gap-5 border border-zinc-200 p-4 rounded-lg flex flex-col"
			>
				<h2 class="text-xl font-bold text-white">
					Панель со списком администраторов
				</h2>
				<p class="text-zinc-300">
					Добавление и удаление администраторов системы.
				</p>
				<UButton variant="soft" class="self-end" :to="ROUTES.admin.addAdmin"
					>Открыть</UButton
				>
			</div>

			<div
				class="bg-black/90 backdrop-blur-2xl col-span-2 justify-between gap-5 border border-zinc-200 p-4 rounded-lg flex flex-col"
			>
				<h2 class="text-xl font-bold text-white">Личные данные</h2>
				<p class="text-zinc-300">Редактирование личных данных</p>
				<ProfileModal>
					<template #trigger>
						<UButton variant="soft" class="self-end">Открыть</UButton>
					</template>
				</ProfileModal>
			</div>
			<div
				class="bg-black/90 justify-between col-span-2 backdrop-blur-2xl gap-5 border border-zinc-200 p-4 rounded-lg flex flex-col"
			>
				<h2 class="text-xl font-bold text-white">Выйти с аккаунта</h2>
				<p class="text-zinc-300">Выход из учетной записи.</p>
				<QuitModal>
					<template #trigger>
						<UButton variant="soft" class="self-end">Выход</UButton>
					</template>
				</QuitModal>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
