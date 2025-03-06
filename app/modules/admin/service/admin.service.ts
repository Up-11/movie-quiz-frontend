import type { USER_ROLE } from '~/shared/types/common.types'
import type { IFilmDto, IUserDto } from './admin.service.dto'
import { apiConfig } from '~/shared/config/api-config'

export const AdminService = {
	async getUsers(role: USER_ROLE, searchTerm?: string) {
		const { $privateApi: privateApi } = useNuxtApp()
		return await privateApi.get<IUserDto[]>(apiConfig.users.getUsers, {
			params: { role, ...(searchTerm && { searchTerm }) }
		})
	},
	async deleteUserById(id: string) {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.delete(apiConfig.users.deleteUserById(id))
	},
	async getFilms() {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.get<IFilmDto[]>(apiConfig.films.getAllFilms)
	},
	async createFilm(title: string) {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.post(apiConfig.films.addFilm, { title })
	},
	async deleteFilm(title: string) {
		const { $privateApi: privateApi } = useNuxtApp()

		return await privateApi.delete(apiConfig.films.deleteFilm(title))
	}
}
