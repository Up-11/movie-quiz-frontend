<script setup lang="ts">
import type { QuizCard } from '~/modules/quiz/types'

defineProps<{
	quiz: Pick<
		QuizCard,
		| 'id'
		| 'imageUrl'
		| 'questionsCount'
		| 'name'
		| 'rating'
		| 'film'
		| 'usersCompletions'
	>
}>()
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
					<URating :number="quiz.rating" />
				</UTooltip>
				<UTooltip text="Людей прошло">
					<div class="flex items-center">
						<Icon name="uil:users-alt" size="20" />
						<span class="ml-1 cursor-default text-sm font-bold text-white">
							{{ quiz.usersCompletions }}
						</span>
					</div>
				</UTooltip>
				<UTooltip text="Вопросов">
					<div class="flex items-center">
						<Icon name="uil:shield-question" size="20" />
						<span class="ml-1 cursor-default text-sm font-bold text-white">
							{{ quiz.questionsCount }}
						</span>
					</div>
				</UTooltip>
			</div>
			<p class="w-full text-center sm:w-1/3 sm:text-right">
				{{ quiz.film }}
			</p>
		</div>
	</div>
</template>
