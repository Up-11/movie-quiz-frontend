import { apiConfig } from '../config/api-config'
import { privateApi } from './interceptors'

export interface IMediaResponse {
	name: string
	url: string
}

export const MediaService = {
	async upload(media: FormData, folder?: string) {
		return privateApi.post<IMediaResponse>(apiConfig.media, media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}
