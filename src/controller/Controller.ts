import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private _listaProdutos: Produto[] = []
    private _id: number = 0;

    // Cadastrar produto
    public cadastrar(produto: Produto): void {
        produto.id = ++this._id;
        this._listaProdutos.push(produto);
        console.log("\n✅ Produto cadastrado com sucesso!\n");
    }

    // Listar todos os produtos
    public listarTodos(){
        if (this._listaProdutos.length === 0) {
            console.log("\n⚠️ Nenhum produto cadastrado.\n");
            return;
        }

        console.log("\n📦 Lista de Produtos:\n");
        for (let produto of this._listaProdutos) {
            produto.visualizar();
        }
    }

    // Procurar produto por ID
    public procurarPorId(id: number){
        const produto = this._listaProdutos.find(p => p.id === id);

        if (produto) {
            produto.visualizar();
        } else {
            console.log("\n❌ Produto não encontrado!\n");
        }
    }

    // Atualizar produto
    public atualizar(produtoAtualizado: Produto): void {
        const indice = this._listaProdutos.findIndex(p => p.id === produtoAtualizado.id);

        if (indice !== -1) {
            this._listaProdutos[indice] = produtoAtualizado;
            console.log("\n✅ Produto atualizado com sucesso!\n");
        } else {
            console.log("\n❌ Produto não encontrado!\n");
        }
    }

    // Deletar produto
    public deletar(id: number): void {
        const indice = this._listaProdutos.findIndex(p => p.id === id);

        if (indice !== -1) {
            this._listaProdutos.splice(indice, 1);
            console.log("\n🗑️ Produto excluído com sucesso!\n");
        } else {
            console.log("\n❌ Produto não encontrado!\n");
        }
    }
}
