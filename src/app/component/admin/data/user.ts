export interface IUser {
	name: string,
	id: number,
	role: string,
	avatar: string,
	img: string,
	comments: IComments[],
	bio?: string,
	like: number,
	caption: string
}

export interface IComments {
	name:string,
	avatar:string,
	com:string
}
