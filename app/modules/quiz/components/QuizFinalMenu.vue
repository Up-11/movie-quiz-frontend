<script lang="ts" setup>
import { ROUTES } from '~/shared/config/routes'
import type { AnswerVariant, Question, QuizCard } from '../types'

interface IQuizFinalMenuProps {
	quiz: QuizCard
}
const props = defineProps<IQuizFinalMenuProps>()

const isShowResult = ref(false)

const btnText = computed(() =>
	isShowResult.value ? 'Скрыть ответы' : 'Показать ответы'
)

const iconName = computed(() =>
	isShowResult.value ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'
)

const {
	correctAnswers,
	failedAnswers,
	currentQuizAnswerList,
	clearUserAnswers,
	currentQuiz,
	deleteCachedQuizByQuiz
} = useQuizCompletion()

const correctAnswersPercent = computed(
	() =>
		(correctAnswers.value.length /
			(correctAnswers.value.length + failedAnswers.value.length)) *
		100
)

const currentAnswer = (question: Question) => {
	const answer = currentQuizAnswerList.value
		.filter(curr => curr.quizId === props.quiz.id)
		.map(curr => question.variants.find(q => q.id === curr.answer.id)?.variant)
	console.log(answer)
	return answer.filter(ans => ans !== undefined).toString()
}

onUnmounted(() => {
	clearUserAnswers()
	deleteCachedQuizByQuiz(currentQuiz.value)
})

//TODO Add a circle with a percent of correct answers
</script>

<template>
	<div class="container mx-auto px-4 py-6 pb-12">
		<div class="flex flex-wrap items-center justify-between">
			<h1 class="text-2xl font-bold md:text-3xl">{{ quiz.name }}</h1>
			<h2 class="text-lg font-semibold md:text-2xl">{{ quiz.film }}</h2>
		</div>
		<USeparator color="primary" />
		<div class="mt-4 flex flex-col gap-6">
			<div class="flex justify-between">
				<h1 class="text-2xl font-bold text-violet-200">Правильных ответов</h1>
				<h1 class="text-2xl font-bold text-violet-200">
					{{ correctAnswers.length }}
				</h1>
			</div>
			<div class="flex justify-between">
				<h1 class="text-2xl font-bold text-violet-200">Неправильных ответов</h1>
				<h1 class="text-2xl font-bold text-violet-200">
					{{ failedAnswers.length }}
				</h1>
			</div>
			<div class="flex justify-center">
				<h1 class="text-2xl font-bold text-violet-200">
					{{ correctAnswersPercent }}%
				</h1>
			</div>

			<section class="flex flex-col items-center justify-center gap-3">
				<UButton @click="isShowResult = !isShowResult" variant="ghost"
					>{{ btnText }}
					<Icon :name="iconName" />
				</UButton>

				<div
					v-if="isShowResult"
					class="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2"
				>
					<div
						v-for="(question, index) in quiz.questions"
						class="mx-auto flex min-h-80 w-full max-w-100 flex-col self-center rounded-xl bg-black/70 backdrop-blur-2xl"
					>
						<NuxtImg
							:src="question.imageUrl"
							class="h-[70%] w-full rounded-tl-lg rounded-tr-lg object-cover"
						/>
						<div class="flex h-full flex-col justify-between gap-4 p-4">
							<h1>Вопрос #{{ index + 1 }}: {{ question.question }}</h1>
							<USeparator color="neutral" />
							<h1>Вы ответили: {{ currentAnswer(question) }}</h1>
							<USeparator color="neutral" />
							<h1>Правильный ответ: {{ question.correctVariant.variant }}</h1>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div class="mt-12 mb-12 flex justify-center">
			<UButton
				:to="ROUTES.allQuizzes"
				variant="soft"
				class="rounded-xl px-12 py-3 text-lg md:px-24 md:py-4 md:text-2xl"
			>
				Назад
			</UButton>
		</div>
	</div>
</template>

<style scoped></style>
