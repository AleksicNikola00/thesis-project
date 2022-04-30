import { Injectable } from '@angular/core';
import { IProduct } from '../model/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getClothes(): IProduct[]{
    return [
      {
        brand: 'Nike',
        model: 'Air Max',
        type: 'Shoes',
        imgUrl: 'neki url' 
      },
      {
        brand: 'Adidas',
        model: 'Bla',
        type: 'Shoes',
        imgUrl: 'neki url' 
      },
      {
        brand: 'New balanca',
        model: 'Tenk',
        type: 'Shoes',
        imgUrl: 'neki url' 
      }
    ];
  }
}
