import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  // attributes
  datos!:string;
  maritalstatus:string[];
  information:string[];
  selected:string[];


  // constructor
  constructor(private registerUser:LoginService, private router:Router){
    this.maritalstatus=["Solter","Casat","Divorciat"];
    this.information=["Videojocs","Accesoris", "Novetats"];
    this.selected=[];
  }

  // validations
  register=new FormGroup({
    user:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z]+')
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
    ]),
    sex:new FormControl('',[
      Validators.required
    ]),
    info:new FormControl('',[
      Validators.required
    ]),
    accept:new FormControl('',[
      Validators.requiredTrue
    ])

  })


  ngOnInit(): void {
    
  }

  /**
   * Register button
   */
  submit(){
    var user = this.register.get('user')?.value ?? ""; 
    var pass = this.register.get('password')?.value ?? "";
    var sex = this.register.get('sex')?.value ?? "";
    var status = this.register.get('maritalstatus')?.value ?? "";
    var email = this.register.get('email')?.value ?? "";
    var information = this.register.get('info')?.value ?? "";

    // Register user
    this.registerUser.addUser(user,pass,email,status,sex,information);

    // Redirect to login
    this.router.navigate(['/login']);
  }

  /**
   * For information checkbox
   * @param informacion 
   * If checkbox is checked it will be added, otherwise it will be removed
   */
  selectedInfo(informacion:string){
    console.log(informacion);
    var is = -1;
    for (let i = 0; i < this.selected.length; i++) {
      if(this.selected[i] == informacion){
        is = i;
        break;
      }
    }
    if(is==-1){
      this.selected.push(informacion);
    }else{
      this.selected.splice(is,1);
    }

  }
}
