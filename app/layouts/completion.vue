<script lang="ts" setup></script>

<template>
	<div class="min-h-screen text-white">
		<div class="z-10">
			<CompletionHeader />
		</div>
		<main class="z-10 flex h-screen flex-col gap-5 px-5 pt-10 md:p-10 md:pt-12">
			<slot />
		</main>
		<div class="bg fixed inset-0 -z-10 bg-cover bg-center" />
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
	bottom: 0;
	z-index: 2;
}
</style>
