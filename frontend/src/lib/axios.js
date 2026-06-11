import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "/api";

console.log("MODE:", import.meta.env.MODE);
console.log("BASE_URL:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;