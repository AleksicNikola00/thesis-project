import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  brands: string[] = [
    "Nike","Adidas","Fila","Replay","Reebok","Converse","Versace","Prada","Dior","Givenchy"
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
