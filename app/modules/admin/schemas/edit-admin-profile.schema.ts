import * as z from 'zod'

const emptyStringToUndefined = (val: unknown) => (val === '' ? undefined : val)

export const editAdminProfileSchema = z
	.object({
		email: z.preprocess(
			emptyStringToUndefined,
			z.string().email('Некорректный email').optional()
		),
		password: z.preprocess(
			emptyStringToUndefined,
			z.string().min(4, 'Пароль должен содержать минимум 4 символа').optional()
		),
		confirmPassword: z.preprocess(
			emptyStringToUndefined,
			z.string().min(4, 'Пароли должны совпадать').optional()
		),
		name: z.preprocess(emptyStringToUndefined, z.string().optional()),
	})
	.refine(data => !data.password || data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export type EditAdminProfileSchema = z.infer<typeof editAdminProfileSchema>
