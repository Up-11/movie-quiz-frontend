import { defineStore } from 'pinia'
import type { AnswerVariant, Question } from '~/modules/quiz/types'
import type { QuizCreation } from '../types'

export const useQuizCreationStore = defineStore('QuizCreationStore', () => {
	const newQuiz = reactive<QuizCreation>({
		id: crypto.randomUUID(),
		name: 'Новая викторина',
		imageUrl: '',
		description: 'Описание новой викторины',
		film: ''
	})
	const newQuestions = reactive<Question[]>([])

	const addQuestion = () => {
		const newVariants = createVariants()
		const newQuestion = {
			id: crypto.randomUUID(),
			imageUrl: '',
			description: 'Описание нового вопроса',
			question: 'Новый вопрос',
			variants: newVariants,
			correctVariant: newVariants[1] as AnswerVariant
		}
		newQuestions.push(newQuestion)
	}

	const createVariants = () => {
		return [
			{ id: crypto.randomUUID(), variant: 'Вариант 1' },
			{ id: crypto.randomUUID(), variant: 'Вариант 2' },
			{ id: crypto.randomUUID(), variant: 'Вариант 3' },
			{ id: crypto.randomUUID(), variant: 'Вариант 4' }
		]
	}

	const deleteQuestion = (question: Question) => {
		const index = newQuestions.findIndex(q => q.id === question.id)
		if (index !== -1) {
			newQuestions.splice(index, 1)
		}
	}

	const setCorrectVariant = (variant: AnswerVariant, question: Question) => {
		question.correctVariant = variant
	}
	return {
		addQuestion,
		newQuiz,
		newQuestions,
		setCorrectVariant,
		deleteQuestion
	}
})
