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

    addItem: (state, action) =>{
        console.log("payload", action.payload.text)
        state.cartItems.push(addItemToCart(state.cartItems, action.payload.text))
        
    }
  },
});

export const { toggleCartHidden, addItem } = cartSlice.actions;

export default cartSlice.reducer;