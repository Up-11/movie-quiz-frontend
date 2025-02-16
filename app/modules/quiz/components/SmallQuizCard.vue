<script lang="ts" setup>
import type { QuizCard } from '../types'

defineProps<{
	card: QuizCard
}>()
</script>

<template>
	<article
		class="flex border-2 w-full bg-black/50 hover:border-violet-400 transition-all border-zinc-300 rounded-lg cursor-pointer relative"
	>
		<UBadge
			v-if="card.completed"
			color="success"
			class="absolute -top-3 -right-5"
			>Пройдено</UBadge
		>

		<div class="w-[150px] flex flex-col justify-center">
			<NuxtImg class="object-center max-w-[150px]" :src="card.imageUrl" />
		</div>
		<div class="p-4 flex flex-col gap-2 justify-between h-full">
			<div class="flex gap-2 justify-between">
				<h1 class="font-bold text-sm">{{ card.name }}</h1>
				<h1 class="font-bold text-violet-200 text-xs">{{ card.film }}</h1>
			</div>
			<p class="line-clamp-2 text-sm">
				{{ card.description }}
			</p>
		</div>
	</article>
</template>

<style scoped></style>
