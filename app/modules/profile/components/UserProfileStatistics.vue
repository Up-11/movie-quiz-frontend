<script lang="ts" setup>
import { userService } from '../service/user.service'

const statistic = ref<{
	totalQuizzes: number
	correctAnswersPercentage: number
} | null>(null)

const { data, isLoading } = useQuery({
	queryFn: () => userService.getStatistic(),
	enabled: true,
	onSuccess(data) {
		statistic.value = data.data
	}
})
</script>

<template>
	<div class="flex justify-evenly gap-4">
		<USkeleton v-if="isLoading" class="h-20 w-full" />
		<div v-else class="flex flex-col items-center gap-1">
			<h2 class="text-center text-base">
				Сыгранно <br />
				викторин
			</h2>
			<USeparator />
			<h2 class="text-sm font-bold md:text-lg">
				{{ statistic?.totalQuizzes }}
			</h2>
		</div>
		<USkeleton v-if="isLoading" class="h-20 w-full" />

		<div v-else class="flex flex-col items-center gap-1">
			<h2 class="text-center text-base">
				Средний процент <br />
				правильных ответов
			</h2>
			<USeparator />
			<h2 class="text-sm font-bold md:text-lg">
				{{ statistic?.correctAnswersPercentage }}%
			</h2>
		</div>
	</div>
</template>

<style scoped></style>
