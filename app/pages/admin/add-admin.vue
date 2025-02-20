<script lang="ts" setup>
import { ROUTES } from '~/shared/config/routes'
import { mockUsers } from '~/shared/mock/mock'

definePageMeta({
	title: 'Добавить администратора',
	layout: 'admin',
})
</script>

<template>
  <section class="p-4 flex flex-col gap-5">
    <header class="p-4 flex justify-between">
      <h1 class="text-bold text-2xl">
        Администраторы
      </h1>
      <AddAdminModal>
        <template #trigger>
          <UButton
            variant="soft"
            icon="uil:plus"
          >
            Добавить
          </UButton>
        </template>
      </AddAdminModal>
    </header>

    <div class="flex flex-col lg:max-w-[95%] w-full self-center gap-2">
      <AdminCard
        v-for="user in mockUsers.slice(0, 3)"
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
