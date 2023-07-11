import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistproductsComponent } from './adminlistproducts.component';

describe('AdminlistproductsComponent', () => {
  let component: AdminlistproductsComponent;
  let fixture: ComponentFixture<AdminlistproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlistproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
