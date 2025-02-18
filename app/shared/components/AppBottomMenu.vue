<script lang="ts" setup>
import { ROUTES } from '../config/routes'
</script>

<template>
	<aside
		class="fixed w-full bottom-0 h-16 p-3 pb-5 z-10 border-t border-zinc-200 bg-black/50 backdrop-blur-2xl"
	>
		<nav class="flex items-center justify-between gap-2">
			<div class="flex flex-col justify-center items-center">
				<UButton
					icon="uil:home-alt"
					size="sm"
					variant="ghost"
					:to="ROUTES.admin.index"
					color="primary"
				/>
				<p class="text-[10px] text-violet-200">Главная</p>
			</div>
			<div class="flex flex-col justify-center items-center">
				<UButton
					icon="uil:chart"
					size="sm"
					variant="ghost"
					:to="ROUTES.admin.quizzes"
					color="primary"
				/>
				<p class="text-[10px] text-violet-200">Викторины</p>
			</div>
			<div class="flex flex-col justify-center items-center">
				<UButton
					size="sm"
					variant="ghost"
					icon="uil:chart-line"
					:to="ROUTES.admin.users"
					color="primary"
				/>
				<p class="text-[10px] text-violet-200">Игроки</p>
			</div>
			<div class="flex flex-col justify-center items-center">
				<UButton
					size="sm"
					icon="uil:plus"
					variant="ghost"
					:to="ROUTES.admin.addAdmin"
					color="primary"
				/>
				<p class="text-[10px] text-violet-200">Админы</p>
			</div>
			<ProfileModal>
				<template #trigger>
					<div class="flex flex-col justify-center items-center">
						<UButton icon="uil:pen" size="sm" variant="ghost" color="primary" />
						<p class="text-[10px] text-violet-200">Профиль</p>
					</div>
				</template>
			</ProfileModal>
			<QuitModal>
				<template #trigger>
					<div class="flex flex-col justify-center items-center">
						<UButton
							icon="uil:user"
							size="sm"
							variant="ghost"
							color="primary"
						/>
						<p class="text-[10px] text-violet-200">Выход</p>
					</div>
				</template>
			</QuitModal>
		</nav>
	</aside>
</template>
