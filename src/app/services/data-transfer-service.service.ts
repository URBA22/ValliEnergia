import { Injectable } from '@angular/core';
import { Centrali } from '../interfaces/centrali';
import { Percorsi } from '../interfaces/percorsi';

@Injectable({
  providedIn: 'root'
})

export class DataTransferServiceService {
  
  constructor() {}
   /**
    * Salva una centrale
    * @param (Centrali) la centrale da salvare
    */
   SetCentrale(ct : Centrali):void
   {
      tempCentrale=ct;
   }

   /**
    * Ottiene la centrale precedentemente salvata
    * @returns (Centrali) la centrale precedentemente salvata
    */
   GetCentrale():Centrali{
    return tempCentrale;
   }

   SetPercorso(pr:Percorsi){
    tempPercorso =pr;
   }
   GetPercorso():Percorsi
   {
    return tempPercorso;
   }
}
var tempCentrale : Centrali;
var tempPercorso : Percorsi;