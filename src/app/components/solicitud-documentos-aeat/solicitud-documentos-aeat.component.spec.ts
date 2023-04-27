import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDocumentosAEATComponent } from './solicitud-documentos-aeat.component';

describe('SolicitudDocumentosAEATComponent', () => {
  let component: SolicitudDocumentosAEATComponent;
  let fixture: ComponentFixture<SolicitudDocumentosAEATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudDocumentosAEATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudDocumentosAEATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
