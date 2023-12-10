import axios from "axios";

export const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    client_key: process.env.NEXT_PUBLIC_CLIENT_KEY,
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
