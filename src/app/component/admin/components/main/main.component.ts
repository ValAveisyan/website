import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../data/user";
import {AdminService} from "../../services/admin.service";
import {ModalService} from "../../services/modal.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public modalService:ModalService,public service:AdminService) { }

  ngOnInit(): void {
  }

  public like:boolean = false;
  public comment:boolean = false;

  lik(){
    this.like = !this.like
  };
  com(){
    this.comment = !this.comment
  };


  @Input() user!:IUser;

  deletePost(id:number){
    const idx = this.service.newPost.findIndex((item)=> item.id === id);
    if (idx !== 1) {
      this.service.newPost.splice(idx , 1)
    }
  }
}
