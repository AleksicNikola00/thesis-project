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

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
   this._productService.getShoes().subscribe(
     value => this.shoes = value,
     error => console.log(error)
   );
  }

}
