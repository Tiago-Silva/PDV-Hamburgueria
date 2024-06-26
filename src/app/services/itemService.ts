import { ItemData } from "../interface/ItemData";
import { AxiosResponse } from "axios";
import { authenticatedAxiosInstance } from "./axiosConfig";
import { ItemRequestDTO } from '../interface/itemRequestDTO';


export const itemService = {

  creationItem: (
    quantidade: number,
    descricao: string,
    valor: number,
    total: number,
    idproduto: number,
    urlImage: string
  ): ItemData => {
    return {
      iditem: undefined,
      quantidade: quantidade,
      descricao: descricao,
      valor: valor,
      total: total,
      idproduto: idproduto,
      idpedido: undefined,
      urlImage: urlImage
    }
  },

  handleUpdateItems: (itemsArray: ItemData[], item: ItemData) => {
    const updatedItems = itemService.retrieveUpdateItems(itemsArray, item);
      // Se o item não existe, adicione-o
    if (!updatedItems.find(i => i.idproduto === item.idproduto)) {
      updatedItems.push(item);
    }

    const total = updatedItems.reduce((sum, item) => sum + (item.total || 0), 0);

    return {updatedItems, total};
  },

  retrieveUpdateItems: (itemsArray: ItemData[], item: ItemData) => {
    return itemsArray.map((prevItem) => {
      if (prevItem.idproduto === item.idproduto) {
        // Se o item já existe, atualize-o
        return itemService.updateItem(prevItem, item);
      }
      return prevItem;
    });
  },

  updateItem: (prevItem: ItemData, newItem: ItemData) => {
    return {
      ...prevItem,
      quantidade: prevItem.quantidade + newItem.quantidade,
      total: (prevItem.valor || 0) * (prevItem.quantidade + newItem.quantidade)
    };
  },

  retrieveAddItemDataLocalStorage: async (item: ItemData) => {
    try {
      const storedData = await localStorage.getItem('itemList');
      let itemsArray: ItemData[] = [];
  
      if (storedData !== null) {
        itemsArray = JSON.parse(storedData);
      }

      const indexEncontrado = itemsArray.findIndex(data => data.idproduto === item.idproduto);

      if (indexEncontrado !== -1) {
        // Se encontrar um item com o mesmo idproduto, substitui o item existente pelo novo
        itemsArray[indexEncontrado] = {
          ...itemsArray[indexEncontrado],
          quantidade: itemsArray[indexEncontrado].quantidade + item.quantidade,
          total: itemsArray[indexEncontrado].quantidade * (itemsArray[indexEncontrado].valor || 0),
        };

      } else {
        // Se não encontrar, adiciona o novo item ao array
        itemsArray.push(item);
      }
  
      // 3. Salvar o array atualizado de itens de volta no localStorage
      await localStorage.setItem('itemList', JSON.stringify(itemsArray));

      if (indexEncontrado !== -1) {
        return itemsArray[indexEncontrado];
      } else {
        return item;
      }
    } catch (error) {
      return null;
      console.error('Erro ao recuperar dados do localStorage:', error);
    }
  },

  retrieveSubtractItemData: async (item: ItemData) => {
    try {
      const storedData = await localStorage.getItem('itemList');
      let itemsArray: ItemData[] = [];
  
      if (storedData !== null) {
        itemsArray = JSON.parse(storedData);
      }

      const indexEncontrado = itemsArray.findIndex(data => data.idproduto === item.idproduto);

      if (indexEncontrado !== -1) {
        // Se encontrar um item com o mesmo idproduto, substitui o item existente pelo novo
        itemsArray[indexEncontrado] = {
          ...itemsArray[indexEncontrado],
          quantidade: itemsArray[indexEncontrado].quantidade - item.quantidade,
          total: itemsArray[indexEncontrado].quantidade * (itemsArray[indexEncontrado].valor || 0),
        };

      }
  
      // 3. Salvar o array atualizado de itens de volta no localStorage
      await localStorage.setItem('itemList', JSON.stringify(itemsArray));

      if (indexEncontrado !== -1) {
        return itemsArray[indexEncontrado];
      } else {
        return item;
      }
    } catch (error) {
      return null;
      console.error('Erro ao recuperar dados do localStorage:', error);
    }
  },

  retrieveItemObject: async (idproduto: number): Promise<ItemData> => {
    const storedData = await localStorage.getItem('itemList');
    let itemsArray: ItemData[] = [];

    if (storedData !== null) {
      itemsArray = JSON.parse(storedData);
    }

    const item = itemsArray.find(data => data.idproduto === idproduto);

    if (!item) {
      throw new Error('Item não encontrado');
    }

    return item;
  },

  retrieveItemList: async () => {
    try {
      const storedData = await localStorage.getItem('itemList');
      let itemsArray: ItemData[] = [];
  
      if (storedData !== null) {
        itemsArray = JSON.parse(storedData);
      }

      return itemsArray;
    } catch (error) {
      console.error('Erro ao recuperar dados do localStorage:', error);
      return [];
    }
  },

  deleteObjectItem: async (idproduto: number): Promise<ItemData[]> => {
    const storedData = await localStorage.getItem('itemList');
    let itemsArray: ItemData[] = [];

    if (storedData !== null) {
      itemsArray = JSON.parse(storedData);
    }

    const updatedItemsArray: ItemData[] = itemsArray.filter(data => data.idproduto !== idproduto);

    await localStorage.setItem('itemList', JSON.stringify(updatedItemsArray));

    return updatedItemsArray;
  },

  deleteListItem: async () => {
    try {
      await localStorage.removeItem('itemList');
    } catch (error) {
      console.error('Erro ao excluir dados do localStorage: ', error);
    }
  },

  getItemByOrderId: async (
    orderId: number
  ): Promise<AxiosResponse<ItemData[]>> => {
    const response = await authenticatedAxiosInstance.get('/item/getItemsByIdPedido', {
      headers: {
        idpedido: orderId
      }
    });
    return response;
  },

  converteItemDataToItemRequestDTO: (items: ItemData[]): ItemRequestDTO[] => {
    return items.map(item => ({
      quantidade: item.quantidade,
      descricao: item.descricao,
      idproduto: item.idproduto,
      idpedido: item.idpedido,
    }));
  }

}