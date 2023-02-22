import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcefileTableComponent } from './sourcefile-table.component';

describe('SourcefileTableComponent', () => {
  let component: SourcefileTableComponent;
  let fixture: ComponentFixture<SourcefileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcefileTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourcefileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
