import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const initialState = {
  hidden: true,
  cartItems: []

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state, action) => {
      state.hidden = !state.hidden;
    },

    addItem: (state, action) => {
    
      const newItem = action.payload;
      const updatedCartItems = addItemToCart(state.cartItems, newItem);
      state.cartItems = updatedCartItems;
     
    },
    clearItemFromCart: (state, action) =>{
      const itemToRemove = action.payload
      
      const filteredItems = state.cartItems.filter(
        cartItem => cartItem.id !== itemToRemove.id
      )
      console.log("filtered items: ", filteredItems)
      state.cartItems = filteredItems;
    },


    removeItem: (state, action) => {
     
      const updatedCartItems = removeItemFromCart(state.cartItems, action.payload)
      state.cartItems = updatedCartItems;

    },

    clearCart: (state, action) => {
      state.cartItems = []
    }


  },
});

export const { clearCart,toggleCartHidden, addItem, clearItemFromCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;