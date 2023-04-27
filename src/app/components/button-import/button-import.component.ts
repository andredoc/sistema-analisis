// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { SolicitudDocumentosAEATComponent } from '../solicitud-documentos-aeat/solicitud-documentos-aeat.component';

// @Component({
//   selector: 'app-button-import',
//   templateUrl: './button-import.component.html',
//   styleUrls: ['./button-import.component.css']
// })
// export class ButtonImportComponent implements OnInit {

//   constructor(private dialog: MatDialog) { }

//   ngOnInit(): void {
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(SolicitudDocumentosAEATComponent, {
//       width: '500px',
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       console.log(result); // Imprimir resultado en consola
//     });
//   }

// }

import { Component, OnInit } from '@angular/core';
import { SolicitudDocumentosAEATComponent } from '../solicitud-documentos-aeat/solicitud-documentos-aeat.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button-import',
  templateUrl: './button-import.component.html',
  styleUrls: ['./button-import.component.css']
})
export class ButtonImportComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirModal(): void {
    const dialogRef = this.dialog.open(SolicitudDocumentosAEATComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El resultado de la modal es:', result);
    });
  }



}
