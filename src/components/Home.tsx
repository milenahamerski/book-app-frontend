// src/components/Home.tsx
import React, { useEffect, useState } from "react";
import { getBooks } from "../services/api";
import BookCard from "./BookCard";

const Home: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response.data); 
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Livros</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            image_url={book.image_url}
            rating={book.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
