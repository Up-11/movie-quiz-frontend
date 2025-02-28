<script setup>
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
	authStore.initializeAuth()
})
</script>

<template>
	<slot />
</template>
