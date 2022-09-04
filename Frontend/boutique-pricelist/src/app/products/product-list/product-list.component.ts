import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() products: IProduct[] = [];
  @Output() newPageEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {

  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight){
      if(this.products.length > 0)
        this.newPageEvent.emit('SKROLDOWN');
    }
  }

}
