export const useFileUploading = () => {
	const handleFileChange = (event: Event, imageUrl: Ref<string>) => {
		const target = event.target as HTMLInputElement
		const file = target.files?.[0]

		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader()
			reader.onload = e => {
				if (e.target) {
					imageUrl.value = e.target.result as string
				}
			}
			reader.readAsDataURL(file)
		}
	}
	return { handleFileChange }
}
