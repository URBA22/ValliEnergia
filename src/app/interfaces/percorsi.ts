import { DettagliPercorso } from "./dettagli-percorso";
import { Immagine } from "./immagine";

export interface Percorsi {
    id:number;
    nome:string;
    descrizione:string;
    percorso:DettagliPercorso;
    centrali: number[];
    immagini:Immagine[];
    zone:string;
}
