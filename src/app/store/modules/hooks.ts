import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '..'
import { IState } from './cart/types'
import { ItemData } from '../../interface/ItemData'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector<IState, ItemData[]>