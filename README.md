
<h1 align="center">
  Covid19 Agendamentos Backend
</h1>

<p align="center">
  <a href="#memo-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#scroll-scripts-disponíveis">Scripts disponíveis</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#earth_americas-rotas-da-api">Rotas da API</a>
</p>


## :memo: Requisitos

| Ferramenta| Versão  | Descrição                                    |
|-----------|---------|----------------------------------------------|
| [NodeJS](https://nodejs.org/en/)              | 16.14.0 | Ambiente de execução Javascript server-side  |
| [NPM](https://www.npmjs.com/)                 | 1.22.17 | Gerenciador de pacotes                   |
| [Git](https://git-scm.com/)           | | |


## :rocket: Tecnologias

Este projeto está sendo desenvolvido com as seguintes tecnologias:

-  Linguagem: [Typescript](https://www.typescriptlang.org/);
-  Framework: [Express](https://expressjs.com/);
-  ORM: [Prisma](https://www.prisma.io/);
-  Padronização: [Prettier](https://prettier.io/);

## :information_source: Como usar

É necessário criar o ```.env``` seguindo o padrão das variáveis de ambiente do ```.env.example```

```bash
# Clonar este repositório
$ git clone https://github.com/arthurbfonseca27/covid19-appointments-backend.git
# Ir para o repositório
$ cd covid19-appointments-backend
# Rodar as migrações
$ npm prisma migrate dev
# Instalar as dependências
$ npm install
# Rodar a aplicação em ambiente de desenvolvimento
$ npm run dev
```
## :scroll: Scripts disponíveis

- `dev`: Inicia a aplicação em ambiente de desenvolvimento;

## :earth_americas: Rotas da API
- GET `/agendamentos`: API para listar agendamentos;
- POST `/agendamentos`: API para criar um agendamento;
- PUT `/agendamentos/:id`: API para atualizar um agendamento;
- DELETE `/agendamentos/:id`: API para deletar um agendamento;
