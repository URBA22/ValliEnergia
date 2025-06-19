import { Component, Input } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';
import { CommonModule, NgFor } from '@angular/common';
import { DataTransferServiceService } from '../../../services/data-transfer-service.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentraliService } from '../../../services/centrali.service';
import { Percorsi } from '../../../interfaces/percorsi';
import { PercorsiService } from '../../../services/percorsi.service';
import { PercorsoCardComponent } from '../../percorsi/percorso-card/percorso-card.component';



@Component({
  selector: 'app-centrale-detail',
  templateUrl: './centrale-detail.component.html',
  styleUrls: ['./centrale-detail.component.css'],
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    PercorsoCardComponent
  ],
})


export class CentraleDetailComponent implements OnInit {
  @Input() centrale: Centrali;
  linkedPercorsi : Percorsi[] = [];

  constructor(
    private dataTransferService:DataTransferServiceService,
    private router:Router,
    private centraliSrv:CentraliService,
    private percorsiSrv : PercorsiService){ this.centrale = this.getCentrali();}

  getCentrali() : Centrali
  {
    return this.dataTransferService.GetCentrale();
  }


  ngOnInit(){

    let href=this.router.url;
    let idCentrale=href.substring( href.lastIndexOf('/')+1,999);
    if(!this.centrale)
      {
        this.centraliSrv.fetchCentraleByID(idCentrale).subscribe((item:Centrali)=>{
          this.centrale=item;
          this.fetchLinkedPercorsi();
        });
        return this.centrale;
      }
      else{
        this.fetchLinkedPercorsi();
      }
  }

  private fetchLinkedPercorsi() {
    if(this.linkedPercorsi.length === 0 && this.centrale.percorsi){
      this.centrale.percorsi.forEach(trailId => {
        this.percorsiSrv.fetchPercorsiByID(trailId.toString()).subscribe((item: Percorsi) => {
          this.linkedPercorsi.push(item);
        });
      });
    }
  }
}
