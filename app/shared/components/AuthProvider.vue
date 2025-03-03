<script setup>
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
	authStore.initializeAuth()
})
</script>

<template>
	<slot v-if="!authStore.isLoading" />
	<div v-else>LOADING</div>
</template>
