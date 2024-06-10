import { Component } from '@angular/core';
import { Centrali } from '../../interfaces/centrali';
import { NgFor, NgIf } from '@angular/common';
import { CentraliService } from '../../services/centrali.service';


@Component({
  selector: 'app-centrali',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './centrali.component.html',
  styleUrl: './centrali.component.css'
})
export class CentraliComponent {

  constructor(private centraliService: CentraliService){}

  ngOnInit():void{
    this.getCentrali();

  }
  centrali : Centrali[]=[];

  getCentrali():void{
    this.centraliService.fetchCentrali().subscribe(item=>this.centrali=item)
  }


  /*
  centraliAgno = CENTRALIAGNO;
  centraliAsti = CENTRALIASTI;
  centraliTutte = [...this.centraliAgno, ...this.centraliAsti];*/

}
