import { ProdutoController } from "./controller/Controller";
import { ProdutoGeek } from "./model/ProdutoGeek";

function main() {
    const controller = new ProdutoController();


    const produto1 = new ProdutoGeek(0, "Camiseta Hellfire Club", 79.90, "Roupas");
    const produto2 = new ProdutoGeek(0, "Caneca Vecna", 59.90, "Acessórios");
    const produto3 = new ProdutoGeek(0, "Poster Hawkins", 39.90, "Decoração");
    const produto4 = new ProdutoGeek(0, "Moletom Stranger Things", 39.90, "Roupas");


    controller.cadastrar(produto1);
    controller.cadastrar(produto2);
    controller.cadastrar(produto3);
    controller.cadastrar(produto4);

    controller.listarTodos();

    controller.procurarPorId(4);

    const produtoAtualizado = new ProdutoGeek(2, "Caneca do Mundo Invertido", 64.90, "Acessórios");
    controller.atualizar(produtoAtualizado);

    controller.deletar(1);

    controller.listarTodos();
}

main();
