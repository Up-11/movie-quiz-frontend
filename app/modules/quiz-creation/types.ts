import type { AnswerVariant } from '../quiz/types'

export type QuizCreation = {
	id: string
	imageUrl: string
	film: string
}

export interface IQuestion {
	id: string
	question: string
	description: string
	imageUrl: string
	quizId: string
	correctAnswerId: string | null
	answers: AnswerVariant[]
}

export interface Quiz {
	id: string
	name: string
	description: string
	rating: number | null
	imageUrl: string
	filmId: string
	questions: IQuestion[]
}
