<script setup lang="ts"></script>

<template>
	<article class="rounded-lg bg-black/90 p-4 backdrop-blur-2xl">
		<div class="flex flex-col items-center justify-between gap-2 sm:flex-row">
			<div class="flex w-full flex-col items-center gap-2 sm:flex-row">
				<slot name="items" />
			</div>
			<UPopover
				class="self-start"
				:content="{
					align: 'end',
					side: 'bottom',
					sideOffset: 8
				}"
			>
				<UButton color="primary" variant="ghost" icon="i-lucide-menu" />
				<template #content>
					<div class="flex w-36 flex-col gap-1">
						<slot name="actions" />
					</div>
				</template>
			</UPopover>
		</div>
	</article>
</template>
