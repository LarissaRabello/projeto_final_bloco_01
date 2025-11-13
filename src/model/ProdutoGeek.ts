import { Produto } from "./Produto";

export class ProdutoGeek extends Produto {

    private _categoria: string;

    constructor(id: number, nome: string, preco: number, categoria: string) {
        super(id, nome, preco);
        this._categoria = categoria;
    }

    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }

    public visualizar(): void {
        console.log("\n🧢 PRODUTO GEEK");
        console.log("-----------------------------------------------------");
        console.log(`🆔 ID: ${this.id}`);
        console.log(`📦 Nome: ${this.nome}`);
        console.log(`💰 Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`🎮 Categoria: ${this.categoria}`);
        console.log("-----------------------------------------------------");
    }
}