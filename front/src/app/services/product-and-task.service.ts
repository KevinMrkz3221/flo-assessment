import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ObservedValueOf } from "rxjs";

import { ProductTask, PTask } from '../models/productntask.model';

@Injectable({
  providedIn: 'root'
})
export class ProductTaskService {
  private api = 'https://api.escuelajs.co/api/v1/products';
  private apiUrl = 'http://127.0.0.1:8000/api/v1/products-n-tasks';

  
  http = inject(HttpClient);

  getMyProducts(): Observable<ProductTask[]>{
    return this.http.get<ProductTask[]>(this.apiUrl+"/");
  }

  createProduct(ptask: PTask): Observable<PTask> {
    return this.http.post<PTask>(this.apiUrl + "/", ptask);
  }

}
