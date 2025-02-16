<script setup>
import QuizCard from '~/modules/quiz/components/QuizCard.vue'
import { quizCards } from '~/modules/quiz/mock'

definePageMeta({
	layout: 'root',
})
useHead({
	title: 'Фильмонафт – Все викторины',
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
		{
			name: 'description',
			content:
				'Выбери квиз по любимому жанру или фильму! Огромная коллекция викторин по культовым кинолентам.',
		},
		{
			name: 'keywords',
			content:
				'викторина, фильмы, кино, тесты, угадай фильм, киноигра, квизы, киновикторина',
		},
		{ name: 'author', content: 'MovieQuiz Team' },

		{ property: 'og:title', content: 'Все кино-викторины' },
		{
			property: 'og:description',
			content:
				'Проверь свои знания о кино! Выбери квиз по любимому фильму или жанру и пройди увлекательный тест.',
		},
		{
			property: 'og:image',
			content: 'https://yourwebsite.com/all-quizzes.jpg',
		},
		{ property: 'og:url', content: 'https://yourwebsite.com/quizzes' },
		{ property: 'og:type', content: 'website' },

		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: 'Все кино-викторины' },
		{
			name: 'twitter:description',
			content:
				'Выбери викторину по любимому фильму или жанру и проверь свои знания!',
		},
		{
			name: 'twitter:image',
			content: 'https://yourwebsite.com/all-quizzes.jpg',
		},
	],
	link: [{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
})
</script>
<template>
	<section class="flex mt-5 flex-col gap-3">
		<VTitle :title="'Все Викторины '" />
		<div><QuzzCardList :component="QuizCard" :quizes="quizCards" /></div>
	</section>
</template>

<style scoped></style>
