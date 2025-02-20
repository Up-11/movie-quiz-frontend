import { useQuizStore } from '../store/QuizStore'

export const useQuizCompletion = () => {
	const store = useQuizStore()

	const {
		currentQuiz,
		isStarted,
		questionIndex,
		isLastQuestion,
		hasAnswer,
		showCorrectAnswer,
		isUserVariantCorrect
	} = storeToRefs(store)
	const {
		startCompletion,
		restartCompletion,
		updateCurrentQuiz,
		clearCurrentQuiz,
		clearIsStarted,
		checkIsStarted,
		continueCompletion,
		nextQuestion,
		setCorrectVariant,
		createUserAnswer,
		isAnswerCorrect,
		isAnswerFailed
	} = store

	return {
		startCompletion,
		restartCompletion,
		updateCurrentQuiz,
		clearCurrentQuiz,
		clearIsStarted,
		checkIsStarted,
		currentQuiz,
		isStarted,
		questionIndex,
		continueCompletion,
		nextQuestion,
		isLastQuestion,
		setCorrectVariant,
		createUserAnswer,
		isAnswerCorrect,
		isAnswerFailed,
		hasAnswer,
		showCorrectAnswer,
		isUserVariantCorrect
	}
}
