<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import SmallQuizCard from '~/modules/quiz/components/SmallQuizCard.vue'
import { quizCards } from '~/modules/quiz/mock'

const value = ref<string>('')

const isLoading = ref<boolean>(false)
const isSearching = ref<boolean>(true)

const filteredByName = computed(() => quizCards.slice(3, 8))
const filteredByFilm = computed(() => quizCards.slice(0, 3))

const items = ref<TabsItem[]>([
	{
		label: 'По названию',
		slot: 'byName',
		icon: 'uil:text-fields',
	},
	{
		label: 'По фильму',
		icon: 'uil:video',
		slot: 'byFilm',
	},
])
</script>

<template>
	<UModal
		title="Поиск по викторинам"
		:ui="{
			body: 'bg-transparent  ',
			content: 'bg-black/90 p-2 ',
		}"
	>
		<slot />
		<template #body>
			<section class="flex flex-col h-[500px] justify-start gap-4">
				<UButtonGroup class="w-full flex h-10">
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
								@click="value = ''"
							/>
						</template>
					</UInput>
					<UButton color="neutral" variant="soft" size="sm">Поиск</UButton>
				</UButtonGroup>

				<div v-if="isSearching">
					<h1 class="font-bold text-violet-300">Результаты</h1>
					<div class="border-zinc-300 mt-2 p-2 flex flex-col gap-3 w-full">
						<UTabs
							color="primary"
							variant="link"
							:items="items"
							class="gap-4 w-full"
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
				<div v-else-if="isLoading" class="flex justify-center mt-5">
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
