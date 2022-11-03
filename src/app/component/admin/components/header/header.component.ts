import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MyAccService} from "../../services/my-acc.service";
import {IUser} from "../../data/user";
import {AuthService} from "../../../../services/auth.service";
import {IDataAcc} from "../../../../Interfaces/dataAccount";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public title: string = "ValBooK";
	public userData!: IUser[];
	public data!: IDataAcc;


	constructor(private route: Router,
				private usersService: MyAccService,
				private authService: AuthService) {
	}

	ngOnInit(): void {
		this.usersService.getPersonalList().subscribe(data => {
			this.userData = data
		});

		this.data = this.authService.getData(this.data)

	}

	logout() {
		this.route.navigate(['login'])
	}

}
