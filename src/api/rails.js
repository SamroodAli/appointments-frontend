import axios from "axios";

const rails = axios.create({
  baseURL: process.env.API_URL,
});

export default rails;
