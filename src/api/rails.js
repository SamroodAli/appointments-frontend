import axios from 'axios';

const rails = axios.create({
  baseURL: 'http://localhost:8000',
});

export default rails;
