import { Component } from '@angular/core';
import { Percorsi} from '../../interfaces/percorsi';
import { PERCORSI_AGNO, PERCORSI_ASTICO } from '../../interfaces/mock-percorsi';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-percorsi',
  standalone: true,
  imports: [NgFor],
  templateUrl: './percorsi.component.html',
  styleUrl: './percorsi.component.css'
})



export class PercorsiComponent {
  percorsi : Percorsi[]=[...PERCORSI_ASTICO, ...PERCORSI_AGNO]
  

  onClick(val:number) {
    if(val == 1)
      {
        this.percorsi=PERCORSI_AGNO
      }
    else 
      {
        this.percorsi=PERCORSI_ASTICO
      }
  }

}
