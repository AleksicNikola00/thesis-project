import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  brands: string[] = [
    "Trussardi","Timberland","Nike","Adidas","Fila","Replay","Reebok","Converse","Versace","Prada","Dior","Givenchy"
  ]

  @Output() filterParamsEvent: EventEmitter<string[]>  = new EventEmitter<string[]>();
  
  filterParams: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  filter(event: any,item: string): void{
    if(event.target.checked)
      this.filterParams = this.filterParams.concat(item);
    else
      this.filterParams = this.filterParams.filter(x => x!=item);
    
    this.filterParamsEvent.emit(this.filterParams);
  }

}
