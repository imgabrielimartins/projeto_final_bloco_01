import { Principal } from "./Principal";

export class Estendida extends Principal {

    private codigo: number;

    constructor(id: number, nome: string, preco: number, codigo: number) {
        super(id, nome, preco); 
        this.codigo = codigo;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public override visualizarProdutos(): void {
        super.visualizarProdutos();
        console.log(`Código: ${this.codigo}`);
    }

    public comprar(valorPago: number, cupom?: string): void {

        let precoFinal = this.getPreco();

        if (cupom?.toUpperCase() === "CupomDesconto") {
            precoFinal = precoFinal * 0.9;
            console.log("\nCupom aplicado! 10% OFF");
        }

        console.log(`\nValor do produto: R$ ${precoFinal.toFixed(2)}`);
        console.log(`Valor pago: R$ ${valorPago.toFixed(2)}`);

        if (valorPago < precoFinal) {
            console.log("\nValor insuficiente!");
            return;
        }

        const troco = valorPago - precoFinal;
        console.log(`Troco: R$ ${troco.toFixed(2)}`);
        console.log("\n✔ Compra realizada com sucesso!");
    }
}