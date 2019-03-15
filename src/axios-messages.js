import axios from 'axios';

const messageAxios = axios.create({
    baseURL: 'http://localhost:9000'
});

export default messageAxios;
