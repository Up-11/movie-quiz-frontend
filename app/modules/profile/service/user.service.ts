import { privateApi } from '~/shared/api/interceptors'
import { apiConfig } from '~/shared/config/api-config'
import type { GetStatisticDto, UpdateProfileDto } from './profile.dto'

export const userService = {
	async deleteSelfAccount() {
		return await privateApi.delete(apiConfig.users.deleteSelfAccount)
	},
	async getStatistic() {
		return await privateApi.get<GetStatisticDto>(apiConfig.users.getStatistic)
	},
	async updateProfile(dto: UpdateProfileDto) {
		return await privateApi.patch(apiConfig.users.updateProfile, dto)
	}
}
