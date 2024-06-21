import { Injectable } from '@angular/core';
import { SearchResults } from '../interfaces/searchResults';
import { PercorsiService } from './percorsi.service';
import { CentraliService } from './centrali.service';

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
            name: item.nome,
            type: "centrale",
            relatedItems: item.percorsi
          }
          joinedList.push(tmpItem);
        });
      });
      return joinedList;
  }
}
