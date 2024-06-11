import { Component, Input, OnInit } from '@angular/core';
import { Percorsi} from '../../interfaces/percorsi';
import { CommonModule, NgFor } from '@angular/common';
import { PercorsiService } from '../../services/percorsi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-percorsi',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    CommonModule
  ],
  providers:[HttpClient],
  templateUrl: './percorsi.component.html',
  styleUrl: './percorsi.component.css'
})



export class PercorsiComponent implements OnInit{
  percorsiFiltered : Percorsi[]=[]
  percorsiListDefinitive : Percorsi[] = []
  private searchParams = new Subject<string>();

  constructor(private percorsiService: PercorsiService){}


  search(term: string): void {
    this.searchParams.next(term);
  }

  ngOnInit():void{
    this.getPercorsi();
  };

  getPercorsi(): void{
    this.percorsiService.fetchPercorsi().subscribe(tmpPercorsiList=> {
      this.percorsiListDefinitive = this.percorsiFiltered = tmpPercorsiList;

    });
  };
  filterPercorsi(term:string) : Percorsi[]
  {
    this.percorsiFiltered=[];
    this.percorsiListDefinitive.forEach(tempPercorsi=>{
      if(tempPercorsi.nome.includes(term))
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
