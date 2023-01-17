import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(){
    
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
    ])
  })


  ngOnInit(): void {
    
  }


  submit(){

  }
}
