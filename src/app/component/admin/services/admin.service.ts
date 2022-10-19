import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../data/user";
import {Observable} from "rxjs";
import {delay, tap} from "rxjs/operators";
import {pipe} from "rxjs";
import {of} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class AdminService {

	constructor(private http: HttpClient) {}

	Post: IUser[] = [];
	url:string = "./assets/users.json";

	getPersonalList() {
		return this.http.get<IUser[]>(this.url,
			{
				params: {'limit': 5}
			}).pipe(
			delay(200),
			tap(posts => this.Post = posts)
		);
	}

	create(post: IUser):Observable<number> {
		return of(this.Post.unshift(post))
	}
}
