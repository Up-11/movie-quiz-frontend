import * as z from 'zod'

export const registerAdminSchema = z.object({
	email: z.string().email('Некорректный email'),
	password: z.string().min(4, 'Пароль должен содержать минимум 8 символов'),
	confirmPassword: z.string().min(4, 'Пароли должны совпадать'),
	name: z.string().nonempty('Имя обязательно'),
})

export type RegisterAdminSchema = z.output<typeof registerAdminSchema>
