import { computed } from 'vue'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
	return computed(() => clsx(twMerge(inputs)))
}
