# Curso Node.js do Zero à Maestria

## Seção 06: Introdução ao Express

Bem-vindo à Seção 06 do curso "Node.js do Zero à Maestria com Diversos Projetos". Nesta seção, exploramos os fundamentos do Express, um framework popular para construir aplicativos back-end em Node.js.

### Estrutura do Repositório

- **Resumo da Seção:**
  - Localizado na pasta [Resumo](./RESUMO/), fornece um resumo detalhado dos tópicos abordados.

- **Exemplos Práticos:**
  - Encontrados na pasta [Exercicio Video Aula](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/).

- **Exercícios Propostos e Soluções:**
  - Disponíveis na pasta [Exercicio Proposto](./EXERCICIOS/EXERCICIO%20PROPOSTO/).

- **Tarefa 02:**
  - Desenvolvimento da Tarefa 03 está na pasta [Tarefa 03](./EXERCICIOS/EXERCICIO%20PROPOSTO/sc06-node-exercicios/tarefa_03/).


### O que é o Express?
- O Express é um framework amplamente utilizado para Node.js, facilitando a criação de aplicativos da web.
- Ele permite a criação de rotas, renderização de HTML, conexão com bancos de dados, autenticação e implementação de padrões arquiteturais.
- Ao contrário de alguns frameworks, como o AdonisJS, o Express oferece mais flexibilidade na seleção de pacotes.

### Compreendendo Rotas
- As rotas são essenciais em aplicativos da web, representando as URLs que os usuários acessam.
- Elas estabelecem a conexão entre as interações do usuário e a lógica da aplicação.

### Primeiros Passos
- A configuração inicial do Express envolve a importação e invocação do framework, a definição de uma porta base e a criação de rotas.
- As solicitações e respostas devem ser tratadas para aplicativos da web.

### Renderização de HTML
- O Express permite o envio de HTML como resposta usando o método `sendFile`, especificando o caminho do arquivo HTML.

### Recarregamento Automático
- Introduzimos o Nodemon para facilitar reinicializações automáticas do servidor em alterações de arquivos.

### Middlewares
- Os middlewares são trechos de código executados entre ações, e o Express utiliza o método `use` para implementá-los.
- Eles recebem três parâmetros: requisição, resposta e próximo.

### Parâmetros de URL
- Podemos extrair parâmetros de URL usando `req.params.<nome>`, úteis para ações como buscar um usuário no banco de dados por ID.

### Envio de Dados via POST
- Para enviar dados via POST, precisamos configurar middlewares como `express.json` e `express.urlencoded`.

### Módulo de Rotas
- O Express permite a organização de rotas em um módulo usando o objeto `Router`.

### Incluindo CSS
- CSS e arquivos estáticos podem ser incluídos usando o middleware `express.static`.

### Criando uma Página 404
- Implementamos um middleware para lidar com páginas não encontradas (404).

### Tarefa 03
1. Crie um novo projeto com Express.
2. Adicione o Nodemon e configure um script chamado 'serve' para executar o projeto na porta 5000.
3. Crie duas páginas de sua escolha.
4. Adicione CSS às páginas, alterando pelo menos o fundo e a cor da fonte.
5. Organize as rotas usando o recurso de Router do Express.

***

# Node.js Course from Zero to Mastery

## Section 06: Introduction to Express

Welcome to Section 06 of the "Node.js Course from Zero to Mastery with Various Projects." In this section, we delve into the fundamentals of Express, a popular framework for building back-end applications in Node.js.

### Repository Structure

- **Section Summary:**
  - Located in the [Summary](./RESUMO/) folder, providing a detailed overview of the topics covered.

- **Practical Examples:**
  - Found in the [Exercise Video](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/) folder.

- **Proposed Exercises and Solutions:**
  - Available in the [Proposed Exercise](./EXERCICIOS/EXERCICIO%20PROPOSTO/) folder.

- **Task 02:**
  - Development of Task 03 is in the [Task 03](./EXERCICIOS/EXERCICIO%20PROPOSTO/sc06-node-exercises/tarefa_03/) folder.

### What is Express?
- Express is a widely used framework for Node.js, making it easy to create web applications.
- It enables the creation of routes, HTML rendering, database connection, authentication, and the implementation of architectural patterns.
- Unlike some frameworks like AdonisJS, Express offers more flexibility in package selection.

### Understanding Routes
- Routes are essential in web applications, representing the URLs that users access.
- They establish the connection between user interactions and application logic.

### Getting Started
- The initial setup of Express involves importing and invoking the framework, defining a base port, and creating routes.
- Requests and responses must be handled for web applications.

### HTML Rendering
- Express allows sending HTML as a response using the `sendFile` method, specifying the path to the HTML file.

### Automatic Reloading
- We introduced Nodemon to facilitate automatic server restarts on file changes.

### Middlewares
- Middlewares are code snippets executed between actions, and Express uses the `use` method to implement them.
- They receive three parameters: request, response, and next.

### URL Parameters
- We can extract URL parameters using `req.params.<name>`, useful for actions such as fetching a user from the database by ID.

### Sending Data via POST
- To send data via POST, we need to configure middlewares like `express.json` and `express.urlencoded`.

### Routes Module
- Express allows the organization of routes into a module using the `Router` object.

### Including CSS
- CSS and static files can be included using the `express.static` middleware.

### Creating a 404 Page
- We implemented middleware to handle pages not found (404).

### Task 03
1. Create a new project with Express.
2. Add Nodemon and configure a script named 'serve' to run the project on port 5000.
3. Create two pages of your choice.
4. Add CSS to the pages, changing at least the background and font color.
5. Organize routes using the Express Router feature.

***