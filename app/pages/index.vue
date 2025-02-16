<script lang="ts" setup>
import { ROUTES } from '~/shared/config/routes'
definePageMeta({
	layout: undefined,
})
</script>

<template>
	<div
		class="h-screen bg-center bg-[url('/assets/img/background.jpg')] absolute inset-0 -z-10 bg-cover"
	></div>
	<section class="h-screen w-full flex flex-col justify-center">
		<div class="flex justify-center w-full">
			<div class="ml-[10%] flex flex-col gap-5">
				<div>
					<h1
						class="font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase select-none"
					>
						Фильмонафт
					</h1>
					<h2
						class="font-semibold md:text-lg text-violet-200 uppercase select-none"
					>
						Викторины по известным фильмам
					</h2>
				</div>

				<UButton
					size="xl"
					class="self-end font-light"
					:to="ROUTES.allQuizzes"
					variant="link"
					trailing-icon="uil:arrow-right"
					:ui="{
						base: 'md:text-2xl text-violet-300 hover:text-violet-400',
						trailingIcon: 'size-8',
					}"
					>Начать прохождение
				</UButton>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
