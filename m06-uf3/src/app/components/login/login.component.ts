import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
//atributos
oculta!:boolean;


//constructor
  constructor(private validateUser: LoginService, private myCookie: CookieService){

  }

  //metodos de la clase
  login=new FormGroup({
    user:new FormControl('',[
      Validators.required
    ]),
    pass:new FormControl('',[
      Validators.required
    ])
  })


  ngOnInit(): void {
    this.oculta=false;
  }


  submit(){
    var user = this.login.get('user')?.value; 
    var pass = this.login.get('pass')?.value; 
    var role;

    if(this.validateUser.validateLogin(user, pass) == ""){
      this.oculta=true;
    }
    else{
      //Crear cookie y redirigir a la pàgina correspondiente, el user y el rol en una array dentro de la cookie
      this.oculta=false;
      role = this.validateUser.validateLogin(user, pass);

      //Create cookie && Local Storage
      var login = {
        "user":user,
        "role":role
      };

      this.myCookie.set('usuari',JSON.stringify(login));

      localStorage.setItem('usuari',JSON.stringify(login));

      //mandar mensaje de sincronizacion para borra los botones de login y registro de arriba

    }
    
  }
}