import { useQuizStore } from '../store/QuizStore'

export const useQuizCompletion = () => {
	const store = useQuizStore()

	const { currentQuiz, isStarted } = storeToRefs(store)
	const {
		startCompletion,
		restartCompletion,
		updateCurrentQuiz,
		clearCurrentQuiz,
		clearIsStarted,
		checkIsStarted
	} = store

	return {
		startCompletion,
		restartCompletion,
		updateCurrentQuiz,
		clearCurrentQuiz,
		clearIsStarted,
		checkIsStarted,
		currentQuiz,
		isStarted
	}
}
