import { Component, OnInit } from '@angular/core';
import { DocumentsService } from './services/documents.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sistema-analisis';
  headers = [
    {
      label: 'Aplicación',
      columnKey: 'aplicacion'
    },
    {
      label: 'Fecha Solicitud',
      columnKey: 'fechaSolicitud'
    },
    {
      label: 'Tipo Petición',
      columnKey: 'tipoPeticion'
    },
    {
      label: 'Fuente Información',
      columnKey: 'fuenteInformacion'
    },
    {
      label: 'Modelo Solicitado',
      columnKey: 'modeloSolicitado'
    },
    {
      label: 'Usuario',
      columnKey: 'usuario'
    },
    {
      label: 'Estado',
      columnKey: 'estado'
    }
  ]
  data$!: Observable<any>;

  constructor(private documentsService: DocumentsService) {}

  ngOnInit() {
    this.getDocumentsList()
  }

  getDocumentsList() {
    this.data$ = this.documentsService.getDocuments();
    console.log('update list');
  }

}


