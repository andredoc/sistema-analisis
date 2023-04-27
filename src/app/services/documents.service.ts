import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  // private apiUrl = 'URL-a-la-que-se-enviará-la-solicitud-HTTP';
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';



  constructor(private http: HttpClient) { }

  getDocuments(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError((error)=> {
        console.error('Error al obtener los documentos', error);
        return throwError(new Error('Algo salió mal; por favor, inténtalo de nuevo más tarde.'));
      })
    );
  }

}
