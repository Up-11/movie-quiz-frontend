<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'
import { ROUTES } from '~/shared/config/routes'
import type { IQuizDto } from '../types'

defineProps<{
	card: IQuizDto
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
			class="relative flex h-full  w-[300px] cursor-pointer flex-col rounded-lg border-2 border-zinc-300 bg-black/50 shadow-2xl backdrop-blur-2xl transition-all hover:border-violet-400 hover:shadow-violet-600"
			ref="cardRef"
		>
			<UBadge
				v-if="card.completed"
				color="success"
				class="absolute -top-3 -right-5"
				>Пройдено</UBadge
			>
			<div class="h-1/2 w-full">
				<NuxtImg
					crossorigin="anonymous"
					class="aspect-auto h-full w-full rounded-tl-lg rounded-tr-lg object-cover"
					width="100%"
					height="auto"
					:src="formatUrl(card.imageUrl)"
					:alt="card.name"
					:placeholder="'blur'"
					:loading="'lazy'"
					:img-style="{ objectFit: 'cover' }"
				/>
			</div>
			<div class="flex h-1/2 flex-col justify-between gap-2 p-4">
				<div class="flex items-center justify-between gap-2">
					<h1 class="font-bold">{{ card.name }}</h1>
					<h1 class="text-sm font-bold text-violet-200">
						{{ card.film.title }}
					</h1>
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
							<span class="text-sm font-bold">{{
								card._count.completions
							}}</span>
						</div>
					</UTooltip>
					<UTooltip text="Вопросов">
						<div class="flex items-center">
							<Icon name="uil:shield-question" size="20" />
							<span class="text-sm font-bold">{{ card._count.questions }}</span>
						</div>
					</UTooltip>
				</div>
			</div>
		</article>
	</NuxtLink>
</template>
