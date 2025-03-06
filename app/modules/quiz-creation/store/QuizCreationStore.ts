import { defineStore } from 'pinia'
import type { AnswerVariant } from '~/modules/quiz/types'
import type { IQuestion, Quiz, QuizCreation } from '../types'
import { quizService } from '~/modules/quiz/service/quiz.service'
import { v4 as uuidv4 } from 'uuid'

export const useQuizCreationStore = defineStore('QuizCreationStore', () => {
	const newQuiz = ref<QuizCreation>({
		id: uuidv4(),
		name: '',
		imageUrl: '',
		description: '',
		film: ''
	})

	const resetQuiz = () => {
		newQuiz.value.id = uuidv4()
		newQuiz.value.name = ''
		newQuiz.value.imageUrl = ''
		newQuiz.value.description = ' '
		newQuiz.value.film = ''
		newQuestions.value = []
	}

	const updateImageUrl = (url: string) => {
		newQuiz.value.imageUrl = url
	}

	const updateQuestionImageUrl = (question: IQuestion, url: string) => {
		question.imageUrl = url
	}

	const toast = useToast()

	const setFilm = (filmId: string) => {
		newQuiz.value.film = filmId
	}
	const newQuestions = ref<IQuestion[]>([])
	const addQuestion = () => {
		const newVariants = createVariants()
		const newQuestion: IQuestion = {
			id: uuidv4(),
			imageUrl: '',
			description: 'Описание нового вопроса',
			question: 'Новый вопрос',
			answers: newVariants,
			quizId: newQuiz.value.id,
			correctAnswerId: newVariants[1]!.id
		}
		newQuestions.value.push(newQuestion)
	}

	const createVariants = () => {
		return [
			{ id: uuidv4(), variant: 'Вариант 1' },
			{ id: uuidv4(), variant: 'Вариант 2' },
			{ id: uuidv4(), variant: 'Вариант 3' },
			{ id: uuidv4(), variant: 'Вариант 4' }
		]
	}

	const deleteQuestion = (question: IQuestion) => {
		const index = newQuestions.value.findIndex(q => q.id === question.id)
		if (index !== -1) {
			newQuestions.value.splice(index, 1)
		}
	}

	const setCorrectVariant = (variant: AnswerVariant, question: IQuestion) => {
		question.correctAnswerId = variant.id
	}

	const { mutate } = useMutation({
		mutationFn: (data: Quiz) => quizService.createQuiz(data),
		onSuccess: () => {
			toast.add({
				title: 'Викторина создана',
				description: 'Викторина успешно создана',
				color: 'success'
			})
			resetQuiz()
		},
		onError: err => {
			toast.add({
				title: 'Ошибка',
				description: err.message,
				color: 'error'
			})
		}
	})

	const createNewQuiz = () => {
		const data: Quiz = {
			id: newQuiz.value.id,
			name: newQuiz.value.name,
			description: newQuiz.value.description,
			imageUrl: newQuiz.value.imageUrl,
			rating: null,
			filmId: newQuiz.value.film,
			questions: toRaw(newQuestions.value)
		}
		mutate(data)
	}
	return {
		addQuestion,
		newQuiz,
		newQuestions,
		setCorrectVariant,
		deleteQuestion,
		setFilm,
		createNewQuiz,
		updateImageUrl,
		updateQuestionImageUrl
	}
})
