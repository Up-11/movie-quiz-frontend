<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps<{ modelValue: string; isQuestion?: boolean }>()
const emit = defineEmits(['update:modelValue'])

const image = ref(props.modelValue)

const { uploadFile, previewUrl } = useUploadFiles(url => {
	image.value = url
	emit('update:modelValue', url.url)
})

watch(
	() => props.modelValue,
	newVal => {
		image.value = newVal
	}
)
</script>

<template>
	<div
		:class="[
			'flex',
			'w-full',
			'justify-between',
			'gap-10',
			isQuestion && 'flex-col'
		]"
	>
		<label class="cursor-pointer">
			<input type="file" class="hidden" @change="uploadFile" />
			<nuxt-button>Загрузить изображение</nuxt-button>
		</label>
		<NuxtImg
			alt="Предпросмотр"
			v-if="previewUrl"
			class="col-start-3 h-60 w-full self-end rounded-lg object-contain"
			:src="previewUrl"
			width="300"
		/>
	</div>
</template>
