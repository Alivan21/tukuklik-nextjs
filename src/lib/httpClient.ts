import axios from "axios";
import Cookies from "js-cookie";

export const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    client_key: process.env.NEXT_PUBLIC_CLIENT_KEY,
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

httpClient.interceptors.request.use(
  config => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
