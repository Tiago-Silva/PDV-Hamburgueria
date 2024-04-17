import { ItemData } from "./ItemData";


export interface PedidoResponseDTO {
  idpedido?: number;
  data?: string;
  userName?: string;
  total: number;
  iduser: string;
  tipoPagamento: string;
  status: string;
  type: string;
  itemsReponseDTO: Array<ItemData>;
}