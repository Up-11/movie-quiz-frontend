import { apiConfig } from '~/shared/config/api-config'
import type { GetStatisticDto, UpdateProfileDto } from './profile.dto'

export const userService = {
	async deleteSelfAccount() {
		const { $privateApi } = useNuxtApp()
		return await $privateApi.delete(apiConfig.users.deleteSelfAccount)
	},
	async getStatistic() {
		const { $privateApi } = useNuxtApp()

		return await $privateApi.get<GetStatisticDto>(apiConfig.users.getStatistic)
	},
	async updateProfile(dto: UpdateProfileDto) {
		const { $privateApi } = useNuxtApp()

		return await $privateApi.patch(apiConfig.users.updateProfile, dto)
	}
}
