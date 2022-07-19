# TakeBlip🗨️ - Desafio Técnico - Desenvolvedor Chatbot
### ✍️ Autor: __Maurício Leite__


O desafio consiste na criação de um Contato Inteligente (Bot) na plataforma da [TakeBlip](https://www.takenet.com) e a criação de API intermediária<br>Seguindo os materiais de apoio fornecidos, o Chatbot deve construído na plataforma Blip, com o auxílio da ferramenta Builder
<br>

## 🚀 Objetivo

O Chatbot deve ter o fluxo conversacional fornecido pela [TakeBlip](https://www.takenet.com) como mandatório, e deve ser baseado em modelo Figma fornecido,<br>
Com o propósito de cumprir os requisitos do processo seletivo para vaga __Desenvolvedor Chatbot__,<br> na etapa do desafio, deve retornar os 5 primeiros repositórios
da [TakeBlip](https://www.takenet.com), os quais possuem a linguagem [C#](https://docs.microsoft.com/pt-br/dotnet/csharp/), em ordem ascendente e por data de criação.
<br><br>Em resumo o desafio é composto pelas seguintes etapas:<br>
- Criação de Chatbot
- Criação de API Intermediária
- Resgatar dados da API e utilizar no Chatbot

## Passos para execução

Primeiramente, foi adotada a construção do Chatbot, onde as conversas do fluxo foram implementadas <br>
Logo após, a criação de uma API mediadora, a qual busca dados na API do Github, pela organização TakeBlip (takenet) e retorna os dados dos repositórios para a API intermediária
<br>

## Ferramentas
Para dar a vida aos itens solicitados, foram utilizadas as seguintes ferramentas:

- [Node.js](https://nodejs.dev)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org)
- [Axios](https://axios-http.com/ptbr)
- [Yarn](https://yarnpkg.com)
- [Vercel](https://vercel.com)

<br>

## Como conseguir os dados da API intermediária
A API pode ser acessada por meio da url:<br>
https://takeblip-api-teste.vercel.app/api/challenge
<br><br>
ou
<br><br>
Baixe a aplicação para sua máquina, fazendo clone do repositório
```bash
git clone git@github.com:mauricioleite1/takeblip-api-teste.git
```

Após isso, instale as dependências da aplicação com o comando abaixo: (se certifique de entrar na pasta correta),
```bash
yarn
```

Então para iniciar a aplicação,
deve-se utilizar o comando:
```bash
yarn start
```

Abra [http://localhost:3000/api/challenge](http://localhost:3000/api/challenge) em seu browser, ou software de requisições, para visualizar os dados da API.

<br> 

## 🗨️ Feedback
Este projeto foi feito como forma de avaliação, se você se interessou e deseja contribuir com seu feedback, fique à vontade para entrar em contato.

Todas as formas de feedback são bem-vindas, sejam para

💛 Me influenciar e ensinar com novas técnicas e metodologias<br>
🐛 Informar algum problema que tenha encontrado<br>
⭐ Dar uma estrela no meu projeto 🤷‍♂️


Obrigado a TakeBlip pela oportunidade de participar do desafio<br>Obrigado a você que chegou até aqui! 🥳

