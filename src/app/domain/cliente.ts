import { Deuda } from "./deuda";

export class Cliente{
    codigo?: number;
    direccion?: string;
    dni?: string; //Aqui con el signo de pregunta, no es necesario definir la variable con algun valor y quedaria como valor undefined
    nombre?: string;
    deudas?: Deuda[] | null;

} 