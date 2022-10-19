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

	constructor(public userService: MyAccService, private usersService: AdminService) {
	}

	ngOnInit(): void {
		this.userService.getPersonalList().subscribe(sub => this.userData = sub);
		this.usersService.getPersonalList().subscribe(sub => this.users = sub);

	}

	userData!: IUser[];

      sub(){
		  this.idUser = this.usersService.Post.filter(u => u.name === 'Val Avetisyan');
		  console.log(this.idUser);
	  }
	idUser!: IUser[];

	users!: IUser[]
}
