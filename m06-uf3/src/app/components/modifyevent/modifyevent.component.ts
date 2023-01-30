import { Esdeveniment } from './../../classes/esdeveniment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modifyevent',
  templateUrl: './modifyevent.component.html',
  styleUrls: ['./modifyevent.component.css']
})
export class ModifyeventComponent implements OnInit{

  // Get data from parent
  @Input() parametro!:Esdeveniment;

  // Send data to parent
  @Output() missage = new EventEmitter();

  // attributes
  nombre!:string;
  type_events!:string[];
  type!:string;
  fecha!:string;
  lugar!:string;
  precio_events!:number[];
  precio!:number;


  // Initialize variables
  ngOnInit(): void {
    this.nombre=this.parametro.name;
    this.type_events=["Concert","Cinema","Museu","Fira","Festival","Congres", "Convencio"];
    this.type = this.parametro.type;
    this.fecha = this.Dateformat(this.parametro.date);
    this.lugar= this.parametro.ubication;
    this.precio_events=[5,10,12,15,20,30,50];
    this.precio = this.parametro.price;
  }


  // Get data from modify form and send to parent
  submit(){

    var event= [this.parametro.id,this.nombre,this.type,new Date(this.fecha+"T00:00:00"),this.lugar,this.precio];

    this.missage.emit(event);
  }


  // format the date to show it to the user
  Dateformat(date:Date):string{
    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();


    var month_str = month.toString();

    var day_str = day.toString();

    if(month<10){
      month_str = "0" + month;
    }
    if(day < 10){
      day_str = "0" + day;
    }

    return year + "-" + month_str + "-" + day_str;
  }
}
