<script lang="ts" setup>
import { useQuizCreationStore } from '../store/QuizCreationStore'
import { useFileUploading } from '../composables/useFileUploading'
import type { IQuestion } from '../types'

const props = defineProps<{ question: IQuestion }>()

const store = useQuizCreationStore()

const { handleFileChange } = useFileUploading()
</script>

<template>
	<div class="grid grid-cols-3 gap-6">
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

		<div>
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

		<div class="flex h-full flex-col justify-between gap-3">
			<ImageUploader
				:is-question="true"
				:model-value="question.imageUrl"
				@update:model-value="store.updateQuestionImageUrl(question, $event)"
			/>
			<UButton
				@click="() => store.deleteQuestion(question)"
				variant="soft"
				color="error"
				>Удалить вопрос</UButton
			>
		</div>
	</div>
	<USeparator class="w-full" color="primary" />
</template>

<style scoped></style>
