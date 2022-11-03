import {Component, OnInit} from '@angular/core';
import {IUser} from "../../data/user";
import {AdminService} from "../../services/admin.service";
import {AuthService} from "../../../../services/auth.service";
import {IDataAcc} from "../../../../Interfaces/dataAccount";

@Component({
	selector: 'app-my-account',
	templateUrl: './my-account.component.html',
	styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

	public like: boolean = false;
	public users!: IUser[];
	public img: string = "../assets/img/banner.jpg";
	public data!: IDataAcc;

	constructor(private usersService: AdminService,
				private authService:AuthService) {}

	ngOnInit(): void {
		this.usersService.getPersonalList().subscribe(
			() =>
			this.users = this.usersService.Post.filter(u => u.name === this.data.firstName)
		);
		this.data = this.authService.getData(this.data);
	}

	clickLike() {
		this.like = !this.like;
	}
}
