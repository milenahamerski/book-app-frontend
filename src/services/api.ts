import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api`,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na requisição:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

//* READ
export const getBooks = () =>
  api.get("/books").then((res) => {
    console.log(res.data);
    return res.data.map((book: any) => ({
      id: book.id,
      title: book.title,
      author: book.author,
      year: book.year,
      imageUrl: book.image_url, 
      rating: book._rating,
      readingStatusId: book.reading_status_id,
    }));
  });

//* CREATE
export const addBook = (book: {
  title: string;
  author: string;
  year: number;
  imageUrl: string;
  rating: number;
  readingStatusId: number;
}) => {
  const bookToSend = {
    ...book,
    image_url: book.imageUrl,  
    reading_status_id: book.readingStatusId,  
  };

  return api.post("/books", bookToSend);
};

//* DELETE
export const deleteBook = async (id: number) => {
  try {
    await api.delete(`/books/${id}`);
  } catch (error) {
    console.error("Erro ao deletar livro:", error);
  }
};

//* UPDATE
export const editBook = async (id: number, bookData: any) => {
  try {
    const validReadingStatus = [1, 2, 3].includes(bookData.reading_status_id)
      ? bookData.reading_status_id
      : 1;  

    const updatedBook = {
      ...bookData,  
      user_id: 1,    
      reading_status_id: validReadingStatus, 
      rating: bookData.rating || 3,  
      image_url: bookData.image_url || '',
    };

    await api.put(`/books/${id}`, updatedBook);
  } catch (error) {
    console.error("Erro ao editar livro:", error);
  }
};



export default api;
