<script lang="ts" setup>
import { quizCards } from '~/modules/quiz/mock'

const playedQuizCards = quizCards.filter(quiz => quiz.completed)
const toast = useToast()

const updateQuizRating = (quizId: string, newRating: number) => {
	const quiz = playedQuizCards.find(q => q.id === quizId)
	if (quiz) {
		quiz.userRating = newRating
		toast.add({
			title: 'Оценка викторины обновлена',
			description: `Оценка викторины ${quiz.name} была обновлена`,
		})
	}
}
</script>

<template>
	<aside class="flex flex-col gap-5">
		<h1 class="text-2xl">Личные данные</h1>
		<section class="flex flex-col gap-3">
			<UserProfileFrom />
		</section>
		<h1 class="text-2xl">Статистика</h1>
		<UserProfileStatistics />
		<section>
			<h1 class="text-2xl my-4">История</h1>

			<div class="flex flex-col gap-2">
				<ProfileQuizCard
					v-for="quiz in playedQuizCards"
					:card="quiz"
					:key="quiz.id"
					@update-rating="updateQuizRating(quiz.id, $event)"
				/>
			</div>
		</section>
	</aside>
</template>

<style scoped></style>
