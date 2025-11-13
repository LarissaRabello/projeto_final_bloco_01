import { ProdutoGeek } from "./model/ProdutoGeek";

console.log("*****************************************************");
console.log("         🕯️ E-COMMERCE DO MUNDO INVERTIDO 👾        ");
console.log("*****************************************************\n");

const produto1 = new ProdutoGeek(1, "Camiseta Hellfire Club", 99.90, "Camisetas");
const produto2 = new ProdutoGeek(2, "Caneca Mundo Invertido", 59.90, "Colecionáveis");

produto1.visualizar();
produto2.visualizar();
