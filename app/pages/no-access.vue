<script lang="ts" setup>
import { ROUTES } from '~/shared/config/routes'
</script>

<template>
  <div class="h-screen bg bg-center absolute inset-0 -z-10 bg-cover" />

  <div class="flex w-full h-screen justify-center">
    <div class="my-auto justify-center items-center flex flex-col gap-10">
      <h1 class="text-3xl text-center">
        К сожалению у вас нету доступа к этой части приложения
      </h1>
      <NuxtPicture
        src="/img/secured.png"
        alt="404"
        width="300"
        height="300"
      />
      <UButton
        :to="ROUTES.allQuizzes"
        size="lg"
        variant="outline"
        icon="uil:arrow-left"
        class="self-center"
      >
        Вернитесь обратно
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.bg {
	background-image: url('/img/background.jpg');
}
.bg:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.726);
	bottom: 0;
	z-index: 2;
}
</style>
