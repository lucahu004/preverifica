
export class ECommerce{
    scarpe: Scarpa[];
    magliette: Maglietta[]
}

export class Maglietta{
    id: number;
    nome: string;
    tipologia: string;
    prezzo: number;
}

export class Scarpa{
    id: number;
    nome: string;
    prezzo: number
}