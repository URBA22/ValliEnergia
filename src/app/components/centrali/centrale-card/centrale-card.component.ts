import { Component, Input, OnInit, Output } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';
import { EventEmitter } from 'stream';
import { CentraliComponent } from '../centrali.component';
import { Subscriber } from 'rxjs';
import { AppRoutingModule } from '../../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';
import { DataTransferServiceService } from '../../../services/data-transfer-service.service';

@Component({
  selector: 'app-centrale-card',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
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
  

