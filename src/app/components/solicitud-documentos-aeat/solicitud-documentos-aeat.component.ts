import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-solicitud-documentos-aeat',
  templateUrl: './solicitud-documentos-aeat.component.html',
  styleUrls: ['./solicitud-documentos-aeat.component.css']
})
export class SolicitudDocumentosAEATComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SolicitudDocumentosAEATComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const selectedOption = 'a';
    const csvCode = 123;
    this.dialogRef.close({ selectedOption, csvCode });
  }

}
