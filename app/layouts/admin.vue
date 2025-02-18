<script lang="ts" setup>
useHead({
	title: 'Админ-панель | Фильмонафт',
	meta: [
		{
			name: 'description',
			content:
				'Административная панель Фильмонафт — управление викторинами, пользователями и контентом о культовых фильмах.',
		},
		{
			name: 'keywords',
			content:
				'Фильмонафт, викторины, фильмы, кино, админ-панель, управление викторинами, киноманы',
		},
		{ property: 'og:title', content: 'Админ-панель | Фильмонафт' },
		{
			property: 'og:description',
			content:
				'Контроль и управление викторинами по известным фильмам на платформе Фильмонафт.',
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:image', content: '/images/admin-preview.png' },
		{ property: 'og:url', content: 'https://filmonaft.com/admin' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: 'Админ-панель | Фильмонафт' },
		{
			name: 'twitter:description',
			content:
				'Управляйте викторинами по культовым фильмам и пользователями платформы Фильмонафт.',
		},
		{ name: 'twitter:image', content: '/images/admin-preview.png' },
	],
	link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
})
</script>

<template>
	<div class="h-screen bg bg-center fixed inset-0 -z-10 bg-cover"></div>

	<div class="grid lg:grid-cols-[300px_1fr]">
		<div>
			<AppSidebar class="max-lg:hidden" />
			<AppBottomMenu class="lg:hidden" />
		</div>

		<main>
			<slot />
		</main>
	</div>
</template>

<style scoped>
.bg {
	background-image: url('/img/testbg2.jpeg');
}
.bg:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.548);
	bottom: 0;
	z-index: 2;
}
</style>
