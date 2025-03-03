# CRUD API em Node.js com Express, SQLite e Joi

Este é um projeto de uma API CRUD (Create, Read, Update, Delete) desenvolvido em Node.js, utilizando os frameworks Express para gerenciar as rotas, SQLite como banco de dados e Joi para validação de dados.

## Guia de Uso

- [CRUD API em Node.js com Express, SQLite e Joi](#crud-api-em-nodejs-com-express-sqlite-e-joi)
  - [Guia de Uso](#guia-de-uso)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
  - [Endpoints](#endpoints)
  - [Validações](#validações)
  - [Tecnologias](#tecnologias)

## Pré-requisitos

Para rodar este projeto, você precisará ter:

- [Node.js](https://nodejs.org/) instalado na versão 14 ou superior.
- [NPM](https://www.npmjs.com/) (geralmente incluído com o Node.js).
- [Express.JS](https://expressjs.com/pt-br/) instalado na versão 4.21 ou superior
- [JOI](https://www.npmjs.com/package/joi) pode ser instalado com o npm.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/LandielDurans/Crud-Api-Node-Sqlite.git

2. Navegue até o diretório do projeto
   ```
      cd Crud-Api-Node-Sqlite

4. Instale as dependências
```bash
    npm install
```
## Configuração do Banco de Dados

Este projeto utiliza o SQLite como banco de dados. O banco será gerado automaticamente na primeira execução do projeto, mas você pode criar um arquivo .db manualmente e definir o caminho para ele no código, caso deseje.

** Executando o Projeto:
> Para iniciar o servidor, execute:
 
      npm start

## Endpoints

1. Criar um novo produto

- URL: /products
- Método: POST

Aqui está um exemplo que você pode usar:

```Json
{
  "name": "Nome do produto",
  "price": 100,
  "description": "Descrição do produto",
  "stock": "Estoque do produto"
}
```
2. Listar todos os produtos

- URL: /products
- Método: GET

```Json
{
  "name": "Nome do produto 1",
  "price": 100,
  "description": "Descrição do produto 1",
  "stock": "Estoque do produto 1"
},
{
 "name": "Nome do produto 2",
  "price": 100,
  "description": "Descrição do produto 2",
  "stock": "Estoque do produto 2"
}
```

3. Atualizar um produto

- URL: /products:id
- Método: PUT

```Json
{
  "name": "Nome novo do produto",
  "price": "Novo preço",
  "description": "Nova descrição do produto",
  "stock": "Novo estoque do produto"
}
```

4. Deletar um produto

- URL: /products:id
- Método: DELETE

```Json
{
  "Message": "Produto deletado com sucesso." 
}
```

## Validações

As validações dos dados de entrada são feitas com o pacote Joi. Os dados devem seguir o formato JSON e respeitar os seguintes critérios:

- ```name:``` string obrigatória, entre 3 e 50 caracteres.
- ```price:``` número obrigatório, maior que zero.
- ```description:``` string opcional, máximo de 200 caracteres.
- ```stock:``` string obrigatória, maior que zero.


## Tecnologias

- Node.js - Ambiente de execução para JavaScript.
- Express - Framework web para Node.js.
- SQLite - Banco de dados relacional leve.
- Joi - Biblioteca de validação de dados para JavaScript.
