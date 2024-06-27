import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Percorsi } from '../interfaces/percorsi';

@Injectable({
  providedIn: 'root'
})
export class PercorsiService {

  constructor(private http:HttpClient) { }
  private percorsiUrl = "http://localhost:5000/api/Percorsi";

  fetchPercorsi():Observable<Percorsi[]>{
    return this.http.get<Percorsi[]>(this.percorsiUrl);
  };
  fetchPercorsiByID(id:string):Observable<Percorsi>{
    let url = `${this.percorsiUrl}/${id}` ;
    return this.http.get<Percorsi>(url);
  }
}
