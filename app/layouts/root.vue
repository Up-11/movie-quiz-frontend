<script lang="ts" setup></script>

<template>
	<div class="text-white min-h-screen">
		<div class="z-10">
			<AppHeader />
		</div>
		<main class="z-10 h-screen pt-10 px-5 md:p-10 flex flex-col gap-5">
			<slot />
		</main>
		<div class="fixed inset-0 -z-10 bg bg-center bg-cover"></div>
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
