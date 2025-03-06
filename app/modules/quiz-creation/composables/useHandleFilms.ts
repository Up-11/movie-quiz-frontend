import { AdminService } from '~/modules/admin/service/admin.service'
import type { IFilmDto } from '~/modules/admin/service/admin.service.dto'
import { useQuizCreationStore } from '../store/QuizCreationStore'

export const useHandleFilms = () => {
	const toast = useToast()
	const store = useQuizCreationStore()

	const selectItems = ref<IFilmDto[]>([])

	const initialSelectValue = {
		label: 'Выберите фильм'
	}
	const selectValue = ref(initialSelectValue)

	const createFilm = (item: string) => {
		addFilm(item)
	}

	const { mutate: deleteFilm } = useMutation({
		mutationFn: (title: string) => AdminService.deleteFilm(title),
		onSuccess: () => {
			toast.add({
				title: 'Успех',
				description: 'Фильм успешно удален.',
				color: 'success'
			})
			fetchFilms()
			selectValue.value = initialSelectValue
		},
		onError: err => {
			toast.add({
				title: 'Ошибка',
				description: err.message,
				color: 'error'
			})
		}
	})

	const { mutate: addFilm } = useMutation({
		mutationFn: (title: string) => AdminService.createFilm(title),
		onSuccess: () => {
			toast.add({
				title: 'Успех',
				description: 'Фильм успешно создан.',
				color: 'success'
			})
			fetchFilms()
		},
		onError: err => {
			toast.add({
				title: 'Ошибка',
				description: err.message,
				color: 'error'
			})
		}
	})

	const {
		fetch: fetchFilms,
		data: films,
		isLoading: filmsLoading
	} = useQuery({
		queryFn: () => AdminService.getFilms(),
		onSuccess: res => {
			selectItems.value = res.data.map(film => ({
				...film,
				label: film.title
			}))
		}
	})

	const onChangeSelect = () => {
		const currentFilmId = films?.value?.data?.find(
			film => film.title === selectValue.value.label
		)?.id

		store.setFilm(currentFilmId!)
	}
	const onSelectChange = () => {
		if (selectItems.value.length === 0) {
			fetchFilms()
		}
	}

	return {
		selectItems,
		selectValue,
		createFilm,
		deleteFilm,
		films,
		filmsLoading,
		onChangeSelect,
		onSelectChange
	}
}
