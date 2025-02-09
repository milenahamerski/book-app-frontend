import React, { useState } from "react";
import { deleteBook, editBook } from "../services/api"; // Funções da API

type BookCardProps = {
  id: number;
  title: string;
  author: string;
  year: number;
  imageUrl: string;
  rating: number;
  readingStatusId: number;
};

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  year,
  imageUrl,
  rating,
  readingStatusId,
}) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedAuthor, setEditedAuthor] = useState(author);
  const [editedYear, setEditedYear] = useState(year);

  const handleDelete = async () => {
    await deleteBook(id); 
    setDeleteModalOpen(false); 
  };

  const handleEdit = async () => {
    await editBook(id, {
      title: editedTitle,
      author: editedAuthor,
      year: editedYear,
      reading_status_id: readingStatusId, 
      rating,                           
      image_url: imageUrl,              
    });
    setEditModalOpen(false); 
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img
        src={imageUrl || "https://via.placeholder.com/150"}
        alt={title}
        className="w-32 h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{author}</p>
      <div className="flex">
        {Array.from({ length: rating }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-400">Ano: {year}</p>
      <p className="text-sm text-gray-400">
        Status de Leitura:{" "}
        {readingStatusId === 1
          ? "Lido"
          : readingStatusId === 2
          ? "Lendo"
          : "Quero Ler"}
      </p>

      <div className="flex mt-4">
        <button
          onClick={() => setEditModalOpen(true)}
          className="mr-2 text-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>

        <button
          onClick={() => setDeleteModalOpen(true)}
          className="text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-xl text-color-green font-semibold mb-4">
              Editar Livro
            </h3>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="mb-2 p-2 border rounded"
              placeholder="Título"
            />
            <input
              type="text"
              value={editedAuthor}
              onChange={(e) => setEditedAuthor(e.target.value)}
              className="mb-2 p-2 border rounded"
              placeholder="Autor"
            />
            <input
              type="number"
              value={editedYear}
              onChange={(e) => setEditedYear(Number(e.target.value))}
              className="mb-2 p-2 border rounded"
              placeholder="Ano"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setEditModalOpen(false)}
                className="mr-2 bg-green text-white p-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleEdit}
                className="bg-blue text-white p-2 rounded"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-4">Tem certeza?</h3>
            <p>Deseja realmente deletar este livro?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="mr-2 bg-gray-300 text-gray-700 p-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white p-2 rounded"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
