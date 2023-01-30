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

  // attributes
  events!:Esdeveniment[];
  show_admin!:boolean;
  show_costumer!:boolean;
  oculta_links!:boolean;
  user_role!:string;
  oculta_modify!:boolean;
  oculta_events!:boolean;
  parentMessage!:Esdeveniment;

  //pagination
  total!: number;
  cp!: number;

  //filter
  esdevenimentFiltrado!: Esdeveniment[];
  ubicationFilter!: string;
  typeFilter!: string;
  priceFilter!: number;
  
  
  // constructor
  constructor(private eventService:GenEventsService, private myCookie:CookieService, private router:Router, private sincro:SincronizacionService){}

  // Initialize variables
  ngOnInit(): void {
    this.events = this.eventService.events;

    this.total = 12;
    this.cp = 1;

    
    this.esdevenimentFiltrado = this.events;
    this.ubicationFilter="";
    this.priceFilter=50;
    this.typeFilter="";

    this.show_admin=true;
    this.show_costumer=false;
    this.oculta_events=true;
    this.oculta_modify=false;

    this.sincro.currentMessage.subscribe(
      message => this.oculta_links=message
    )

    this.sincro.currentRole.subscribe(
      message => this.user_role=message
    )

  }

  
  // Filter events by three fields: ubication, type and price
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
    // delete all cookies
    this.myCookie.deleteAll();

    // show login and register buttons
    this.sincro.changeMessage(true); 

    // delete role
    this.sincro.changeRole(""); 

    // redirect to login
    this.router.navigate(['/login']);
  }


  // Delete event by id
  deleteEvent(id:number): void{

    for (let i = 0; i < this.events.length; i++) {
      
      if(this.events[i].id==id)
      {
        this.events.splice(i, 1);
      }
    }
  }

  
  modifyEvent(id:number){
    // Hide events and show modify form 
    this.oculta_events=false;
    this.oculta_modify=true;

    // Send data to child by event id
    this.parentMessage = this.events[id];
  }

  
  // Get data from modify form and update the event
  actualizar(event:any){

    this.events[event[0]].name = event[1]; // 0 - id | 2 - event name
    this.events[event[0]].type = event[2]; // 0 - id | 2 - event type
    this.events[event[0]].date = event[3]; // 0 - id | 3 - event date
    this.events[event[0]].ubication = event[4]; // 0 - id | 4 - event ubication
    this.events[event[0]].price = event[5]; // 0 - id | 5 - event price

    // Hide modify form events and show events
    this.oculta_events=true;
    this.oculta_modify=false;
  }
}
