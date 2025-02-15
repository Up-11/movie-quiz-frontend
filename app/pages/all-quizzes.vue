<script lang="ts" setup>
import { quizCards } from '~/modules/quiz/mock'

definePageMeta({
	layout: 'root',
})
</script>

<template>
	<div class="h-screen px-10 flex flex-col gap-5">
		<section>
			<VTitle class="text-center" :title="'Поиск '" />
			<search class="flex gap-10 mt-2">
				<SearchInput class="w-full" />
				<UButton class="px-4">Найти</UButton>
			</search>
		</section>
		<section class="flex flex-col gap-3">
			<VTitle class="text-center" :title="'Викторины '" />
			<div>
				<div
					class="grid justify-items-center xl:grid-cols-4 justify-center md:grid-cols-3 sm:grid-cols-1 gap-4"
				>
					<QuizCard v-for="card in quizCards" :key="card.id" :card="card" />
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped></style>
