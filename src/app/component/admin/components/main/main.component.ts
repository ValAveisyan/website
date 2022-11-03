import {Component, OnInit} from '@angular/core';
import {IComments, IUser} from "../../data/user";
import {AdminService} from "../../services/admin.service";

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	public userData!: IUser[];

	public loading: boolean = false;
	public term: string = '';

	constructor(private usersService: AdminService) {
	}

	ngOnInit(): void {
		this.loading = true;
		this.usersService.getPersonalList().subscribe(() => {
			this.userData = this.usersService.Post;
			this.loading = false
		});
	}

}
