import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Centrali } from '../../interfaces/centrali';
import { Percorsi } from '../../interfaces/percorsi';
import { DettagliCentrali } from '../../interfaces/dettagli-centrali';
import { DettagliPercorso } from '../../interfaces/dettagli-percorso';
import { Immagine } from '../../interfaces/immagine';
import { PercorsiService } from '../../services/percorsi.service';
import { CentraliService } from '../../services/centrali.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [NgIf, NgFor, FormsModule]
})
export class AdminComponent {
  centralis: Centrali[] = [];
  percorsis: Percorsi[] = [];
  
  newCentrali: Centrali = { id: 0, name: '', description: '', technical_details: [], trails: [], img: [], zone: 'AST' };
  newPercorsi: Percorsi = { id: 0, nome: '', descrizione: '', percorso: {} as DettagliPercorso, centrali: [], immagini: [], zone: 'AST' };
  
  selectedCentrali: Centrali | null = null;
  selectedPercorsi: Percorsi | null = null;
  selectedCentraliId: number | null = null;
  selectedPercorsiId: number | null = null;
  percorsiFiltered : Percorsi[]=[]
  percorsiListDefinitive : Percorsi[] = []
  centraliListDefinitive : Centrali[] = []
  centraliFiltered : Centrali[] = []
  constructor(private percorsiService: PercorsiService, private centraliService: CentraliService){}
  ngOnInit():void{
    this.getPercorsi();
    this.getCentrali();
  };

  getPercorsi(): void{
    this.percorsiService.fetchPercorsi().subscribe(tmpPercorsiList=> {
      this.percorsiListDefinitive = this.percorsiFiltered = this.percorsis = tmpPercorsiList;

    });
  };
  getCentrali():void{
    this.centraliService.fetchCentrali().subscribe(tmpCentraliList => {
      this.centraliListDefinitive = this.centraliFiltered = this.centralis = tmpCentraliList;

    });
  }

  addCentrali() {
    if (this.newCentrali.id && this.newCentrali.name && this.newCentrali.description) {
      this.centralis.push({ ...this.newCentrali });
      this.newCentrali = { id: 0, name: '', description: '', technical_details: [], trails: [], img: [], zone: 'AST' };
    }
  }

  deleteCentrali(id: number) {
    this.centralis = this.centralis.filter(c => c.id !== id);
  }

  editCentrali(centrali: Centrali) {
    this.selectedCentrali = { ...centrali };
  }

  saveCentrali() {
    if (this.selectedCentrali) {
      const index = this.centralis.findIndex(c => c.id === this.selectedCentrali?.id);
      if (index !== -1) {
        this.centralis[index] = { ...this.selectedCentrali };
        this.selectedCentrali = null;
      }
    }
  }

  addPercorsi() {
    if (this.newPercorsi.id && this.newPercorsi.nome && this.newPercorsi.descrizione) {
      this.percorsis.push({ ...this.newPercorsi });
      this.newPercorsi = { id: 0, nome: '', descrizione: '', percorso: {} as DettagliPercorso, centrali: [], immagini: [], zone: 'AST' };
    }
  }

  deletePercorsi(id: number) {
    this.percorsis = this.percorsis.filter(p => p.id !== id);
  }

  editPercorsi(percorsi: Percorsi) {
    this.selectedPercorsi = { ...percorsi };
  }

  savePercorsi() {
    if (this.selectedPercorsi) {
      const index = this.percorsis.findIndex(p => p.id === this.selectedPercorsi?.id);
      if (index !== -1) {
        this.percorsis[index] = { ...this.selectedPercorsi };
        this.selectedPercorsi = null;
      }
    }
  }

  linkCentraliToPercorsi(centraliId: number | null, percorsiId: number | null) {
    if (centraliId !== null && percorsiId !== null) {
      const centrali = this.centralis.find(c => c.id === centraliId);
      if (centrali) {
        centrali.trails.push(percorsiId);
        const percorsi = this.percorsis.find(p => p.id === percorsiId);
        if (percorsi) {
          percorsi.centrali.push(centraliId);
        }
      }
    }
  }
}
