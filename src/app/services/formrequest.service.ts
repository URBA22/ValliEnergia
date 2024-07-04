import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormrequestService {
  constructor(private http: HttpClient) { }

  submitForm(form : any){
    alert(form);
    const headers = new HttpHeaders().set('Content-type', 'application/json; charset=utf-8');
    let payload = JSON.stringify(form);
    return this.http.post("http://localhost:5000/api/FormReq", payload, {headers: headers}).subscribe(response => alert("Richiesta inviata correttamente"), error => alert("Errore: richiesta non inviata"));
  }
}
