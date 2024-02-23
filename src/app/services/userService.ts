import { AxiosResponse } from 'axios';
import { authenticatedAxiosInstance } from './axiosConfig';
import { UserResponseDTO } from '../interface/UserResponseDTO';

export const userService = {

  getConsumidorFinal: async (): Promise<AxiosResponse<UserResponseDTO>> => {
    const response = await authenticatedAxiosInstance.get('/user/getConsumidorFinal');
    return response;
  },
}