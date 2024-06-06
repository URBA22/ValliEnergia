import { Component } from '@angular/core';
import { Percorsi} from '../../interfaces/percorsi';
import { PERCORSI } from '../../interfaces/mock-percorsi';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-percorsi',
  standalone: true,
  imports: [NgFor],
  templateUrl: './percorsi.component.html',
  styleUrl: './percorsi.component.css'
})

export class PercorsiComponent {
  percorsi=PERCORSI;
}
