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
  brands: string[] = [
    "Nike","Adidas","Fila","Replay","Reebok","Converse","Versace","Prada","Dior","Givenchy"
  ]

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
    this.clothes = this._productService.getClothes();
  }

}
