<script lang="ts" setup>
import { ROUTES } from '~/shared/config/routes'
import type { IQuizDto } from '../types'

defineProps<{
	card: IQuizDto
}>()
</script>

<template>
	<NuxtLink
		:to="ROUTES.quiz(card.id)"
		class="relative flex w-full cursor-pointer rounded-lg border-2 border-zinc-300 bg-black/50 transition-all hover:border-violet-400"
	>
		<UBadge
			v-if="card.completed"
			color="success"
			class="absolute -top-3 -right-5"
			>Пройдено</UBadge
		>

		<div class="flex w-full max-w-[150px] flex-col justify-center">
			<NuxtImg
				class="w-full max-w-[150px] object-center"
				:src="formatUrl(card.imageUrl)"
			/>
		</div>
		<div class="flex h-full flex-col justify-between gap-2 p-4">
			<div class="flex items-center justify-between gap-2">
				<h1 class="text-sm font-bold">{{ card.name }}</h1>
				<h1 class="text-xs font-bold text-violet-200">{{ card.film.title }}</h1>
			</div>
			<p class="line-clamp-2 text-sm">
				{{ card.description }}
			</p>
		</div>
	</NuxtLink>
</template>

<style scoped></style>
