import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistaccountsComponent } from './adminlistaccounts.component';

describe('AdminlistaccountsComponent', () => {
  let component: AdminlistaccountsComponent;
  let fixture: ComponentFixture<AdminlistaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistaccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlistaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
