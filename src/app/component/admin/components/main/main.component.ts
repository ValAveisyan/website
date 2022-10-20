import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IComments, IUser} from "../../data/user";
import {AdminService} from "../../services/admin.service";
import {ModalService} from "../../services/modal.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	@Input() user!: IUser;
	@Input() userCom!:IUser;

	constructor( public service: AdminService) {
	}

	ngOnInit(): void {

	}


	public like: boolean = false;

	clickLike() {
		this.like = !this.like;
	};

	form = new FormGroup({
		com:new FormControl<string>('')
	});

	// public showTF:boolean = false;
	// public userComments!:IComments[];
	//
	// show(u:string):void{
	// 	this.showTF = !this.showTF;
	// 	const idUser = this.service.Post.findIndex(us=> us.name === u);
	// 	this.userComments = this.userData[idUser].comments;
	// }
	//
	// sub(u:string){
	// 	const idUser = this.service.Post.findIndex(us=> us.name === u);
	// 	this.userComments = this.userData[idUser].comments;
	// 	console.log(this.userComments);
	// 	this.userComments.push({
	// 		name:'Val Avetisyan',
	// 		avatar:'../assets/img/banner.jpg',
	// 		com:this.form.value.com as string
	// 	})
	// }

}
