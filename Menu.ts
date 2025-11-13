import readlineSync from "readline-sync";
import { ProdutoController } from "./src/controller/Controller";
import { ProdutoGeek } from "./src/model/ProdutoGeek";


export function main() {
    const controller = new ProdutoController();
    let opcao: number;

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            🕯️    MUNDO INVERTIDO  👾               ");
        console.log("              produtos sobrenaturais                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar produto sobrenatural       ");
        console.log("            2 - Listar itens de Hawkins              ");
        console.log("            3 - Buscar produto misterioso            ");
        console.log("            4 - Atualizar produto do laboratório     ");
        console.log("            5 - Remover produto do catálogo          ");
        console.log("            6 - Sair do portal                       ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        opcao = readlineSync.questionInt("Entre com o poder desejado: ");

        switch (opcao) {
            case 1:
                console.log("\n🧪 Cadastrar novo produto sobrenatural...");
                const nome = readlineSync.question("Nome do produto: ");
                const preco = readlineSync.questionFloat("Preço do produto: R$ ");
                const categoria = readlineSync.question("Categoria: ");

                const novoProduto = new ProdutoGeek(0, nome, preco, categoria);
                controller.cadastrar(novoProduto);
                break;

            case 2:
                console.log("\n📜 Listando todos os itens de Hawkins...");
                controller.listarTodos();
                break;

            case 3:
                console.log("\n🔍 Buscar produto misterioso por ID...");
                const idBusca = readlineSync.questionInt("Digite o ID do produto: ");
                controller.procurarPorId(idBusca);
                break;

            case 4:
                console.log("\n⚙️ Atualizar produto do laboratório...");
                const idAtualizar = readlineSync.questionInt("ID do produto a atualizar: ");
                const novoNome = readlineSync.question("Novo nome: ");
                const novoPreco = readlineSync.questionFloat("Novo preço: R$ ");
                const novaCategoria = readlineSync.question("Nova categoria: ");

                const produtoAtualizado = new ProdutoGeek(idAtualizar, novoNome, novoPreco, novaCategoria);
                controller.atualizar(produtoAtualizado);
                break;

            case 5:
                console.log("\n🔥 Remover produto do catálogo...");
                const idRemover = readlineSync.questionInt("Digite o ID do produto para remover: ");
                controller.deletar(idRemover);
                break;

            case 6:
                console.log("\nEncerrando a conexão com o Mundo Invertido...");
                sobre();
                process.exit(0);

            default:
                console.log("\n⚠️ Opção inválida! O Demogorgon bagunçou o sistema!\n");
                break;
        }

        
        readlineSync.question("\nPressione ENTER para voltar ao menu...");
        console.clear();
    }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Larissa Rabello da Silva");
    console.log("github.com/LarissaRabello");
    console.log("*****************************************************");
}

main();
