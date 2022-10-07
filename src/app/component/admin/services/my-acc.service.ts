import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../data/user";
import {delay, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyAccService {

  constructor(public http:HttpClient) { }

  Iam!: IUser;
  url: string = "assets/myAc.json";

  getPersonalList(): Observable<IUser> {
    return this.http.get<IUser>(this.url).pipe(
        delay(200),
        tap(url => this.Iam = url)
    )
  }
}
