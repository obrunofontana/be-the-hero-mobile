import axios from 'axios';

const api = axios.create({
  // Essa url pode  mudar, sempre utilizar a URL que esta disponivel no browser do expo ou o local da api mesmo
  baseURL: 'http://192.168.0.7:3000'
});

export default api;