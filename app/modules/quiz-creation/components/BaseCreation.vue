<script lang="ts" setup>
import ImageUploader from '~/shared/components/ImageUploader.vue'
import { useFileUploading } from '../composables/useFileUploading'
import { useHandleFilms } from '../composables/useHandleFilms'
import { useQuizCreationStore } from '../store/QuizCreationStore'

const store = useQuizCreationStore()

const { handleFileChange } = useFileUploading()

const isSelectOpen = ref<boolean>(false)

const {
	createFilm,
	films,
	filmsLoading,
	selectValue,
	selectItems,
	onChangeSelect,
	onSelectChange,
	deleteFilm
} = useHandleFilms()
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
		<div class="grid w-full grid-cols-1 items-center gap-3 md:grid-cols-3">
			<h1 class="text-xl font-bold">Обложка викторины:</h1>
			<ImageUploader
				class="w-full md:col-span-2"
				:model-value="store.newQuiz.imageUrl"
				@update:model-value="store.updateImageUrl"
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
			<div>
				<h1 class="text-xl font-bold">По какому фильму:</h1>
				<h1 class="text-xs font-bold text-gray-400">
					Чтобы добавить новый фильм просто введите его название:
				</h1>
			</div>
			<USelectMenu
				variant="soft"
				:loading="filmsLoading"
				v-model:open="isSelectOpen"
				v-model="selectValue"
				@update:model-value="onChangeSelect"
				:items="selectItems"
				@update:open="onSelectChange"
				class="w-full md:col-span-2"
				:create-item="{
					when: 'empty',
					position: 'bottom'
				}"
				@create="createFilm"
			>
				<template #create-item-label="{ item }">
					<h1>Добавить фильм: {{ item }}</h1>
				</template>
				<template #empty>
					<h1>Нет данных</h1>
				</template>
				<template #item="{ item }">
					<div class="flex w-full items-center justify-between">
						<h1>
							{{ item.label }}
						</h1>
						<UButton
							variant="soft"
							@click="() => deleteFilm(item.label)"
							size="xs"
							icon="i-lucide-x"
						></UButton></div
				></template>
			</USelectMenu>
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
			<UButton
				:disabled="!store.newQuiz.film"
				@click="store.createNewQuiz"
				variant="soft"
				trailing-icon="uil:check"
				>Создать викторину</UButton
			>
		</div>
	</div>
</template>
