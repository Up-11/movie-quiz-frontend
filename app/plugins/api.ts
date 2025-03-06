import axios from 'axios'
import Cookies from 'js-cookie'

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()

	const JSON_HEADERS = () => ({
		'Content-Type': 'application/json'
	})

	const publicApi = axios.create({
		baseURL: config.public.apiUrl,
		headers: JSON_HEADERS()
	})

	const privateApi = axios.create({
		baseURL: config.public.apiUrl,
		headers: JSON_HEADERS()
	})

	privateApi.interceptors.request.use(requestConfig => {
		const accessToken = Cookies.get('accessToken')

		if (requestConfig.headers && accessToken) {
			requestConfig.headers.Authorization = `Bearer ${accessToken}`
		}
		return requestConfig
	})

	return {
		provide: {
			publicApi,
			privateApi
		}
	}
})
