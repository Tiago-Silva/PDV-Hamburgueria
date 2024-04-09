import { PedidoData } from "../interface/PedidoData"
import { AxiosResponse } from 'axios';
import { authenticatedAxiosInstance } from './axiosConfig';
import { itemService } from "./itemService";
import { ItemRequestDTO } from "../interface/itemRequestDTO";
import { PedidoResponseDTO } from "../interface/PedidoResponseDTO";
import {ItemData} from "@/app/interface/ItemData";


export const pedidoservice = {

  creationPedido: (
    total: number,
    iduser: string,
    tipoPagamento: string,
    status: string,
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
      itemsReponseDTO: items,
    }
  },

  saveOrUpdate: async (
    newOrder: PedidoResponseDTO
  ) => {
    try {
      const response = await authenticatedAxiosInstance.post('/pedido/saveOrUpdate', newOrder);
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

}