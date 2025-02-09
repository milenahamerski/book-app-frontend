import React, { useEffect, useState } from "react";
import { getBooks } from "../services/api";
import BookCard from "./BookCard";

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  imageUrl: string;
  rating: number;
  readingStatusId: number;
};

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          imageUrl={book.imageUrl} 
          rating={book.rating}
          readingStatusId={book.readingStatusId} 
        />
      ))}
    </div>
  );
};

export default BookList;
