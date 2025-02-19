<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const { letter, text, isCorrect, isFailed } = defineProps<{
	letter: string
	text: string
	isCorrect?: boolean
	isFailed?: boolean
}>()

const classNames = computed(() =>
	twMerge(
		clsx(
			'border cursor-pointer transition hover:scale-102 p-6 rounded-lg flex items-center justify-start gap-5 w-140',
			isCorrect
				? 'border-green-500 bg-green-950 hover:bg-green-800'
				: 'bg-violet-950/95 backdrop-blur-2xl border-violet-500  ',
			isFailed && 'border-red-500 bg-red-950/95  hover:bg-red-800'
		)
	)
)
const letterClassNames = computed(() =>
	twMerge(
		clsx(
			'rounded-full p-2 px-4 text-xl uppercase',
			isCorrect ? 'bg-green-500' : ' bg-violet-500',
			isFailed && 'bg-red-500 '
		)
	)
)
</script>

<template>
	<div :class="classNames">
		<div :class="letterClassNames">
			{{ letter }}
		</div>
		<p class="text-lg">{{ text }}</p>
	</div>
</template>

<style scoped></style>
