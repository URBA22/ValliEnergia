import { Component, OnInit } from '@angular/core';
import { Centrali } from '../../interfaces/centrali';
import { NgFor, NgIf } from '@angular/common';
import { CentraliService } from '../../services/centrali.service';
import { CentraleCardComponent } from './centrale-card/centrale-card.component';
import { Subject, Observable } from 'rxjs';
import { CentraleDetailComponent } from './centrale-detail/centrale-detail.component';
import { subscribe } from 'diagnostics_channel';


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
  filterParam : string = '';
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
      if(tempCentrali.name.toLowerCase().trim().includes(term) && (this.filterParam === "ALL" || this.filterParam === tempCentrali.zone))
        {
          this.centraliFiltered.push(tempCentrali);
      }
      })
      return this.centraliFiltered;

  }
}

