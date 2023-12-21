# Curso Node.js do Zero à Maestria

## Seção 04: Fundamentos NPM

Bem-vindo à Seção 04 do curso "Node.js do Zero à Maestria com Diversos Projetos". Nesta seção, aprofundaremos nos fundamentos essenciais do NPM (Node Package Manager), explorando diversos aspectos cruciais para otimizar o desenvolvimento em Node.

### Estrutura do Repositório

- **Resumo da Seção:**
  - Encontre um resumo detalhado na pasta [Resumo](./RESUMO/), oferecendo insights sobre os tópicos abordados.

- **Exemplos Práticos:**
  - Examine os exemplos práticos na pasta [Exercicio Video Aula](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/).

### Tópicos Abordados

1. **O que é NPM?**
   - O NPM é o principal gerenciador de pacotes para o Node.js.
   - Significa Node Package Manager, permitindo instalar, atualizar, remover e executar scripts com eficiência.
   - A criação de um projeto gera o arquivo `package.json`, crucial para analisar um código em Node.js.

2. **Criando um Projeto com NPM**
   - Inicie um projeto com `npm init`.
   - Configure opções iniciais, como o nome do projeto.
   - Utilize `npm init -y` para inicialização mais rápida, respondendo automaticamente com "yes".

3. **Instalando um Pacote**
   - Consulte os pacotes no [npm registry](https://www.npmjs.com/).
   - Instale um pacote com `npm install <nome>`.
   - A pasta `node_modules` é criada para armazenar módulos de terceiros.

4. **Instalando um Pacote como Dev**
   - Instale pacotes apenas para desenvolvimento com `--save-dev`.
   - Esses pacotes são listados em `devDependencies` no `package.json`.

5. **Atualização de Pacotes**
   - Atualize pacotes com `npm update`.
   - Atualize um pacote específico com `npm update <nome>`.
   - Verifique atualizações de dependências com `npx npm-check-updates -u`.

6. **Criando Scripts**
   - Crie rotinas com scripts NPM.
   - Execute sequências de comandos com `npm run <script>`.

7. **Instalando um Pacote Global**
   - Pacotes globais não são salvos na pasta `node_modules` do projeto, mas no computador do usuário.
   - Acesse pacotes globalmente usando `-g` em `npm install`.

8. **Executando Scripts com NPX**
   - Alguns pacotes são scripts executáveis, simplificando ações no computador.
   - Execute scripts com `npx`.

9. **Removendo um Pacote com NPM**
   - Remova um pacote com `npm uninstall <nome>`.

## Conclusão da Seção

Com a conclusão desta seção, adquirimos conhecimentos essenciais sobre o NPM, proporcionando uma base sólida para o desenvolvimento eficiente em Node.js.

***

# Node.js Course from Zero to Mastery

## Section 04: NPM Fundamentals

Welcome to Section 04 of the "Node.js Course from Zero to Mastery with Various Projects." In this section, we will delve into the essential fundamentals of NPM (Node Package Manager), exploring various crucial aspects to optimize development in Node.

### Repository Structure

- **Section Summary:**
  - Find a detailed summary in the [Summary](./RESUMO/) folder, providing insights into the covered topics.

- **Practical Examples:**
  - Explore practical examples in the [Video Exercise](./EXERCICIOS/EXERCICIO%20VIDEO%20AULA/) folder.

### Topics Covered

1. **What is NPM?**
   - NPM is the primary package manager for Node.js.
   - It stands for Node Package Manager, allowing efficient installation, updating, removal, and script execution.
   - Project creation generates the `package.json` file, crucial for analyzing Node.js code.

2. **Creating a Project with NPM**
   - Start a project with `npm init`.
   - Configure initial options, such as the project name.
   - Use `npm init -y` for a quicker initialization, automatically answering "yes."

3. **Installing a Package**
   - Check packages on the [npm registry](https://www.npmjs.com/).
   - Install a package with `npm install <name>`.
   - The `node_modules` folder is created to store third-party modules.

4. **Installing a Package as Dev**
   - Install packages only for development with `--save-dev`.
   - These packages are listed in `devDependencies` in `package.json`.

5. **Package Updates**
   - Update packages with `npm update`.
   - Update a specific package with `npm update <name>`.
   - Check for dependency updates with `npx npm-check-updates -u`.

6. **Creating Scripts**
   - Create routines with NPM scripts.
   - Execute command sequences with `npm run <script>`.

7. **Installing a Global Package**
   - Global packages are not saved in the project's `node_modules` folder but on the user's computer.
   - Access global packages using `-g` in `npm install`.

8. **Running Scripts with NPX**
   - Some packages are executable scripts, simplifying actions on the computer.
   - Run scripts with `npx`.

9. **Removing a Package with NPM**
   - Remove a package with `npm uninstall <name>`.

## Section Conclusion

With the conclusion of this section, we have gained essential knowledge about NPM, providing a solid foundation for efficient development in Node.js.
