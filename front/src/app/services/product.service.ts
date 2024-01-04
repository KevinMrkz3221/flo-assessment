import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ObservedValueOf } from "rxjs";

import { Product, MyProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = 'https://api.escuelajs.co/api/v1/products';
  private apiUrl = 'http://127.0.0.1:8000/api/v1/products';

  
  http = inject(HttpClient);

  getMyProducts(): Observable<MyProduct[]>{
    return this.http.get<MyProduct[]>(this.apiUrl+"/");
  }

  createProduct(product: MyProduct): Observable<MyProduct> {
    return this.http.post<MyProduct>(this.apiUrl + "/", product);
  }

}
