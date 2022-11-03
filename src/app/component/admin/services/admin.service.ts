import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../data/user";
import {delay, tap} from "rxjs/operators";
import {pipe, of, Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class AdminService {

	constructor(private http: HttpClient) {
	}

	Post: IUser[] = [];
	url: string = "./assets/users.json";

	getPersonalList() {
		return this.http.get<IUser[]>(this.url,
			{
				params: {'limit': 5}
			}).pipe(
			delay(200),
			tap((data) => {
				this.Post = data;
				this.getUser()
			})
		);
	}


	create(post: IUser): Observable<number> {
		let result = this.Post.unshift(post);
		this.setUser();
		return of(result)
	}

	setUser() {
		let data: string = JSON.stringify(this.Post);
		localStorage.setItem('data', data);
	}

	getUser() {
		let get: any = localStorage.getItem('data');
		if (get) this.Post = JSON.parse(get);
	}

}
