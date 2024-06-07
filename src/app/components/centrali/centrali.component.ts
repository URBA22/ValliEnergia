import { Component } from '@angular/core';
import { Centrali } from '../../interfaces/centrali';
import { CENTRALIAGNO, CENTRALIASTI } from '../../interfaces/mock-centrali';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-centrali',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './centrali.component.html',
  styleUrl: './centrali.component.css'
})
export class CentraliComponent {
  centraliAgno = CENTRALIAGNO;
  centraliAsti = CENTRALIASTI;
  centraliTutte = [...this.centraliAgno, ...this.centraliAsti];

}
