<script setup lang="ts">
import type { IQuizDto, QuizCard } from '~/modules/quiz/types'

const props = defineProps<{
	quiz: IQuizDto
}>()

const rating = computed(() => (props.quiz.rating ? props.quiz.rating : 0))
</script>

<template>
	<div class="w-full">
		<h1 class="mb-2 text-xs font-bold text-gray-400">id: {{ quiz.id }}</h1>
		<div class="flex w-full flex-col items-center justify-between sm:flex-row">
			<p class="mb-2 w-full text-center sm:mb-0 sm:w-1/3 sm:text-left">
				{{ quiz.name }}
			</p>
			<div
				class="mb-2 flex w-full items-center justify-center gap-5 sm:mb-0 sm:w-1/3"
			>
				<UTooltip text="Рейтинг">
					<URating :number="rating" />
				</UTooltip>
				<UTooltip text="Людей прошло">
					<div class="flex items-center">
						<Icon name="uil:users-alt" size="20" />
						<span class="ml-1 cursor-default text-sm font-bold text-white">
							{{ quiz._count.completions }}
						</span>
					</div>
				</UTooltip>
				<UTooltip text="Вопросов">
					<div class="flex items-center">
						<Icon name="uil:shield-question" size="20" />
						<span class="ml-1 cursor-default text-sm font-bold text-white">
							{{ quiz._count.questions }}
						</span>
					</div>
				</UTooltip>
			</div>
			<p class="w-full text-center sm:w-1/3 sm:text-right">
				{{ quiz.film.title }}
			</p>
		</div>
	</div>
</template>
