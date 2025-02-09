import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { addBook } from "../services/api";

const AddBookForm: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: 0,
    imageUrl: "",
    rating: 1,
    readingStatusId: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const navigate = useNavigate(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addBook({
        ...form,
        readingStatusId: Number(form.readingStatusId),
      });
      setSuccess(true);
      setError(null);
      setForm({ title: "", author: "", year: 0, imageUrl: "", rating: 1, readingStatusId: "" });
    } catch (error) {
      setError("Falha ao adicionar o livro. Tente novamente.");
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate("/"); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Adicionar Novo Livro</h2>

      {/* Campos do formulário */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
        <input
          id="title"
          name="title"
          value={form.title}
          placeholder="Título do livro"
          onChange={handleChange}
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Autor</label>
        <input
          id="author"
          name="author"
          value={form.author}
          placeholder="Autor do livro"
          onChange={handleChange}
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">Ano</label>
        <input
          id="year"
          name="year"
          type="number"
          value={form.year}
          placeholder="Ano de publicação"
          onChange={handleChange}
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">URL da Imagem</label>
        <input
          id="imageUrl"
          name="imageUrl"
          value={form.imageUrl}
          placeholder="URL da imagem do livro"
          onChange={handleChange}
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Avaliação</label>
        <select
          id="rating"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="readingStatusId" className="block text-sm font-medium text-gray-700">Status de Leitura</label>
        <select
          id="readingStatusId"
          name="readingStatusId"
          value={form.readingStatusId}
          onChange={handleChange}
          required
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione o status</option>
          <option value="1">Lido</option>
          <option value="2">Lendo</option>
          <option value="3">Quero Ler</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-3 mt-4 bg-blue text-white rounded-md hover:bg-green disabled:bg-gray-400 transition-colors"
        >
          {isLoading ? "Adicionando..." : "Adicionar Livro"}
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={handleBackToHome}
          className="w-full p-3 mt-4 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors"
        >
          Voltar para a Home
        </button>
      </div>

      {/* Mensagens de sucesso e erro */}
      {error && <div className="text-red-500 text-center">{error}</div>}
      {success && <div className="text-green-500 text-center">Livro adicionado com sucesso!</div>}
    </form>
  );
};

export default AddBookForm;
