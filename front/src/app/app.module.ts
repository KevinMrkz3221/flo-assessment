// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My Components

import { TaskComponent } from './components/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { CustomNavBarComponent } from './components/custom-nav-bar/custom-nav-bar.component';
import { TasksComponent } from './pages/tasks/tasks.component';

// Material Modules

import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { HistorialComponent } from './pages/historial/historial.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { MyProductComponent } from './components/my-product/my-product.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductAndTaskComponent } from './components/product-and-task/product-and-task.component';
import { ProductsAndTasksComponent } from './pages/products-and-tasks/products-and-tasks.component'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NewTaskComponent,
    CustomNavBarComponent,
    TasksComponent,
    HistorialComponent,
    UpdateTaskComponent,
    ProductComponent,
    ProductsComponent,
    MyProductsComponent,
    MyProductComponent,
    ProductAndTaskComponent,
    ProductsAndTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
