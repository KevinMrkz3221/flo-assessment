import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAndTaskComponent } from './product-and-task.component';

describe('ProductAndTaskComponent', () => {
  let component: ProductAndTaskComponent;
  let fixture: ComponentFixture<ProductAndTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAndTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAndTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
