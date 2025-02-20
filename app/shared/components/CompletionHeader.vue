<script lang="ts" setup>
import { ROUTES } from '../config/routes'

const {
	currentQuiz,
	isStarted,
	startCompletion,
	restartCompletion,
	questionIndex,
	nextQuestion,
	hasAnswer
} = useQuizCompletion()
</script>

<template>
	<header
		class="fixed inset-x-0 flex items-center justify-between border-b border-b-zinc-300 bg-black/50 p-2 backdrop-blur-2xl"
	>
		<div class="flex items-center gap-3">
			<h1 class="font-bold">
				{{ currentQuiz.name }}
			</h1>
			<div v-if="isStarted" class="flex items-center gap-3">
				<div class="flex w-60 flex-col items-center self-center">
					<p class="font-bold text-indigo-200">
						Вопрос {{ questionIndex }}/{{ currentQuiz.questionsCount }}
					</p>
					<UProgress
						v-model="questionIndex"
						:max="currentQuiz.questionsCount"
					/>
				</div>
				<UButton
					:disabled="!hasAnswer"
					@click="nextQuestion"
					class="self-end"
					icon="i-lucide-arrow-right"
					variant="ghost"
				/>
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
