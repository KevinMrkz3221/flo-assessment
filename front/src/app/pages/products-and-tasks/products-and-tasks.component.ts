import { Component } from '@angular/core';
import { ProductTaskService } from 'src/app/services/product-and-task.service';
import { ProductTask } from 'src/app/models/productntask.model';

@Component({
  selector: 'app-products-and-tasks',
  templateUrl: './products-and-tasks.component.html',
  styleUrls: ['./products-and-tasks.component.css']
})
export class ProductsAndTasksComponent {
  productsTasks!: ProductTask[];

  constructor(private productTaskService: ProductTaskService) {}

  ngOnInit(): void {
    // Suscríbete al observable para obtener los datos
    this.productTaskService.getMyProducts().subscribe(
      (data: ProductTask[]) => {
        this.productsTasks = data; // Asigna los datos al arreglo products
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
