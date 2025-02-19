<script lang="ts" setup>
import { useQuizStore } from '../store/QuizStore'
import type { QuizCard } from '../types'

const { quiz } = defineProps<{ quiz: QuizCard }>()

const btnText = computed(() => (quiz.completed ? 'Пройти еще раз' : 'Поехали!'))

const store = useQuizStore()

const { startCompletion } = store
</script>

<template>
	<div class="flex-col flex mt-4 h-full container">
		<div class="flex gap-5">
			<NuxtImg
				:src="quiz.imageUrl"
				class="w-1/2 rounded-sm"
				:alt="quiz.name"
				width="600"
			/>
			<div class="flex flex-col h-full gap-5 w-1/2 justify-between">
				<div class="flex flex-col gap-2 w-full">
					<div class="flex justify-between w-full">
						<h1 class="font-bold text-4xl">{{ quiz.name }}</h1>
						<h1 class="font-bold text-2xl">{{ quiz.film }}</h1>
					</div>
					<p class="font-medium text-lg">{{ quiz.description }}</p>
				</div>
				<div class="flex gap-3">
					<UBadge variant="soft" class="text-sm cursor-default"
						>Людей прошли:
						<span class="font-bold">{{ quiz.usersCompletions }}</span></UBadge
					>
					<UBadge variant="soft" class="text-sm cursor-default"
						>Рейтинг: <span class="font-bold">{{ quiz.rating }}</span></UBadge
					>
					<UBadge variant="soft" class="text-sm cursor-default"
						>Вопросов:
						<span class="font-bold">{{ quiz.questionsCount }}</span></UBadge
					>
					<USeparator
						v-if="quiz.userRating || quiz.completed"
						orientation="vertical"
						color="primary"
					/>

					<UBadge
						v-if="quiz.userRating"
						variant="soft"
						color="success"
						class="text-sm cursor-default"
						>Ваша оценка:
						<span class="font-bold">{{ quiz.userRating }}</span></UBadge
					>

					<UBadge
						v-if="quiz.completed"
						color="success"
						variant="soft"
						class="text-sm cursor-default"
						>Пройдено
					</UBadge>
					<!-- 	<UBadge
						v-if="!quiz.userRating && quiz.completed"
						variant="soft"
						color="success"
						class="text-sm cursor-default font-bold"
					>
						Оценить</UBadge
					> -->
				</div>
			</div>
		</div>
		<div class="flex justify-center h-full">
			<div class="my-auto flex gap-3">
				<UTooltip
					v-if="quiz.completed"
					text="Помните, что повторные прохождения в статистику не заносятся"
				>
					<UButton
						@click="startCompletion"
						variant="soft"
						class="text-2xl px-10 py-4 rounded-2xl"
					>
						{{ btnText }}
					</UButton>
				</UTooltip>
				<UButton
					v-else
					@click="startCompletion"
					variant="soft"
					class="text-2xl px-24 py-4 rounded-2xl"
				>
					{{ btnText }}
				</UButton>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
