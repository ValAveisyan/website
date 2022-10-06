import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor(public modalService:ModalService) { }

  form = new FormGroup({
     com:new FormControl<string>('')
  });

  ngOnInit(): void {
  }


  sub(){
    console.log(this.form.value);
  }

}
