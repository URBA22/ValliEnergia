import { Component, Input } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';

@Component({
  selector: 'app-centrale-detail',
  standalone: true,
  imports: [],
  templateUrl: './centrale-detail.component.html',
  styleUrl: './centrale-detail.component.css'
})
export class CentraleDetailComponent {
  @Input() cent!: Centrali;
}
