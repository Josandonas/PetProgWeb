import axios from 'axios';

const api = axios.create({
    //aqui outra
    baseURL: 'http://localhost:3333'
});

export default api;
