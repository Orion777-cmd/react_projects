import {createSlice} from "@reduxjs/toolkit"

import SHOP_DATA from './shopData.js';

const initialState = {
    shopData : SHOP_DATA
}

const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{}
})

export const {}  = shopSlice.actions

export default shopSlice.reducer;