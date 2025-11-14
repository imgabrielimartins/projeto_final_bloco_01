import { Principal } from "../model/Principal";

export interface Repository {
    procurarProduto(codigo: number): Principal | null;
    cadastrar(produto: Principal): void;
    listarTodos(): void; 
    atualizar(produto: Principal): void;
    deletar(id: number): void;
}