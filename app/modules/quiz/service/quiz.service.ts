import { privateApi, publicApi } from '~/shared/api/interceptors'
import { apiConfig } from '~/shared/config/api-config'
import type { IQuizDto, IUserCompletion, SearchType } from '../types'
import type { Quiz } from '~/modules/quiz-creation/types'

export const quizService = {
	async getAllQuizzes(searchTerm?: string) {
		return await publicApi.get<IQuizDto[]>(apiConfig.quizzes.getAll, {
			params: { ...(searchTerm && { searchTerm }) }
		})
	},
	async getAllAuth() {
		return await privateApi.get<IQuizDto[]>(apiConfig.quizzes.getAllAuth)
	},
	async deleteQuiz(id: string) {
		return await privateApi.delete(apiConfig.quizzes.deleteQuiz(id))
	},
	async createQuiz(data: Quiz) {
		return await privateApi.post(apiConfig.quizzes.createQuiz, data)
	},
	async getUserCompletions() {
		return await privateApi.get<IUserCompletion[]>(
			apiConfig.quizzes.getUserCompletions
		)
	},
	async rateQuiz(id: string, rating: number) {
		return await privateApi.patch<{
			id: string
			userId: string
			quizId: string
		}>(apiConfig.quizzes.rateQuiz(id), { rating })
	},
	async searchQuizzes(searchTerm?: string, searchBy?: SearchType) {
		return await publicApi.get<IQuizDto[]>(apiConfig.quizzes.searchQuizzes, {
			params: { ...(searchTerm && { searchTerm }), searchBy }
		})
	}
}
