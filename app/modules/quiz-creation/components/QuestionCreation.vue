<script lang="ts" setup>
import { useQuizCreationStore } from '../store/QuizCreationStore'
import type { IQuestion } from '../types'

defineProps<{ question: IQuestion }>()

const store = useQuizCreationStore()
</script>

<template>
	<div class="grid grid-cols-2 gap-6 md:grid-cols-3">
		<div class="flex flex-col gap-4">
			<UInput
				size="xl"
				variant="soft"
				type="text"
				placeholder="Название вопроса"
				v-model="question.question"
			/>
			<VariantCreation
				v-for="variant in question.answers"
				:is-correct="question.correctAnswerId === variant.id"
				:key="variant.id"
				v-model:variant-text="variant.variant"
				:variant="variant"
				@set-correct-variant="store.setCorrectVariant(variant, question)"
			/>
		</div>

		<div class="md:col-span-">
			<UTextarea
				placeholder="Введите описание"
				name="quiz-description"
				variant="soft"
				size="xl"
				:rows="5"
				:autoresize="true"
				v-model="question.description"
				class="w-full !resize-none"
			/>
		</div>
	</div>
	<USeparator class="w-full" color="primary" />
</template>

<style scoped>
@media (max-width: 768px) {
	.grid {
		grid-template-columns: 1fr;
	}

	.md\:col-span-2 {
		grid-column: span 1;
	}
}
</style>
