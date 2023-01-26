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
  datos!:string;
  maritalstatus:string[];
  information:string[];
  selected:string[];


  constructor(private registerUser:LoginService, private router:Router){
    this.maritalstatus=["Solter","Casat","Divorciat"];
    this.information=["Videojocs","Accesoris", "Novetats"];
    this.selected=[];
  }

  register=new FormGroup({
    user:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
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


  submit(){
    var user = this.register.get('user')?.value ?? ""; 
    var pass = this.register.get('password')?.value ?? "";
    var sex = this.register.get('sex')?.value ?? "";
    var status = this.register.get('maritalstatus')?.value ?? "";
    var email = this.register.get('email')?.value ?? "";
    var information = this.register.get('info')?.value ?? "";

    this.registerUser.addUser(user,pass,email,status,sex,information);

    this.router.navigate(['/login']);
  }

  selectedInfo(informacion:string){
    console.log(informacion);
    var esta = -1;//0 es false
    for (let i = 0; i < this.selected.length; i++) {
      if(this.selected[i] == informacion){
        esta = i;
        break;
      }
    }
    if(esta==-1){//si no esta lo añado
      this.selected.push(informacion);
    }else{//si esta lo elimino
      this.selected.splice(esta,1);//elimino
    }

  }
}
