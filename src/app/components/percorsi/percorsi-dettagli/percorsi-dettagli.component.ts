import { Component, Input, OnInit } from '@angular/core';
import { Percorsi } from '../../../interfaces/percorsi';
import { DataTransferServiceService } from '../../../services/data-transfer-service.service';
import { Router } from '@angular/router';
import { PercorsiService } from '../../../services/percorsi.service';

@Component({
  selector: 'app-percorsi-dettagli',
  templateUrl: './percorsi-dettagli.component.html',
  styleUrls: ['./percorsi-dettagli.component.css']
})
export class PercorsiDettagliComponent implements OnInit {
  @Input() percorso!: Percorsi;

  constructor(
    private dataTransferService: DataTransferServiceService,
    private router: Router,
    private percorsoSrv: PercorsiService
  ) { }

  ngOnInit() {
    const href = this.router.url;
    const idPercorso = href.substring(href.lastIndexOf('/') + 1);

    if (!this.percorso) {
      this.percorsoSrv.fetchPercorsiByID(idPercorso).subscribe((item: Percorsi) => {
        this.percorso = item;
        console.log(this.percorso);
      });
    }
  }
}
