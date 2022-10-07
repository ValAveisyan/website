import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MyAccService} from "../../services/my-acc.service";
import {IUser} from "../../data/user";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public title: string = "ValBooK";

	constructor(private route: Router,public usersService: MyAccService) {
	}

	ngOnInit(): void {
		this.usersService.getPersonalList().subscribe(data => {
			this.userData = data
		})
	}

	public userData!: IUser;

	logout() {
		this.route.navigate(['login'])
	}

	public menu: boolean = false;

	menuOpen() {
		this.menu = !this.menu
	}
}
