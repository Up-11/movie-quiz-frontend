export default function formatUrl(path: string) {
	const { $config } = useNuxtApp()
	return `${$config.public.baseUrl}/${path}`
}
