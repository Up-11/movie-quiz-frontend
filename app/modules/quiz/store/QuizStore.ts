import { defineStore } from 'pinia'
import {
	QUIZ_STATUS,
	type AnswerVariant,
	type ICurrentQuiz,
	type IUserAnswer,
	type QuizCard
} from '../types'
import { useQuizCacheStore } from './QuizCacheStore'

const InitialCurrentQuiz: ICurrentQuiz = {
	id: '',
	name: '',
	questionsCount: 0,
	currentIndex: 0,
	correctVariant: null,
	isFinished: false,
	beforeCompleted: undefined
}

export const useQuizStore = defineStore('QuizStore', () => {
	const currentQuiz = reactive<ICurrentQuiz>({ ...InitialCurrentQuiz })
	const isStarted = ref<boolean>(false)
	const userAnswer = ref<AnswerVariant | null>(null)
	const userAnswerList = ref<IUserAnswer[]>([])

	const quizCacheStore = useQuizCacheStore()

	const hasAnswer = computed(() => !!userAnswer.value)

	const isLastQuestion = computed(
		() => currentQuiz.currentIndex === currentQuiz.questionsCount - 1
	)
	const showCorrectAnswer = computed(() => {
		if (userAnswer.value) return currentQuiz.correctVariant!.id
	})

	const currentQuizAnswerList = computed(() =>
		userAnswerList.value.filter(answer => answer.quizId === currentQuiz.id)
	)

	const clearUserAnswers = () => {
		userAnswerList.value = [
			...userAnswerList.value.filter(answer => answer.quizId !== currentQuiz.id)
		]
	}

	const correctAnswers = computed(() =>
		userAnswerList.value
			.filter(answer => answer.quizId === currentQuiz.id)
			.filter(answer => answer.status === QUIZ_STATUS.CORRECT)
	)
	const failedAnswers = computed(() =>
		userAnswerList.value
			.filter(answer => answer.quizId === currentQuiz.id)
			.filter(answer => answer.status === QUIZ_STATUS.FAILED)
	)

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
				quizId: currentQuiz.id,
				answer,
				status: isAnswerCorrect(answer)
					? QUIZ_STATUS.CORRECT
					: QUIZ_STATUS.FAILED
			})

			const cachedQuiz = quizCacheStore.findCachedQuizByQuiz(currentQuiz)
			if (cachedQuiz) {
				cachedQuiz.lastAnswer = {
					quizId: currentQuiz.id,
					answer,
					status: isAnswerCorrect(answer)
						? QUIZ_STATUS.CORRECT
						: QUIZ_STATUS.FAILED
				}
			}
		}
	}

	const questionIndex = computed(() => currentQuiz.currentIndex + 1)

	const continueCompletion = () => {
		isStarted.value = true
		const cachedQuiz = quizCacheStore.findCachedQuizByQuiz(currentQuiz)
		if (!cachedQuiz) return
		currentQuiz.currentIndex = cachedQuiz.currentIndex
		if (cachedQuiz.lastAnswer) {
			userAnswer.value = cachedQuiz.lastAnswer.answer
		}
		if (cachedQuiz.isFinished) {
			currentQuiz.isFinished = true
		}
	}

	const nextQuestion = () => {
		const cachedQuiz = quizCacheStore.findCachedQuizByQuiz(currentQuiz)

		if (currentQuiz.currentIndex < currentQuiz.questionsCount - 1) {
			quizCacheStore.clearCachedAnswer(currentQuiz)
			userAnswer.value = null
			currentQuiz.currentIndex++
			if (cachedQuiz) {
				cachedQuiz.currentIndex = currentQuiz.currentIndex
			}
		} else {
			currentQuiz.isFinished = true
			if (cachedQuiz) {
				cachedQuiz.isFinished = true
			}
		}
	}

	const updateCurrentQuiz = (quiz: QuizCard) => {
		currentQuiz.id = quiz.id
		currentQuiz.name = quiz.name
		currentQuiz.questionsCount = quiz.questions.length
		currentQuiz.currentIndex = 0
		currentQuiz.beforeCompleted = quiz.completed
	}

	const clearIsStarted = () => {
		isStarted.value = false
		userAnswer.value = null
	}

	const startCompletion = () => {
		if (currentQuiz.id && !quizCacheStore.checkIsStarted(currentQuiz)) {
			quizCacheStore.addQuizToCache(currentQuiz)
		}
		isStarted.value = true
		currentQuiz.currentIndex = 0
		userAnswer.value = null
	}

	const restartCompletion = () => {
		isStarted.value = false
		quizCacheStore.deleteCachedQuizByQuiz(currentQuiz)
		currentQuiz.currentIndex = 0
		userAnswer.value = null
		currentQuiz.isFinished = false
	}

	const clearCurrentQuiz = () => {
		currentQuiz.id = InitialCurrentQuiz.id
		currentQuiz.name = InitialCurrentQuiz.name
		currentQuiz.questionsCount = InitialCurrentQuiz.questionsCount
		currentQuiz.currentIndex = InitialCurrentQuiz.currentIndex
		currentQuiz.correctVariant = InitialCurrentQuiz.correctVariant
		currentQuiz.isFinished = InitialCurrentQuiz.isFinished
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
		clearCurrentQuiz,
		clearIsStarted,
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
		isUserVariantCorrect,
		correctAnswers,
		failedAnswers,
		currentQuizAnswerList,
		clearUserAnswers
	}
})
