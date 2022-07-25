import axios from "axios";

const api = axios.create({
  baseURL: "https://api-desafio-william.herokuapp.com",
});

export default api;
