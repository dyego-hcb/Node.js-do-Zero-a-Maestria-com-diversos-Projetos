# Seção 15: Projeto 3: Get A Pet (API, RESTful, Express, MVC, MongoDB com Mongoose, React)

Bem-vindo à Seção 15 do "Curso de Node.js do Zero à Maestria com Vários Projetos". Nesta seção, exploramos o fascinante mundo das APIs, cobrindo conceitos fundamentais e aplicando-os em exercícios práticos. Esta seção concentra-se na construção do projeto "Get A Pet", que incorpora o desenvolvimento de API, princípios RESTful, Express, arquitetura MVC, MongoDB com Mongoose e React para o frontend.

### Estrutura do Repositório

- **Resumo da Seção:**
  - Encontre um resumo detalhado dos tópicos explorados nesta seção na pasta [Resumo](./RESUMO/).

- **Exemplos Práticos:**
  - Explore exemplos práticos na pasta [Exercício em Vídeo](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/).

## Resumo da Seção

Na Seção 15, concentramo-nos no desenvolvimento do projeto "Get A Pet", abordando os seguintes tópicos:

O codigo fonte do projeto está disponivel no seguinte repositorio: https://github.com/dyego-hcb/projeto_get_a_pet 

- Inicialização do Projeto Backend.
- Criação de Modelos.
- Criação de Rotas e Controladores de Usuário.
- Lógica de Validação de Usuário.
- Registro de Usuário.
- Geração de Tokens JWT.
- Funcionalidade de Login do Usuário.
- Middleware de Verificação de Token.
- Extração de Token dos Cabeçalhos.
- Busca de Usuário por ID.
- Verificação de Token do Usuário.
- Validação de Dados do Usuário.
- Atualização de Dados do Usuário.
- Upload de Imagem do Usuário.
- Início das Rotas de Pet.
- Salvando Pets no Sistema.
- Upload de Múltiplas Imagens.
- Recuperação de Todos os Pets.
- Recuperação de Pets do Usuário.
- Recuperação de Todas as Adoções.
- Recuperação de Pet por ID.
- Remoção de Pet do Sistema.
- Atualização de Dados do Pet.
- Agendamento de Visitas de Adoção.
- Conclusão da Adoção de Pet.
- Inicialização do Projeto Frontend.
- Estruturação do Projeto Frontend.
- Integração do React Router.
- Estruturação de Navbar e Footer.
- Estilização de Navbar e Footer.
- Criação de Componente Container.
- Criação de Página e Formulário de Registro de Usuário.
- Estilização Geral do Formulário.
- Criação de Objeto de Usuário.
- Criação de Hook de Autenticação.
- Criação de Contexto de Usuário.
- Execução de Rota de API no Formulário de Registro.
- Criação de Hook de Mensagem Flash.
- Criação de Componente de Mensagem.
- Autenticação de Usuário Registrado.
- Persistência de Autenticação no Frontend.
- Implementação de Funcionalidade de Logout.
- Criação de Página e Formulário de Login.
- Criação de Página de Perfil de Usuário.
- Formulário de Edição de Dados do Usuário.
- Recuperação de Dados do Usuário para Edição.
- Atualização de Dados do Usuário.
- Atualização de Imagem do Usuário.
- Criação de Componente de Imagem.
- Criação de Página de Lista de Pets do Usuário.
- Página de Registro de Pet.
- Criação de Formulário de Pet.
- Finalização do Formulário de Pet.
- Conexão Frontend com Backend para Adicionar Pets.
- Recuperação de Pets Registrados.
- Renderização de Pets no Painel do Usuário.
- Estilização do Painel do Usuário.
- Remoção de Pet do Sistema.
- Criação de Página de Edição de Pet.
- Preenchimento do Formulário de Edição de Pet.
- Atualização de Pets.
- Recuperação de Pets na Página Inicial.
- Renderização de Pets na Página Inicial.
- Estilização da Página Inicial.
- Página de Detalhes do Pet.
- Recuperação de Dados do Pet via API.
- Estruturação da Página de Pet.
- Estilização da Página de Pet.
- Agendamento de Visitas de Adoção.
- Criação de Páginas de Adoção.
- Finalização das Páginas de Adoção.
- Conclusão da Adoção de Pet.

***

# Section 15: Project 3: Get A Pet (API, RESTful, Express, MVC, MongoDB with Mongoose, React)

Welcome to Section 15 of the "Node.js Masterclass from Zero to Mastery with Multiple Projects" course. In this section, we explore the fascinating world of APIs, covering fundamental concepts and applying them in practical exercises. This section focuses on building the "Get A Pet" project, which incorporates API development, RESTful principles, Express, MVC architecture, MongoDB with Mongoose, and React for the frontend.

### Repository Structure

- **Section Summary:**
  - Find a detailed summary of the topics explored in this section in the [Summary](./RESUMO/) folder.

- **Practical Examples:**
  - Explore practical examples in the [Video Exercise](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/) folder.

## Section Summary

In Section 15, we focus on the development of the "Get A Pet" project, covering the following topics:

The source code of the project is available at the following repository: https://github.com/dyego-hcb/projeto_get_a_pet

- Backend Project Initialization.
- Model Creation.
- User Routes and Controllers Creation.
- User Validation Logic.
- User Registration.
- JWT Token Generation.
- User Login Functionality.
- Token Verification Middleware.
- Token Extraction from Headers.
- User ID Retrieval.
- User Token Verification.
- User Data Validation.
- User Data Update.
- User Image Upload.
- Pet Routes Initialization.
- Pets Saving in the System.
- Multiple Images Upload.
- Retrieval of All Pets.
- User Pets Retrieval.
- All Adoptions Retrieval.
- Pet Retrieval by ID.
- Pet Removal from the System.
- Pet Data Update.
- Adoption Visits Scheduling.
- Pet Adoption Completion.
- Frontend Project Initialization.
- Frontend Project Structuring.
- React Router Integration.
- Navbar and Footer Structuring.
- Navbar and Footer Styling.
- Container Component Creation.
- User Registration Page and Form Creation.
- General Form Styling.
- User Object Creation.
- Authentication Hook Creation.
- User Context Creation.
- API Route Execution in Registration Form.
- Flash Message Hook Creation.
- Message Component Creation.
- Registered User Authentication.
- Authentication Persistence on the Frontend.
- Logout Functionality Implementation.
- Login Page and Form Creation.
- User Profile Page Creation.
- User Data Edit Form.
- User Data Retrieval for Editing.
- User Data Update.
- User Image Update.
- Image Component Creation.
- User Pets List Page Creation.
- Pet Registration Page.
- Pet Form Creation.
- Pet Form Finalization.
- Frontend-Backend Connection for Adding Pets.
- Registered Pets Retrieval.
- Pets Rendering in User Dashboard.
- User Dashboard Styling.
- Pet Removal from the System.
- Pet Edit Page Creation.
- Pet Edit Form Filling.
- Pets Update.
- Pets Retrieval on the Homepage.
- Pets Rendering on the Homepage.
- Homepage Styling.
- Pet Details Page.
- Pet Data Retrieval via API.
- Pet Page Structuring.
- Pet Page Styling.
- Adoption Visits Scheduling.
- Adoption Pages Creation.
- Adoption Pages Finalization.
- Pet Adoption Completion.