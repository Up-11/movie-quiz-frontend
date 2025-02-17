<script lang="ts" setup>
import type { TabsItem } from '@nuxt/ui'

definePageMeta({
	layout: 'root',
})
useHead({
	title: 'Авторизация - Фильмонафт',
	meta: [
		{
			name: 'description',
			content:
				'Войдите в свой аккаунт на Фильмонафт, чтобы сохранять любимые фильмы и получать персональные рекомендации.',
		},
		{ property: 'og:title', content: 'Авторизация - Фильмонафт' },
		{
			property: 'og:description',
			content:
				'Войдите в свой аккаунт, чтобы использовать все возможности Фильмонафт.',
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: 'https://filmonaut.com/login' },
		{
			property: 'og:image',
			content: 'https://filmonaut.com/static/og-image.jpg',
		},
	],
})

const items = ref<TabsItem[]>([
	{
		label: 'Войти',
		slot: 'login',

		icon: 'i-lucide-user',
	},
	{
		label: 'Зарегистрироваться',

		icon: 'i-lucide-lock',
		slot: 'register',
	},
])
</script>

<template>
	<div class="flex justify-center">
		<div
			class="mt-10 max-w-xl w-full bg-black/50 p-4 min-h-[550px] rounded-xl backdrop-blur-2xl"
		>
			<UTabs
				color="primary"
				variant="link"
				:items="items"
				class="gap-4 w-full"
				:ui="{ trigger: 'flex-1' }"
				:unmount-on-hide="false"
			>
				<template #login>
					<div class="flex justify-center">
						<ULoginForm class="w-[300px]" />
					</div>
				</template>
				<template #register>
					<div class="flex justify-center">
						<URegisterForm class="w-[300px]" />
					</div>
				</template>
			</UTabs>
		</div>
	</div>
</template>
