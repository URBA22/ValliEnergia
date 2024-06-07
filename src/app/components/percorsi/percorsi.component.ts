import { Component, OnInit } from '@angular/core';
import { Percorsi} from '../../interfaces/percorsi';
import { NgFor } from '@angular/common';
import { PercorsiService } from '../../services/percorsi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-percorsi',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule
  ],
  providers:[HttpClient],
  templateUrl: './percorsi.component.html',
  styleUrl: './percorsi.component.css'
})



export class PercorsiComponent{
  constructor(private percorsiService: PercorsiService){}
  
  ngOnInit():void{
    this.getPercorsi();
    
  }
  percorsi : Percorsi[]=[];

  getPercorsi():void{
    this.percorsiService.fetchPercorsi().subscribe(item=>this.percorsi=item)
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
}
