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

  fetchObjects(): SearchResults[]{

    let joinedList : SearchResults[] = [];

    this.percorsiSrv.fetchPercorsi().subscribe(prc => {
      prc.forEach(item => {
          let tmpItem : SearchResults =
          {
            id: item.id,
            name: item.nome,
            type: "percorso",
            relatedItems: item.centrali
          }
          joinedList.push(tmpItem);
        });
      });

    this.centraliSrv.fetchCentrali().subscribe(cnt => {
      cnt.forEach(item => {
          let tmpItem : SearchResults = {
            id: item.id,
            name: item.name,
            type: "centrale",
            relatedItems: item.trails
          }
          joinedList.push(tmpItem);
        });
      });
      console.log(joinedList);
      return joinedList;
  }
}