import {Component, OnInit} from '@angular/core';
import {ILeftNavigate} from "../../data/products";
import {leftNavigation} from "../product/products";
import {AdminService} from "../../services/admin.service";
import {IUser} from "../../data/user";
import {Observable} from "rxjs";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public userData:IUser[] = [];
  public loading:boolean=false;

  constructor(public modalService:ModalService,
      public usersService:AdminService) {}



  ngOnInit(): void {
    this.loading=true;
    // this.userData$ = this.usersService.getPersonalList();
    this.usersService.getPersonalList().subscribe((sub) =>{
      this.userData = sub;
      this.loading=false
    });
  }

  products:ILeftNavigate[]=leftNavigation;


}
