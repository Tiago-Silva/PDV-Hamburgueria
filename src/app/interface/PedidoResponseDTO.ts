import { ItemData } from "./ItemData";
import { ItemEntity } from "./ItemEntity";
import { ItemRequestDTO } from "./itemRequestDTO";


export interface PedidoResponseDTO {
  idpedido: number;
  data: string;
  total: number;
  iduser: string;
  tipoPagamento: string;
  status: string;
  items: Array<ItemData>;
}