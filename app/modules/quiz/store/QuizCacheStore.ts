import { defineStore } from 'pinia'
import type { CachedQuiz, ICurrentQuiz } from '../types'

export const useQuizCacheStore = defineStore('QuizCacheStore', () => {
	const cachedQuizzes = reactive<CachedQuiz[]>([])

	const findCachedQuizByQuiz = (currentQuiz: ICurrentQuiz) => {
		return cachedQuizzes.find(el => el.id === currentQuiz.id)
	}
	const deleteCachedQuizByQuiz = (currentQuiz: ICurrentQuiz) => {
		const index = cachedQuizzes.findIndex(el => el.id === currentQuiz.id)
		if (index !== -1) {
			cachedQuizzes.splice(index, 1)
		}
	}

	const addQuizToCache = (currentQuiz: ICurrentQuiz) => {
		cachedQuizzes.push({
			id: currentQuiz.id,
			currentIndex: currentQuiz.currentIndex
		})
	}

	const clearCachedAnswer = (currentQuiz: ICurrentQuiz) => {
		const cachedQuiz = findCachedQuizByQuiz(currentQuiz)
		if (cachedQuiz) {
			cachedQuiz.lastAnswer = undefined
		}
	}

	const checkIsStarted = (currentQuiz: ICurrentQuiz): boolean =>
		cachedQuizzes.some(el => el.id === currentQuiz.id)

	const checkIsFinished = (currentQuiz: ICurrentQuiz): boolean =>
		cachedQuizzes.some(el => el.id === currentQuiz.id && el.isFinished)

	return {
		findCachedQuizByQuiz,
		clearCachedAnswer,
		checkIsStarted,
		deleteCachedQuizByQuiz,
		addQuizToCache,
		cachedQuizzes,
		checkIsFinished
	}
})
