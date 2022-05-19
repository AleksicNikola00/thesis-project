import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  clothes: IProduct[] = [];
  clothesPage: number = 0;
  filterParams: string[] = [];
  

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
   this._productService.getClothesPage(this.clothesPage).subscribe(
     value => this.clothes = value,
     error => console.log(error)
   );
  }

  setFilterParams(params: string[]){
    this.filterParams = params;
    this._productService.getClothesPage(this.clothesPage,this.filterParams).subscribe(
      value => this.clothes = value,
      error => console.log(error)
    );
  }


}
