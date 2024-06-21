import { Component, Input, OnInit } from '@angular/core';
import { Percorsi } from '../../../interfaces/percorsi';
import { DataTransferServiceService } from '../../../services/data-transfer-service.service';
import { Router } from '@angular/router';
import { PercorsiService } from '../../../services/percorsi.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-percorsi-dettagli',
  standalone: true,
  imports:[
    NgFor,
    NgIf
  ],
  templateUrl: './percorsi-dettagli.component.html',
  styleUrls: ['./percorsi-dettagli.component.css']
})
export class PercorsiDettagliComponent implements OnInit {
  @Input() percorso: Percorsi;

  constructor(
    private dataTransferService: DataTransferServiceService,
    private router: Router,
    private percorsoSrv: PercorsiService
  ) { this.percorso = this.getCentrali() }

  getCentrali() : Percorsi
  {
    return this.dataTransferService.GetPercorso();
  }

  ngOnInit() {
    let href=this.router.url;
    let idPrc=href.substring( href.lastIndexOf('/')+1,999);
    if(this.percorso===undefined)
      {
        this.percorsoSrv.fetchPercorsiByID(idPrc).subscribe((item:Percorsi)=>{
          this.percorso=item;
        });

        return this.percorso;
      }
  }

  ngAfterViewInit(){
    let scriptDivRef = document.getElementById('oa-embed');
    let script = document.createElement('script');
    script.type = `text/javascript`;
    script.src= this.percorso.dettagliPercorsi.oaUrl;

    scriptDivRef!.appendChild(script);
  }
}
