import {Component, OnInit} from '@angular/core';
import {IUser} from "../../data/user";
import {MyAccService} from "../../services/my-acc.service";
import {AdminService} from "../../services/admin.service";

@Component({
	selector: 'app-my-account',
	templateUrl: './my-account.component.html',
	styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

	constructor(private usersService: AdminService) {
	}

	public users!: IUser[];

	ngOnInit(): void {
		this.usersService.getPersonalList().subscribe(() => this.users = this.usersService.Post.filter(
			u => u.name === 'Val Avetisyan'));
	}

	public like: boolean = false;

	clickLike() {
		this.like = !this.like;
	};

	public img: string = "../assets/img/banner.jpg";

}
