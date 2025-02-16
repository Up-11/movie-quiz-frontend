<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { NuxtImg } from '#components'
import type { QuizCard } from '../types'
import VanillaTilt from 'vanilla-tilt'

defineProps<{
	card: QuizCard
}>()

const cardRef = ref<HTMLElement | null>(null)

onMounted(() => {
	if (cardRef.value) {
		VanillaTilt.init(cardRef.value, {
			max: 10,
			speed: 500,
			glare: true,
			'max-glare': 0.3,
			scale: 1.05,
		})
	}
})
</script>

<template>
	<article
		ref="cardRef"
		class="flex flex-col border-2 shadow-2xl backdrop-blur-2xl bg-black/50 hover:border-violet-400 transition-all hover:shadow-violet-600 border-zinc-300 rounded-lg max-w-[350px] cursor-pointer relative"
	>
		<UBadge
			v-if="card.completed"
			color="success"
			class="absolute -top-3 -right-5"
			>Пройдено</UBadge
		>

		<NuxtImg
			class="rounded-tr-lg aspect-auto w-full h-1/2 rounded-tl-lg object-fill"
			width="100%"
			loading="lazy"
			height="auto"
			:src="card.imageUrl"
			:alt="card.name"
		/>
		<div class="p-4 flex flex-col gap-2 justify-between h-full">
			<div class="flex gap-2 justify-between">
				<h1 class="font-bold">{{ card.name }}</h1>
				<h1 class="font-bold text-violet-200 text-sm">{{ card.film }}</h1>
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
