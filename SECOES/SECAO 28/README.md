# Curso de Node.js do Zero à Maestria

## Seção 28: Apêndice L - Exclusão de Dados com MongoDB

Bem-vindo à Seção 28 do "Curso de Node.js do Zero à Maestria com Diversos Projetos". Nesta seção, vamos explorar como deletar dados no MongoDB, abordando tanto a exclusão de documentos individuais quanto a de múltiplos documentos. Também discutiremos boas práticas para garantir a integridade dos dados e evitar perdas acidentais.

### Estrutura do Repositório

- **Resumo da Seção:**

  - Encontre um resumo detalhado dos tópicos abordados nesta seção na pasta [Resumo](./RESUMO/).

### Conteúdo da Seção

Nesta seção, focamos nos diferentes métodos de exclusão de dados de um banco de dados MongoDB. Os principais tópicos abordados foram:

1. **Excluindo um Documento:**

   - O método `deleteOne` é utilizado para excluir um único documento de uma coleção com base em um filtro especificado.
   - Exemplo:
     - `db.<nomeCollection>.deleteOne({campo: filtro})`

2. **Excluindo Múltiplos Documentos:**

   - O método `deleteMany` é utilizado para excluir múltiplos documentos que correspondem a um filtro especificado.
   - Exemplo:
     - `db.<nomeCollection>.deleteMany({campo: filtro})`

3. **Excluindo Todos os Documentos:**
   - Para excluir todos os documentos de uma coleção, usamos o método `deleteMany` sem especificar um filtro.
   - Exemplo:
     - `db.<nomeCollection>.deleteMany({})`

### Notas Importantes

- **Operações de Exclusão São Perigosas:**
  - Excluir dados é uma ação irreversível, por isso é essencial realizar consultas previamente para verificar os dados que serão excluídos.
  - Muitas vezes, ao invés de excluir permanentemente os dados, é uma boa prática adicionar um campo (por exemplo, `isActive: false`) para marcar os registros como inativos, facilitando a "exclusão suave" (soft delete) sem remover os dados do banco de dados.

### Conclusão

No MongoDB, a exclusão de dados pode ser realizada de forma eficiente utilizando os métodos `deleteOne` e `deleteMany`. No entanto, é importante ter cautela, pois essas operações removem dados permanentemente. Nesta seção, exploramos as diferentes formas de excluir dados e discutimos boas práticas para o gerenciamento seguro dos dados, incluindo o uso de "exclusões suaves" para evitar perdas acidentais de dados.

---

# Node.js Course from Zero to Mastery

## Section 27: Appendix K - Updating Data with MongoDB

Welcome to Section 27 of the "Node.js Course from Zero to Mastery with Various Projects". In this section, we explore the fundamental concepts for performing data updates in MongoDB databases, covering everything from basic operations to more advanced techniques. These topics are essential for anyone looking to efficiently manage data in NoSQL databases.

### Repository Structure

- **Section Summary:**

  - Find a detailed summary of the topics covered in this section in the [Summary](./RESUMO/) folder.

### Section Content

In this section, we focused on various techniques and best practices for updating data in MongoDB. The main topics covered were:

1. **Updating Specific Documents:**

   - Methods to update a single document based on defined criteria.
   - Usage of operators like `$set` to modify specific values.

2. **Updating Multiple Documents:**

   - Applying search criteria to update multiple documents simultaneously.
   - Differences between `updateOne` and `updateMany`.

3. **Adding Fields During Update:**

   - How to add new fields to existing documents during the update process.

4. **Complete Document Replacement:**

   - Using the `replaceOne` method to completely replace a document's content, understanding its impacts and limitations.

5. **Array Manipulation:**

   - Inserting new items into arrays using the `$push` operator.

6. **Global Update:**

   - Techniques for applying changes to all documents in a collection.
   - Caution when using updates without specific filters.

7. **Best Practices:**
   - The importance of performing a preliminary query to check the data that will be updated or deleted, ensuring greater security in operations.

### Conclusion

Updating data in MongoDB is an essential skill for effectively managing NoSQL databases. In this section, we explored methods, operators, and best practices to ensure accurate and secure updates, laying the groundwork for more complex projects.
