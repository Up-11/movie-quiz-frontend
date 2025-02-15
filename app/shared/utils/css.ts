import { computed } from 'vue'
import clsx from 'clsx'

export function cn(...inputs: any[]) {
	return computed(() => clsx(inputs))
}
