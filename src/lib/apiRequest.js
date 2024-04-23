import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: "https://estate-app-backend-rrai.onrender.com/api",

  withCredentials: false,
});

export default apiRequest;
