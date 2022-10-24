import {Component, OnInit} from '@angular/core';
import {ILeftNavigate} from "../../data/products";
import {leftNavigation} from "../../data/product/products";
import {AdminService} from "../../services/admin.service";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../data/user";


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


	constructor(public usersService: AdminService) {
	}

	form: FormGroup = new FormGroup({
		com: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(7),
			Validators.pattern("[a-zA-Z ]*")]),
		img:new FormControl<string>('')
	});

	ngOnInit(): void {
	}

	private img: string = "../assets/img/banner.jpg";

	submit() {

		this.usersService.create(
			{
				name: 'Val Avetisyan',
				id: -(new Date().getTime()),
				role: 'Admin',
				avatar: this.img,
				img: "../assets/img/pic.jpg",
				comments: [{
					name: 'Val',
					avatar: "../assets/img/pic.jpg",
					com: 'hello'
				}],
				like: 0,
				caption: this.form.value.com
			});

	}

	products: ILeftNavigate[] = leftNavigation;

}
