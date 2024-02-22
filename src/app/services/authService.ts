import { AxiosResponse } from 'axios';
import { publicAxiosInstance } from './axiosConfig';
import { LoginResponseDTO } from '../interface/LoginResponseDTO';
import { Auth } from '../interface/AuthenticationDTO';
import { tokenService } from './tokenService';


export const authService = {

  handleLoginIn: async (
    userData: Auth
  ): Promise<AxiosResponse<LoginResponseDTO>> => {
    const response = await publicAxiosInstance.post('/auth/login', userData);
    await tokenService.saveToken(JSON.stringify(response.data));
    return response;
  }

}