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
		class="fixed inset-x-0 z-200 flex flex-wrap items-center justify-between border-b border-b-zinc-300 bg-black/50 p-3 backdrop-blur-2xl sm:p-4"
	>
		<div class="flex flex-wrap items-center gap-3">
			<h1 class="text-sm font-bold sm:text-lg">
				{{ currentQuiz.name }}
			</h1>

			<div
				v-if="isStarted && !currentQuiz.isFinished"
				class="flex items-center gap-3"
			>
				<div
					class="flex w-full max-w-sm flex-col items-center self-center select-none"
				>
					<p class="text-xs font-bold text-indigo-200 sm:text-base">
						Вопрос {{ questionIndex }}/{{ currentQuiz.questionsCount }}
					</p>
					<UProgress
						v-model="questionIndex"
						:max="currentQuiz.questionsCount"
						class="w-full"
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

			<h1
				v-else-if="currentQuiz.isFinished"
				class="text-sm font-bold text-violet-200 sm:text-lg"
			>
				Викторина пройдена!
			</h1>
			<UButton v-else variant="soft" @click="startCompletion"> Начать </UButton>
		</div>

		<div class="mt-2 flex flex-wrap items-center gap-2 sm:mt-0">
			<UButton variant="ghost" icon="i-lucide-trash" @click="restartCompletion">
				Сброс
			</UButton>
			<UButton variant="ghost" icon="i-lucide-home" :to="ROUTES.allQuizzes">
				Выход
			</UButton>
		</div>
	</header>
</template>

<style scoped></style>
