import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ProductsComponent } from './pages/products/products.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
