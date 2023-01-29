import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SincronizacionService {

  // declare variables to share
  private messageSource=new BehaviorSubject(true);

  private user_role = new BehaviorSubject("");
  
  // comunicate variable value
  public currentMessage=this.messageSource.asObservable();
  public currentRole=this.user_role.asObservable();

  // Change value in all components
  public changeMessage(message:boolean){
    this.messageSource.next(message);
  }

  public changeRole(message:string){
    this.user_role.next(message);
  }

  constructor() { }
}