import {Component, OnInit} from '@angular/core';
import {ILeftNavigate} from "../../data/products";
import {leftNavigation} from "../product/products";
import {AdminService} from "../../services/admin.service";
import {IComments, IUser} from "../../data/user";
import {Observable} from "rxjs";
import {ModalService} from "../../services/modal.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public userData: IUser[] = [];
	public loading: boolean = false;

	constructor(public modalService: ModalService,
				public usersService: AdminService) {
	}

	form: FormGroup = new FormGroup({
		com: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(7),
			Validators.pattern("[a-zA-Z ]*")]),
	});

	term: string = '';

	ngOnInit(): void {
		this.loading = true;

		this.usersService.getPersonalList().subscribe((data) => {
			this.userData = data;
			this.loading = false;
			console.log(this.userData === this.usersService.Post);
		});



		localStorage.getItem('data');
	}

	private img: string = "../assets/img/banner.jpg";

	submit() {
		this.usersService.create(
			{
				name: 'Val Avetisyan',
				id: -(new Date().getTime()),
				role: 'Admin',
				avatar: this.img,
				img: this.img,
				comments: [{
					name: 'Val',
					avatar: '../assets/img/banner.jpg',
					com: 'hello'
				}],
				like: 0,
				caption: this.form.value.com
			});

		let data: string = JSON.stringify(this.userData);
		localStorage.setItem('data', data);
	}

	products: ILeftNavigate[] = leftNavigation;

	test(): void {
		console.log(this.userData === this.usersService.Post);
		console.log(this.usersService.Post);
		console.log(this.userData);
	}

	deletePost(id: number) {
		const idx = this.userData.findIndex((item) => item.id === id);
		this.userData.splice(idx, 1);
	}

	public userComments!:IComments[];

}
