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

  data:IUser[]=[];
  url: string = 'assets/myAc.json';

  getPersonalList() {
    return this.http.get<IUser[]>(this.url).pipe(
        delay(200),
        tap(d => this.data = d)
    )
  }
}
