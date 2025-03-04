<script lang="ts" setup>
import { useProfileRating } from '../composables/useProfileRating'
import type { IUserCompletion, QuizCard } from '../types'
import vue3StarRatings from 'vue3-star-ratings'

const { card } = defineProps<{ card: IUserCompletion }>()
const emit = defineEmits(['update-rating'])

const {
	isRatingFieldOpen,
	newRating,
	toggleRatingField,
	rating,
	handleSaveNewRating,
	deleteRating
} = useProfileRating(card, emit)
const ratingBtnText = computed(() => {
	return isRatingFieldOpen.value
		? 'Закрыть'
		: newRating.value
			? 'Изменить оценку'
			: 'Оценить'
})
</script>

<template>
	<article
		class="flex w-full flex-col gap-3 rounded-lg border-2 border-zinc-300 bg-black/50 p-4 transition-all hover:border-violet-400 sm:flex-row"
	>
		<div class="flex h-full w-full flex-col justify-between gap-2">
			<div class="flex min-w-0 flex-wrap items-center justify-between gap-2">
				<h1 class="max-w-[60%] truncate text-sm font-bold">
					{{ card.quiz.name }}
				</h1>
				<h1 class="max-w-[40%] truncate text-xs font-bold text-violet-200">
					{{ card.quiz.film.title }}
				</h1>
			</div>

			<div class="flex flex-wrap items-center justify-between gap-2">
				<div v-if="newRating" class="flex items-center gap-2">
					<URating :number="newRating" />
					<UButton @click="toggleRatingField" variant="soft" size="xs">
						{{ ratingBtnText }}
					</UButton>
				</div>
				<UButton v-else @click="toggleRatingField" variant="soft" size="xs">
					{{ ratingBtnText }}
				</UButton>
				<UTooltip text="Переигровки не будут занесены в статистику">
					<UButton variant="soft" size="xs">Сыграть снова</UButton>
				</UTooltip>
			</div>

			<div
				v-if="isRatingFieldOpen"
				class="grid grid-cols-2 items-center gap-3 sm:grid-cols-4"
			>
				<vue3-star-ratings
					star-color="#6a0dad"
					:star-size="18"
					v-model="rating"
					class="col-span-2 sm:col-span-1"
				/>
				<UButton
					v-if="rating !== newRating && rating !== 0"
					variant="soft"
					size="xs"
					@click="handleSaveNewRating"
					class="w-full"
				>
					Сохранить
				</UButton>
				<UButton
					v-if="rating !== newRating && rating !== 0"
					variant="soft"
					size="xs"
					@click="toggleRatingField"
					class="w-full"
				>
					Отмена
				</UButton>
				<UButton
					v-if="rating"
					variant="soft"
					size="xs"
					@click="deleteRating"
					class="w-full self-end"
				>
					Удалить
				</UButton>
			</div>
		</div>
	</article>
</template>
