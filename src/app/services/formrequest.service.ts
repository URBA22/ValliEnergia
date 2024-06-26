import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormrequestService {
  constructor(private http: HttpClient) { }

  submitForm(form: FormData){
    return this.http.post("http://192.168.123.24:3000/form", form).subscribe(response => alert("OK"), error => alert("KO"));
  }
}
