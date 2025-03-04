<template>
	<div class="container mx-auto px-4 py-6">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<USkeleton class="h-64 w-full rounded-md md:h-auto" />
			</div>

			<div class="flex flex-col justify-between gap-4">
				<div>
					<div class="flex flex-wrap items-center justify-between">
						<h1 class="text-2xl font-bold md:text-3xl">
							<USkeleton class="h-8 w-32" />
						</h1>
						<h2 class="text-lg font-semibold md:text-2xl">
							<USkeleton class="h-6 w-24" />
						</h2>
					</div>
					<p class="mt-2 text-sm text-gray-200 md:text-lg">
						<USkeleton class="h-12 w-full" />
					</p>
				</div>
			</div>
		</div>

		<div class="mt-12 flex justify-center">
			<USkeleton class="h-12 w-48 rounded-xl" />
		</div>
	</div>
</template>
