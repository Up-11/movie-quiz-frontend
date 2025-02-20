<script lang="ts" setup>
import { quizCards } from '~/modules/quiz/mock'
import { ROUTES } from '~/shared/config/routes'

definePageMeta({
	title: 'Мониторинг викторин',
	layout: 'admin',
})
const value = ref<string>('')
</script>

<template>
  <section class="p-4 flex flex-col gap-5">
    <header class="p-4 flex justify-between">
      <h1 class="text-bold text-2xl">
        Все викторины
      </h1>
      <UButton
        variant="soft"
        :to="ROUTES.admin.createQuiz"
        icon="uil:plus"
      >
        Создать викторину
      </UButton>
    </header>
    <div class="mt-10">
      <UButtonGroup class="w-full flex h-10">
        <UInput
          v-model="value"
          class="w-full"
          placeholder="Поиск по викторинам..."
          variant="soft"
          size="xl"
          icon="uil:search"
        >
          <template
            v-if="value.length"
            #trailing
          >
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              icon="uil:times"
              aria-label="Clear input"
              @click="value = ''"
            />
          </template>
        </UInput>
        <UButton
          color="neutral"
          variant="soft"
          size="sm"
        >
          Поиск
        </UButton>
      </UButtonGroup>
    </div>

    <div class="flex flex-col lg:max-w-[95%] w-full self-center gap-2">
      <AdminCard
        v-for="quiz in quizCards"
        :key="quiz.id"
      >
        <template #items>
          <AdminQuizCard :quiz="quiz" />
        </template>
      </AdminCard>
    </div>
  </section>
</template>

<style scoped></style>
