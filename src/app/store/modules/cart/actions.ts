import { ItemData } from "../../../interface/ItemData";
import { ActionTypes, AddItemToCartAction } from "./types";


export function addItemToCart (item: ItemData): AddItemToCartAction {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item
    }
  }
}

export function removeItemFromCart (item: ItemData): AddItemToCartAction {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      item
    }
  }
}

export function reduceItemFromCart (item: ItemData): AddItemToCartAction {
  return {
    type: ActionTypes.REDUCE_ITEM_FROM_CART,
    payload: {
      item
    }
  }
}

export function clearCart () {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}