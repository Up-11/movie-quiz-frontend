<script lang="ts" setup>
import type { QuizCard } from '../types'

defineProps<{ component: Component; quizes: QuizCard[] }>()
</script>

<template>
	<div
		class="xs:grid-cols-1 grid justify-center justify-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
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
