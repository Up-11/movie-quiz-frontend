import type { QuizCard } from '../types'

export const useProfileRating = (
	card: QuizCard,
	emit: (event: 'update-rating', ...args: any[]) => void
) => {
	const isRatingFieldOpen = ref<boolean>(false)
	const rating = ref<number>(card.userRating || 0)
	const newRating = ref<number>(card.userRating || 0)

	watch(rating, newVal => {
		rating.value = Math.round(newVal * 2) / 2
	})

	const handleSaveNewRating = async () => {
		newRating.value = rating.value
		if (newRating.value === 0) {
			deleteRating()
			return
		}
		emit('update-rating', newRating.value)
		isRatingFieldOpen.value = false
	}

	const toggleRatingField = () => {
		isRatingFieldOpen.value = !isRatingFieldOpen.value
		rating.value = newRating.value
	}

	const deleteRating = () => {
		newRating.value = 0
		emit('update-rating', 0)
		isRatingFieldOpen.value = false
	}

	return {
		deleteRating,
		toggleRatingField,
		handleSaveNewRating,
		rating,
		newRating,
		isRatingFieldOpen,
		card,
	}
}
