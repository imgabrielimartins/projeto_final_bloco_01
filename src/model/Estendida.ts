import { Principal } from "./Principal";

export class Estendida extends Principal{

    private _codigoProduto: number;

    constructor(nome: string, preco: number, tipo: number, codigoProduto: number) {
        super(nome, preco, tipo);
        this._codigoProduto = codigoProduto;
    }

    public get codigoProduto(){
        return this._codigoProduto;
    }

    public set codigoProduto(codigoProduto: number){
        this._codigoProduto = codigoProduto;
    }

   public override visualizarProdutos(): void {
        super.visualizarProdutos();
        console.log(`\n         --- Detalhes da Joia ---          `);
        console.log(`  Código do Produto: ${this._codigoProduto}`  );
        console.log(`  Nome do Produto: ${this.nome}`              );
        console.log(`  Preço do Produto: ${this.preco}`            );
        console.log(`---------------------------------------------`);
    }
}