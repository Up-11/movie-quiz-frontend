<script lang="ts" setup>
import { quizService } from '~/modules/quiz/service/quiz.service'
import type { IUserCompletion } from '~/modules/quiz/types'

const quizCompletions = ref<IUserCompletion[]>([])
const toast = useToast()

const updateQuizRating = (quizId: string, newRating: number) => {
	mutate({ id: quizId, rating: newRating })
}
const { mutate } = useMutation({
	mutationFn: (data: { id: string; rating: number }) =>
		quizService.rateQuiz(data.id, data.rating),
	onSuccess: () => {
		toast.add({
			title: 'Оценка викторины обновлена',
			description: `Оценка викторины была обновлена`
		})
		fetch()
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})

const { fetch, isLoading } = useQuery({
	queryFn: () => quizService.getUserCompletions(),
	onSuccess: res => {
		quizCompletions.value = res.data
	},
	enabled: true
})
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
			<h1 class="my-4 text-2xl">История</h1>

			<div class="flex flex-col gap-2">
				<ProfileQuizCard
					v-if="!isLoading"
					v-for="quiz in quizCompletions"
					:card="quiz"
					:key="quiz.id"
					@update-rating="updateQuizRating(quiz.quizId, $event)"
				/>
				<USkeleton v-for="i in 2" v-else class="h-20 w-full" />
			</div>
		</section>
	</aside>
</template>

<style scoped></style>
