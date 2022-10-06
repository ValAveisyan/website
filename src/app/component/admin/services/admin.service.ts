import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../data/user";
import {Observable} from "rxjs";
import {delay, tap} from "rxjs/operators";
import {pipe} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class AdminService {

	constructor(private http: HttpClient) {
	}

	newPost: IUser[] = [];
	url: string = "http://localhost:3000/Users";

	getPersonalList() {
		return this.http.get<IUser[]>(this.url,
			{
				params: {'limit': 5}
			}).pipe(
			delay(200),
			tap(url => this.newPost = url)
		)
	}


	create(post: IUser) {
		return this.http.post<IUser>(this.url, post).pipe(
			tap(user => this.newPost.unshift(user))
		)
	}




}
