import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Percorsi } from '../interfaces/percorsi';

@Injectable({
  providedIn: 'root'
})
export class PercorsiService {

  constructor(private http:HttpClient) { }
  private percorsiUrl = "http://localhost:3000/percorsi"; 

  fetchPercorsi():Observable<Percorsi[]>{
    return this.http.get<Percorsi[]>(this.percorsiUrl);
  };
}
