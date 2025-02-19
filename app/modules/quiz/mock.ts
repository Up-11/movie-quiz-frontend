import type { Question, QuizCard } from './types'
export const mockQuestions: Question[] = [
	{
		id: '1',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/532/532b6879768797137cd0e773763b15e7.webp',
		description: 'Вопрос по истории',
		question: 'Кто был первым президентом США?',
		variants: [
			{ id: '1', variant: 'Джордж Вашингтон' },
			{ id: '2', variant: 'Авраам Линкольн' },
			{ id: '3', variant: 'Томас Джефферсон' },
			{ id: '4', variant: 'Бенджамин Франклин' },
		],
		correctVariant: { id: '1', variant: 'Джордж Вашингтон' },
	},
	{
		id: '2',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/995/995ec79a579ab7d9b03a4572823f3e2a.webp',
		description: 'Вопрос по географии',
		question: 'Какой океан самый большой по площади?',
		variants: [
			{ id: '1', variant: 'Атлантический океан' },
			{ id: '2', variant: 'Тихий океан' },
			{ id: '3', variant: 'Индийский океан' },
			{ id: '4', variant: 'Северный Ледовитый океан' },
		],
		correctVariant: { id: '2', variant: 'Тихий океан' },
	},
	{
		id: '3',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/cca/cca1a789ea49ea29b31b79faaa8ec043.webp',
		description: 'Вопрос по науке',
		question: 'Какой химический элемент обозначается символом "O"?',
		variants: [
			{ id: '1', variant: 'Кислород' },
			{ id: '2', variant: 'Азот' },
			{ id: '3', variant: 'Водород' },
			{ id: '4', variant: 'Углерод' },
		],
		correctVariant: { id: '1', variant: 'Кислород' },
	},
	{
		id: '4',
		imageUrl:
			'	https://pikuco.ru/upload/test_stable/26a/26ace83cb0b49a12a339616175d0097e.webp',
		description: 'Вопрос по литературе',
		question: 'Кто написал роман "Война и мир"?',
		variants: [
			{ id: '1', variant: 'Фёдор Достоевский' },
			{ id: '2', variant: 'Лев Толстой' },
			{ id: '3', variant: 'Александр Пушкин' },
			{ id: '4', variant: 'Николай Гоголь' },
		],
		correctVariant: { id: '2', variant: 'Лев Толстой' },
	},
	{
		id: '5',
		imageUrl:
			'	https://pikuco.ru/upload/test_stable/242/242e4b470bc8d5a78fe8d965301a0df7.webp',
		description: 'Вопрос по химии',
		question: 'Как называется химический элемент с символом "Au"?',
		variants: [
			{ id: '1', variant: 'Золото' },
			{ id: '2', variant: 'Серебро' },
			{ id: '3', variant: 'Медь' },
			{ id: '4', variant: 'Железо' },
		],
		correctVariant: { id: '1', variant: 'Золото' },
	},
]

export const quizCards: QuizCard[] = [
	{
		id: '123e4567-e89b-12d3-a456-426614174000',
		name: 'Inception Quiz',
		imageUrl:
			'	https://pikuco.ru/upload/test_stable/6b6/6b6ca61d325ffe3a67e9e64f1ba7d73d.webp',
		description:
			'Тест на знание фильма "Начало" (Inception). Проверьте, насколько хорошо вы помните сюжет и детали.',
		rating: 4.8,
		usersCompletions: 12034,
		questionsCount: 15,
		userRating: 2.9,

		film: 'Inception',
		completed: true,
		questions: mockQuestions,
	},
	{
		id: '2',
		name: 'Interstellar Quiz',
		imageUrl:
			'	https://pikuco.ru/upload/test_stable/b00/b00ec62db4a606a5a9939b54025f3a3c.webp',
		description:
			'Тест о фильме "Интерстеллар". Сможете ли вы ответить на вопросы о путешествиях во времени и космосе?',
		rating: 4.9,
		userRating: 4.9,
		usersCompletions: 9856,
		questionsCount: 12,
		film: 'Interstellar',
		completed: false,
		questions: mockQuestions,
	},
	{
		id: '3',
		name: 'The Matrix Quiz 5',
		imageUrl:
			'	https://pikuco.ru/upload/test_stable/4a5/4a564fd6c24a0c4afe8a63767a109d92.webp',
		description:
			'Проверьте свои знания о культовом фильме "Матрица". Синий или красный?',
		rating: 4.7,
		usersCompletions: 15021,
		questionsCount: 20,
		film: 'The Matrix',
		completed: false,
		questions: mockQuestions,
	},
	{
		id: '021489',
		name: 'The Dark Knight Quiz 4',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/fc8/fc829265c8003d171e2564233320da33.webp',
		description:
			'Тест по фильму "Темный рыцарь". Знаете ли вы все о Джокере и Бэтмене?',
		rating: 4.9,
		usersCompletions: 13287,
		questionsCount: 18,
		film: 'The Dark Knight',
		completed: false,
		questions: mockQuestions,
	},
	{
		id: '821',
		name: 'The Dark Knight Quiz 3',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/fc8/fc829265c8003d171e2564233320da33.webp',
		description:
			'Тест по фильму "Темный рыцарь". Знаете ли вы все о Джокере и Бэтмене?',
		rating: 4.9,
		usersCompletions: 13287,
		questionsCount: 18,
		film: 'The Dark Knight',
		completed: false,
		questions: mockQuestions,
	},
	{
		id: '9',
		name: 'The Dark Knight Quiz 2',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/fc8/fc829265c8003d171e2564233320da33.webp',
		description:
			'Тест по фильму "Темный рыцарь". Знаете ли вы все о Джокере и Бэтмене?',
		rating: 4.9,
		usersCompletions: 13287,
		questionsCount: 18,
		film: 'The Dark Knight',
		completed: false,
		questions: mockQuestions,
	},
	{
		id: '14',
		name: 'The Dark Knight Quiz 1',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/fc8/fc829265c8003d171e2564233320da33.webp',
		description:
			'Тест по фильму "Темный рыцарь". Знаете ли вы все о Джокере и Бэтмене?',
		rating: 4.9,
		usersCompletions: 13287,
		questionsCount: 18,
		film: 'The Dark Knight',
		completed: false,
		questions: mockQuestions,
	},
	{
		id: '123e4567-e89b-12d3-a456-426614174010',
		name: 'The Dark Knight Quiz',
		imageUrl:
			'https://pikuco.ru/upload/test_stable/fc8/fc829265c8003d171e2564233320da33.webp',
		description:
			'Тест по фильму "Темный рыцарь". Знаете ли вы все о Джокере и Бэтмене 1	23213?',
		rating: 4.9,
		usersCompletions: 13287,
		questionsCount: 18,
		film: 'The Dark Knight',
		completed: true,
		questions: mockQuestions,
	},
]
