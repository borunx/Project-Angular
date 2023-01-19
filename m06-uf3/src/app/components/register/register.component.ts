import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  datos!:string;
  maritalstatus:string[];

  constructor(){
    this.maritalstatus=["Soltero/a","Casado/a","Divorciado/a"];
  }

  register=new FormGroup({
    user:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[a-zA-Z]+')//patterns dentro de []
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    repeatpassword:new FormControl('',[
      Validators.required
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
    ]),
    maritalstatus:new FormControl('',[
      Validators.required
    ])
  })


  ngOnInit(): void {
    
  }


  submit(){

  }
}
