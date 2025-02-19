<script lang="ts" setup>
import { assignLettersToItems } from '~/shared/utils/common'
import type { Question } from '../types'

const { question } = defineProps<{
	question: Question
}>()

const itemsWithLetters = assignLettersToItems(question.variants)
</script>

<template>
	<div :class="'h-full flex-col items-center justify-center gap-5'">
		<div class="mt-5 flex items-center justify-center gap-4">
			<NuxtImg
				:src="question.imageUrl"
				class="rounded-sm"
				width="500"
				alt="Question Image"
			/>
		</div>
		<h1 class="mt-3 text-3xl font-bold">{{ question.question }}</h1>
		<div class="mt-5 flex flex-col gap-5">
			<VariantComponent
				v-for="item in itemsWithLetters"
				:key="item.id"
				:text="item.variant"
				:letter="item.letter!"
			/>
		</div>
	</div>
</template>
