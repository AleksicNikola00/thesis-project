import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from 'src/app/model/IProductDetails';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  productDetails! : IProductDetails;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductDetails(id).subscribe(
      value => this.productDetails = value,
      error => console.log(error)
    );
      
  }

}
