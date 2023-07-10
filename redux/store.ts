import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./features/cart-slice"
import { TypedUseSelectorHook, useSelector} from 'react-redux'

export const store = configureStore({
  reducer: {
    cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Custom useSelector to avoid some Typescript error/warning on useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector