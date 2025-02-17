<script lang="ts" setup>
import { useUserProfile } from '../composables/useUserProfile'
import { editProfileSchema } from '../schemas/edit-profile.schema'
import { quizCards } from '~/modules/quiz/mock'

const { state, onSubmit, user } = useUserProfile()
const playedQuizCards = quizCards.filter(quiz => quiz.completed)
</script>

<template>
	<aside class="flex flex-col gap-5">
		<h1 class="text-2xl">Личные данные</h1>
		<section class="flex flex-col gap-3">
			<div class="flex gap-3 justify-evenly">
				<div class="flex items-center flex-col gap-1">
					<h2 class="md:text-lg">Имя</h2>
					<USeparator />
					<h2 class="md:text-lg text-sm font-bold">{{ user.name }}</h2>
				</div>
				<div class="flex items-center flex-col gap-1">
					<h2 class="md:text-lg">Email</h2>
					<USeparator />
					<h2 class="md:text-lg text-sm font-bold">{{ user.email }}</h2>
				</div>
			</div>
			<div class="flex flex-col gap-3">
				<UModal title="Редактирование профиля">
					<UButton size="sm" variant="soft">Изменить профиль</UButton>
					<template #body>
						<UForm
							:schema="editProfileSchema"
							:state="state"
							class="space-y-4"
							@submit="onSubmit"
						>
							<UFormField label="Имя" name="name">
								<UInput class="w-full" v-model="state.name" />
							</UFormField>
							<UFormField label="Электронная почта" name="email">
								<UInput class="w-full" v-model="state.email" />
							</UFormField>

							<UFormField label="Пароль" name="password">
								<UInput
									class="w-full"
									v-model="state.password"
									type="password"
								/>
							</UFormField>

							<UFormField label="Повторите пароль" name="confirmPassword">
								<UInput
									class="w-full"
									v-model="state.confirmPassword"
									type="password"
								/>
							</UFormField>

							<UButton type="submit"> Обновить </UButton>
						</UForm></template
					>
				</UModal>
				<UButton size="sm" variant="soft">Выйти</UButton>
			</div>
		</section>
		<h1 class="text-2xl">Статистика</h1>
		<section>
			<div class="flex justify-evenly">
				<div class="flex items-center flex-col gap-1">
					<h2 class="text-base text-center">
						Сыгранно <br />
						викторин
					</h2>
					<USeparator />
					<h2 class="md:text-lg text-sm font-bold">14</h2>
				</div>
				<div class="flex items-center flex-col gap-1">
					<h2 class="text-base text-center">
						Средний процент <br />
						правильных ответов
					</h2>
					<USeparator />
					<h2 class="md:text-lg text-sm font-bold">14%</h2>
				</div>
			</div>
			<h1 class="text-2xl my-4">История</h1>

			<div class="flex flex-col gap-2">
				<ProfileQuizCard
					v-for="quiz in playedQuizCards"
					:card="quiz"
					:key="quiz.id"
				/>
			</div>
		</section>
	</aside>
</template>

<style scoped></style>
