import React from "react";
import AddBookForm from "../components/AddBookForm";

const AddBook: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Adicionar Novo Livro</h1>
      <AddBookForm />
    </div>
  );
};

export default AddBook;
