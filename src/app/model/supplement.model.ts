import { Nutritional } from "./nutritional.model";

export class Supplement {
    idSupplement? : number;
    nomSupplement? : string;
    prixSupplement? : number;
    dosageSupplement? : number;
    dateCreation? : Date ;
    nutritional! : Nutritional;

    }
    