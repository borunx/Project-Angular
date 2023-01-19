import { User } from './../classes/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  user1 = new User("jonatan","J12345678","jonatanfelizf@gmail.com","Casado","Hombre","Me gusta el beisbol","administrador");
  user2 = new User("pau","P12345678","paumartinez@gmail.com","Soltero","Hombre","Me gusta el futbol","comprador");

  users = [this.user1,this.user2];

  validateLogin(user:string, pass:string): boolean{

    // this.users.forEach(element => {
    //   if (element.user == user && element.password == pass) {
    //     return true;
    //   }
    // });

    return false;
  }
}
