import axios from "axios";

export default {
    getSavedBooks = () => {
        return axios.get("/api/books".then(res => res.data));
    },
    getBook = (query) =>{
        return axios.get ("https://www.googleapis.com/books/v1/volumes?q=${query}");
    },
    saveBook = (book) => {
        return axios.post("/api/books", book).then(res => res.data);
    },
    removeBook = (id) => {
        return axios.delete("/api/books" + id).then(res => res.data);
    }

}