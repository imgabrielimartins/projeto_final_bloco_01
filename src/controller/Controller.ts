import { Repository } from "../repository/Repository";
import { Principal } from "../model/Principal";
import { Estendida } from "../model/Estendida";

export class Controller implements Repository {

    private lista: Principal[] = [];

    listarTodos(): void {
        if (this.lista.length === 0) {
            console.log("Nenhum produto encontrado!");
            return;
        }

        console.log("\n*** Lista de Todos os Produtos ***");
        this.lista.forEach(produto => {
            produto.visualizarProdutos();
            console.log("-----------------------------------");
        });
    }

    procurarProduto(codigo: number): Estendida | null {
        return this.lista.find(
            p => p instanceof Estendida && p.getCodigo() === codigo
        ) as Estendida || null;
    }
    
    cadastrar(produto: Principal): void {
        this.lista.push(produto);
        console.log("✔ Produto cadastrado com sucesso!");
    }
    
    procurarProdutoPorId(id: number): Principal | null {
        return this.lista.find(p => p.getId() === id) || null;
    }

    atualizar(novoProduto: Principal): void {
        let buscaProduto = this.procurarProdutoPorId(novoProduto.getId());

        if (buscaProduto) {
            
            let indice = this.lista.indexOf(buscaProduto);
            
            this.lista[indice] = novoProduto;
            
            console.log(`\n✔ Produto com ID ${novoProduto.getId()} atualizado com sucesso!`);
        } else {
            console.log("\nProduto não encontrado. Atualização não realizada!");
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.procurarProdutoPorId(id);

        if (buscaProduto) {
            this.lista = this.lista.filter(p => p.getId() !== id);
            
            console.log(`\n✔ Produto com ID ${id} excluído com sucesso!`);
        } else {
            console.log("\nProduto não encontrado. Exclusão não realizada!");
        }
    }
}