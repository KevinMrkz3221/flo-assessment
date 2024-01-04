import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndTasksComponent } from './products-and-tasks.component';

describe('ProductsAndTasksComponent', () => {
  let component: ProductsAndTasksComponent;
  let fixture: ComponentFixture<ProductsAndTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAndTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAndTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
