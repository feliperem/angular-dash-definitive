import { Comodo } from "./comodo";

export interface Aparelhos {
    name: String;
    comodo : String | any | Comodo[];
    movel: Boolean;
    assinatura : Number;
    id_user: string;
    _id ?: string;
}
