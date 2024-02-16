import { AxiosResponse } from 'axios';
import { publicAxiosInstance } from './axiosConfig';
import { ProductData } from "../interface/ProductData";



export const productService = {

  getProductsByIdEstablisment: async (
    idestabelecimento: number
  ): Promise<AxiosResponse<ProductData[]>> => {
    const response = await publicAxiosInstance.get('/produto/getProdutos/' + idestabelecimento);
    return response;
  },

  getProductsByCategory: async (
    idestabelecimento: number,
    category: string
  ): Promise<AxiosResponse<ProductData[]>> => {
    const response = await publicAxiosInstance.get('/produto/getProdutos/' + idestabelecimento + '/' + category);
    return response;
  },

  deleteProdutByCategoryToStorage: async (category: string) => {
    try {
      // await AsyncStorage.removeItem('productsCategory/' + category);
    } catch (error) {
      console.error('Erro ao excluir dados do AsyncStorage: ', error);
    }
  }

}