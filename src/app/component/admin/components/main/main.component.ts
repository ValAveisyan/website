import {Component, OnInit} from '@angular/core';
import {IComments, IUser} from "../../data/user";
import {AdminService} from "../../services/admin.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	constructor(public usersService: AdminService) {
	}

	public userData!: IUser[];
	public loading: boolean = false;

	ngOnInit(): void {
		this.loading = true;
		this.usersService.getPersonalList().subscribe(() => {
			this.userData = this.usersService.Post;
			this.loading = false
		})
	}

	public like: boolean = false;

	clickLike() {
		this.like = !this.like;
	};

	form = new FormGroup({
		com: new FormControl<string>('')
	});

	public showTF: boolean = false;
	public userComments!: IComments[];

	show(u: string): void {
		this.showTF = !this.showTF;
		const idUser = this.usersService.Post.findIndex(us => us.name === u);
		this.userComments = this.userData[idUser].comments;

	}

	sub(u: string) {
		const idUser = this.usersService.Post.findIndex(us => us.name === u);
		this.userComments = this.userData[idUser].comments;
		console.log(this.userComments);
		this.userComments.push({
			name: 'Val Avetisyan',
			avatar: '../assets/img/banner.jpg',
			com: this.form.value.com as string
		})
	}

	deletePost(id: number) {
		const idx = this.userData.findIndex((item) => item.id === id);
		this.userData.splice(idx, 1);
		localStorage.removeItem('data')
	}

	term: string = '';
}
