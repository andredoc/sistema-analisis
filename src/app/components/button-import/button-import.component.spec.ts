import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImportComponent } from './button-import.component';

describe('ButtonImportComponent', () => {
  let component: ButtonImportComponent;
  let fixture: ComponentFixture<ButtonImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
