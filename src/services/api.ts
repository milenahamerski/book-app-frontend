import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getBooks = () => api.get("/books");
export const addBook = (book: { title: string; author: string; year: number; image_url: string; rating: number }) =>
  api.post("/books", book);

