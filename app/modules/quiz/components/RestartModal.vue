<script setup lang="ts">
const modal = useModal()

const { restartCompletion, isStarted } = useQuizCompletion()

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
			class: 'hidden'
		}"
		title="Продолжить викторину?"
		description="Вы уже начинали проходить эту викторину, вы хотите продолжить ее или начать заново"
	>
		<template #body>
			<div class="flex justify-between">
				<UButton
					variant="subtle"
					size="lg"
					color="success"
					@click="onClickContinueCompletion"
				>
					Продолжить
				</UButton>
				<UButton
					variant="subtle"
					size="lg"
					color="error"
					@click="onClickRestartCompletion"
				>
					Начать заново
				</UButton>
			</div>
		</template>
	</UModal>
</template>
