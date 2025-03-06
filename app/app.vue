<script lang="ts">
import AuthProvider from './shared/components/AuthProvider.vue'
</script>
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
