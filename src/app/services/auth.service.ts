import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {IDataAcc} from "../Interfaces/dataAccount";
import {Router} from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private dataAccounts: IDataAcc[] = [];

	constructor(private router: Router) {
	}

	setToken(token: string) {
		localStorage.setItem('token', token)
	}

	getToken() {
		return localStorage.getItem('token')
	}

	isLoggedIn() {
		return this.getToken() !== null
	}

	login(userInfo: { email: string, password: string }): Observable<string | boolean> {
		let user = this.dataAccounts.find((item) => item.email === userInfo.email);

		if (user) {
			this.setData(user);
		}

		if (userInfo.email === user?.email
			&& userInfo.password === user?.password) {
			this.setToken('ok');
			console.log(user);
			return of(true)
		}
		return throwError(() => new Error('Failed login'))
	}

	register(data: IDataAcc) {
		this.dataAccounts.push(data);
		return this.router.navigate(['login'])
	}

	setData(user: IDataAcc) {
		let data: string = JSON.stringify(user);
		localStorage.setItem('dataAccount', data);
	}

	getData(data: IDataAcc) {
		let get: any = localStorage.getItem('dataAccount');
		if (get) data = JSON.parse(get);
		return data
	}

}
