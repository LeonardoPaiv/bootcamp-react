type Expensive = {
    id: number;
    descricao: string;
    categoria: string;
    valor: number;
    mes: string;
    dia: string;
  }

  export interface IExpenseResume {
    category: string;
    total: number
  }
  
  export type ExpensiveResponse = Expensive;