import { Component, Input } from '@angular/core';
import { Product, MyProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent {
  @Input() product!:MyProduct;
  panelOpenState = false;


}
