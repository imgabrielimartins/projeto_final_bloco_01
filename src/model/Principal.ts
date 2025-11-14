export class Principal {
    
    private id: number;
    private nome: string;
    private preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id; 
        this.nome = nome;
        this.preco = preco;
    }

    public getId(): number {
        return this.id;
    }
    
    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public visualizarProdutos(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}