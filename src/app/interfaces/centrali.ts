import { DettagliCentrali } from "./dettagli-centrali";
import { Immagine } from "./immagine";
import { Localita } from "./localita";

export interface Centrali {
    id:number;
    zona:string;
    nome:string;
    descrizione:string;
    localita: Localita;
    immagini: Immagine[];
    dettagliCentrali: DettagliCentrali[];
    percorsi: number[];


}
