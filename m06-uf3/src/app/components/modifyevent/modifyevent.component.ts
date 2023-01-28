import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifyevent',
  templateUrl: './modifyevent.component.html',
  styleUrls: ['./modifyevent.component.css']
})
export class ModifyeventComponent implements OnInit{
  nombre!:string;
  type!:string[];
  fecha!:Date;
  lugar!:string;
  precio!:number;



  ngOnInit(): void {
    this.nombre="";
    this.type=["Concert","Cinema","Museu","Fira","Festival","Congres", "Convencio"];
    this.fecha;
    this.lugar="";
    this.precio;
  }


  submit(){

  }
}
