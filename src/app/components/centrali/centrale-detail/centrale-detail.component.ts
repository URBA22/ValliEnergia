import { Component, Input, input } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';
import { DataTransferServiceService } from '../../../services/data-transfer-service.service';
import { CentraliComponent } from '../centrali.component';
import { INITIAL_CONFIG } from '@angular/platform-server';


@Component({
  selector: 'app-centrale-detail',
  standalone: true,
  imports: [],
  templateUrl: './centrale-detail.component.html',
  styleUrl: './centrale-detail.component.css'
})


export class CentraleDetailComponent {
  cent : Centrali;
  constructor(private dataTransferService:DataTransferServiceService){ this.cent = this.getCentrali();}
  
  getCentrali() : Centrali
  {
    return this.dataTransferService.GetCentrale(); 
  }

  
}

