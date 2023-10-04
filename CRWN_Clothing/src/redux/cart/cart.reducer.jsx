import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";
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
     
    }
  },
});

export const { toggleCartHidden, addItem } = cartSlice.actions;

export default cartSlice.reducer;