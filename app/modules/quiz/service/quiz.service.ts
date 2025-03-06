import { apiConfig } from '~/shared/config/api-config'
import type { IQuizDto, IUserCompletion, QuizCard, SearchType } from '../types'
import type { Quiz } from '~/modules/quiz-creation/types'

export const quizService = {
	async getAllQuizzes(searchTerm?: string) {
		const { $publicApi: publicApi } = useNuxtApp()
		return await publicApi.get<IQuizDto[]>(apiConfig.quizzes.getAll, {
			params: { ...(searchTerm && { searchTerm }) }
		})
	},
	async getAllAuth() {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.get<IQuizDto[]>(apiConfig.quizzes.getAllAuth)
	},
	async deleteQuiz(id: string) {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.delete(apiConfig.quizzes.deleteQuiz(id))
	},
	async createQuiz(data: Quiz) {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.post(apiConfig.quizzes.createQuiz, data)
	},
	async getUserCompletions() {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.get<IUserCompletion[]>(
			apiConfig.quizzes.getUserCompletions
		)
	},
	async rateQuiz(id: string, rating: number) {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.patch<{
			id: string
			userId: string
			quizId: string
		}>(apiConfig.quizzes.rateQuiz(id), { rating })
	},
	async getQuizById(id: string, userId?: string | null) {
		const { $publicApi: publicApi } = useNuxtApp()

		return await publicApi.get<QuizCard>(apiConfig.quizzes.getQuizById(id), {
			params: { ...(userId !== null && { userId }) }
		})
	},
	async completeQuizUnAuth(
		quizId: string,
		correctAnswers: number,
		failedAnswers: number
	) {
		const { $publicApi: publicApi } = useNuxtApp()

		return await publicApi.post(apiConfig.quizzes.completeQuiz, {
			correctAnswers,
			failedAnswers,
			quizId
		})
	},

	async completeQuizAuth(
		quizId: string,
		correctAnswers: number,
		failedAnswers: number
	) {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.post(apiConfig.quizzes.completeQuizAuth, {
			correctAnswers,
			failedAnswers,
			quizId
		})
	}
}
