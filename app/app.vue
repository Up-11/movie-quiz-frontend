<script setup lang="ts"></script>
<template>
	<AuthProvider>
		<UApp lang="ru" :tooltip="{ delayDuration: 200 }">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UApp>
	</AuthProvider>
</template>

<style></style>
