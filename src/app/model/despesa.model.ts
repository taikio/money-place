import { Conta } from './conta.model';
import { Categoria } from './categoria.model';


export class Despesa {
    id: number;
    descricao: string;
    valor: number;
    categoria: Categoria;
    conta: Conta;
}
