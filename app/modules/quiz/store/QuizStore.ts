import { defineStore } from 'pinia'
import type { QuizCard } from '../types'

interface ICurrentQuiz {
	id: string
	name: string
	questionsCount: number
}

const InitialCurrentQuiz: ICurrentQuiz = {
	id: '',
	name: '',
	questionsCount: 0,
}

export const useQuizStore = defineStore('QuizStore', () => {
	const currentQuiz = shallowReactive<ICurrentQuiz>(InitialCurrentQuiz)

	const isStarted = ref<boolean>(false)

	const quizzesStarted = ref<string[]>([])

	const startCompletion = () => {
		if (currentQuiz.id && !quizzesStarted.value.includes(currentQuiz.id)) {
			quizzesStarted.value.push(currentQuiz.id)
			isStarted.value = true
		}
	}

	const restartCompletion = () => {
		isStarted.value = false

		quizzesStarted.value = quizzesStarted.value.filter(
			el => el !== currentQuiz.id
		)
	}

	const updateCurrentQuiz = (quiz: QuizCard) => {
		currentQuiz.id = quiz.id
		currentQuiz.name = quiz.name
		currentQuiz.questionsCount = quiz.questionsCount
	}
	const clearCurrentQuiz = () => {
		currentQuiz.id = InitialCurrentQuiz.id
		currentQuiz.name = InitialCurrentQuiz.name
		currentQuiz.questionsCount = InitialCurrentQuiz.questionsCount
	}
	const clearIsStarted = () => (isStarted.value = false)

	const checkIsStarted = () => quizzesStarted.value.includes(currentQuiz.id)

	return {
		currentQuiz,
		updateCurrentQuiz,
		startCompletion,
		isStarted,
		quizzesStarted,
		clearCurrentQuiz,
		clearIsStarted,
		checkIsStarted,
		restartCompletion,
	}
})
