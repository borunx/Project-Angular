import { Esdeveniment } from './../classes/esdeveniment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenEventsService {

  events:Esdeveniment[] = [];

  constructor() { 
    this.createEvents();
  }

  //Random data
  names      = ["Santiago Apostol","The Who","The Kooks","Blackberry Smoke","Andre Rieu","Yes","Bring Me the Horizon"];
  types      = ["Concierto","Cine","Museo","Feria","Festival","Congreso","Convencion"];
  dates      = ["20-03-2023","12-10-2023","19-04-2023","26-08-2023","22-06-2023","30-12-2023","17-09-2023"];
  ubications = ["Parque de las fuentes","Plaza Libertad","Plaça de Sants","Cornella","Montjüic","Paseo de Gracia","Parque de El Retiro"];
  prices     = [20,12,50,5,15,30,10];


  //Create random events
  createEvents(): void {

    for (let i = 0; i < 100; i++) {
      
      let name      = this.names[Math.floor(Math.random()*this.names.length)];
      let type      = this.types[Math.floor(Math.random()*this.types.length)];
      let date      = this.dates[Math.floor(Math.random()*this.dates.length)];
      let ubication = this.ubications[Math.floor(Math.random()*this.ubications.length)];
      let price     = this.prices[Math.floor(Math.random()*this.prices.length)];


      //this.events.push(new Esdeveniment(name,type,date,ubication,price));
      //Falta saber como haremos la fecha
    }
  }
}
