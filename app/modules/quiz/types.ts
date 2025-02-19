export type QuizCard = {
	id: string
	name: string
	imageUrl: string
	description: string
	rating: number
	usersCompletions: number
	questionsCount: number
	film: string
	completed?: boolean
	userRating?: number
	questions: Question[]
}

export type AnswerVariant = {
	id: string
	variant: string
	letter?: string
}

export type Question = {
	id: string
	imageUrl: string
	description: string
	question: string
	variants: AnswerVariant[]
	correctVariant: AnswerVariant
}
