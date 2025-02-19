<script setup lang="ts">
import type { IUser } from '~/shared/types/common.types'

defineProps<{ user: Omit<IUser, 'role'> }>()
</script>

<template>
	<div class="w-full">
		<h1 class="font-bold text-gray-400 text-xs mb-2">id: {{ user.id }}</h1>
		<div class="flex flex-col sm:flex-row items-center justify-between w-full">
			<p class="w-full sm:w-1/3 text-center sm:text-left mb-2 sm:mb-0">
				{{ user.name }}
			</p>

			<p class="w-full sm:w-1/3 text-center sm:text-right">
				{{ user.email }}
			</p>
		</div>
	</div>
</template>
