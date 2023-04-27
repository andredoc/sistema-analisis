import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  private   data = [
    { aplicacion: 'Sistema 1', fechaSolicitud: '01/01/2022', tipoPeticion: 'Tipo 1', fuenteInformacion: 'Fuente 1', modeloSolicitado: 'Modelo 1', usuario: 'Usuario 1', estado: 'En proceso' },
    { aplicacion: 'Sistema 2', fechaSolicitud: '02/01/2022', tipoPeticion: 'Tipo 2', fuenteInformacion: 'Fuente 2', modeloSolicitado: 'Modelo 2', usuario: 'Usuario 2', estado: 'Completado' },
    { aplicacion: 'Sistema 3', fechaSolicitud: '03/01/2022', tipoPeticion: 'Tipo 3', fuenteInformacion: 'Fuente 3', modeloSolicitado: 'Modelo 3', usuario: 'Usuario 3', estado: 'En espera' }
  ];

  documents$ = new BehaviorSubject(this.data);


  constructor(private http: HttpClient) { }

  getDocuments(): Observable<any> {
    return this.documents$;

    // return this.http.get(this.apiUrl).pipe(
    //   catchError((error)=> {
    //     console.error('Error al obtener los documentos', error);
    //     return throwError(new Error('Algo salió mal; por favor, inténtalo de nuevo más tarde.'));
    //   })
    // );
  }

}
