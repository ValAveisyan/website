import {Component, OnInit} from '@angular/core';
import {ILeftNavigate} from "../../data/products";
import {leftNavigation} from "../product/products";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  products:ILeftNavigate[]=leftNavigation;


}
