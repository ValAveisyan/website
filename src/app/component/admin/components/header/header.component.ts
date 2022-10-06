import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title:string = "ValBooK";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  img = "../assets/img/banner.jpg";

  logout(){
    this.route.navigate(['login'])
  }

  menu:boolean = false;

  menuOpen(){
    this.menu = !this.menu
  }




}
