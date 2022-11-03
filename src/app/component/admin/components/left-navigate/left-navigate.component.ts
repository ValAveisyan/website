import {Component, Input, OnInit} from '@angular/core';
import {ILeftNavigate} from "../../data/menu";

@Component({
  selector: 'app-left-navigate',
  templateUrl: './left-navigate.component.html',
  styleUrls: ['./left-navigate.component.css']
})
export class LeftNavigateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()product!:ILeftNavigate;

  sub(){
    alert('not ready yet')
  }

}
