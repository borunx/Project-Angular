import { User } from './../classes/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
    this.createUsers();
  }

  // Random data
  names          = ["valentin","sara","cindy","sonia","lara","manuel","ronnie","martin","oscar"];
  marital_status = ["Casat","Solter","Vidu","Divorciat","Parella de fet"];
  genders        = ["Home","Dona","No especificar"];

  // Official Users
  user1 = new User("jonatan","clau","jonatanfelizf@gmail.com","Casat","Home","M'agrada el beisbol","administrador");
  user2 = new User("pau","clau","paumartinez@gmail.com","Solter","Home","M'agrada el futbol","comprador");

  users = [this.user1,this.user2];


  /**
   * Create random users
   */
  private createUsers(): void{
    
    for (let i = 0; i < 18; i++) {
      let name   = this.names[Math.floor(Math.random()*this.names.length)];
      let status = this.marital_status[Math.floor(Math.random()*this.marital_status.length)];
      let gender = this.genders[Math.floor(Math.random()*this.genders.length)];
      
      this.users.push(new User(name, "clau", name+i+"@gmail.com", status, gender, "Hola soc " + name, "comprador"));
      
    }
  }


  // Add user
  addUser(name:string, password:string, email:string, marital_status:string, gender:string, information:string): void{
    this.users.push(new User(name,password,email,marital_status,gender,information,"comprador"));
  }


  /**
   * Check user credentials
   * @param user username 
   * @param pass password
   * @returns if user is registered return role (string), else return empty string
   */
  validateLogin(user:any, pass:any): string{

    for (let i = 0; i < this.users.length; i++) {
      
      if(this.users[i].username == user && this.users[i].password == pass) {
        return this.users[i].role;
      }

      console.log(this.users[i].username, this.users[i].marital_status, this.users[i].gender, this.users[i].email);
    }

    return "";
  }

}
