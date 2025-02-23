<script lang="ts" setup>
import type { AnswerVariant } from '~/modules/quiz/types'

const props = defineProps<{ variant: AnswerVariant; isCorrect: boolean }>()

const emits = defineEmits(['set-correct-variant'])

const onClickSetCorrectVariant = () => {
	emits('set-correct-variant', props.variant)
}

const btnIconColor = computed(() => (props.isCorrect ? 'success' : 'neutral'))
</script>

<template>
	<div class="flex items-center gap-1">
		<UButton
			@click="onClickSetCorrectVariant"
			size="xl"
			variant="soft"
			:color="btnIconColor"
			icon="uil:check-circle"
		/>
		<UInput
			size="xl"
			variant="soft"
			type="text"
			placeholder="Введите вариант ответа"
			:model-value="variant.variant"
		/>
	</div>
</template>

<style scoped></style>
