import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const paginationApi = () => api.get("");
