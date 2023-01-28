import { SincronizacionService } from './../../services/sincronizacion.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
  oculta_links!:boolean;
  user_role!:string;

  total!: number;
  cp!: number;

  //filtrar
  esdevenimentFiltrado!: Esdeveniment[];
  ubicationFilter!: string;
  typeFilter!: string;
  priceFilter!: number;
  
  events!:Esdeveniment[];

  constructor(private eventService:GenEventsService, private myCookie:CookieService, private router:Router, private sincro:SincronizacionService){
    
  }

  ngOnInit(): void {
    this.events = this.eventService.createEvents();

    this.total = 12;//items per page
    this.cp = 1;//pagina de inicio


    this.esdevenimentFiltrado = this.events;
    this.ubicationFilter="";
    this.priceFilter=50;
    this.typeFilter="";

    this.show_admin=true;
    this.show_costumer=false;

    this.sincro.currentMessage.subscribe(
      message => this.oculta_links=message
    )

    this.sincro.currentRole.subscribe(
      message => this.user_role=message
    )

  }


  filter(){

    this.esdevenimentFiltrado = this.events.filter(value => {

      if(value.ubication.indexOf(this.ubicationFilter) != -1)
      { 
        if(value.type.indexOf(this.typeFilter)!=-1){
          if(value.price == this.priceFilter){
            return true;
          }
        }
        
      }
      return false;

    });

  }


  logout(){
    this.myCookie.deleteAll();
    this.sincro.changeMessage(true);
    this.router.navigate(['/login']);
  }


  deleteEvent(id:number): void{

    for (let i = 0; i < this.events.length; i++) {
      
      if(this.events[i].id==id)
      {
        this.events.splice(i, 1);
      }
      
    }

  }


}
