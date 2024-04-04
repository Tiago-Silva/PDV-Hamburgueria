import { ItemData } from "./ItemData";
import { ItemEntity } from "./ItemEntity";
import { ItemRequestDTO } from "./itemRequestDTO";


export interface PedidoData {
  total: number;
  iduser: string;
  tipoPagamento: string;
  status: string;
  itemRequestDTOS: Array<ItemRequestDTO>;
}