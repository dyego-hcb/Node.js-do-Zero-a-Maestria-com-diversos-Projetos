# Curso de Node.js do Zero à Maestria

## Seção 25: Apêndice I - Inserção de Dados com MongoDB

Bem-vindo à Seção 25 do "Curso de Node.js do Zero à Maestria com Diversos Projetos". Nesta seção, exploramos os fundamentos da inserção de dados no MongoDB, um dos principais pilares do CRUD. Entender como criar registros no banco de dados é essencial para o desenvolvimento de aplicações modernas.

### Estrutura do Repositório

- **Resumo da Seção:**
  - Encontre um resumo detalhado dos tópicos explorados nesta seção na pasta [Resumo](./RESUMO/).
- **Exercícios:**
  - Os exemplos práticos desenvolvidos durante as videoaulas estão disponíveis na pasta `exercicios/exercicio_video_aula`.
  - Os exercícios propostos como prática adicional podem ser encontrados na pasta `exercicios/exercicio_proposto`.

### Conteúdo da Seção

Nesta seção, nos concentramos no processo de **inserção de dados no MongoDB**, explorando conceitos teóricos e práticos fundamentais para a manipulação de documentos.

1. **Introdução ao CRUD no MongoDB:**
   - **CRUD** é a sigla para:
     - **C**REATE (Criar)
     - **R**EAD (Ler)
     - **U**PDATE (Atualizar)
     - **D**ELETE (Excluir)
   - Essas operações são a base de qualquer sistema de gerenciamento de banco de dados, sejam eles relacionais ou não relacionais.

2. **Inserção de Documentos no MongoDB:**
   - Em MongoDB, tudo é armazenado como documentos no formato JSON.
   - É possível criar registros usando o comando `insertOne` para um único documento e `insertMany` para múltiplos documentos.
   - Exemplo básico:
     - **`insertOne`**: Insere um único registro na coleção especificada.
     - **`insertMany`**: Insere múltiplos registros em formato de array.

3. **Flexibilidade das Collections:**
   - Diferentemente de bancos relacionais, no MongoDB não é necessário que todos os documentos sigam o mesmo esquema de campos.

4. **Especificação de IDs Personalizados:**
   - O MongoDB gera automaticamente um identificador único `_id` para cada documento. 
   - Caso desejado, é possível especificar um valor personalizado para `_id`.

5. **Configurações de Write Concern:**
   - O `writeConcern` permite configurar o nível de garantia na gravação dos dados e o tempo limite (timeout) para operações como `insertMany`.

6. **Dicas de Boas Práticas:**
   - Para comandos complexos, recomenda-se escrevê-los em um editor de texto com suporte a sintaxe (como arquivos `.js`) antes de executá-los no shell.

### Conclusão

A inserção de dados no MongoDB é uma habilidade crucial para desenvolver aplicações escaláveis e eficientes. Compreender e praticar os comandos apresentados nesta seção ajudará a consolidar os conceitos fundamentais de manipulação de documentos neste banco de dados NoSQL.

***

# Node.js Course from Zero to Mastery

## Section 25: Appendix I - Data Insertion with MongoDB

Welcome to Section 25 of the "Node.js Course from Zero to Mastery with Various Projects." In this section, we explore the fundamentals of data insertion in MongoDB, one of the main pillars of CRUD. Understanding how to create database records is essential for developing modern applications.

### Repository Structure

- **Section Summary:**
  - Find a detailed summary of the topics covered in this section in the [Summary](./RESUMO/) folder.
- **Exercises:**
  - Practical examples developed during the video lessons are available in the `exercicios/exercicio_video_aula` folder.
  - Exercises proposed as additional practice can be found in the `exercicios/exercicio_proposto` folder.

### Section Content

In this section, we focus on the process of **data insertion in MongoDB**, exploring fundamental theoretical and practical concepts for document manipulation.

1. **Introduction to CRUD in MongoDB:**
   - **CRUD** stands for:
     - **C**REATE (Create)
     - **R**EAD (Read)
     - **U**PDATE (Update)
     - **D**ELETE (Delete)
   - These operations form the foundation of any database management system, whether relational or non-relational.

2. **Document Insertion in MongoDB:**
   - In MongoDB, everything is stored as documents in JSON format.
   - You can create records using the `insertOne` command for a single document and `insertMany` for multiple documents.
   - Basic example:
     - **`insertOne`**: Inserts a single record into the specified collection.
     - **`insertMany`**: Inserts multiple records as an array.

3. **Collection Flexibility:**
   - Unlike relational databases, MongoDB does not require all documents to follow the same field schema.

4. **Custom ID Specification:**
   - MongoDB automatically generates a unique identifier `_id` for each document.
   - If desired, you can specify a custom value for `_id`.

5. **Write Concern Configurations:**
   - The `writeConcern` allows you to configure the level of guarantee for data writes and the timeout for operations like `insertMany`.

6. **Best Practices Tips:**
   - For complex commands, it is recommended to write them in a text editor with syntax support (such as `.js` files) before executing them in the shell.

### Conclusion

Data insertion in MongoDB is a crucial skill for developing scalable and efficient applications. Understanding and practicing the commands presented in this section will help consolidate fundamental concepts for document manipulation in this NoSQL database.
