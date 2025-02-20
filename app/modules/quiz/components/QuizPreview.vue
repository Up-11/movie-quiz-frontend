<script lang="ts" setup>
import { useQuizStore } from '../store/QuizStore'
import type { QuizCard } from '../types'

const { quiz } = defineProps<{ quiz: QuizCard }>()

const btnText = computed(() => (quiz.completed ? 'Пройти еще раз' : 'Поехали!'))

const store = useQuizStore()

const { startCompletion } = store
</script>

<template>
	<div class="container mx-auto px-4 py-6">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<NuxtImg
				:src="quiz.imageUrl"
				:alt="quiz.name"
				class="h-64 w-full rounded-md object-cover md:h-auto"
				width="600"
			/>

			<div class="flex flex-col justify-between gap-4">
				<div>
					<div class="flex flex-wrap items-center justify-between">
						<h1 class="text-2xl font-bold md:text-3xl">{{ quiz.name }}</h1>
						<h2 class="text-lg font-semibold md:text-2xl">{{ quiz.film }}</h2>
					</div>
					<p class="mt-2 text-sm text-gray-200 md:text-lg">
						{{ quiz.description }}
					</p>
				</div>

				<div class="flex flex-wrap items-center gap-2">
					<UBadge variant="soft" class="cursor-default text-xs md:text-sm">
						Людей прошли:
						<span class="font-bold">{{ quiz.usersCompletions }}</span>
					</UBadge>
					<UBadge variant="soft" class="cursor-default text-xs md:text-sm">
						Рейтинг: <span class="font-bold">{{ quiz.rating }}</span>
					</UBadge>
					<UBadge variant="soft" class="cursor-default text-xs md:text-sm">
						Вопросов: <span class="font-bold">{{ quiz.questionsCount }}</span>
					</UBadge>

					<USeparator
						v-if="quiz.userRating || quiz.completed"
						orientation="vertical"
						color="primary"
						class="hidden max-h-6 md:block"
					/>

					<UBadge
						v-if="quiz.userRating"
						variant="soft"
						color="success"
						class="cursor-default text-xs md:text-sm"
					>
						Ваша оценка: <span class="font-bold">{{ quiz.userRating }}</span>
					</UBadge>

					<UBadge
						v-if="quiz.completed"
						color="success"
						variant="soft"
						class="cursor-default text-xs md:text-sm"
					>
						Пройдено
					</UBadge>
				</div>
			</div>
		</div>

		<div class="mt-12 flex justify-center">
			<UTooltip
				v-if="quiz.completed"
				text="Повторные прохождения не засчитываются"
			>
				<UButton
					@click="startCompletion"
					variant="soft"
					class="rounded-xl px-8 py-3 text-lg md:px-10 md:py-4 md:text-2xl"
				>
					{{ btnText }}
				</UButton>
			</UTooltip>

			<UButton
				v-else
				@click="startCompletion"
				variant="soft"
				class="rounded-xl px-12 py-3 text-lg md:px-24 md:py-4 md:text-2xl"
			>
				{{ btnText }}
			</UButton>
		</div>
	</div>
</template>
