import { defineStore } from 'pinia'
import type { AnswerVariant, QuizCard } from '../types'

interface ICurrentQuiz {
	id: string
	name: string
	questionsCount: number
	currentIndex: number
	correctVariant: AnswerVariant | null
}

interface CachedQuiz {
	id: string
	currentIndex: number
}

const InitialCurrentQuiz: ICurrentQuiz = {
	id: '',
	name: '',
	questionsCount: 0,
	currentIndex: 0,
	correctVariant: null
}

enum QUIZ_STATUS {
	CORRECT,
	FAILED
}

interface IUserAnswer {
	answer: AnswerVariant
	status: QUIZ_STATUS
}

export const useQuizStore = defineStore('QuizStore', () => {
	const currentQuiz = reactive<ICurrentQuiz>({ ...InitialCurrentQuiz })
	const isStarted = ref<boolean>(false)
	const cachedQuizzes = reactive<CachedQuiz[]>([])
	const userAnswer = ref<AnswerVariant | null>(null)
	const userAnswerList = ref<IUserAnswer[]>([])

	const hasAnswer = computed(() => !!userAnswer.value)

	const showCorrectAnswer = computed(() => {
		if (userAnswer.value) return currentQuiz.correctVariant!.id
	})

	const isAnswerCorrect = (variant: AnswerVariant): boolean => {
		if (!userAnswer.value || !currentQuiz.correctVariant) return false
		return (
			variant.id === userAnswer.value.id &&
			variant.id === currentQuiz.correctVariant.id
		)
	}

	const isAnswerFailed = (variant: AnswerVariant): boolean => {
		if (!userAnswer.value || !currentQuiz.correctVariant) return false
		return (
			variant.id === userAnswer.value.id &&
			variant.id !== currentQuiz.correctVariant.id
		)
	}

	const isUserVariantCorrect = computed(
		() => userAnswer.value!.id === currentQuiz.correctVariant?.id
	)

	const createUserAnswer = (answer: AnswerVariant) => {
		if (!userAnswer.value) {
			userAnswer.value = answer

			userAnswerList.value.push({
				answer,
				status: isAnswerCorrect(answer)
					? QUIZ_STATUS.CORRECT
					: QUIZ_STATUS.FAILED
			})
		}
	}

	const questionIndex = computed(() => currentQuiz.currentIndex + 1)

	const checkIsStarted = () =>
		cachedQuizzes.some(el => el.id === currentQuiz.id)

	const continueCompletion = () => {
		isStarted.value = true
		const cachedQuiz = cachedQuizzes.find(el => el.id === currentQuiz.id)
		if (cachedQuiz) {
			currentQuiz.currentIndex = cachedQuiz.currentIndex
		}
	}

	const isLastQuestion = computed(
		() => currentQuiz.currentIndex === currentQuiz.questionsCount - 1
	)

	const nextQuestion = () => {
		if (currentQuiz.currentIndex < currentQuiz.questionsCount - 1) {
			userAnswer.value = null
			currentQuiz.currentIndex++
			const cachedQuiz = cachedQuizzes.find(el => el.id === currentQuiz.id)
			if (cachedQuiz) {
				cachedQuiz.currentIndex = currentQuiz.currentIndex
			}
		}
	}

	const updateCurrentQuiz = (quiz: QuizCard) => {
		currentQuiz.id = quiz.id
		currentQuiz.name = quiz.name
		currentQuiz.questionsCount = quiz.questions.length
		currentQuiz.currentIndex = 0
	}

	const clearIsStarted = () => {
		isStarted.value = false
		userAnswer.value = null
	}

	const startCompletion = () => {
		if (currentQuiz.id && !cachedQuizzes.some(el => el.id === currentQuiz.id)) {
			cachedQuizzes.push({
				id: currentQuiz.id,
				currentIndex: currentQuiz.currentIndex
			})
		}
		isStarted.value = true
		currentQuiz.currentIndex = 0
		userAnswer.value = null
	}

	const restartCompletion = () => {
		isStarted.value = false
		const index = cachedQuizzes.findIndex(el => el.id === currentQuiz.id)
		if (index !== -1) {
			cachedQuizzes.splice(index, 1)
		}
		currentQuiz.currentIndex = 0
		userAnswer.value = null
	}

	const clearCurrentQuiz = () => {
		currentQuiz.id = InitialCurrentQuiz.id
		currentQuiz.name = InitialCurrentQuiz.name
		currentQuiz.questionsCount = InitialCurrentQuiz.questionsCount
		currentQuiz.currentIndex = InitialCurrentQuiz.currentIndex
		currentQuiz.correctVariant = InitialCurrentQuiz.correctVariant
		userAnswer.value = null
	}

	const setCorrectVariant = (variant: AnswerVariant) => {
		currentQuiz.correctVariant = variant
	}

	return {
		currentQuiz,
		updateCurrentQuiz,
		startCompletion,
		isStarted,
		cachedQuizzes,
		clearCurrentQuiz,
		clearIsStarted,
		checkIsStarted,
		restartCompletion,
		questionIndex,
		continueCompletion,
		nextQuestion,
		isLastQuestion,
		setCorrectVariant,
		userAnswer,
		createUserAnswer,
		isAnswerCorrect,
		isAnswerFailed,
		hasAnswer,
		showCorrectAnswer,
		userAnswerList,
		isUserVariantCorrect
	}
})
