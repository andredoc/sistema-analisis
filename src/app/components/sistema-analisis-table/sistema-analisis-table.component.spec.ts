import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaAnalisisTableComponent } from './sistema-analisis-table.component';

describe('SistemaAnalisisTableComponent', () => {
  let component: SistemaAnalisisTableComponent;
  let fixture: ComponentFixture<SistemaAnalisisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaAnalisisTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaAnalisisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
