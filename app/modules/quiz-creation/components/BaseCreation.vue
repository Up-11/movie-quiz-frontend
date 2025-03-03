<script lang="ts" setup>
import { AdminService } from '~/modules/admin/service/admin.service'
import { useFileUploading } from '../composables/useFileUploading'
import { useQuizCreationStore } from '../store/QuizCreationStore'
import type { IFilmDto } from '~/modules/admin/service/admin.service.dto'

const toast = useToast()

const selectItems = ref<IFilmDto[]>([])

const initialSelectValue = {
	label: 'Выберите фильм'
}
const selectValue = ref(initialSelectValue)

const store = useQuizCreationStore()

const { handleFileChange } = useFileUploading()

const isSelectOpen = ref<boolean>(false)

const onSelectChange = () => {
	if (selectItems.value.length === 0) {
		fetchFilms()
	}
}

const createFilm = (item: string) => {
	addFilm(item)
}

const { mutate: deleteFilm } = useMutation({
	mutationFn: (title: string) => AdminService.deleteFilm(title),
	onSuccess: () => {
		toast.add({
			title: 'Успех',
			description: 'Фильм успешно удален.',
			color: 'success'
		})
		fetchFilms()
		selectValue.value = initialSelectValue
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})

const { mutate: addFilm } = useMutation({
	mutationFn: (title: string) => AdminService.createFilm(title),
	onSuccess: () => {
		toast.add({
			title: 'Успех',
			description: 'Фильм успешно создан.',
			color: 'success'
		})
		fetchFilms()
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})

const {
	fetch: fetchFilms,
	data: films,
	isLoading: filmsLoading
} = useQuery({
	queryFn: () => AdminService.getFilms(),
	onSuccess: res => {
		selectItems.value = res.data.map(film => ({
			...film,
			label: film.title
		}))
	}
})

const onChangeSelect = () => {
	const currentFilmId = films?.value?.data?.find(
		film => film.title === selectValue.value.label
	)?.id

	store.setFilm(currentFilmId!)
}
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
				v-if="store.newQuiz.imageUrl"
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
				v-model="selectValue as any"
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
							@click="deleteFilm(item.label)"
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
