import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private validateUser: LoginService){

  }

  login=new FormGroup({
    user:new FormControl('',[
      Validators.required
    ]),
    pass:new FormControl('',[
      Validators.required
    ])
  })


  ngOnInit(): void {

  }


  submit(){
    var user = this.login.get('user')?.value; 
    var pass = this.login.get('pass')?.value; 

    if(this.validateUser.validateLogin(user, pass) == ""){
      //alert("Mal registrado -> User:" + user + " Pass:" + pass);
      //Poner credenciales incorrectas en respuesta al usuario
    }
    else{
      //alert("Bien registrado");
      //Crear cookie y redirigir a la pàgina correspondiente

      
    }

    // Preguntas
    // Donde poner la generacion principal de clientes
    
  }
}