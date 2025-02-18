<script setup lang="ts">
import type { IUser } from '~/shared/types/common.types'

defineProps<{ user: Omit<IUser, 'role'> }>()
</script>

<template>
	<h1 class="font-bold text-white sm:w-1/5 text-center sm:text-left">
		{{ user.id }}
	</h1>
	<div class="text-white sm:w-2/5 text-center sm:text-start">
		{{ user.name }}
	</div>
	<div class="text-white sm:w-2/5 text-center sm:text-right">
		{{ user.email }}
	</div>
</template>
