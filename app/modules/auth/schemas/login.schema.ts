import * as z from 'zod'

export const loginSchema = z.object(
	{
		email: z
			.string()
			.nonempty('Электронная почта обязательна')
			.email('Неправильный email'),
		name: z.string().nonempty('Имя обязательно'),

		password: z
			.string()
			.nonempty('Пароль обязателен')
			.min(4, 'Минимальная длина пароля 8 символов')
	},
	{ required_error: 'Поле обязательно' }
)

export type LoginSchema = z.output<typeof loginSchema>
