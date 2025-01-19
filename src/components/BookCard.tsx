import React from "react";

type BookCardProps = {
  id: number;
  title: string;
  author: string;
  year: number;
  image_url: string;
  rating: number;
};

const BookCard: React.FC<BookCardProps> = ({ title, author, year, image_url, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img
        src={image_url || "https://via.placeholder.com/150"}
        alt={title}
        className="w-32 h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{author}</p>
      <p className="text-yellow-500">{'★'.repeat(rating)}</p>
      <p className="text-sm text-gray-400">Ano: {year}</p>
    </div>
  );
};

export default BookCard;
