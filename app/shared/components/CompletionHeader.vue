<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const { currentQuiz, isStarted, startCompletion, restartCompletion } =
	useQuizCompletion()

const value = ref<number>(7)
</script>

<template>
	<header
		class="bg-black/50 fixed inset-x-0 items-center backdrop-blur-2xl flex justify-between border-b border-b-zinc-300 p-2"
	>
		<div class="flex items-center gap-3">
			<h1 class="font-bold">{{ currentQuiz.name }}</h1>
			<div
				v-if="isStarted"
				class="flex flex-col justify-center items-center w-90"
			>
				<p class="font-bold text-indigo-200">
					Вопрос 1/{{ currentQuiz.questionsCount }}
				</p>
				<UProgress v-model="value" :max="currentQuiz.questionsCount" />
			</div>
			<UButton variant="soft" v-else @click="startCompletion">Начать</UButton>
		</div>

		<div class="flex items-center gap-2">
			<UButton variant="ghost" icon="i-lucide-trash" @click="restartCompletion"
				>Сброс</UButton
			><UButton variant="ghost" icon="i-lucide-home" :to="ROUTES.allQuizzes"
				>Выход</UButton
			>
		</div>
	</header>
</template>

<style scoped></style>
