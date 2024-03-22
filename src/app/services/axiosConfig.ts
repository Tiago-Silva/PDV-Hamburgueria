import axios from 'axios';
import { API_URL } from './apiConfig';
import { tokenService } from './tokenService';
import { useRouter } from 'next/navigation';

export const redirectToHome = () => {
  const router = useRouter();
  router.push('/');
};

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
    // if (await tokenService.isTokenExpired()) { 
    //   redirectToHome();
    //   throw new Error('Token expired');
    // }
    const tokenStorage = await tokenService.getToken();
    
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

authenticatedAxiosInstance.interceptors.response.use(
  (response) => {
    // Se a resposta foi bem-sucedida, simplesmente retorne a resposta
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {

      
      // Se o status da resposta for 401 ou 403, o token expirou
      // Redireciona o usuário para a tela de login
      redirectToHome();
      return Promise.reject(error);
    }
    // Se ocorreu um erro, faça algo com o erro
    return Promise.reject(error);
  }
);


export { authenticatedAxiosInstance, publicAxiosInstance };
