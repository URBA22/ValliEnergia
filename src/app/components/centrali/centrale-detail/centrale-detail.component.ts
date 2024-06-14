import { Component, Input } from '@angular/core';
import { Centrali } from '../../../interfaces/centrali';
import { NgFor } from '@angular/common';
import { DataTransferServiceService } from '../../../services/data-transfer-service.service';
import { OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Router } from '@angular/router';
import { CentraliService } from '../../../services/centrali.service';



@Component({
  selector: 'app-centrale-detail',
  templateUrl: './centrale-detail.component.html',
  styleUrls: ['./centrale-detail.component.css'],
  standalone: true,
  imports: [
    NgFor,
  ],
})


export class CentraleDetailComponent implements OnInit {
  @Input() centrale: Centrali;

  constructor(private dataTransferService:DataTransferServiceService , private router:Router,private centraliSrv:CentraliService){ this.centrale = this.getCentrali();}
  
  getCentrali() : Centrali
  {
    return this.dataTransferService.GetCentrale(); 
  }
  ngOnInit(){
    let href=this.router.url;
    console.log(href);
   
    let idCentrale=href.substring( href.lastIndexOf('/')+1,999);
    console.log(idCentrale)
    if(this.centrale===undefined)
      {
        this.centraliSrv.fetchCentraleByID(idCentrale).subscribe((item:Centrali)=>{
          this.centrale=item;
          console.log(this.centrale);
         
        });
        
        return this.centrale;
      }
      
  }
  
}

