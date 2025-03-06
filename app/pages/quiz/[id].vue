<script lang="ts" setup>
import RestartModal from '~/modules/quiz/components/RestartModal.vue'
import { quizCards } from '~/modules/quiz/mock'
import { ROUTES } from '~/shared/config/routes'
import { useQuery } from '../../shared/composables/useQuery'
import { quizService } from '~/modules/quiz/service/quiz.service'
import type { QuizCard } from '~/modules/quiz/types'

definePageMeta({
	layout: 'completion'
})
const route = useRoute()
const router = useRouter()

const authStore = useAuthStore()

const currentQuiz = ref<QuizCard>()

const { isLoading, fetch } = useQuery({
	queryFn: () =>
		quizService.getQuizById(route.params.id as string, authStore.user.id),
	onSuccess: res => {
		currentQuiz.value = res.data
	},
	onError: () => {
		router.replace(ROUTES.allQuizzes)
	},
	enabled: true
})

const pageTitle = computed(
	() => `Викторина ${currentQuiz.value?.name || 'Неизвестная викторина'}`
)

useHead({
	title: pageTitle
})

const modal = useModal()

const {
	updateCurrentQuiz,
	checkIsStarted,
	clearCurrentQuiz,
	clearIsStarted,
	isStarted,
	currentQuiz: currQuiz,
	setCorrectVariant,
	checkIsFinished
} = useQuizCompletion()

watch(
	() => currQuiz.value?.currentIndex,
	newIndex => {
		const currentQuestion = currentQuiz.value?.questions?.[newIndex]
		if (currentQuestion) {
			setCorrectVariant(currentQuestion.correctAnswer)
		}
	},
	{ immediate: true }
)

onMounted(async () => {
	await fetch()
	setCorrectVariant(
		currentQuiz.value!.questions[currQuiz.value.currentIndex]!.correctAnswer
	)
	if (!currentQuiz.value) return
	updateCurrentQuiz(currentQuiz.value)
	if (checkIsStarted(currQuiz.value)) {
		if (checkIsFinished(currQuiz.value)) return
		modal.open(RestartModal)
	}
})

onUnmounted(() => {
	clearCurrentQuiz()
	clearIsStarted()
})
</script>

<template>
	<SkeletonPreview v-if="isLoading" />
	<div v-else class="mt-52 flex h-full justify-center">
		<Transition v-if="currentQuiz && !isStarted" name="bounce" appear>
			<QuizPreview v-if="currentQuiz && !isStarted" :quiz="currentQuiz" />
		</Transition>
		<Transition
			v-else-if="currentQuiz && !currQuiz.isFinished"
			name="bounce"
			appear
			mode="out-in"
		>
			<QuizCompletion
				:key="currQuiz.currentIndex"
				:question="currentQuiz?.questions[currQuiz.currentIndex]!"
			/>
		</Transition>
		<Transition
			v-else-if="currQuiz.isFinished"
			name="bounce"
			appear
			mode="out-in"
		>
			<QuizFinalMenu :quiz="currentQuiz!" />
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
