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
	<div :class="'h-full flex-col items-center justify-center gap-5'">
		<div class="relative mt-5 flex items-center justify-center gap-4">
			<NuxtImg
				:src="formatUrl(question.imageUrl)"
				class="rounded-sm"
				width="500"
				alt="Question Image"
			/>
		</div>
		<div class="flex items-center gap-4">
			<h1 class="mt-3 text-3xl font-bold">{{ question.question }}</h1>
			<UPopover v-if="hasAnswer">
				<UButton
					variant="soft"
					size="lg"
					icon="uil:question-circle"
					class="self-center"
				/>
				<template #content>
					<div class="p-4">{{ question.description }}</div>
				</template>
			</UPopover>
		</div>
		<div class="mt-5 flex flex-col items-center justify-center gap-5">
			<VariantComponent
				v-for="item in itemsWithLetters"
				@create-answer="createUserAnswer"
				:has-answer="hasAnswer"
				:key="item.id"
				:variant="item"
				:should-show-confetti="isAnswerCorrect(item)"
				:is-correct="showCorrectAnswer === item.id"
				:is-failed="isAnswerFailed(item)"
			/>
			<UButton
				:disabled="!hasAnswer"
				@click="nextQuestion"
				variant="soft"
				class="mb-20 rounded-2xl px-24 py-4 text-2xl"
			>
				{{ btnText }}
			</UButton>
		</div>
	</div>
</template>
