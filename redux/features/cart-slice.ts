import { Product } from '@/types/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProductCart = {
  product: Product
  quantity: number
}

type InitialSate = {
  cart: ProductCart[]
}

type IPayloadAction = {
  product: Product
  quantity: number
}

type IPayloadActionRemove = {
  productName: string
}

const initialState = {
  cart: []
} as InitialSate

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IPayloadAction>) => {
      const itemInCart = state.cart.find(item => item.product.name === action.payload.product.name)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ product: action.payload.product , quantity: action.payload.quantity })
      }
    },
    incrementQuantity: (state, action: PayloadAction<IPayloadAction>) => {
      const itemInCart = state.cart.find(item => item.product.name === action.payload.product.name)
      if (itemInCart) {
        itemInCart.quantity++
      }
    },
    decrementQuantity: (state, action: PayloadAction<IPayloadAction>) => {
      const itemInCart = state.cart.find(item => item.product.name === action.payload.product.name)
      if (itemInCart) {
        if (itemInCart.quantity === 1) {
          itemInCart.quantity = 1
        } else {
          itemInCart.quantity--
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<IPayloadActionRemove>) => {
      const newState = state.cart.filter(item => item.product.name !== action.payload.productName)
      state.cart = newState
    }
  }
})

export const cartReducer = cart.reducer

export const { 
  addToCart, 
  incrementQuantity, 
  decrementQuantity, 
  removeFromCart 
} = cart.actions