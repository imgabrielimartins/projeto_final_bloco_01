export abstract class Principal{

    public visualizarProdutos(): void {
        throw new Error("Method not implemented.");
    }

    private _nome: string;
    private _preco: number;
    private _tipo: number;


   constructor(nome: string, preco: number, tipo: number){
    this._nome = nome;
    this._preco = preco;
    this._tipo = tipo
   }

   public get nome(){
    return this._nome;
   }

   public set nome(nome: string){
    this._nome = nome;
   }

   public get preco(){
    return this._preco;
   }

   public set preco(preco: number){
    this._preco = preco;
   }

   public get tipo(){
    return this._tipo;
   }

   public set tipo(tipo: number){
    this._tipo = tipo;
   }

    public visualizarProdutos1(): void {
        console.log("-----------  Produto  -------------");
        console.log(`Nome: ${this._nome}`                );
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
        console.log(`Tipo: ${this._tipo}                `);
    }

   public comprar(valorRecebido: number, cupom?: string): boolean {

    let precoFinal = this._preco

    if (cupom === "CupomDesconto") {
            precoFinal *= 0.90; 
            console.log(`\nCupom 'CupomDesconto' aplicado! Novo preço: R$ ${precoFinal.toFixed(2)}`);
        } else if (cupom)
             console.log("\nCupom inválido. Preço cheio mantido.");

    if(precoFinal > valorRecebido){
        console.log(`\nValor Insuficiente! Faltam R$ ${(precoFinal - valorRecebido).toFixed(2)}`);
        return false;
    }

    let troco = valorRecebido - precoFinal;
    console.log("\nCompra Realizada com sucesso!");
    console.log(`Troco: ${troco.toFixed(2)}`);

    return true;

   }
}