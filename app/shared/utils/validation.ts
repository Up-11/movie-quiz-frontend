export const isObjectFilled = (
	obj: Record<string, any>,
	ignoreKeys: string[] = []
): boolean => {
	return Object.entries(obj).every(([key, value]) => {
		if (ignoreKeys.includes(key)) {
			return true
		}

		if (Array.isArray(value)) {
			return (
				value.length > 0 &&
				value.every(item => {
					return typeof item === 'object' && item !== null
						? isObjectFilled(item, ignoreKeys)
						: item !== null && item !== undefined && item !== ''
				})
			)
		}

		if (typeof value === 'object' && value !== null) {
			return isObjectFilled(value, ignoreKeys)
		}

		return value !== null && value !== undefined && value !== ''
	})
}
