import { ItemData } from '../../../interface/ItemData';

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  REDUCE_ITEM_FROM_CART = 'REDUCE_ITEM_FROM_CART',
  CLEAR_CART = 'CLEAR_CART'
}

export interface IState {
  cart: ICartState;
}

export interface ICartState {
  items: ItemData[];
}

interface Action {
  type: string;
}

export interface AddItemToCartAction extends Action {
  type: string;
  payload: {
    item: ItemData;
  };
}

export interface ClearCartAction extends Action {
  type: string;
}

export type CartActions = AddItemToCartAction | ClearCartAction;

