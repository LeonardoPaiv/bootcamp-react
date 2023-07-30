export type Expensive = {
    id: number;
    descricao: string;
    categoria: string;
    valor: number;
    mes: string;
    dia: string;
}

export type ExpensiveResponse = {
    data: Expensive[]
}