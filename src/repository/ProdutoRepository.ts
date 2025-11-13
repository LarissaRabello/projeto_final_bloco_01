import { Produto } from "../model/Produto";


export interface ProdutoRepository {

    // CRUD dos produtos
    procurarPorId(id: number): Produto | undefined
    listarTodos(): Produto[];
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}
