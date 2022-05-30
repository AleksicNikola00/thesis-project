import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBrandMap } from '../model/IBrandMap';
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

  searchProducts(criteria: string, pageNum: number): Observable<IProduct[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('criteria',criteria);
    return this.http.get<IProduct[]>(environment.host + this.url + "/search" + `/${pageNum}`,{params:queryParams});
  }

  getProductDetails(id: number): Observable<IProductDetails>{
      return this.http.get<IProductDetails>(environment.host + this.url + `/${id}`);
  }

  getClothesPage(pageNum: number,filterParams: string[] = []): Observable<IProduct[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('filterParams',filterParams.join(', '));
    return this.http.get<IProduct[]>(environment.host + this.url + "/clothes" + `/${pageNum}`, {params:queryParams});
  }


  getShoesPage(pageNum: number,filterParams: string[] = []): Observable<IProduct[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('filterParams',filterParams.join(', '));
    return this.http.get<IProduct[]>(environment.host + this.url + "/shoes" + `/${pageNum}`, {params:queryParams});
  }

  getBrandMap(filterType: string): Observable<IBrandMap[]>{
    return this.http.get<IBrandMap[]>(environment.host + this.url + `/${filterType}/brands`);
  }

}
