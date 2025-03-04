<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import SmallQuizCard from '~/modules/quiz/components/SmallQuizCard.vue'
import { quizCards } from '~/modules/quiz/mock'
import { quizService } from '~/modules/quiz/service/quiz.service'
import type { IQuizDto, SearchType } from '~/modules/quiz/types'

const value = ref<string>('')

const isSearching = ref<boolean>(false)

const searchBy = ref<SearchType>('name')

const filteredByName = ref<IQuizDto[]>([])
const filteredByFilm = computed(() => quizCards.slice(0, 3))

const items = ref<TabsItem[]>([
	{
		label: 'По названию',
		slot: 'byName',
		icon: 'uil:text-fields'
	},
	{
		label: 'По фильму',
		icon: 'uil:video',
		slot: 'byFilm'
	}
])

const { isLoading, fetch } = useQuery({
	queryFn: () => quizService.searchQuizzes(value.value, searchBy.value),
	onSuccess: res => {
		filteredByName.value = res.data
	}
})

const onClickSearch = async () => {
	await fetch()
	isSearching.value = true
}

const onClickStop = () => {
	isSearching.value = false
	value.value = ''
}
</script>

<template>
	<UModal
		title="Поиск по викторинам"
		:ui="{
			body: 'bg-transparent  ',
			content: 'bg-black/90 p-2 '
		}"
	>
		<slot />
		<template #body>
			<section class="flex h-[500px] flex-col justify-start gap-4">
				<UButtonGroup class="flex h-10 w-full">
					<UInput
						class="w-full"
						v-model="value"
						placeholder="Найдите интересующую вас викторину"
						variant="soft"
						size="xl"
						icon="uil:search"
					>
						<template #trailing v-if="value.length">
							<UButton
								color="neutral"
								variant="link"
								size="sm"
								icon="uil:times"
								aria-label="Clear input"
								@click="onClickStop"
							/>
						</template>
					</UInput>
					<UButton
						@click="onClickSearch"
						color="neutral"
						variant="soft"
						size="sm"
						>Поиск</UButton
					>
				</UButtonGroup>

				<div v-if="isSearching">
					<h1 class="font-bold text-violet-300">Результаты</h1>
					<div class="mt-2 flex w-full flex-col gap-3 border-zinc-300 p-2">
						<UTabs
							color="primary"
							variant="link"
							:items="items"
							class="w-full gap-4"
							:ui="{ trigger: 'flex-1' }"
							:unmount-on-hide="false"
						>
							<template #byName>
								<div v-if="filteredByName.length" class="flex flex-col gap-5">
									<SmallQuizCard
										:key="quiz.id"
										:card="quiz"
										v-for="quiz in filteredByName"
									/>
								</div>
								<div v-else class="flex justify-center text-violet-200">
									<p>Ничего не найдено :(</p>
								</div>
							</template>
							<template #byFilm>
								<div v-if="filteredByFilm.length" class="flex flex-col gap-5">
									<SmallQuizCard
										:key="quiz.id"
										:card="quiz"
										v-for="quiz in filteredByFilm"
									/>
								</div>
								<div v-else class="flex justify-center text-violet-200">
									<p>Ничего не найдено :(</p>
								</div>
							</template>
						</UTabs>
					</div>
				</div>
				<div v-else-if="isLoading" class="mt-5 flex justify-center">
					<ULoader />
				</div>

				<h1 v-else class="font-bold text-violet-300">
					Введите название искомой викторины или фильма
				</h1>
			</section>
		</template>
	</UModal>
</template>
<style scoped></style>
