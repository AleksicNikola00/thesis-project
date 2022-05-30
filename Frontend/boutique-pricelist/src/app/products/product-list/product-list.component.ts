import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnChanges {
  
  @Input() products: IProduct[] = [];
  @Input() productType: string = "";
  @Input() filterParams: string[] = [];
  pageNum: number = 1;

  constructor(private _productService : ProductService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageNum = 1;
  }

  ngOnInit(): void {

  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight){
      if(this.productType == 'clothes')
        this.getClothes();
      else
        this.getShoes();
    }
  }

  getShoes(){
    this._productService.getShoesPage(this.pageNum,this.filterParams).subscribe(
      value => {this.products = this.products.concat(value);
              this.pageNum = this.pageNum + 1},
      error => console.log(error)
    );
  }

  getClothes(){
    this._productService.getClothesPage(this.pageNum,this.filterParams).subscribe(
      value => this.loadProductsPage(value),
      error => console.log(error)
    );
  }

  loadProductsPage(newProducts: IProduct[]){
    this.products = this.products.concat(newProducts);
    this.pageNum = this.pageNum + 1;
  }

}
