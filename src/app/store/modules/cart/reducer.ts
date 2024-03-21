import { Reducer } from "redux";
import { produce } from 'immer';
import { ActionTypes, AddItemToCartAction, CartActions, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
}

export const cart: Reducer<ICartState, CartActions> = (state = INITIAL_STATE, actions) => {
  return produce(state, draft => {
    switch (actions.type) {
      case ActionTypes.ADD_ITEM_TO_CART: {
        const actionWithPayload = actions as AddItemToCartAction;
        const { item } = actionWithPayload.payload;

        const itemInCartIndex = draft.items.findIndex(cartItem => 
          cartItem.idproduto === item.idproduto
        );

        if (itemInCartIndex >= 0) {
          draft.items[itemInCartIndex].quantidade++;
          draft.items[itemInCartIndex].total = draft.items[itemInCartIndex].quantidade * draft.items[itemInCartIndex].valor;
        } else {
          draft.items.push(item);
        }

        break;
      }
      case ActionTypes.REMOVE_ITEM_FROM_CART: {
        const actionWithPayload = actions as AddItemToCartAction;
        const { item } = actionWithPayload.payload;

        const itemInCartIndex = draft.items.findIndex(cartItem => 
          cartItem.idproduto === item.idproduto
        );

        if (itemInCartIndex >= 0) {
          draft.items.splice(itemInCartIndex, 1);
        }

        break;
      }
      case ActionTypes.REDUCE_ITEM_FROM_CART: {
        const actionWithPayload = actions as AddItemToCartAction;
        const { item } = actionWithPayload.payload;

        const itemInCartIndex = draft.items.findIndex(cartItem => 
          cartItem.idproduto === item.idproduto
        );

        if (itemInCartIndex >= 0) {
          draft.items[itemInCartIndex].quantidade--;

          if (draft.items[itemInCartIndex].quantidade <= 0) {
            draft.items.splice(itemInCartIndex, 1);
            return;
          }
          
          draft.items[itemInCartIndex].total = draft.items[itemInCartIndex].quantidade * draft.items[itemInCartIndex].valor;
        }

        break;
      }
      case ActionTypes.CLEAR_CART: {
        draft.items = [];
        break;
      }
      default:
        return draft;
    }
  });
}