<script lang="ts" setup>
import { defineProps, defineEmits, computed, defineModel } from 'vue'
import type { AnswerVariant } from '~/modules/quiz/types'

const model = defineModel<string>('variant-text')

const props = defineProps<{
	variant: AnswerVariant
	isCorrect: boolean
}>()

const emits = defineEmits<{
	(e: 'set-correct-variant', value: AnswerVariant): void
}>()

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
			class="w-full"
			size="xl"
			variant="soft"
			type="text"
			placeholder="Введите вариант ответа"
			v-model="model"
		/>
	</div>
</template>
