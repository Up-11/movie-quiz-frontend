<script setup lang="ts">
import { useQuizStore } from '../store/QuizStore'

const store = useQuizStore()
const modal = useModal()
const { restartCompletion } = store
const { isStarted } = storeToRefs(store)

const onClickRestartCompletion = () => {
	modal.close()
	restartCompletion()
}

const onClickContinueCompletion = () => {
	modal.close()
	isStarted.value = true
}
</script>
<template>
	<UModal
		:dismissible="false"
		:close="{
			class: 'hidden',
		}"
		title="Продолжить викторину?"
		description="Вы уже начинали проходить эту викторину, вы хотите продолжить ее или начать заново"
	>
		<template #body>
			<div class="flex justify-between">
				<UButton
					variant="subtle"
					size="lg"
					@click="onClickContinueCompletion"
					color="success"
					>Продолжить</UButton
				>
				<UButton
					@click="onClickRestartCompletion"
					variant="subtle"
					size="lg"
					color="error"
					>Начать заново</UButton
				>
			</div>
		</template>
	</UModal>
</template>
