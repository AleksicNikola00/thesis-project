import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../model/IProduct';
import { IProductDetails } from '../model/IProductDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = "/products"

  constructor(private http: HttpClient) { }

 

  getClothes(): Observable<IProduct[]>{
      return this.http.get<IProduct[]>(environment.host + this.url + "/clothes");
  }

  getShoes(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(environment.host + this.url + "/shoes");
  }

  getProductDetails(id: number): Observable<IProductDetails>{
      return this.http.get<IProductDetails>(environment.host + this.url + `/${id}`);
  }

  getClothesPage(pageNum: number): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(environment.host + this.url + "/clothes" + `/${pageNum}`);
}


}
