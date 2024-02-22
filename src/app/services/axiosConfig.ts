import axios from 'axios';
import { API_URL } from './apiConfig';


const storageKey = process.env.USER_STORAGE_KEY;

// Axios para rotas não autenticadas
const publicAxiosInstance = axios.create({
  baseURL: API_URL,
});

// Axios para rotas autenticadas
const authenticatedAxiosInstance = axios.create({
  baseURL: API_URL,
  // Outras configurações do Axios, se necessário
});

authenticatedAxiosInstance.interceptors.request.use(
  async (config) => {
    // const { token } = useAuth();
    // Recupera o token do AsyncStorage
    const tokenStorage = await localStorage.getItem(storageKey + 'token');
    
    // Adiciona o token ao cabeçalho da requisição, se existir
    if (tokenStorage) {
      const tokenObject = JSON.parse(tokenStorage);

      config.headers.Authorization = `Bearer ${tokenObject.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export { authenticatedAxiosInstance, publicAxiosInstance };
