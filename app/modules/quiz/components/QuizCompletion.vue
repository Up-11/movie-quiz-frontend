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
		<div class="flex items-center justify-center mt-5 gap-4">
			<NuxtImg
				:src="question.imageUrl"
				class="rounded-sm"
				width="500"
				alt="Question Image"
			/>
		</div>
		<h1 class="font-bold text-3xl mt-3">{{ question.question }}</h1>
		<div class="flex flex-col gap-5 mt-5">
			<VariantComponent
				v-for="item in itemsWithLetters"
				:key="item.id"
				:text="item.variant"
				:letter="item.letter!"
			/>
		</div>
	</div>
</template>
