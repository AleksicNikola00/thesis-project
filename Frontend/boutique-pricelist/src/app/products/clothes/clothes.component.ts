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
    this.getClothesPage(null);
  }

  getClothesPage(event: any): void{
    this._productService.getClothesPage(this.clothesPage,this.filterParams).subscribe(
     value => {
        this.clothes = this.clothes.concat(value);
        this.clothesPage = this.clothesPage + 1;
      },
     error => console.log(error)
   );
  }

  setFilterParams(params: string[]){
    this.filterParams = params;
    this.clothesPage = 0;
    this.clothes = [ ];
    this.getClothesPage(null);
  }


}
