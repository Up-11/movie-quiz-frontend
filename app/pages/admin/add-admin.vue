<script lang="ts" setup>
import { AdminService } from '~/modules/admin/service/admin.service'
import type { IUserDto } from '~/modules/admin/service/admin.service.dto'
import { USER_ROLE } from '~/shared/types/common.types'

definePageMeta({
	title: 'Добавить администратора',
	layout: 'admin'
})

const admins = ref<IUserDto[]>([])
const searchTerm = ref<string>('')
const isSearching = ref<boolean>(false)

const { fetch, isLoading } = useQuery({
	queryFn: () => AdminService.getUsers(USER_ROLE.ADMIN, searchTerm.value),
	enabled: true,
	onSuccess(data) {
		admins.value = data.data
	}
})
watchDebounced(
	searchTerm,
	async () => {
		isSearching.value = true
		await fetch()
		isSearching.value = false
	},
	{ debounce: 500, maxWait: 1000 }
)
</script>

<template>
	<section class="flex flex-col gap-5 p-4">
		<header class="flex flex-wrap justify-between p-4">
			<h1 class="text-bold text-2xl">Администраторы</h1>
			<AddAdminModal @refetch-admins="fetch">
				<template #trigger>
					<UButton variant="soft" icon="uil:plus"> Добавить </UButton>
				</template>
			</AddAdminModal>
		</header>

		<div class="flex w-full flex-col gap-2 self-center lg:max-w-[95%]">
			<USkeleton
				v-if="isLoading && !isSearching"
				v-for="i in 5"
				:key="i"
				class="h-20"
			/>
			<div v-else-if="isSearching" class="flex justify-center">
				<ULoader />
			</div>
			<AdminCard
				v-else-if="!isLoading"
				v-for="admin in admins"
				:key="admin.email"
			>
				<template #items>
					<AdminUserCard :user="admin" />
				</template>
			</AdminCard>
		</div>
		<div v-if="!isLoading && admins.length === 0" class="flex justify-center">
			<h1 class="text-bold p-4 text-2xl">Администраторов нет</h1>
		</div>
	</section>
</template>

<style scoped></style>
