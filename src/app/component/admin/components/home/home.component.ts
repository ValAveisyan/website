import {Component, OnInit} from '@angular/core';
import {ILeftNavigate} from "../../data/menu";
import {leftNavigation} from "../../data/menu/leftMenu";
import {AdminService} from "../../services/admin.service";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {IDataAcc} from "../../../../Interfaces/dataAccount";


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public products: ILeftNavigate[] = leftNavigation;
	private img: string = "../assets/img/banner.jpg";
	public data!: IDataAcc;

	public form: FormGroup = new FormGroup({
		com: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(7),
			Validators.pattern("[a-zA-Z ]*")]),
		img: new FormControl<string>('')
	});

	constructor(private usersService: AdminService,
				private authService: AuthService) {
	}

	ngOnInit(): void {
		this.data = this.authService.getData(this.data);
	}

	submit() {
		if (this.form.value.com) {
			if (this.form.value.com.length > 5) {
				this.usersService.create(
					{
						name: this.data.firstName,
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
				this.form.reset()
			}else {alert('text must be at least 5 letters long')}
		}
	}

}
