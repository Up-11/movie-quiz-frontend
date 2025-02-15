<script lang="ts" setup>
import { NuxtImg } from '#components'
import type { QuizCard } from '../types'

defineProps<{
	card: QuizCard
}>()
</script>

<template>
	<article
		ref="container"
		class="flex flex-col border shadow-2xl hover:scale-105 hover:border-violet-400 transition-all hover:shadow-violet-600 border-zinc-300 rounded-lg max-w-[350px]"
	>
		<NuxtImg
			class="rounded-tr-lg w-full h-1/2 rounded-tl-lg -z-10"
			:src="card.imageUrl"
		/>
		<div class="p-4 flex flex-col gap-2 justify-between h-full">
			<div class="flex gap-2 justify-between">
				<h1 class="font-bold">{{ card.name }}</h1>
				<h1 class="font-bold text-violet-600">{{ card.film }}</h1>
			</div>
			<p class="line-clamp-4">
				{{ card.description }}
			</p>
			<USeparator class="mt-auto" />
			<div class="flex gap-4 select-none mt-auto">
				<UTooltip text="Рейтинг">
					<div class="flex items-center">
						<Icon name="uil:star" size="20" />
						<span class="text-sm font-bold">{{ card.rating }}</span>
					</div>
				</UTooltip>
				<UTooltip text="Людей прошло">
					<div class="flex items-center">
						<Icon name="uil:users-alt" size="20" />
						<span class="text-sm font-bold">{{ card.usersComplitions }}</span>
					</div>
				</UTooltip>
				<UTooltip text="Вопросов">
					<div class="flex items-center">
						<Icon name="uil:shield-question" size="20" />
						<span class="text-sm font-bold">{{ card.questionsCount }}</span>
					</div>
				</UTooltip>
			</div>
		</div>
	</article>
</template>
