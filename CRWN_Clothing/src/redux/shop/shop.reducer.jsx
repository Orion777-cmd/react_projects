import {createSlice} from "@reduxjs/toolkit"

import shopDatas from './shopData.js';

const initialState = {
    shopData : shopDatas
}

const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{}
})

export const {}  = shopSlice.actions

export default shopSlice.reducer;