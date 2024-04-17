import { AxiosResponse } from 'axios';
import { authenticatedAxiosInstance } from './axiosConfig';
import { itemService } from "./itemService";
import { PedidoResponseDTO } from "../interface/PedidoResponseDTO";
import {ItemData} from "@/app/interface/ItemData";
import {PedidoStatusDTO} from "@/app/interface/PedidoStatusDTO";


export const pedidoservice = {

  creationPedido: (
    total: number,
    iduser: string,
    tipoPagamento: string,
    status: string,
    type: string,
    items: Array<ItemData>,
    idpedido?: number,
    data?: string,
  ): PedidoResponseDTO => {
    return {
      idpedido: idpedido,
      data: data,
      total: total,
      iduser: iduser,
      tipoPagamento: tipoPagamento,
      status: status,
      type: type,
      itemsReponseDTO: items,
    }
  },

  saveOrUpdate: async (
    newOrder: PedidoResponseDTO
  ) => {
    try {
      await authenticatedAxiosInstance.post('/pedido/saveOrUpdate', newOrder);
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

  getPedidosEstablishmentByStatus: async (
    idestabelecimento: number,
    status: string
  ): Promise<AxiosResponse<PedidoResponseDTO[]>> => {
    const response =
        await authenticatedAxiosInstance.get('/pedido/getEstablishmentByStatus/' + idestabelecimento + '/' + status);
    return response;
  },

  getTotalOrdesByStatus: async (
      idestabelecimento: number,
  ): Promise<AxiosResponse<PedidoStatusDTO[]>> => {
    const response =
        await authenticatedAxiosInstance.get('/pedido/getTotalOrdesByStatus/' + idestabelecimento);
    return response;
  },

}