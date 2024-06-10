import { DettagliCentrali } from "./dettagli-centrali";
import { Immagine } from "./immagine";

export interface Centrali {
    id:number;
    name:string;
    description:string;
    technical_details:DettagliCentrali[];
    trails:number[];
    img:Immagine[];
}
