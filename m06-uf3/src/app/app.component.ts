import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'm06-uf3';

  oculta_links!:boolean;

  ngOnInit(): void {
    this.oculta_links=true;
  }
  
}
