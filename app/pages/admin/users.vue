<script lang="ts" setup>
import { AdminService } from '~/modules/admin/service/admin.service'
import type { IUserDto } from '~/modules/admin/service/admin.service.dto'
import { USER_ROLE } from '~/shared/types/common.types'

definePageMeta({
	title: 'Мониторинг пользователей',
	layout: 'admin'
})

const toast = useToast()

const users = ref<IUserDto[]>([])
const searchTerm = ref<string>('')
const isSearching = ref<boolean>(false)

const { data, fetch, isLoading } = useQuery({
	queryFn: () => AdminService.getUsers(USER_ROLE.USER, searchTerm.value),
	enabled: true,
	onSuccess(data) {
		users.value = data.data
	}
})

const { mutate } = useMutation({
	mutationFn: (id: string) => AdminService.deleteUserById(id),
	async onSuccess() {
		isSearching.value = true
		await fetch()
		isSearching.value = false
		toast.add({
			title: 'Успех',
			description: 'Пользователь успешно удален.',
			color: 'success'
		})
	},
	onError(err) {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
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
		<h1 class="text-bold p-4 text-2xl">Все игроки</h1>
		<div class="mt-10">
			<UButtonGroup class="flex h-10 w-full">
				<UInput
					v-model="searchTerm"
					class="w-full"
					placeholder="Поиск по пользователям..."
					variant="soft"
					size="xl"
					icon="uil:search"
				>
					<template v-if="searchTerm.length > 0" #trailing>
						<UButton
							color="neutral"
							variant="link"
							size="sm"
							icon="uil:times"
							aria-label="Clear input"
							@click="searchTerm = ''"
						/>
					</template>
				</UInput>
			</UButtonGroup>
		</div>

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
			<AdminCard v-else-if="!isLoading" v-for="user in users" :key="user.email">
				<template #items>
					<AdminUserCard :user="user" />
				</template>
				<template #actions>
					<UButton @click="mutate(user.id)" variant="soft">Удалить</UButton>
				</template>
			</AdminCard>
		</div>
	</section>
</template>

<style scoped></style>
