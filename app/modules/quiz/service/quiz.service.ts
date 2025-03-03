import { privateApi, publicApi } from '~/shared/api/interceptors'
import { apiConfig } from '~/shared/config/api-config'
import type { IQuizDto } from '../types'
import type { Quiz } from '~/modules/quiz-creation/types'

export const quizService = {
	async getAllQuizzes(searchTerm?: string) {
		return await publicApi.get<IQuizDto[]>(apiConfig.quizzes.getAll, {
			params: { ...(searchTerm && { searchTerm }) }
		})
	},
	async deleteQuiz(id: string) {
		return await privateApi.delete(apiConfig.quizzes.deleteQuiz(id))
	},
	async createQuiz(data: Quiz) {
		return await privateApi.post(apiConfig.quizzes.createQuiz, data)
	}
}
