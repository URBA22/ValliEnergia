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
  private searchParams = new Subject<string>();
  constructor(private centraliService: CentraliService){}

  search(term: string): void {
    this.searchParams.next(term);
  }

  ngOnInit():void{
    this.getCentrali();

  }
  centrali : Centrali[]=[];

  getCentrali():void{
    this.centraliService.fetchCentrali().subscribe(item => {
      return this.centrali = item;

    });
  }

  filterCentrali(term:string) : Centrali[]
  {
    term = term.toLowerCase().trim();
    this.centraliFiltered=[];
    this.centraliListDefinitive.forEach(tempCentrali=>{
      if(tempCentrali.name.toLowerCase().trim().includes(term))
        {
          this.centraliFiltered.push(tempCentrali);
        }
      })
      return this.centraliFiltered;

  } 

  /*
  centraliAgno = CENTRALIAGNO;
  centraliAsti = CENTRALIASTI;
  centraliTutte = [...this.centraliAgno, ...this.centraliAsti];*/

}
