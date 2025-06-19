import { Component, Input} from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';
import { RouterLink, RouterModule } from '@angular/router';
import { DataTransferServiceService } from '../../../services/data-transfer-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-centrale-card',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    NgIf
  ],
  templateUrl: './centrale-card.component.html',
  styleUrl: './centrale-card.component.css'
})
export class CentraleCardComponent{

  constructor(private dataTransferService:DataTransferServiceService){}

  @Input() cent!: Centrali;
  setCentrale(centrali: Centrali): void {
    this.dataTransferService.SetCentrale(centrali);
  }
}


