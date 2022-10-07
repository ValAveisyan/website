import {Component, OnInit} from '@angular/core';
import {IUser} from "../../data/user";
import {MyAccService} from "../../services/my-acc.service";

@Component({
	selector: 'app-my-account',
	templateUrl: './my-account.component.html',
	styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

	constructor(public usersService: MyAccService) {
	}

	ngOnInit() {
		this.usersService.getPersonalList().subscribe(data => {
			this.userData = data
		})
	}

	public userData!: IUser;
}
