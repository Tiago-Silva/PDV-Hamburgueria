import { PedidoData } from "../interface/PedidoData"
import { AxiosResponse } from 'axios';
import { authenticatedAxiosInstance } from './axiosConfig';
import { itemService } from "./itemService";
import { ItemRequestDTO } from "../interface/itemRequestDTO";
import { PedidoResponseDTO } from "../interface/PedidoResponseDTO";


export const pedidoservice = {

  creationPedido: (
    total: number,
    iduser: string,
    tipoPagamento: string,
    status: string,
    items: Array<ItemRequestDTO>,
  ): PedidoData => {
    return {
      total: total,
      iduser: iduser,
      tipoPagamento: tipoPagamento,
      status: status,
      itemRequestDTOS: items,
    }
  },

  save: async (
    newOrder: PedidoData
  ) => {
    try {
      const response = await authenticatedAxiosInstance.post('/pedido/save', newOrder);
      itemService.deleteListItem();
    } catch (error) {
      console.error('Erro ao salvar o pedido:', error);
      throw error;
    }
  },

  getPedidoPendenteByIdUser: async (
      iduser: string,
  ): Promise<AxiosResponse<PedidoResponseDTO>> => {
    const response = await authenticatedAxiosInstance
        .get('/pedido/getPendenteByIdUser/' + iduser);
    return response;
  },
  
  getPedidoByUserId: async (
    userId: string
  ): Promise<AxiosResponse<PedidoResponseDTO[]>> => {
    const response = await authenticatedAxiosInstance.get('/pedido/getPedidosByUser', {
      headers: {
        'iduser': userId
      }
    });
    return response;
  },

}