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
		<h1 class="font-bold text-gray-400 text-xs mb-2">id: {{ quiz.id }}</h1>
		<div class="flex flex-col sm:flex-row items-center justify-between w-full">
			<p class="w-full sm:w-1/3 text-center sm:text-left mb-2 sm:mb-0">
				{{ quiz.name }}
			</p>
			<div
				class="w-full sm:w-1/3 flex items-center justify-center gap-5 mb-2 sm:mb-0"
			>
				<UTooltip text="Рейтинг">
					<URating :number="quiz.rating" />
				</UTooltip>
				<UTooltip text="Людей прошло">
					<div class="flex items-center">
						<Icon name="uil:users-alt" size="20" />
						<span class="text-sm font-bold text-white cursor-default ml-1">
							{{ quiz.usersCompletions }}
						</span>
					</div>
				</UTooltip>
				<UTooltip text="Вопросов">
					<div class="flex items-center">
						<Icon name="uil:shield-question" size="20" />
						<span class="text-sm font-bold text-white cursor-default ml-1">
							{{ quiz.questionsCount }}
						</span>
					</div>
				</UTooltip>
			</div>
			<p class="w-full sm:w-1/3 text-center sm:text-right">
				{{ quiz.film }}
			</p>
		</div>
	</div>
</template>
