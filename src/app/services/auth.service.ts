import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() {}

	setToken(token: string) {
		localStorage.setItem('token', token)
	}

	getToken() {
		return localStorage.getItem('token')
	}

	idLoggedIn() {
		return this.getToken() !== null
	}

	login(userInfo: { email: string, password: string }): Observable<string | boolean> {
		 if (userInfo.email === 'admin@mail.ru' &&
			userInfo.password === 'admin1234') {
			this.setToken('ok');
			return of(true)
		}
		return throwError(() => new Error('Failed login'))
	}
}
