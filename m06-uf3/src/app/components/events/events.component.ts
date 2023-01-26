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

  total!: number;
  cp!: number;

  //filtrar
  esdevenimentFiltrado!: Esdeveniment[];
  ubicationFilter!: string;
  typeFilter!: string;
  priceFilter!: number;
  
  events!:Esdeveniment[];

  constructor(private eventService:GenEventsService, private myCookie:CookieService, private router:Router){
    
  }

  ngOnInit(): void {
    this.events = this.eventService.createEvents();

    this.total = 12;//items per page
    this.cp = 1;//pagina de inicio


    this.esdevenimentFiltrado = this.events;
    this.ubicationFilter="";
    this.priceFilter=50;
    this.typeFilter="";

    this.show_admin=false;
    this.show_costumer=false;
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
    //volver a mostrar los botones de login y registro
    this.router.navigate(['/login']);
  }

  show_eventsButtons(): void{ //usar esta funcion para enseñar los botones dependiendo del rol
    let login = JSON.parse(this.myCookie.get('usuari'));

    let role = login.role;

    if (role == 'comprador') {
      this.show_admin=false;
      this.show_costumer=true;
    }
    else if (role == 'administrador') {
      this.show_admin=true;
      this.show_costumer=false;
    }
  }

}
