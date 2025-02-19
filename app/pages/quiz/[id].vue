<script lang="ts" setup>
import RestartModal from '~/modules/quiz/components/RestartModal.vue'
import { quizCards } from '~/modules/quiz/mock'
import { ROUTES } from '~/shared/config/routes'

definePageMeta({
	layout: 'completion',
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
	title: `Викторина ${currentQuiz.value?.name || 'Неизвестная викторина'}`,
})

const modal = useModal()

const {
	updateCurrentQuiz,
	checkIsStarted,
	clearCurrentQuiz,
	clearIsStarted,
	isStarted,
} = useQuizCompletion()

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
	<div class="h-full flex justify-center">
		<Transition v-if="currentQuiz && !isStarted" name="bounce" appear>
			<QuizPreview v-if="currentQuiz && !isStarted" :quiz="currentQuiz" />
		</Transition>
		<Transition v-else-if="currentQuiz" name="bounce" appear>
			<QuizCompletion :question="currentQuiz?.questions[0]!" />
		</Transition>
	</div>
</template>
