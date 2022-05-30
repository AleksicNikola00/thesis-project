import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  shoes: IProduct[] = [];
  shoesPage: number = 0;
  filterParams: string[] = [];

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
   this.getShoesPage(null);
  }

  getShoesPage(event: any): void{
    this._productService.getShoesPage(this.shoesPage,this.filterParams).subscribe(
      value => {
        this.shoes = this.shoes.concat(value);
        this.shoesPage = this.shoesPage + 1;
      },
      error => console.log(error)
    );
  }

  setFilterParams(params: string[]){
    this.filterParams = params;
    this.shoesPage = 0;
    this.shoes = [];
    this.getShoesPage(null);
  }

}
