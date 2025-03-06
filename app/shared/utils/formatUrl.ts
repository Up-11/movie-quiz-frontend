export default function formatUrl(path: string) {
	const config = useRuntimeConfig()

	return `${config.public.baseUrl}/${path}`
}
