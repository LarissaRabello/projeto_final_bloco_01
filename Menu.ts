import readlinesync = require("readline-sync");

export function main() {

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

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nEncerrando a conexão com o Mundo Invertido...");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
        console.log("\n\n🧪 Cadastrar novo produto sobrenatural...\n\n");
        break;
            case 2:
        console.log("\n\n📜 Listando todos os itens de Hawkins...\n\n");
        break;
            case 3:
        console.log("\n\n🔍 Buscando produto misterioso por ID...\n\n");
        break;
            case 4:
        console.log("\n\n⚙️ Atualizando produto do laboratório...\n\n");
        break;
            case 5:
        console.log("\n\n🔥 Removendo produto do catálogo...\n\n");
        break;
            case 6:
        console.log("\nEncerrando a conexão com o Mundo Invertido...");
        sobre();
        process.exit(0);
    default:
        console.log("\n⚠️ Opção inválida! O Demogorgon bagunçou o sistema!\n");
        break;
        }
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