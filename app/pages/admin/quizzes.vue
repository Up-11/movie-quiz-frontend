<script lang="ts" setup>
import { quizCards } from '~/modules/quiz/mock'
import { quizService } from '~/modules/quiz/service/quiz.service'
import type { IQuizDto } from '~/modules/quiz/types'
import { ROUTES } from '~/shared/config/routes'

definePageMeta({
	title: 'Мониторинг викторин',
	layout: 'admin'
})

const toast = useToast()

const quizzes = ref<IQuizDto[]>([])
const searchTerm = ref<string>('')
const isSearching = ref<boolean>(false)

const { fetch, isLoading } = useQuery({
	queryFn: () => quizService.getAllQuizzes(searchTerm.value),
	enabled: true,
	onSuccess(data) {
		quizzes.value = data.data
	}
})
const { mutate } = useMutation({
	mutationFn: (id: string) => quizService.deleteQuiz(id),
	async onSuccess() {
		isSearching.value = true
		await fetch()
		isSearching.value = false
		toast.add({
			title: 'Успех',
			description: 'Викторина успешно удалена.',
			color: 'success'
		})
	},
	onError(err) {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})
watchDebounced(
	searchTerm,
	async () => {
		isSearching.value = true
		await fetch()
		isSearching.value = false
	},
	{ debounce: 500, maxWait: 1000 }
)
</script>

<template>
	<section class="flex flex-col gap-5 p-4">
		<header class="flex justify-between p-4">
			<h1 class="text-bold text-2xl">Все викторины</h1>
			<UButton variant="soft" :to="ROUTES.admin.createQuiz" icon="uil:plus">
				Создать викторину
			</UButton>
		</header>
		<div class="mt-10">
			<UButtonGroup class="flex h-10 w-full">
				<UInput
					v-model="searchTerm"
					class="w-full"
					placeholder="Поиск по викторинам..."
					variant="soft"
					size="xl"
					icon="uil:search"
				>
					<template v-if="searchTerm.length" #trailing>
						<UButton
							color="neutral"
							variant="link"
							size="sm"
							icon="uil:times"
							aria-label="Clear input"
							@click="searchTerm = ''"
						/>
					</template>
				</UInput>
			</UButtonGroup>
		</div>

		<div class="flex w-full flex-col gap-2 self-center lg:max-w-[95%]">
			<USkeleton
				v-if="isLoading && !isSearching"
				v-for="i in 5"
				:key="i"
				class="h-20"
			/>
			<div v-else-if="isSearching" class="flex justify-center">
				<ULoader />
			</div>
			<AdminCard v-else-if="!isLoading" v-for="quiz in quizzes" :key="quiz.id">
				<template #items>
					<AdminQuizCard :quiz="quiz" />
				</template>
				<template #actions>
					<UButton @click="mutate(quiz.id)" variant="soft">Удалить</UButton>
				</template>
			</AdminCard>
		</div>
		<div v-if="!isLoading && quizzes.length === 0" class="flex justify-center">
			<h1 class="text-bold p-4 text-2xl">Викторин нет</h1>
		</div>
	</section>
</template>

<style scoped></style>
