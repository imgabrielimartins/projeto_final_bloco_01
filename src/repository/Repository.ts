import { Principal } from "../model/Principal";

export interface Repository {

    procurarProduto(numero: number): Principal | null;
    listarProdutos(): Array<Principal>;
    atualizar(produto: Principal): void;
    cadastrar(produto: Principal): void;
    deletar(numero: number): boolean;

}
