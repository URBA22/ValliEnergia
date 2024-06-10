import { Component, Input, OnInit } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';

@Component({
  selector: 'app-centrale-card',
  standalone: true,
  imports: [],
  templateUrl: './centrale-card.component.html',
  styleUrl: './centrale-card.component.css'
})
export class CentraleCardComponent{
  @Input() cent!: Centrali;
}
