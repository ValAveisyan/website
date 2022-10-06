import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {ModalService} from "../../services/modal.service";

@Component({
	selector: 'app-create-post',
	templateUrl: './create-post.component.html',
	styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

	form: FormGroup = new FormGroup({
		comment: new FormControl<string>('', [Validators.required,
			Validators.minLength(7)]),
		img: new FormControl<string>('')
	});

	constructor(public modalService: ModalService,
				public adminService: AdminService) {
	}

	ngOnInit(): void {
	}

	img = "../assets/img/banner.jpg";


	submit() {
		this.adminService.create({
			name: "Val",
			id: -(new Date().getTime()),
			role: 'Admin',
			avatar: this.img,
			img: this.form.value.img,
			comment: this.form.value.comment as string
		}).subscribe(() => {
				this.modalService.close();
			},
			(error) => {
				console.log(error)
			})
	}
}
