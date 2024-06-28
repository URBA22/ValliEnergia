import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormrequestService {
  constructor(private http: HttpClient) { }

  submitForm(form : any){
    const headers = new HttpHeaders().set('Content-type', 'application/json; charset=utf-8');
    let payload = JSON.stringify(form);
    alert(payload);
    return this.http.post("http://localhost:5000/api/FormReq", payload, {headers: headers}).subscribe(response => alert("OK"), error => alert("KO"));
  }
}
