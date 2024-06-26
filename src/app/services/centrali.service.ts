import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Centrali } from '../interfaces/centrali';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentraliService {

  constructor(private http:HttpClient) { }
  private centraliUrl = "http://localhost:5000/api/Centrali";

  fetchCentrali ():Observable<Centrali[]>{
    return this.http.get<Centrali[]>(this.centraliUrl);
  }
  fetchCentraleByID(id:string):Observable<Centrali>{
    let url = `${this.centraliUrl}/${id}` ;
    return this.http.get<Centrali>(url);
  }
}

