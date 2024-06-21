import { DettagliPercorso } from "./dettagli-percorso";
import { Immagine } from "./immagine";

export interface Percorsi {
    id: number;
    zona: string;
    nome: string;
    descrizione: string;
    dettagliPercorsi: DettagliPercorso;
    centrali: number[];
    immagini: Immagine[];

}
