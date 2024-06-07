import { DettagliCentrali } from "./dettagli-centrali";
import { Immagine } from "./immagine";

export interface Centrali {
    id:number;
    nome:string;
    desc:string;
    dettagliTecnici:DettagliCentrali[];
    percorsi:number[];
    immagini:Immagine[];
}
