<script lang="ts" setup>
import { useFileUploading } from '../composables/useFileUploading'
import { useQuizCreationStore } from '../store/QuizCreationStore'

const items = ref([
	{
		label: 'BATMAN'
	},
	{
		label: 'SPIDERMAN'
	},
	{
		label: 'frog'
	},
	{
		label: 'rofl'
	}
])
const value = ref({
	label: 'Выберите фильм'
})

const store = useQuizCreationStore()

const { handleFileChange } = useFileUploading()
</script>

<template>
	<div class="flex h-full flex-col gap-6 p-4">
		<div class="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
			<h1 class="text-xl font-bold">Название викторины:</h1>
			<UInput
				placeholder="Введите название"
				:model-value="store.newQuiz.name"
				name="quiz-name"
				variant="soft"
				size="xl"
				class="w-full md:col-span-2"
			/>
		</div>
		<div class="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
			<h1 class="text-xl font-bold">Обложка викторины:</h1>
			<UInput
				type="file"
				name="quiz-name"
				variant="soft"
				size="xl"
				accept="image/*"
				class="w-full md:col-span-1"
				@change="e => handleFileChange(e, toRef(store.newQuiz, 'imageUrl'))"
			/>
			<NuxtImg
				class="col-start-3 h-60 w-full self-end rounded-lg object-contain"
				:src="store.newQuiz.imageUrl"
				width="300"
			/>
		</div>

		<div class="grid grid-cols-1 items-start gap-3 md:grid-cols-3">
			<h1 class="text-xl font-bold">Описание викторины:</h1>
			<UTextarea
				placeholder="Введите описание"
				name="quiz-description"
				variant="soft"
				:model-value="store.newQuiz.description"
				size="xl"
				:rows="5"
				:autoresize="true"
				class="w-full !resize-none md:col-span-2"
			/>
		</div>

		<div class="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
			<h1 class="text-xl font-bold">По какому фильму:</h1>
			<USelectMenu
				variant="soft"
				v-model="value"
				:items="items"
				class="w-full md:col-span-2"
			/>
		</div>
		<div class="flex flex-col gap-10">
			<h1 class="text-xl font-bold">
				Вопросы ({{ store.newQuestions.length }}) :
			</h1>

			<QuestionCreation
				v-for="question in store.newQuestions"
				:question="question"
				:key="question.id"
			/>
		</div>

		<div class="flex items-center justify-center">
			<UButton
				variant="soft"
				@click="store.addQuestion"
				trailing-icon="uil:plus"
				>Создать вопрос</UButton
			>
		</div>

		<div class="mt-auto flex items-center justify-end">
			<UButton variant="soft" trailing-icon="uil:check"
				>Создать викторину</UButton
			>
		</div>
	</div>
</template>

<style scoped></style>
