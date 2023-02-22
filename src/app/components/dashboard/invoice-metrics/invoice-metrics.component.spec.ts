import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMetricsComponent } from './invoice-metrics.component';

describe('InvoiceMetricsComponent', () => {
  let component: InvoiceMetricsComponent;
  let fixture: ComponentFixture<InvoiceMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
