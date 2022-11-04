import axios from "axios";

const api = axios.create({
  baseURL: "http://api.thecatapi.com/v1/",
});

export default api;
