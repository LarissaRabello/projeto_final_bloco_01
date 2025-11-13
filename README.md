# 🧛‍♀️ Projeto Stranger Things — CRUD com TypeScript

Este projeto foi desenvolvido como parte de um desafio prático para aplicar conceitos de **Programação Orientada a Objetos (POO)**, **Collections** e **CRUD (Create, Read, Update, Delete)** em **TypeScript**.  
O tema escolhido foi **"Stranger Things"**, onde gerenciamos uma lista de produtos da série através de um menu interativo no terminal.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [readline-sync](https://www.npmjs.com/package/readline-sync) — para interação com o usuário
- [ts-node](https://www.npmjs.com/package/ts-node) — para executar o código TypeScript diretamente no terminal

---

## 🧩 Estrutura do Projeto

```bash
📂 src
 ┣ 📂 controller
 ┃ ┗ 📜 Controller.ts
 ┣ 📂 model
 ┃ ┣ 📜 Produto.ts
 ┃ ┗ 📜 ProdutoGeek.ts
 ┣ 📂 repository
 ┃ ┣ 📜 ProdutoRepository.ts
 ┣ 📜 main.ts
 ┣ 📜 Menu.ts
 ┗ 📜 tsconfig.json
```

- **model/** → Contém a classe `Produto`, com atributos e métodos do modelo.  
- **repository/** → Define a interface `ProdutoRepository` com as operações do CRUD.  
- **controller/** → Implementa a lógica do CRUD em `ProdutoController.ts`.  
- **Main.ts** → Ponto de entrada do programa (inicializa o menu interativo).  
- **Menu.ts** → Apresenta as opções para o usuário (1 - Listar, 2 - Cadastrar, etc).

---

## ⚙️ Funcionalidades (CRUD)

| Função | Descrição |
|--------|------------|
| 🆕 **Cadastrar** | Adiciona um novo produto da série |
| 📋 **Listar** | Mostra todos os produtos cadastrados |
| 🔍 **Buscar por ID** | Retorna um item específico |
| ✏️ **Atualizar** | Edita os dados de um item existente |
| 🗑️ **Deletar** | Remove um item da coleção |

---

## 💻 Como Executar o Projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/LarissaRabello/projeto_final_bloco01.git
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Execute o projeto
```bash
ts-node Menu.ts
```

💡 O menu será exibido no terminal e você poderá interagir digitando as opções numéricas.

---
## 🧠 Conceitos Aplicados
* Programação Orientada a Objetos (Classes, Herança, Encapsulamento)
* Interface e Implementação de Repositório
* Manipulação de Arrays e Collections em TypeScript
* Controle de Fluxo com menu interativo
* Boas práticas de modularização e versionamento (Git e GitHub)
---

## 🧾 Licença
```bash
The MIT License (MIT)

© 2025 Larissa Rabello da Silva

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
