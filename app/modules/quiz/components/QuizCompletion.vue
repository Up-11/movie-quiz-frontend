<script lang="ts" setup>
import { assignLettersToItems } from '~/shared/utils/common'
import type { Question } from '../types'
import { useQuizCompletion } from '../composables/useQuizCompletion'

const props = defineProps<{
	question: Question
}>()

const itemsWithLetters = computed(() =>
	assignLettersToItems(props.question.answers)
)

const {
	nextQuestion,
	isLastQuestion,
	createUserAnswer,
	isAnswerFailed,
	hasAnswer,
	showCorrectAnswer,
	isAnswerCorrect
} = useQuizCompletion()

const btnText = computed(() => (isLastQuestion.value ? 'Завершить' : 'Дальше!'))
</script>

<template>
	<div
		class="mt-44 flex flex-col items-center justify-center gap-5 px-4 sm:px-6 lg:px-8"
	>
		<div class="relative mt-5 flex flex-col items-center gap-4">
			<NuxtImg
				:src="formatUrl(question.imageUrl)"
				class="h-auto max-h-[300px] w-auto max-w-full rounded-sm object-fill"
				width="500"
				alt="Question Image"
			/>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-4 text-center">
			<h1 class="mt-3 text-2xl font-bold sm:text-3xl">
				{{ question.question }}
			</h1>
			<UPopover v-if="hasAnswer">
				<UButton
					variant="soft"
					size="lg"
					icon="uil:question-circle"
					class="self-center"
				/>
				<template #content>
					<div class="p-4 text-sm sm:text-base">{{ question.description }}</div>
				</template>
			</UPopover>
		</div>

		<div class="mt-5 flex w-full flex-col items-center justify-center gap-5">
			<VariantComponent
				v-for="item in itemsWithLetters"
				@create-answer="createUserAnswer"
				:has-answer="hasAnswer"
				:key="item.id"
				:variant="item"
				:should-show-confetti="isAnswerCorrect(item)"
				:is-correct="showCorrectAnswer === item.id"
				:is-failed="isAnswerFailed(item)"
				class="w-full max-w-lg"
			/>

			<UButton
				:disabled="!hasAnswer"
				@click="nextQuestion"
				variant="soft"
				class="mb-10 w-full max-w-xs rounded-2xl px-6 py-3 text-lg sm:max-w-md sm:text-xl lg:max-w-lg"
			>
				{{ btnText }}
			</UButton>
		</div>
	</div>
</template>
