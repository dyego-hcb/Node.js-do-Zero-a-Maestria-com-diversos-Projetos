# Curso Node.js do Zero à Maestria

## Seção 10: Arquitetura MVC com Node.js

Bem-vindo à Seção 10 do curso "Node.js do Zero à Maestria com Diversos Projetos". Nesta seção, exploraremos o padrão de arquitetura MVC (Model-View-Controller) aplicado ao desenvolvimento Node.js. O MVC é um padrão que organiza a aplicação em camadas distintas, facilitando a manutenção e evolução do projeto.

## Estrutura do Repositório

- **Resumo da Seção:**
  - Consulte a pasta [Resumo](./RESUMO/) para um resumo detalhado dos tópicos abordados nesta seção.

- **Exemplos Práticos:**
  - Encontre exemplos práticos na pasta [Exercício em Vídeo](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/).

## Visão Geral

Nesta seção, estudaremos a aplicação do padrão MVC no desenvolvimento Node.js. Os principais tópicos incluem:

1. **O que é MVC:**
   - Acrônimo de Model (Modelo de negócio do sistema, bd), View (Telas do Sistema) e Controller (Funcionalidades do Sistema).
   - Padrão de arquitetura de software que organiza a aplicação em camadas distintas.

2. **Camada do Modelo (Model):**
   - Interage com o banco de dados.
   - Responsável por resgatar, atualizar, remover e criar dados.

3. **Camada de Visualização (View):**
   - Apresenta os dados que estão no banco.
   - Interage com o Controller e exibe informações ao usuário.

4. **Camada de Controle (Controller):**
   - Intermediário entre Model e View.
   - Define qual view será impressa e processa dados entre Model e View.

5. **Estrutura com MVC:**
   - Organização do projeto em pastas como controllers, models, views e routes.
   - `index.js` para inicializar a aplicação.

## Passos para Implementação:

1. **Criando o Model:**
   - Crie o Model na pasta `models`.
   - Sincronize para criar a tabela no arquivo `index.js`.

2. **Criando o Controller:**
   - Crie o Controller na pasta `controllers`.
   - Use classes com métodos estáticos para lógica das rotas.
   - Importe o Model que o Controller utiliza.

3. **Criando a View:**
   - Crie as Views na pasta `views`.
   - Adicione funções no Controller que retornem as Views.
   - Link as funções às rotas em `routes`.

4. **Criando as Rotas:**
   - Crie as rotas utilizando o router.
   - Cada arquivo é responsável por um Controller.
   - Importe o controller no `index.js`.

5. **Dando uma cara ao projeto:**
   - Adicione estilos iniciais para melhor apresentação.
   - Avance nas outras partes do projeto.

6. **Salvando, Resgatando, Removendo e Editando Dados:**
   - Implemente funções nos Controllers para interagir com o banco.
   - Utilize o Sequelize para simplificar as operações.

7. **Completando Tarefas:**
   - Adicione ação para completar ou descompletar tarefas.
   - Crie uma rota de update para modificar o atributo 'done' de uma Task.

***

# Node.js Course from Zero to Mastery

## Section 10: MVC Architecture with Node.js

Welcome to Section 10 of the "Node.js Course from Zero to Mastery with Various Projects." In this section, we will explore the Model-View-Controller (MVC) architecture pattern applied to Node.js development. MVC is a pattern that organizes the application into distinct layers, making project maintenance and evolution easier.

## Repository Structure

- **Section Summary:**
  - Refer to the [Summary](./RESUMO/) folder for a detailed overview of the topics covered in this section.

- **Practical Examples:**
  - Find practical examples in the [Video Exercise](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/) folder.

## Overview

In this section, we will study the application of the MVC pattern in Node.js development. The main topics include:

1. **What is MVC:**
   - An acronym for Model (business logic of the system, database), View (System Screens), and Controller (System Features).
   - A software architecture pattern that organizes the application into distinct layers.

2. **Model Layer (Model):**
   - Interacts with the database.
   - Responsible for retrieving, updating, removing, and creating data.

3. **View Layer (View):**
   - Presents the data stored in the database.
   - Interacts with the Controller and displays information to the user.

4. **Controller Layer (Controller):**
   - Intermediary between Model and View.
   - Defines which view will be printed and processes data between Model and View.

5. **MVC Structure:**
   - Project organization into folders such as controllers, models, views, and routes.
   - `index.js` to initialize the application.

## Implementation Steps:

1. **Creating the Model:**
   - Create the Model in the `models` folder.
   - Synchronize to create the table in the `index.js` file.

2. **Creating the Controller:**
   - Create the Controller in the `controllers` folder.
   - Use classes with static methods for route logic.
   - Import the Model that the Controller uses.

3. **Creating the View:**
   - Create the Views in the `views` folder.
   - Add functions in the Controller that return the Views.
   - Link the functions to the routes in `routes`.

4. **Creating the Routes:**
   - Create routes using the router.
   - Each file is responsible for a Controller.
   - Import the controller in `index.js`.

5. **Giving a Face to the Project:**
   - Add initial styles for better presentation.
   - Progress in other parts of the project.

6. **Saving, Retrieving, Removing, and Editing Data:**
   - Implement functions in the Controllers to interact with the database.
   - Use Sequelize to simplify operations.

7. **Completing Tasks:**
   - Add an action to complete or uncomplete tasks.
   - Create an update route to modify the 'done' attribute of a Task.
