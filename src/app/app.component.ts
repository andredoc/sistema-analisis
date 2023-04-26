import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  data = [
    { aplicacion: 'Sistema 1', fechaSolicitud: '01/01/2022', tipoPeticion: 'Tipo 1', fuenteInformacion: 'Fuente 1', modeloSolicitado: 'Modelo 1', usuario: 'Usuario 1', estado: 'En proceso' },
    { aplicacion: 'Sistema 2', fechaSolicitud: '02/01/2022', tipoPeticion: 'Tipo 2', fuenteInformacion: 'Fuente 2', modeloSolicitado: 'Modelo 2', usuario: 'Usuario 2', estado: 'Completado' },
    { aplicacion: 'Sistema 3', fechaSolicitud: '03/01/2022', tipoPeticion: 'Tipo 3', fuenteInformacion: 'Fuente 3', modeloSolicitado: 'Modelo 3', usuario: 'Usuario 3', estado: 'En espera' }
  ];
}
