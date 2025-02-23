import { useQuizCacheStore } from '../store/QuizCacheStore'
import { useQuizStore } from '../store/QuizStore'

export const useQuizCompletion = () => {
	const quizStore = useQuizStore()
	const quizCacheStore = useQuizCacheStore()

	const {
		currentQuiz,
		isStarted,
		questionIndex,
		isLastQuestion,
		hasAnswer,
		showCorrectAnswer,
		isUserVariantCorrect,
		correctAnswers,
		failedAnswers,
		currentQuizAnswerList
	} = storeToRefs(quizStore)
	const {
		startCompletion,
		restartCompletion,
		updateCurrentQuiz,
		clearCurrentQuiz,
		clearIsStarted,
		continueCompletion,
		nextQuestion,
		setCorrectVariant,
		createUserAnswer,
		isAnswerCorrect,
		isAnswerFailed,
		clearUserAnswers
	} = quizStore

	const {
		clearCachedAnswer,
		checkIsStarted,
		checkIsFinished,
		deleteCachedQuizByQuiz
	} = quizCacheStore

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
		isUserVariantCorrect,
		clearCachedAnswer,
		correctAnswers,
		failedAnswers,
		currentQuizAnswerList,
		clearUserAnswers,
		checkIsFinished,
		deleteCachedQuizByQuiz
	}
}
