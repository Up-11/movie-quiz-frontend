<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import type { AnswerVariant } from '../types'
import confetti from 'canvas-confetti'

const props = defineProps<{
	variant: AnswerVariant
	isCorrect?: boolean
	isFailed?: boolean
	hasAnswer: boolean
	shouldShowConfetti: boolean
}>()

const emit = defineEmits(['createAnswer'])

watch(
	() => props.shouldShowConfetti,
	newValue => {
		if (newValue) {
			confetti({
				particleCount: 100,
				spread: 100,
				origin: { y: 0.6 },
				colors: ['#00FF00']
			})
		}
	}
)

const createUserAnswer = () => {
	emit('createAnswer', props.variant)
}

const classNames = computed(() =>
	twMerge(
		clsx(
			'border transition select-none p-6 rounded-lg flex items-center justify-start gap-5 w-140',
			props.isCorrect
				? 'border-green-500 bg-green-950 hover:bg-green-800'
				: 'bg-violet-950/95 backdrop-blur-2xl border-violet-500',
			props.isFailed &&
				'border-red-500 bg-red-950/95 hover:bg-red-800 animate-shake',
			props.hasAnswer ? 'cursor-default' : 'hover:scale-102 cursor-pointer'
		)
	)
)

const letterClassNames = computed(() =>
	twMerge(
		clsx(
			'rounded-full p-2 px-4 text-xl uppercase',
			props.isCorrect ? 'bg-green-500' : 'bg-violet-500',
			props.isFailed && 'bg-red-500'
		)
	)
)
</script>

<template>
	<div :class="classNames" @click="createUserAnswer">
		<div :class="letterClassNames">
			{{ props.variant.letter }}
		</div>
		<p class="text-lg">{{ props.variant.variant }}</p>
	</div>
</template>

<style scoped>
@keyframes shake {
	0% {
		transform: translateX(0);
	}
	25% {
		transform: translateX(-4px);
	}
	50% {
		transform: translateX(4px);
	}
	75% {
		transform: translateX(-4px);
	}
	100% {
		transform: translateX(0);
	}
}

.animate-shake {
	animation: shake 0.3s ease-in-out;
}
</style>
