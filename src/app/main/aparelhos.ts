import { Comodo } from "./comodo";

export interface Aparelhos {
    name: String;
    comodo : String | Comodo[] | unknown;
    movel: Boolean;
    assinatura ?: Number;
    id_user: string;
    _id ?: string;
}
