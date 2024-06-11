import { Component, Input, OnInit } from '@angular/core';
import { Percorsi } from '../../../interfaces/percorsi';

@Component({
  selector: 'app-percorso-card',
  standalone: true,
  imports: [],
  templateUrl: './percorso-card.component.html',
  styleUrl: './percorso-card.component.css'
})
export class PercorsoCardComponent {
  @Input() perc!: Percorsi;
}
