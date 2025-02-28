import { ref } from 'vue'

interface UseQueryOptions<T> {
	enabled?: boolean
	onSuccess?: (data: T) => void
	onError?: (error: Error) => void
}

export function useQuery<T>({
	queryFn,
	onSuccess,
	onError,
	enabled = false
}: {
	queryFn: () => Promise<T>
	onSuccess?: (data: T) => void
	onError?: (error: Error) => void
	enabled?: boolean
}) {
	const data = ref<T | null>(null)
	const error = ref<Error | null>(null)
	const isLoading = ref(false)

	const fetchData = async () => {
		isLoading.value = true
		error.value = null

		try {
			const result = await queryFn()
			data.value = result

			if (onSuccess) {
				onSuccess(result)
			}
		} catch (err) {
			const errObj = err instanceof Error ? err : new Error(String(err))
			error.value = errObj

			if (onError) {
				onError(errObj)
			}
		} finally {
			isLoading.value = false
		}
	}

	onMounted(() => {
		if (enabled) {
			fetchData()
		}
	})

	return { data, error, isLoading, fetch: fetchData }
}
