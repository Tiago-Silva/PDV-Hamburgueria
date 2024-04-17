import { ItemRequestDTO } from "./itemRequestDTO";


export interface PedidoData {
  total: number;
  iduser: string;
  tipoPagamento: string;
  status: string;
  type: string;
  itemRequestDTOS: Array<ItemRequestDTO>;
}