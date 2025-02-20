<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
  <UModal
    v-model:open="isOpen"
    title="Выйти из учетной записи?"
  >
    <slot name="trigger" />

    <template #body>
      <div class="flex justify-between">
        <UButton
          variant="soft"
          size="xl"
        >
          Выйти
        </UButton>
        <UButton
          variant="soft"
          size="xl"
          @click="isOpen = false"
        >
          Отмена
        </UButton>
      </div>
    </template>
  </UModal>
</template>

<style scoped></style>
