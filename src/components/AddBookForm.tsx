import React, { useState } from "react";
import { addBook } from "../services/api";

const AddBookForm: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: 0,
    image_url: "",
    rating: 1,
  });
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null); 
  const [success, setSuccess] = useState<boolean | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); 

    try {
      await addBook(form); 
      setSuccess(true);
      setError(null);
      setForm({ title: "", author: "", year: 0, image_url: "", rating: 1 }); 
    } catch (error) {
      setError("Failed to add the book. Please try again.");
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          name="title"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          name="author"
          value={form.author}
          placeholder="Author"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          name="year"
          type="number"
          value={form.year}
          placeholder="Year"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          name="imageUrl"
          value={form.image_url}
          placeholder="Image URL"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          {isLoading ? "Adding..." : "Add Book"}
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">Livro adicionado com sucesso!</div>}
    </form>
  );
};

export default AddBookForm;
