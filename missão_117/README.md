# Mundo Disney — Integração com API

## Autor

* **Nome:** Richardy Oliveira
* **Ano:** 2026

## 1. Identificação do projeto

* **Nome do projeto:** Mundo Disney
* **Instituição de ensino:** Senac Vila Velha
* **Unidade curricular:** UC8 - Desenvolver Aplicações Mobile
* **Professor(a):** Rafaela Pessin

---

## 2. Sobre o projeto

O **Mundo Disney** é uma aplicação que utiliza uma API para buscar informações sobre personagens da Disney. O objetivo do projeto foi aprender como fazer uma requisição para uma API, receber os dados em formato JSON e mostrar essas informações na página de forma dinâmica.

A aplicação apresenta os personagens em cards com suas imagens e nomes. Também possui um botão para carregar mais personagens.

---

## 3. Estrutura do projeto

A organização dos arquivos e pastas do projeto é:

text
mundo-disney/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md

### Descrição dos arquivos

| Arquivo         | Descrição                                                |
| --------------- | -------------------------------------------------------- |
| `index.html`    | Contém a estrutura principal da página.                  |
| `css/style.css` | Contém os estilos e a responsividade da aplicação.       |
| `js/script.js`  | Faz a conexão com a API e cria os cards dos personagens. |
| `README.md`     | Contém as informações e explicações sobre o projeto.     |

---

## 💻 4. Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* JSON
* API REST

---

## 5. API utilizada

### Nome da API

**Disney API**

### Endpoint utilizado


https://api.disneyapi.dev/character


### Para que a API foi utilizada?

> A API foi utilizada para buscar informações dos personagens da Disney e mostrar esses dados na aplicação sem precisar cadastrar cada personagem manualmente.

### Quais informações foram consumidas?

Foram utilizadas informações dos personagens recebidas pela API.

**Dados utilizados no projeto:**

* Nome do personagem
* Imagem do personagem
* Dados de paginação

---

## 6. Como executar o projeto

### Pré-requisitos

Para executar o projeto é necessário ter um navegador, como Google Chrome, Microsoft Edge ou outro navegador atualizado.

Também é recomendado utilizar o Visual Studio Code para abrir e editar os arquivos.

### Passo a passo

* Passo 1: Baixar ou copiar a pasta do projeto.
* Passo 2: Abrir a pasta `mundo-disney` no Visual Studio Code.
* Passo 3: Abrir o arquivo `index.html` no navegador.
* Passo 4: A aplicação fará a requisição para a API e mostrará os personagens.
* Passo 5: Clicar em **CARREGAR MAIS** para buscar novos personagens.

---

## 7. Como funciona a integração

1. O site faz uma requisição para a API da Disney.
2. A API recebe a solicitação.
3. A API busca os dados dos personagens.
4. Os dados são enviados em formato JSON.
5. O JavaScript recebe os dados usando `fetch()`.
6. O código acessa a lista de personagens.
7. Um loop percorre os personagens recebidos.
8. Para cada personagem é criado um card com nome e imagem.
9. Os cards são adicionados na página.
10. Ao clicar em **CARREGAR MAIS**, uma nova página de personagens é solicitada.

---

## 8. Desafios encontrados

### Desafio encontrado

**Problema:**

> Um dos problemas encontrados foi fazer os personagens aparecerem corretamente na página depois da requisição da API.

**Como identifiquei o problema:**

> Utilizei o `console.log()` para verificar os dados que estavam sendo recebidos pela API e também verifiquei o código JavaScript.

**Como resolvi:**

> Revisei a requisição, a forma de acessar os dados do JSON e o código responsável por criar os cards. Depois fiz novos testes para verificar se os personagens estavam sendo adicionados corretamente.

---

## 9. Aprendizados

### Minha resposta

> Com o desenvolvimento deste projeto, aprendi como uma aplicação pode se comunicar com uma API. Também aprendi a fazer requisições usando `fetch()`, receber dados em JSON, utilizar loops para percorrer os personagens e criar elementos na página usando JavaScript. Além disso, aprendi um pouco mais sobre paginação e responsividade com CSS.
