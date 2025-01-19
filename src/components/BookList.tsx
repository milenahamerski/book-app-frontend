import React, { useEffect, useState } from "react";
import { getBooks } from "../services/api";

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  imageUrl: string;
  rating: number;
};

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res.data));
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author} ({book.year})</p>
          <img src={book.imageUrl} alt={book.title} width={100} />
          <p>Rating: {book.rating}⭐</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
