<script lang="ts" setup>
import type { Question } from '~/modules/quiz/types'
import { useQuizCreationStore } from '../store/QuizCreationStore'
import { useFileUploading } from '../composables/useFileUploading'

const props = defineProps<{ question: Question }>()

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
				v-for="variant in question.variants"
				:is-correct="question.correctVariant.id === variant.id"
				:key="variant.id"
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
			<UInput
				size="xl"
				variant="soft"
				type="file"
				accept="image/*"
				@change="e => handleFileChange(e, toRef(props.question, 'imageUrl'))"
				placeholder="Загрузите изображение"
			/>
			<NuxtImg
				class="max-h-50 w-full flex-1 rounded-lg object-contain"
				:src="question.imageUrl"
				width="300"
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
