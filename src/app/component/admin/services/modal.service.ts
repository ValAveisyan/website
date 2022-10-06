import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class ModalService {

	idVisible$ = new BehaviorSubject<boolean>(false);
	idVisible$2 = new BehaviorSubject<boolean>(false);

	open(){
		this.idVisible$.next(true)
	}

	opn() {
		this.idVisible$2.next(true)
	}

	close(){
		this.idVisible$.next(false)
	}

	cls() {
		this.idVisible$2.next(false)
	}
}