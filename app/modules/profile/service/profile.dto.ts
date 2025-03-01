export interface UpdateProfileDto {
	name?: string
	email?: string
	password?: string
}
export interface GetStatisticDto {
	correctAnswersPercentage: number
	totalQuizzes: number
}
