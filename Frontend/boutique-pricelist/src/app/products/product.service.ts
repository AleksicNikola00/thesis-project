import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../model/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = "/products"

  constructor(private http: HttpClient) { }

 

  getClothes(): Observable<IProduct[]>{
      return this.http.get<IProduct[]>(environment.host + this.url);
  }
}
