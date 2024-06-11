import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResults } from '../interfaces/searchResults';
import { PercorsiService } from './percorsi.service';
import { CentraliService } from './centrali.service';
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
    let percorsi = this.percorsiSrv.fetchPercorsi();
    let centrali = this.centraliSrv.fetchCentrali();
    let joinedList : SearchResults[] = [];
    let filteredList : SearchResults [] = [];
    let parsedItem : SearchResults;

    centrali.subscribe(item => {
      item.map(element => {

        parsedItem.id = element.id;
        parsedItem.name = element.name;
        parsedItem.type = "centrale";
        parsedItem.relatedItems = element.trails.map(i => {
          return i;
        })
        });
        return joinedList.push(parsedItem);
      });


    percorsi.subscribe(item => {
      item.map(element => {


        parsedItem.id = element.id;
        parsedItem.name = element.nome;
        parsedItem.type = "percorso";
        parsedItem.relatedItems = element.centrali.map(i => {
          return i;
        })
      })
      joinedList.push(parsedItem);
    });

    filteredList = joinedList.filter(obj => {
      return obj.name.includes(term);
    })
    return filteredList;
  }
}
