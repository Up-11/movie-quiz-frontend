<script lang="ts">
import AuthProvider from './shared/components/AuthProvider.vue'
</script>
<template>
	<UApp lang="ru" :tooltip="{ delayDuration: 200 }">
		<AuthProvider>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</AuthProvider>
	</UApp>
</template>

<style></style>
