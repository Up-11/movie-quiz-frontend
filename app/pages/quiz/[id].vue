<script lang="ts" setup>
import RestartModal from '~/modules/quiz/components/RestartModal.vue'
import { quizCards } from '~/modules/quiz/mock'
import { ROUTES } from '~/shared/config/routes'

definePageMeta({
	layout: 'completion'
})
const route = useRoute()
const router = useRouter()

const currentQuiz = computed(() =>
	quizCards.find(quiz => quiz.id === (route.params.id as string))
)

if (!currentQuiz.value) {
	router.replace(ROUTES.allQuizzes)
}

useHead({
	title: `Викторина ${currentQuiz.value?.name || 'Неизвестная викторина'}`
})

const modal = useModal()

const {
	updateCurrentQuiz,
	checkIsStarted,
	clearCurrentQuiz,
	clearIsStarted,
	isStarted,
	currentQuiz: currQuiz,
	setCorrectVariant
} = useQuizCompletion()

watch(
	() => currQuiz.value?.currentIndex,
	() => {
		setCorrectVariant(
			currentQuiz.value!.questions[currQuiz.value.currentIndex]!.correctVariant
		)
	},
	{ immediate: true }
)

onMounted(() => {
	if (!currentQuiz.value) return
	updateCurrentQuiz(currentQuiz.value)
	if (checkIsStarted()) {
		modal.open(RestartModal)
	}
})

onUnmounted(() => {
	clearCurrentQuiz()
	clearIsStarted()
})
</script>

<template>
	<div class="flex h-full justify-center">
		<Transition v-if="currentQuiz && !isStarted" name="bounce" appear>
			<QuizPreview v-if="currentQuiz && !isStarted" :quiz="currentQuiz" />
		</Transition>
		<Transition v-else-if="currentQuiz" name="bounce" appear mode="out-in">
			<QuizCompletion
				:key="currQuiz.currentIndex"
				:question="currentQuiz?.questions[currQuiz.currentIndex]!"
			/>
		</Transition>
	</div>
</template>
<style scoped>
.bounce-enter-active {
	animation: bounce-in 0.3s;
}
.bounce-leave-active {
	animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
