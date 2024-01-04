import { Component, Input } from '@angular/core';
import { ProductTask } from 'src/app/models/productntask.model';

@Component({
  selector: 'app-product-and-task',
  templateUrl: './product-and-task.component.html',
  styleUrls: ['./product-and-task.component.css']
})
export class ProductAndTaskComponent {
  @Input() productTask!: ProductTask;
  
} 
