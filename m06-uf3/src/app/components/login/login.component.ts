import { SincronizacionService } from './../../services/sincronizacion.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
// attributes
oculta!:boolean;
oculta_links!:boolean;
user_role!:string;

// constructor
  constructor(private validateUser: LoginService, private myCookie: CookieService, private router:Router, private sincro:SincronizacionService){

  }

  // validations
  login=new FormGroup({
    user:new FormControl('',[
      Validators.required
    ]),
    pass:new FormControl('',[
      Validators.required
    ])
  })

  // Initialize variables
  ngOnInit(): void {
    this.oculta=false;

    this.sincro.currentMessage.subscribe(
      message => this.oculta_links=message
    )

    this.sincro.currentRole.subscribe(
      message => this.user_role=message
    )
  }


  // Login button
  submit(){
    var user = this.login.get('user')?.value; 
    var pass = this.login.get('pass')?.value; 
    var role;

    // Check user credentials
    if(this.validateUser.validateLogin(user, pass) == ""){
      // Show error missage
      this.oculta=true;
    }
    else{
      this.oculta=false;
      role = this.validateUser.validateLogin(user, pass);

      //Create cookie and Local Storage
      var login = {
        "user":user,
        "role":role
      };

      this.myCookie.set('usuari',JSON.stringify(login));

      localStorage.setItem('usuari',JSON.stringify(login));

      // Hide login and register buttons
      this.sincro.changeMessage(false); 

      // Change user role
      this.sincro.changeRole(role);

      // Redirect to component events
      this.router.navigate(['/events']); 

    }
    
  }
}