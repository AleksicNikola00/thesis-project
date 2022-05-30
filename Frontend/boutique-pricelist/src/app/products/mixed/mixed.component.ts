import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/model/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.css']
})
export class MixedComponent implements OnInit {

  products: IProduct[] = [];
  productPage: number = 0;
  searchCriteria: string = "";
  constructor(private _productService : ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params=> {
        this.searchCriteria = params['criteria'];
        this.productPage = 0;
        this.products = [];
        this.getProductsPage(null);
    });
    this.getProductsPage(null);
  }

  getProductsPage(event: any): void{
    this._productService.searchProducts(this.searchCriteria,this.productPage).subscribe(
      value => {
        this.products = this.products.concat(value);
        this.productPage = this.productPage + 1;
      },
      error => console.log(error)
    );
  }

}
