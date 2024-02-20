import { AxiosResponse } from 'axios';
import { publicAxiosInstance } from './axiosConfig';
import { LoginResponseDTO } from '../interface/LoginResponseDTO';
import { Auth } from '../interface/AuthenticationDTO';

const storageKey = process.env.USER_STORAGE_KEY

export const authService = {

  handleLoginIn: async (
    userData: Auth
  ): Promise<AxiosResponse<LoginResponseDTO>> => {
    const response = await publicAxiosInstance.post('/auth/login', userData);
    await localStorage.setItem(storageKey + 'token', JSON.stringify(response.data));
    return response;
  }

}