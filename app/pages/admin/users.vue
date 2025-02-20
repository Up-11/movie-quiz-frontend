<script lang="ts" setup>
import { mockUsers } from '~/shared/mock/mock'

definePageMeta({
	title: 'Мониторинг пользователей',
	layout: 'admin',
})

const value = ref<string>('')
</script>

<template>
  <section class="p-4 flex flex-col gap-5">
    <h1 class="p-4 text-bold text-2xl">
      Все игроки
    </h1>
    <div class="mt-10">
      <UButtonGroup class="w-full flex h-10">
        <UInput
          v-model="value"
          class="w-full"
          placeholder="Поиск по пользователям..."
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
        v-for="user in mockUsers"
        :key="user.email"
      >
        <template #items>
          <AdminUserCard :user="user" />
        </template>
      </AdminCard>
    </div>
  </section>
</template>

<style scoped></style>
