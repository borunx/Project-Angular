import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SincronizacionService {

  //declarar dos elementos especiales

  //la variable que voy a compartir su contenido
  private messageSource=new BehaviorSubject('Mensaje por defecto');
  
  //para comunicar el valor de esta propiedad
  public currentMessage=this.messageSource.asObservable();

  //metodo recoge cualquier cambio y se lo pasara a todas las componentes
  public changeMessage(message:string){
    this.messageSource.next(message);
  }
  constructor() { }
}