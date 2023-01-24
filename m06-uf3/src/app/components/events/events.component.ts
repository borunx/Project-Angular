import { GenEventsService } from './../../services/gen-events.service';
import { Esdeveniment } from './../../classes/esdeveniment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  show_admin!:boolean;
  show_costumer!:boolean;

  total!: number;
  cp!: number;

  //filtrar
  esdevenimentFiltrado!: Esdeveniment[];
  ubicationFilter!: string;
  typeFilter!: string;
  priceFilter!: number;
  
  events!:Esdeveniment[];

  constructor(private eventService:GenEventsService){}

  ngOnInit(): void {
    this.events = this.eventService.createEvents();

    this.total = 12;//items per page
    this.cp = 1;//pagina de inicio


    this.esdevenimentFiltrado = this.events;
    this.ubicationFilter="";
    this.priceFilter=10;
    this.typeFilter="";

    this.show_admin=true;
    this.show_costumer=false;
  }

  filter(){
    console.log(this.ubicationFilter);

    this.esdevenimentFiltrado = this.events.filter(value => {

      if(value.ubication.indexOf(this.ubicationFilter.toUpperCase()) != -1){
        if(value.price <= this.priceFilter)
          return true;
      }
      return false;

    });
  }

  logout(){

  }


}
