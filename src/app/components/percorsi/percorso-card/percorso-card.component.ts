import { Component, Input } from '@angular/core';
import { Percorsi } from '../../../interfaces/percorsi';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-percorso-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './percorso-card.component.html',
  styleUrl: './percorso-card.component.css'
})
export class PercorsoCardComponent {
  @Input() perc!: Percorsi;
}
