<script lang="ts" setup>
import { ROUTES } from './shared/config/routes'

const error = useError()
</script>

<template>
	<div class="h-screen bg bg-center absolute inset-0 -z-10 bg-cover"></div>
	<div
		v-if="error?.statusCode === 404"
		class="flex w-full h-screen justify-center"
	>
		<div class="my-auto flex flex-col gap-10">
			<h1 class="text-3xl text-center">
				Такой страницы у нас нет, <br />
				Возвращайтесь на главную
			</h1>

			<NuxtImg src="/img/not-found.png" alt="404" width="300" height="300" />
			<UButton
				:to="ROUTES.allQuizzes"
				size="lg"
				variant="outline"
				icon="uil:arrow-left"
				class="self-center"
				>Вернитесь обратно</UButton
			>
		</div>
	</div>

	<div v-else class="error-page text-2xl">
		<h1>Произошла ошибка</h1>
		<p>{{ error?.message }}</p>
		<NuxtLink to="/">Перейти на главную</NuxtLink>
	</div>
</template>

<style scoped>
.error-page {
	text-align: center;
}
.bg {
	background-image: url('/img/background.jpg');
}
.bg:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.726);
	bottom: 0;
	z-index: 2;
}
</style>
