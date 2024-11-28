# Curso de Node.js do Zero à Maestria

## Seção 24: Apêndice H - Gerenciamento de Bancos com MongoDB

Bem-vindo à Seção 24 do "Curso de Node.js do Zero à Maestria com Diversos Projetos". Nesta seção, exploramos os conceitos essenciais do gerenciamento de bancos de dados MongoDB, aprendendo a criar, listar, excluir, importar e exportar bancos de dados e coleções. Esses conceitos são fundamentais para trabalhar com o MongoDB, que é um banco de dados NoSQL amplamente utilizado em projetos modernos.

### Estrutura do Repositório

- **Resumo da Seção:**
  - Encontre um resumo detalhado dos tópicos explorados nesta seção na pasta [Resumo](./RESUMO/).

### Conteúdo da Seção

Na Seção 24, nos concentramos no gerenciamento de bancos de dados no MongoDB. Os principais tópicos abordados foram:

1. **Criando um Banco de Dados:**
   - Aprendemos como criar um banco de dados no MongoDB. Para criar um banco de dados, basta selecionar um nome de banco e inserir dados em uma coleção. O MongoDB cria o banco automaticamente quando os dados são inseridos.

2. **Listando Bancos de Dados:**
   - Aprendemos como visualizar todos os bancos de dados existentes no MongoDB. O comando `show dbs` permite listar todos os bancos disponíveis.

3. **Criando Coleções:**
   - No MongoDB, as coleções são criadas automaticamente quando inserimos dados. No entanto, também é possível criar uma coleção manualmente, definindo opções como o número máximo de registros ou o tamanho máximo da coleção.

4. **Consultando Dados:**
   - Aprendemos como realizar consultas para encontrar dados em uma coleção. Usamos o comando `find()` para buscar informações, e o método `pretty()` foi mostrado para melhorar a formatação da saída, tornando-a mais legível.

5. **Excluindo Coleções e Bancos de Dados:**
   - O processo de remoção de coleções e bancos de dados foi abordado, mostrando como excluir uma coleção inteira usando o comando `drop()` e como remover um banco de dados com o comando `dropDatabase()`. Foi ressaltada a importância de ter cuidado ao usar essas funções, pois a remoção é irreversível.

6. **Importação e Exportação de Dados:**
   - Aprendemos como importar dados de arquivos JSON para o MongoDB, utilizando o comando `mongoimport`, e como exportar dados para arquivos JSON com o comando `mongoexport`. Além disso, foi explorado o processo de exportação de bancos de dados maiores usando o `mongodump` e a restauração de dados com o `mongorestore`.

7. **Verificando o Status do MongoDB:**
   - A seção também abordou como verificar o status do MongoDB, utilizando o comando `mongostat`, que exibe informações sobre o desempenho e o consumo de recursos do banco de dados em tempo real.

8. **Removendo Todos os Bancos de Dados:**
   - Por fim, aprendemos como remover todos os bancos de dados, com exceção dos bancos principais do MongoDB (`admin`, `config` e `local`), usando um loop que percorre todos os bancos e os exclui automaticamente.

***

# Node.js Course from Zero to Mastery

## Section 24: Appendix H - Database Management with MongoDB

Welcome to Section 24 of the "Node.js Course from Zero to Mastery with Various Projects." In this section, we explore the essential concepts of MongoDB database management, learning how to create, list, delete, import, and export databases and collections. These concepts are crucial for working with MongoDB, a popular NoSQL database used in modern projects.

### Repository Structure

- **Section Summary:**
  - Find a detailed summary of the topics covered in this section in the [Summary](./RESUMO/) folder.

### Section Content

In Section 24, we focused on MongoDB database management. The main topics covered were:

1. **Creating a Database:**
   - How to create a database in MongoDB. The database is created automatically when data is inserted into a collection.

2. **Listing Databases:**
   - How to view all existing databases in MongoDB. The `show dbs` command lists all available databases.

3. **Creating Collections:**
   - Collections in MongoDB are automatically created when data is inserted. However, it is also possible to manually create a collection with specific options, such as defining the maximum number of records or collection size.

4. **Querying Data:**
   - How to query data in MongoDB using the `find()` command, and how to use `pretty()` to format the output in a more readable way.

5. **Deleting Collections and Databases:**
   - How to remove collections and databases using the `drop()` and `dropDatabase()` commands, respectively. The importance of caution when using these functions, as deletions are irreversible, was emphasized.

6. **Importing and Exporting Data:**
   - How to import data from JSON files into MongoDB using the `mongoimport` command, and how to export data to JSON files with the `mongoexport` command. We also covered how to export larger databases using `mongodump` and restore data with `mongorestore`.

7. **Checking MongoDB Status:**
   - How to monitor MongoDB performance and resource usage in real-time using the `mongostat` command.

8. **Removing All Databases:**
   - How to remove all databases except the default MongoDB ones (`admin`, `config`, `local`) using a loop that automatically drops the databases.

***
