<script lang="ts"></script>
<template>
	<UApp lang="ru" :tooltip="{ delayDuration: 200 }">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>

<style>
.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
