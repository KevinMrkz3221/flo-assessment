import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient);
  products!: Product[];
  

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products/').subscribe(
      (data) => {
        this.products = data;
      }
    )
  }
}
