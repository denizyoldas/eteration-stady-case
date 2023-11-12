import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default API;
