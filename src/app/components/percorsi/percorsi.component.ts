import { Component, OnInit } from '@angular/core';
import { Percorsi} from '../../interfaces/percorsi';
import { CommonModule, NgFor } from '@angular/common';
import { PercorsiService } from '../../services/percorsi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PercorsoCardComponent } from './percorso-card/percorso-card.component';

@Component({
  selector: 'app-percorsi',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    CommonModule,
    PercorsoCardComponent
  ],
  providers:[HttpClient],
  templateUrl: './percorsi.component.html',
  styleUrl: './percorsi.component.css'
})



export class PercorsiComponent implements OnInit{
  percorsiFiltered : Percorsi[]=[]
  percorsiListDefinitive : Percorsi[] = []
  searchParam : string = '';
  filterParam : string = 'ALL';

  constructor(private percorsiService: PercorsiService){}


  search(term: string): void {
    this.searchParam = term;
    this.filterPercorsi();
  }

  ngOnInit():void{
    this.getPercorsi();
  };

  onSelect(term: string){
    this.filterParam = term;
    this.filterPercorsi();
  }
  getPercorsi(): void{
    this.percorsiService.fetchPercorsi().subscribe(tmpPercorsiList=> {
      this.percorsiListDefinitive = this.percorsiFiltered = tmpPercorsiList;

    });
  };
  filterPercorsi() : Percorsi[]
  {
    let term = this.searchParam.toLowerCase().trim();
    this.percorsiFiltered=[];
    this.percorsiListDefinitive.forEach(tempPercorsi=>{
      if(tempPercorsi.nome.toLowerCase().trim().includes(term) && (this.filterParam === "ALL" || this.filterParam === tempPercorsi.zona))
        {
          this.percorsiFiltered.push(tempPercorsi);
        }
      })
      return this.percorsiFiltered;

  }

  /*
  searchPercorsi(term: string): Percorsi[] {
    if (!term.trim()) {
      return this.percorsi;
    }
    return this.percorsi.filter(this.contiene(term))
  }
  contiene(params:string):Percorsi {
  }
  */
/*
  searchPercorsi(searchParams: string) : Percorsi[] {
    if(searchParams){
      const filteredArray = this.percorsi.filter((Percorsi) => {
      });
      return filteredArray;
    }
  }
   */
  }
 /* onClick(val:number) {
    if(val == 1)
      {
        this.percorsi=PERCORSI_AGNO
      }
    else
      {
        this.percorsi=PERCORSI_ASTICO
      }
  }
*/

 //(input)="searchPercorsi(searchBox.value)"
