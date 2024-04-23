# Projeto teste para processo seletivo da Super Frete

## Descrição

Este projeto foi desenvolvido utilizando Google Firebase Functions para backend, Firebase para hospedagem e banco de dados, e Jest para testes unitários.

[![Firebase](https://img.shields.io/badge/firebase-9C27B0?style=flat&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Jest](https://img.shields.io/badge/jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/eslint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)

## Arquitetura escolhida

A arquitetura escolhida para este projeto segue uma abordagem modular, onde cada funcionalidade principal é encapsulada em módulos separados. Aqui está uma explicação mais detalhada:

1. **functions**: Esta pasta contém o código principal das funções Firebase. Aqui estão as configurações do projeto, incluindo o arquivo `index.js`, que serve como ponto de entrada para as funções.

2. **modules**: Dentro desta pasta, estão os módulos específicos do projeto. No caso, há um módulo chamado `record`, que está relacionado ao gerenciamento de registros.

3. **test**: Aqui estão os testes unitários para o projeto. Os testes estão organizados de acordo com os módulos correspondentes na estrutura principal.

4. **utils**: Esta pasta contém utilitários genéricos que podem ser compartilhados em todo o projeto. O arquivo `index.js` é o principal utilitário deste projeto.

A escolha desta arquitetura traz benefícios significativos:

- **Modularidade**: Cada parte do projeto é encapsulada em módulos separados, facilitando a manutenção e o entendimento do código.

- **Testabilidade**: A estrutura facilita a escrita de testes unitários, pois os testes estão diretamente associados aos módulos correspondentes.

- **Organização**: A estrutura clara e organizada torna mais fácil para os desenvolvedores entenderem e navegarem pelo código.

Essa arquitetura foi escolhida para promover a clareza, a reusabilidade e a facilidade de manutenção do projeto.

## Executando o projeto localmente

Para executar o projeto localmente, siga estes passos:

1. Certifique-se de ter o Node.js (versão 18) e o Firebase CLI instalados em sua máquina.
2. Clone este repositório.
3. Navegue até a pasta `functions`.
4. Instale as dependências do projeto executando `yarn install`.
5. Execute `firebase emulators:start` para iniciar os emuladores do Firebase localmente.
6. Agora, siga as instruções fornecidas no terminal para acessar o projeto localmente.

## Deploy do projeto

Para fazer o deploy do projeto, siga estes passos:

1. Certifique-se de estar autenticado no Firebase CLI, executando `firebase login`.
2. Execute `firebase deploy` na pasta `functions`.
3. O projeto será implantado e estará acessível na URL fornecida pelo Firebase.

## Executando testes unitários

Para executar os testes unitários, siga estes passos:

1. Certifique-se de estar na pasta `functions`.
2. Execute `yarn test` para iniciar a execução dos testes com o Jest.
3. Os resultados dos testes serão exibidos no terminal.