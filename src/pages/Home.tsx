import React from "react";
import BookList from "../components/BookList";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Livros</h1>
      <BookList />
    </div>
  );
};

export default Home;
