<script setup lang="ts">
import type { IUser } from '~/shared/types/common.types'
</script>

<template>
	<article class="bg-black/90 p-4 backdrop-blur-2xl rounded-lg">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-2">
			<div class="flex flex-col sm:flex-row items-center w-full gap-2">
				<slot name="items" />
			</div>
			<UPopover
				class="self-start"
				:content="{
					align: 'end',
					side: 'bottom',
					sideOffset: 8,
				}"
			>
				<UButton color="primary" variant="ghost" icon="i-lucide-menu" />
				<template #content>
					<div class="flex flex-col gap-1 w-36">
						<UButton variant="soft">Удалить</UButton>

						<slot name="actions" />
					</div>
				</template>
			</UPopover>
		</div>
	</article>
</template>
