import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IBrandMap } from 'src/app/model/IBrandMap';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filterParamsEvent: EventEmitter<string[]>  = new EventEmitter<string[]>();
  @Input() filterType: string = "";//clothes/shoes

  brands: IBrandMap[] = []

  filterParams: string[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getBrandMap(this.filterType).subscribe(
      value => this.brands = value,
      error => console.log(error)
    );
  }




  filter(event: any,item: string): void{
    if(event.target.checked)
      this.filterParams = this.filterParams.concat(item);
    else
      this.filterParams = this.filterParams.filter(x => x!=item);
    
    this.filterParamsEvent.emit(this.filterParams);
  }

}
