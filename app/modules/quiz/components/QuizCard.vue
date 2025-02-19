<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { QuizCard } from '../types'
import VanillaTilt from 'vanilla-tilt'
import { ROUTES } from '~/shared/config/routes'

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
			scale: 1.05
		})
	}
})
</script>

<template>
	<NuxtLink :to="ROUTES.quiz(card.id)">
		<article
			class="relative flex h-full max-w-[350px] cursor-pointer flex-col rounded-lg border-2 border-zinc-300 bg-black/50 shadow-2xl backdrop-blur-2xl transition-all hover:border-violet-400 hover:shadow-violet-600"
			ref="cardRef"
		>
			<UBadge
				v-if="card.completed"
				color="success"
				class="absolute -top-3 -right-5"
				>Пройдено</UBadge
			>

			<NuxtImg
				class="aspect-auto h-[200px] w-[313px] rounded-tl-lg rounded-tr-lg object-fill"
				width="100%"
				loading="lazy"
				height="auto"
				:src="card.imageUrl"
				:alt="card.name"
			/>
			<div class="flex h-full flex-col justify-between gap-2 p-4">
				<div class="flex items-center justify-between gap-2">
					<h1 class="font-bold">{{ card.name }}</h1>
					<h1 class="text-sm font-bold text-violet-200">{{ card.film }}</h1>
				</div>
				<p class="line-clamp-4">
					{{ card.description }}
				</p>
				<USeparator class="mt-auto" />
				<div class="mt-auto flex gap-4 select-none">
					<UTooltip text="Рейтинг">
						<URating :number="card.rating" />
					</UTooltip>
					<UTooltip text="Людей прошло">
						<div class="flex items-center">
							<Icon name="uil:users-alt" size="20" />
							<span class="text-sm font-bold">{{ card.usersCompletions }}</span>
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
	</NuxtLink>
</template>
