import { User } from './../classes/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  //Random data
  names = ["valentin","sara","cindy","sonia","lara","manuel","ronnie","martin","oscar"];
  marital_status = ["Casado","Soltero","Viudo","Divorciado","Pareja de hecho"];
  genders = ["Hombre","Mujer","No especificar"];

  //Official Users
  user1 = new User("jonatan","clau","jonatanfelizf@gmail.com","Casado","Hombre","Me gusta el beisbol","administrador");
  user2 = new User("pau","clau","paumartinez@gmail.com","Soltero","Hombre","Me gusta el futbol","comprador");

  users = [this.user1,this.user2];

  //Check User credentials
  validateLogin(user:any, pass:any): string{

    this.createUsers();

    for (let i = 0; i < this.users.length; i++) {
      
      if(this.users[i].username == user && this.users[i].password == pass) {
        return this.users[i].role;
      }

      console.log(this.users[i].username, this.users[i].marital_status, this.users[i].gender, this.users[i].email);
    }

    return "";
  }

  //Create random users
  private createUsers(){
    
    for (let i = 0; i < 18; i++) {
      let name   = this.names[Math.floor(Math.random()*this.names.length)];
      let status = this.marital_status[Math.floor(Math.random()*this.marital_status.length)];
      let gender = this.genders[Math.floor(Math.random()*this.genders.length)];
      
      this.users.push(new User(name, "clau", name+i+"@gmail.com", status, gender, "Hola soy " + name, "comprador"));
      
    }
  }

}
