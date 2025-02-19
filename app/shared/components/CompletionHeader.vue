<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const { currentQuiz, isStarted, startCompletion, restartCompletion } =
	useQuizCompletion()

const value = ref<number>(7)
</script>

<template>
	<header
		class="fixed inset-x-0 flex items-center justify-between border-b border-b-zinc-300 bg-black/50 p-2 backdrop-blur-2xl"
	>
		<div class="flex items-center gap-3">
			<h1 class="font-bold">
				{{ currentQuiz.name }}
			</h1>
			<div
				v-if="isStarted"
				class="flex w-90 flex-col items-center justify-center"
			>
				<p class="font-bold text-indigo-200">
					Вопрос 1/{{ currentQuiz.questionsCount }}
				</p>
				<UProgress v-model="value" :max="currentQuiz.questionsCount" />
			</div>
			<UButton v-else variant="soft" @click="startCompletion"> Начать </UButton>
		</div>

		<div class="flex items-center gap-2">
			<UButton variant="ghost" icon="i-lucide-trash" @click="restartCompletion">
				Сброс </UButton
			><UButton variant="ghost" icon="i-lucide-home" :to="ROUTES.allQuizzes">
				Выход
			</UButton>
		</div>
	</header>
</template>

<style scoped></style>
