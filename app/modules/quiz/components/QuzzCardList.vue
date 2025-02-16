<script lang="ts" setup>
import type { QuizCard } from '../types'

defineProps<{ component: Component; quizes: QuizCard[] }>()
</script>

<template>
	<div
		class="grid justify-items-center 2xl:grid-cols-6 xl:grid-cols-4 justify-center md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-7"
	>
		<component
			:is="component"
			v-for="card in quizes"
			:key="card.id"
			:card="card"
		/>
	</div>
</template>

<style scoped></style>
