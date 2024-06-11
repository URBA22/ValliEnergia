import { Injectable } from '@angular/core';
import { SearchResults } from '../interfaces/searchResults';
import { PercorsiService } from './percorsi.service';
import { CentraliService } from './centrali.service';
import { Centrali } from '../interfaces/centrali';
import { map } from 'rxjs';
import { Percorsi } from '../interfaces/percorsi';
import { join, parse } from 'path';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  constructor(
    private percorsiSrv : PercorsiService,
    private centraliSrv : CentraliService
  ) { }

  search(term: string): SearchResults[]{

    let joinedList : SearchResults[] = [];
    let tmpListPrc : SearchResults[] = [];
    let tmpListCnt : SearchResults[] = [];

    this.percorsiSrv.fetchPercorsi().subscribe(prc => {
      prc.forEach(item => {
          return{
            id: item.id,
            name: item.nome,
            type: "percorso",
            //relatedItems: item.centrali.map(i => {return i})
          } as SearchResults;
        });
        return tmpListPrc;
      })

    this.centraliSrv.fetchCentrali().subscribe(centList => {
      centList.map(item => {
          return{
            id: item.id,
            name: item.name,
            type: "percorso",
            //relatedItems: item.trails.map(i => {return i})
          } as SearchResults;
        });
        return tmpListCnt;
      })

    joinedList = tmpListPrc.concat(tmpListCnt);

    let filteredList : SearchResults [] = [];

    filteredList = joinedList.filter(obj => {
      return obj.name.includes(term);
    })
    return filteredList;
  }
}
