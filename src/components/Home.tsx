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
  readingStatusId: number; // Garantindo que readingStatusId está no tipo Book
};

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((res) =>
      setBooks(
        res.map((book: Book) => ({  // Garantindo que book seja do tipo Book
          ...book,
          imageUrl: book.imageUrl, // Converte o nome da chave para imageUrl
        }))
      )
    );
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
          imageUrl={book.imageUrl}  // Passando imageUrl corretamente
          rating={book.rating}
          readingStatusId={book.readingStatusId}  // Passando readingStatusId corretamente
        />
      ))}
    </div>
  );
};

export default Home;
