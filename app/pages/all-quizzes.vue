<script setup lang="ts">
import QuizCard from '~/modules/quiz/components/QuizCard.vue'
import { quizService } from '~/modules/quiz/service/quiz.service'
import type { IQuizDto } from '~/modules/quiz/types'
definePageMeta({
	layout: 'root'
})
useHead({
	title: 'Фильмонафт – Все викторины',
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
		{
			name: 'description',
			content:
				'Выбери квиз по любимому жанру или фильму! Огромная коллекция викторин по культовым кинолентам.'
		},
		{
			name: 'keywords',
			content:
				'викторина, фильмы, кино, тесты, угадай фильм, киноигра, квизы, киновикторина'
		},
		{ name: 'author', content: 'MovieQuiz Team' },

		{ property: 'og:title', content: 'Все кино-викторины' },
		{
			property: 'og:description',
			content:
				'Проверь свои знания о кино! Выбери квиз по любимому фильму или жанру и пройди увлекательный тест.'
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/all-quizzes.jpg'
		},
		{ property: 'og:url', content: 'https://yourwebsite.com/quizzes' },
		{ property: 'og:type', content: 'website' },

		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: 'Все кино-викторины' },
		{
			name: 'twitter:description',
			content:
				'Выбери викторину по любимому фильму или жанру и проверь свои знания!'
		},
		{
			name: 'twitter:image',
			content: 'https://yourwebsite.com/all-quizzes.jpg'
		}
	],
	link: [{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
})

const items = ref<IQuizDto[]>([])

const authStore = useAuthStore()

const isLoading = ref<boolean>(true)

watch(
	() => authStore.isAuth,
	() => (authStore.isAuth ? fetchAuthorized() : fetchUnauthorized())
)

onMounted(() => {
	authStore.isAuth ? fetchAuthorized() : fetchUnauthorized()
})

const { fetch: fetchAuthorized } = useQuery({
	queryFn: () => quizService.getAllAuth(),
	onSuccess: res => {
		items.value = res.data
		isLoading.value = false
	}
})

const { fetch: fetchUnauthorized } = useQuery({
	queryFn: () => quizService.getAllQuizzes(),
	onSuccess: res => {
		items.value = res.data
		isLoading.value = false
	}
})
</script>
<template>
	<section class="mt-5 flex flex-col gap-3">
		<VTitle title="Все Викторины" />

		<div
			class="xs:grid-cols-1 grid justify-center justify-items-center gap-7 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6"
		>
			<QuizCard
				v-if="!isLoading"
				v-for="card in items"
				:key="card.id"
				:card="card"
			/>
			<USkeleton v-for="_ in 6" v-else class="h-74 w-full rounded-md" />
		</div>
	</section>
</template>

<style scoped></style>
