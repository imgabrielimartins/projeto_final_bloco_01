import { Principal } from "../model/Principal";
import { Repository } from "../repository/Repository";
import { Estendida } from "../model/Estendida";

export class Controller implements Repository {

    private listaProdutos: Principal[] = [];

    procurarProduto(numero: number): Principal | null {
        const produto = this.listaProdutos.find(p =>
            p instanceof Estendida && p.codigoProduto === numero
        );

        if (!produto) {
            throw new Error(`Produto com código ${numero} não encontrado.`);
        }

        return produto;
    }

    listarProdutos(): Array<Principal> {
        if (this.listaProdutos.length === 0) {
            throw new Error("Nenhum produto cadastrado!");
        }
        return this.listaProdutos;
    }

    cadastrar(produto: Principal): void {
        this.listaProdutos.push(produto);
        console.log("\n✔ Produto cadastrado com sucesso!");
    }

    atualizar(produtoAtualizado: Principal): void {

        const codigo = (produtoAtualizado as Estendida).codigoProduto;

        const index = this.listaProdutos.findIndex(p =>
            p instanceof Estendida &&
            p.codigoProduto === codigo
        );

        if (index === -1) {
            throw new Error("Produto para atualizar não encontrado!");
        }

        this.listaProdutos[index] = produtoAtualizado;

        console.log("\n✔ Produto atualizado com sucesso!");
    }

    deletar(numero: number): boolean {
        const index = this.listaProdutos.findIndex(p =>
            p instanceof Estendida && p.codigoProduto === numero
        );

        if (index === -1) {
            throw new Error(`Produto com código ${numero} não encontrado para deletar.`);
        }

        this.listaProdutos.splice(index, 1);

        console.log("\n✔ Produto removido com sucesso!");
        return true;
    }
}
