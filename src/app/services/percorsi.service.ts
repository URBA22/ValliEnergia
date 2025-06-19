import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Percorsi } from '../interfaces/percorsi';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PercorsiService {

  constructor(private http:HttpClient) { }
  private percorsiUrl = environment.apiUrl + "/percorsi";

  fetchPercorsi():Observable<Percorsi[]>{
    return this.http.get<Percorsi[]>(this.percorsiUrl);
  };
  fetchPercorsiByID(id:string):Observable<Percorsi>{
    let url = `${this.percorsiUrl}/${id}` ;
    return this.http.get<Percorsi>(url);
  }
}
