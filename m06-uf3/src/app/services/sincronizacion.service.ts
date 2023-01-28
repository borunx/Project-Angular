import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SincronizacionService {

  //declarar dos elementos especiales

  //la variable que voy a compartir su contenido
  private messageSource=new BehaviorSubject(true);

  private user_role = new BehaviorSubject("");
  
  //para comunicar el valor de esta propiedad
  public currentMessage=this.messageSource.asObservable();
  public currentRole=this.user_role.asObservable();

  //metodo recoge cualquier cambio y se lo pasara a todas las componentes
  public changeMessage(message:boolean){
    this.messageSource.next(message);
  }

  public changeRole(message:string){
    this.user_role.next(message);
  }
  constructor() { }
}