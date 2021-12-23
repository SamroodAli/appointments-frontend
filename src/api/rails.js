import axios from 'axios';

const rails = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default rails;
