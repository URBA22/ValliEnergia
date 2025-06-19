import { environment } from './../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormrequestService {
  constructor(private http: HttpClient) { }

  submitForm(form: any): Observable<string> {
    const headers = new HttpHeaders().set('Content-type', 'application/json; charset=utf-8');
    let payload = JSON.stringify(form);
    return this.http.post<string>(`${environment.apiUrl}/FormReq`, payload, { headers: headers, responseType: 'text' as 'json' })
    .pipe(
      catchError(this.handleErr)
    );
  }

  private handleErr (error: any): Observable<never>{

console.error('An error occurred:', error);
    return throwError(() => new Error());
  }
}
