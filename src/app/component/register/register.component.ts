import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm!:FormGroup;


  constructor() { }

  submitReg(){
    console.log(this.regForm.value);
  }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'age': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(
          "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")]),
      'confirmPassword': new FormControl('', [Validators.required, Validators.pattern(
          "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")]),
    })
  }

}
