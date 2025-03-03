import type { USER_ROLE } from '~/shared/types/common.types'

export interface AuthDTO {
	email: string
	name: string
	password: string
	role: USER_ROLE
}
