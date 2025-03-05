export type QuizCard = {
	id: string
	name: string
	imageUrl: string
	description: string
	rating: number
	film: {
		title: string
	}
	questions: Question[]
	completed?: boolean
	_count: {
		completions: number
		questions: number
	}
	userRating: string
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
	quizId: string
	question: string
	answers: AnswerVariant[]
	correctAnswer: AnswerVariant
}
export interface CachedQuiz {
	id: string
	currentIndex: number
	lastAnswer?: IUserAnswer
	isFinished?: boolean
}

export interface IUserAnswer {
	quizId: string
	answer: AnswerVariant
	status: QUIZ_STATUS
}
export enum QUIZ_STATUS {
	CORRECT,
	FAILED
}

export interface ICurrentQuiz {
	id: string
	name: string
	questionsCount: number
	currentIndex: number
	correctVariant: AnswerVariant | null
	isFinished: boolean
	beforeCompleted?: boolean
}

export interface IQuizDto {
	id: string
	name: string
	description: string
	imageUrl: string
	film: {
		title: string
	}
	_count: {
		questions: number
		completions: number
	}
	rating: number
	completed?: boolean
}
export interface IUserCompletion {
	id: string
	quizId: string
	userId: string
	rating: number
	correctAnswers: number
	failedAnswers: number
	quiz: {
		id: string
		name: string
		imageUrl: string
		description: string
		film: {
			title: string
		}
	}
}

export type SearchType = 'name' | 'film'
