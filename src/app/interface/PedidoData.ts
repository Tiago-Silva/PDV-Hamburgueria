import { ItemRequestDTO } from "./itemRequestDTO";


export interface PedidoData {
  total: number;
  iduser: string;
  tipoPagamento: string;
  status: string;
  itemRequestDTOS: Array<ItemRequestDTO>;
}