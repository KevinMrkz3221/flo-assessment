import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';
import { Product, MyProduct } from 'src/app/models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  @Input() product!: Product;
  newProduct!: MyProduct;

  constructor(private productService: ProductService){}

  onHeart(){
    this.newProduct = {
      id: undefined,
      id_api: this.product.id as number,
      title: this.product.title,
      price: this.product.price,
      description: this.product.description,
      image: this.product.images[0]
    };

    this.productService.createProduct(this.newProduct)
      .subscribe(
        response => {
          console.log('Solicitud POST exitosa', response);
          alert('Se Guardo el elemento' );
        },
        error => {
          console.error('Error en la solicitud POST', error);
          alert('Ocurrió un error: ' + 'Probablemente ya guardaste este elemento');  // Muestra un popup con el mensaje de error
        }
      );
  }


}
