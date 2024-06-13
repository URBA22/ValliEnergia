import { Component, Input } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-centrale-detail',
  templateUrl: './centrale-detail.component.html',
  styleUrls: ['./centrale-detail.component.css'],
  standalone: true,
  imports: [
    NgFor,
  ],
})


export class CentraleDetailComponent {
  @Input() centrale: Centrali = {
    id: 1,
    name: "Centrale Elettrica Alfa",
    description: "Una centrale elettrica moderna con tecnologie avanzate per la produzione di energia pulita.",
    technical_details: [
        { id: 101, type: "Potenza", value: 500 },
        { id: 102, type: "Efficienza", value: 92 },
        { id: 103, type: "Emissioni", value: 30 },
        
    ],
    trails: [11, 22, 33, 44],
    img: [
        { url: "https://picsum.photos/200/200", alt: "Vista frontale della Centrale Elettrica Alfa" },
        { url: "https://picsum.photos/200/200", alt: "Turbine della Centrale Elettrica Alfa" },
    ]
  };
  
  /*constructor(private dataTransferService:DataTransferServiceService){ this.cent = this.getCentrali();}
  
  getCentrali() : Centrali
  {
    return this.dataTransferService.GetCentrale(); 
  }
 
  */
}

