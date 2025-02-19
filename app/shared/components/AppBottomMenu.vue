<script lang="ts" setup>
import { ROUTES } from '../config/routes'
</script>

<template>
	<aside
		class="fixed bottom-0 z-10 h-16 w-full border-t border-zinc-200 bg-black/50 p-3 pb-5 backdrop-blur-2xl"
	>
		<nav class="flex items-center justify-between gap-2">
			<div class="flex flex-col items-center justify-center">
				<UButton
					icon="uil:home-alt"
					size="sm"
					variant="ghost"
					:to="ROUTES.admin.index"
					color="primary"
				/>
				<p class="text-[10px] text-violet-200">Главная</p>
			</div>
			<div class="flex flex-col items-center justify-center">
				<UButton
					icon="uil:chart"
					size="sm"
					variant="ghost"
					:to="ROUTES.admin.quizzes"
					color="primary"
				/>
				<p class="text-[10px] text-violet-200">Викторины</p>
			</div>
			<div class="flex flex-col items-center justify-center">
				<UButton
					size="sm"
					variant="ghost"
					icon="uil:chart-line"
					:to="ROUTES.admin.users"
					color="primary"
				/>
				<p class="text-[10px] text-violet-200">Игроки</p>
			</div>
			<div class="flex flex-col items-center justify-center">
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
					<div class="flex flex-col items-center justify-center">
						<UButton icon="uil:pen" size="sm" variant="ghost" color="primary" />
						<p class="text-[10px] text-violet-200">Профиль</p>
					</div>
				</template>
			</ProfileModal>
			<QuitModal>
				<template #trigger>
					<div class="flex flex-col items-center justify-center">
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
