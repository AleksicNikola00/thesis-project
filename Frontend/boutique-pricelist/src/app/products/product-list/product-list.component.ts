import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() products: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
