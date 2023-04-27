import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitud-documentos-aeat',
  templateUrl: './solicitud-documentos-aeat.component.html',
  styleUrls: ['./solicitud-documentos-aeat.component.css']
})
export class SolicitudDocumentosAEATComponent implements OnInit {
  tipoModelo!: string;
  codigoCSV!: string;
  dialogRef!: MatDialogRef<SolicitudDocumentosAEATComponent>;
  @Inject(MAT_DIALOG_DATA) public data: any


  constructor() {}

  ngOnInit(): void {
  }

  enviar(): void {
    const data = {
      tipoModelo: this.tipoModelo,
      codigoCSV: this.codigoCSV
    };
    this.dialogRef.close(data);
  }
}
