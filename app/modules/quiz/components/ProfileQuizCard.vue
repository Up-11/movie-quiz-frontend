<script lang="ts" setup>
import { useProfileRating } from '../composables/useProfileRating'
import type { QuizCard } from '../types'
import vue3StarRatings from 'vue3-star-ratings'

const { card } = defineProps<{ card: QuizCard }>()
const emit = defineEmits(['update-rating'])

const {
	isRatingFieldOpen,
	newRating,
	toggleRatingField,
	rating,
	handleSaveNewRating,
	deleteRating,
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
		class="flex flex-col sm:flex-row border-2 w-full bg-black/50 hover:border-violet-400 transition-all border-zinc-300 rounded-lg p-4 gap-3"
	>
		<div class="flex flex-col gap-2 w-full justify-between h-full">
			<div class="flex flex-wrap gap-2 items-center justify-between min-w-0">
				<h1 class="font-bold text-sm truncate max-w-[60%]">{{ card.name }}</h1>
				<h1 class="font-bold text-violet-200 text-xs truncate max-w-[40%]">
					{{ card.film }}
				</h1>
			</div>

			<div class="flex flex-wrap justify-between items-center gap-2">
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
				class="grid grid-cols-2 sm:grid-cols-4 gap-3 items-center"
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
