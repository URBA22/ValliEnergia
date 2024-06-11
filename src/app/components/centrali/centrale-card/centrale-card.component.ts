import { Component, Input, OnInit, Output } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';
import { EventEmitter } from 'stream';
import { CentraliComponent } from '../centrali.component';
import { Subscriber } from 'rxjs';

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
