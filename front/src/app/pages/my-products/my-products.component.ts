import { Component } from '@angular/core';
import { MyProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {
  products!: MyProduct[];
  panelOpenState = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Suscríbete al observable para obtener los datos
    this.productService.getMyProducts().subscribe(
      (data: MyProduct[]) => {
        this.products = data; // Asigna los datos al arreglo products
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  
}
