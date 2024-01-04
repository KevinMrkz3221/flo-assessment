import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ProductsComponent } from './pages/products/products.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { ProductAndTaskComponent } from './components/product-and-task/product-and-task.component';
import { ProductsAndTasksComponent } from './pages/products-and-tasks/products-and-tasks.component';

const routes: Routes = [
  {
    title: 'Nuevo Task',
    path: 'new-task',
    component: NewTaskComponent
  },
  {
    title: 'Activas',
    path: 'tasks',
    component: TasksComponent
  },
  { 
    title: 'Historial',
    path: 'tasks/completado',
    component: HistorialComponent
  },
  {
    title: 'Modificar',
    path: 'tasks/:id',
    component: UpdateTaskComponent
  },
  {
    title: 'Productos',
    path: 'productos',
    component: ProductsComponent
  },
  {
    title: 'Mis Productos',
    path: 'mis-productos',
    component: MyProductsComponent
  },
  {
    title: 'Task Y Productos',
    path: 'task-products',
    component: ProductsAndTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
