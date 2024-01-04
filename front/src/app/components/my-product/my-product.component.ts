import { Component, Input } from '@angular/core';
import { MyProduct } from 'src/app/models/product.model';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { PTask } from 'src/app/models/productntask.model';
import { ProductTask } from 'src/app/models/productntask.model';
import { ProductTaskService } from 'src/app/services/product-and-task.service';
@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent {
  @Input() product!:MyProduct;
  tasks!: Task[]; 
  newPTask: PTask = {
    product: 0,
    task: 0

  };

  panelOpenState = false;

  constructor(private taskService: TaskService, private productTask: ProductTaskService) {}


  ngOnInit(): void {
    if (this.product && this.product.id !== undefined) {
      this.newPTask.product = this.product.id;
    }
    // Suscríbete al observable para obtener los datos
    this.taskService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data; // Asigna los datos al arreglo products
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  onSubmit() {
    console.log('Datos a enviar:', this.newPTask);
    this.productTask.createProduct(this.newPTask)
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
      }, error => {
        console.error('Error en la solicitud POST:', error);
      });
  }


}
