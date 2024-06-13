import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Centrali } from '../interfaces/centrali';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentraliService {

  constructor(private http:HttpClient) { }
  private centraliUrl = "http://localhost:3000/centrali"; 

  fetchCentrali ():Observable<Centrali[]>{
    return this.http.get<Centrali[]>(this.centraliUrl);
  }
}

