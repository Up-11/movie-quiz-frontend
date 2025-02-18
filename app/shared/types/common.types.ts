export interface IUser {
	id: string | null
	name: string | null
	email: string
	role: USER_ROLE | null
}

export enum USER_ROLE {
	ADMIN,
	USER,
}
