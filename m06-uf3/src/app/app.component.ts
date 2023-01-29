import { SincronizacionService } from './services/sincronizacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // attributes
  title = 'm06-uf3';

  oculta_links!:boolean;

  // constructor
  constructor(private sincro:SincronizacionService){}

  // Initialize variable
  ngOnInit(): void {
    this.sincro.currentMessage.subscribe(
      message => this.oculta_links=message
    )
  }
  
}
