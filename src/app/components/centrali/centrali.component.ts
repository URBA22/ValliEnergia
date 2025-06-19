import { Component, OnInit } from '@angular/core';
import { Centrali } from '../../interfaces/centrali';
import { NgFor, NgIf } from '@angular/common';
import { CentraliService } from '../../services/centrali.service';
import { CentraleCardComponent } from './centrale-card/centrale-card.component';


@Component({
  selector: 'app-centrali',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CentraleCardComponent
  ],
  templateUrl: './centrali.component.html',
  styleUrl: './centrali.component.css'
})


export class CentraliComponent implements OnInit {
  centraliFiltered : Centrali[]=[]
  centraliListDefinitive : Centrali[] = []
  filterParam : string = 'ALL';
  searchParam : string = '';
  constructor(private centraliService: CentraliService){}

  search(term: string): void {
    this.searchParam = term;
    this.filterCentrali();
  }

  ngOnInit():void{
    this.getCentrali();

  }

  onSelect(term: string){
    this.filterParam = term;
    this.filterCentrali();
  }

  getCentrali():void{
    this.centraliService.fetchCentrali().subscribe(tmpCentraliList => {
      this.centraliListDefinitive = this.centraliFiltered = tmpCentraliList;

    });
  }

  filterCentrali() : Centrali[]
  {

    //Condizione sul valore del filtro zona

    let term = this.searchParam.toLowerCase().trim();
    this.centraliFiltered=[];
    this.centraliListDefinitive.forEach(tempCentrali=>{
      if(tempCentrali.nome.toLowerCase().trim().includes(term) && (this.filterParam === "ALL" || this.filterParam === tempCentrali.zona))
        {
          this.centraliFiltered.push(tempCentrali);
      }
      })
      return this.centraliFiltered;

  }
}

